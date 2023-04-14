from django import template                                                                                                              

register = template.Library()                                                                                                            

@register.simple_tag(name='versioning')                                                                                                  
def versioning():                                                                                                                        
    return '0.0.2.20230414-beta'
