let upload = document.querySelector('#hiddenUpload');
upload.addEventListener('change', upload_callback)

let uploadButton = document.querySelector('#uploadButton');
uploadButton.addEventListener('click', () => {
    upload.click();
});

document.querySelector('#confirmUpload').addEventListener('click', post);

let post_data, added;

async function upload_callback() {
    let file = upload.files[0];
    let data = await file.arrayBuffer();
    upload.value = '';

    document.querySelector('#parseResult').innerHTML = '';
    document.querySelector('#confirmUpload').classList.add('hidden');
    clear_msg();

    let workbook = XLSX.read(data);
    let worksheet = workbook.Sheets[Object.keys(workbook.Sheets)[0]];

    let parse_json = XLSX.utils.sheet_to_json(worksheet, {header: ['id', 'name', 'class']});

    if (parse_json.length === 0) {
        msg('您上传了一个空表！');
        return;
    }

    let start_row = 0;
    if (parse_json[0].id == '学号' || parse_json[0].name == '姓名' || parse_json[0].class == '班级') {
        start_row = 1;
    }

    let parseResultDisplay = document.createElement('table');
    parseResultDisplay.id = 'parseResultDisplay';
    document.querySelector('#parseResult').appendChild(parseResultDisplay);

    let tr = document.createElement('tr');
    parseResultDisplay.appendChild(tr);
    for (let title of ['学号', '姓名', '班级', '备注']) {
        let td = document.createElement('td');
        td.className = 'td-header';
        td.innerHTML = title;
        tr.appendChild(td);
    }

    post_data = '';
    added = 0;

    for (let row = start_row; row < parse_json.length; row++) {
        let tr = document.createElement('tr');

        let item = parse_json[row];
        let user_id = item.id || '';
        let user_name = item.name || '';
        let user_class = item.class || '';

        let message = '';
        let remove = false;

        if (user_id == '' || user_name == '' || user_class == '') {
            message += '缺少字段; ';
            tr.classList.add('item-warning');
            remove = true;
        }

        if (user_id.length != 12 || user_id.match(/[^0-9]/) != null) {
            message += '学号可能无效（普通用户学号应为12位纯数字，若添加的用户为管理员可忽略此条警告）; ';
            tr.classList.add('item-warning');
        }

        if (user_name.match(/[{}]/) != null || user_class.match(/[,|]/) != null) {
            message += '字段包含无效字符（, / |）; '
            tr.classList.add('item-warning');
            remove = true;
        }

        parseResultDisplay.appendChild(tr);

        let td_id = document.createElement('td');
        td_id.className = 'td-id';
        td_id.innerHTML = user_id;
        tr.appendChild(td_id);

        let td_name = document.createElement('td');
        td_name.className = 'td-name';
        td_name.innerHTML = user_name;
        tr.appendChild(td_name);

        let td_class = document.createElement('td');
        td_class.className = 'td-class';
        td_class.innerHTML = user_class;
        tr.appendChild(td_class);

        let td_comment = document.createElement('td');
        td_comment.className = 'td-comment';
        td_comment.innerHTML = message;
        tr.appendChild(td_comment);

        if (!remove) {
            post_data += `${user_id},${user_name},${user_class}|`
            added++;
        }
    }

    document.querySelector('#confirmUpload').classList.remove('hidden');
}

async function post() {
    let options = document.querySelectorAll('#groupSelect input');
    let index = 0;
    let group_str = '';

    for (let option of options) {
        if (option.checked) {
            group_str += `${index},`;
        }
        index++;
    }

    let csrf_token = document.getElementsByName('csrfmiddlewaretoken')[0].value;
    msg('正在处理请求，请稍候……');

    fetch(window.location.href, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'X-CSRFToken': csrf_token},
        body: JSON.stringify({users: post_data, groups: group_str}),
        credentials: 'same-origin',
    })
        .then((response) => response.text())
        .then((data) => {
            msg(`已添加${added}名用户`);
            resolve(Number(data));
        });
}

function msg(message) {
    document.querySelector('#message').innerHTML = message;
}

function clear_msg() {
    document.querySelector('#message').innerHTML = '';
}
