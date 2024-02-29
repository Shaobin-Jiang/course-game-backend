from django import template                                                                                                              

register = template.Library()                                                                                                            

@register.simple_tag(name='versioning')                                                                                                  
def versioning():                                                                                                                        
    return '0.1.1.20240229'
