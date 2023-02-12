from django import template                                                                                                              

register = template.Library()                                                                                                            

@register.simple_tag(name='versioning')                                                                                                  
def versioning():                                                                                                                        
    return '0.0.1.20230212-beta'
