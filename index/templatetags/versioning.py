from django import template                                                                                                              

register = template.Library()                                                                                                            

@register.simple_tag(name='versioning')                                                                                                  
def versioning():                                                                                                                        
    return '0.2.0.20260107'
