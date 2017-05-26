import { Injectable } from '@angular/core';

import { ResourceService } from '../../services/resource';

@Injectable()
export class AssignmentDetailService {

  private resourceConfig = {
    CACHE_KEY: 'assignmentDetail',
    BASE_URL: 'api/assignmentDetail',
  };

  constructor(private resourceService: ResourceService) {

  }

  getAssignDetails() {
    let generalInformation = {
      'type': 'document',
      'title': 'General Information',
      'components': [
        {
          'type': 'group',
          'label': 'General',          
          'editable': true,
          'action': {
            'editAndSave': {
              'api': '/inspection/generalInformation',
              'params': {
                'organizationId': '1123-abdeed-efdadf',
                'inspectionId': '1239-badfed-aaffrf'
              },
              'method': 'PUT',              
              'dataFormat': 'JSON'
            }
          },        
          'children': [
            {
              'type': 'container',
              'columnNumber': 2,
              'children': [
                {
                  'type': 'text',
                  'label': 'Report Name',
                  'value': 'Report 001',
                  'required': true,
                  'disable': true
                },
                {
                  'type': 'text',
                  'label': 'Standard',
                  'value': 'Standard Example',
                },
                {
                  'type': 'text',
                  'label': 'Unit Type',
                  'value': 'Unit type value'
                },
                {
                  'type': 'text',
                  'label': 'AQL',
                  'value': 'AQL Example'
                }
              ]
            }
          ]            
        },
        {
          'type': 'group',
          'label': 'Inspection Information',
          'editable': true,
          'action': {
            'editAndSave': {
              'api': '/inspection/generalInformation',
              'params': {
                'organizationId': '1123-abde-efda',
                'inspectionId': '1239-badf-aaff'
              },
              'method': 'PUT',
              'dataFormat': 'JSON'
            }
          },
          'children': [
            {
              'type': 'section',
              'label': 'Detail of PI/PO',
              'children': [
                {
                  'type': 'container',
                  'label': 'Style',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Name',
                      'value': '11234 ABCD',
                      'disable': true
                    },
                    {
                      'type': 'text',
                      'label': 'Product Category',
                      'value': 'Product Category Sample',
                      required: true
                    },
                    {
                      'type': 'text',
                      'label': 'Product Description',
                      'value': '',
                      required: true
                    }
                  ]
                },
                {
                  'type': 'container',
                  'columnNumber': 2,
                  'label': 'Solid Detail',
                  'isList': true,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'ID',
                      'value': 123
                    },
                    {
                      'type': 'text',
                      'label': 'Color',
                      'value': 'Black'
                    },
                    {
                      'type': 'text',
                      'label': 'Size',
                      'value': 'Small'
                    },
                    {
                      'type': 'text',
                      'label': 'Quantity',
                      'value': 25
                    }
                  ]
                },
                {
                  'type': 'container',
                  'columnNumber': 2,
                  'label': 'Assortment Detail',
                  'isList': true,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Assortment ID',
                      'value': 123
                    },
                    {
                      'type': 'text',
                      'label': 'Quantity',
                      'value': 'Black'
                    },
                    {
                      'type': 'text',
                      'label': 'Size',
                      'value': 'Small'
                    },
                    {
                      'type': 'text',
                      'label': 'Quantity',
                      'value': 25
                    }
                  ]
                }
              ]
            },
            {
              'type': 'section',
              'label': 'Expected Date',
              'children': [
                {
                  'type': 'container',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Shipment Date',
                      'dataName': 'shipmentDate',
                      'value': '17/01/2017'
                    },
                    {
                      'type': 'text',
                      'label': 'Inspection Date',
                      'dataName': 'inspectionDate',
                      'value': '20/07/2017'
                    }
                  ]
                }
              ]
            },
            {
              'type': 'section',
              'label': 'Brand/Retailer Information',
              'children': [
                {
                  'type': 'container',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Name',
                      'value': 'Brand Name Sample'
                    },
                    {
                      'type': 'text',
                      'label': 'Address',
                      'value': '1234 Address Sample City XA'
                    }
                  ]
                },
                {
                  'type': 'container',
                  'label': 'Main Contact At Brand/Retailer',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Contact Person',
                      'value': 'Person 1'
                    },
                    {
                      'type': 'text',
                      'label': 'Mobile Number',
                      'value': '09325235845'
                    },
                    {
                      'type': 'text',
                      'label': 'Telephone Number',
                      'value': '084 23423 234'
                    },
                    {
                      'type': 'text',
                      'label': 'Email',
                      'value': 'brand@company.com'
                    }
                  ]
                }
              ]
            },
            {
              'type': 'section',
              'label': 'Supplier/Vendor Information',
              'children': [
                {
                  'type': 'container',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Name',
                      'value': 'Brand Name Sample'
                    },
                    {
                      'type': 'text',
                      'label': 'Address',
                      'value': '1234 Address Sample City XA'
                    }
                  ]
                },
                {
                  'type': 'container',
                  'label': 'Main Contact At Supplier',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Contact Person',
                      'value': 'Person 1'
                    },
                    {
                      'type': 'text',
                      'label': 'Mobile Number',
                      'value': '09325235845'
                    },
                    {
                      'type': 'text',
                      'label': 'Telephone Number',
                      'value': '084 23423 234'
                    },
                    {
                      'type': 'text',
                      'label': 'Email',
                      'value': 'supplier@company.com'
                    }
                  ]
                }
              ]
            },
            {
              'type': 'section',
              'label': 'Factory Information',
              'children': [
                {
                  'type': 'container',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Name',
                      'value': 'Factory Sample'
                    },
                    {
                      'type': 'text',
                      'label': 'Address',
                      'value': '1234 Address Sample City XA'
                    }
                  ]
                },
                {
                  'type': 'container',
                  'label': 'Main Contact At Brand/Retailer',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Contact Person',
                      'value': 'Person 1'
                    },
                    {
                      'type': 'text',
                      'label': 'Mobile Number',
                      'value': '09325235845'
                    },
                    {
                      'type': 'text',
                      'label': 'Telephone Number',
                      'value': '084 23423 234'
                    },
                    {
                      'type': 'text',
                      'label': 'Email',
                      'value': 'factory@company.com'
                    }
                  ]
                }
              ]
            },
            {
              'type': 'section',
              'label': 'Inpection Information',
              'children': [
                {
                  'type': 'container',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Type Of Inspection',
                      'value': 'Factory Name 1'
                    },
                    {
                      'type': 'text',
                      'label': 'Inpection Level',
                      'value': '09325235845'
                    }
                  ]
                }
              ]
            },
            {
              'type': 'section',
              'label': 'Inpection Location Information',
              'children': [                
                {
                  'type': 'container',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'text',
                      'label': 'Factory Name',
                      'value': 'Factory Name 1'
                    },
                    {
                      'type': 'text',
                      'label': 'Address',
                      'value': '09325235845'
                    },
                    {
                      'type': 'text',
                      'label': 'Contact Person',
                      'value': 'Person 1'
                    },
                    {
                      'type': 'text',
                      'label': 'Telephone Number',
                      'value': '084 23423 234'
                    }
                  ]
                }
              ]
            },
            {              
              'type': 'container',
              'columnNumber': 2,
              'children': [
                {
                  'type': 'text',
                  'label': 'GPS Location',
                  'value': 'file.zip'
                },
                {
                  'type': 'text',
                  'label': 'Packing List Document',
                  'value': 'file.zip'
                }
              ]
                
            }
            
          ]
        }

      ]
    };
   
    return Promise.resolve(generalInformation);
  }


  getInspectionDetails() {
    let inspectionInformation = {
      'type': 'document',
      'title': 'Inspection Information',
      'components': [
        {
          'type': 'group',
          'label': 'Approved Sample',          
          'editable': true,
                  
          'children': [
            {
              'type': 'container',
              'label': 'Product Design',
              'columnNumber': 1,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 4,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }                   
                  ]
                },
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 4,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }                   
                  ]
                }
              ]
            },
            {
              'type': 'container',
              'label': 'Materials',
              'columnNumber': 4,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 1,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }             
                  ]
                }
              ]
            },            
            {
              'type': 'container',
              'label': 'Trims',
              'columnNumber': 4,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 1,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }             
                  ]
                }
              ]
            },
            {
              'type': 'container',
              'label': 'Marking',
              'columnNumber': 4,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 1,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }             
                  ]
                }
              ]
            },
            {
              'type': 'container',
              'label': 'Accessory',
              'columnNumber': 4,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 1,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }             
                  ]
                }
              ]
            }
          ]            
        },
        {
          'type': 'group',
          'label': 'Packaging',          
          'editable': true,
                  
          'children': [           
            {
              'type': 'container',
              'label': 'Packaging Inspection Plan',
              'columnNumber': 2,
              'children': [
                {
                  'type': 'text',
                  'label': 'Maximum Sample Size',
                  'value': ''
                },
                {
                  'type': 'text',
                  'label': 'Maximum of Pulled item Per Carton',
                  'value': '',
                }
              ]
            },
            {
              'type': 'container',
              'label': 'Inspection',
              'columnNumber': 2,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }             
                  ]
                }
              ]
            }
          ]            
        },
        {
          'type': 'group',
          'label': 'Workmanship',          
          'editable': true,
                  
          'children': [           
            {
              'type': 'container',
              'label': 'Inspection Plan',
              'columnNumber': 2,
              'children': [
                {
                  'type': 'text',
                  'label': 'Maximum Sample Size',
                  'value': ''
                },
                {
                  'type': 'text',
                  'label': 'Maximum of Pulled item Per Carton',
                  'value': '',
                }
              ]
            },
            {
              'type': 'container',
              'label': 'Checklist',
              'columnNumber': 2,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 2,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }             
                  ]
                }
              ]
            }
          ]            
        },
        {
          'type': 'group',
          'label': 'Measurements',          
          'editable': true,
                  
          'children': [            
            {
              'type': 'container',
              'label': 'Caption',
              'columnNumber': 4,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 1,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }          
                  ]
                }
              ]
            },
            {
              'type': 'container',
              'label': 'Measurement Plan',
              'columnNumber': 2,
              'children': [
                {
                  'type': 'text',
                  'label': 'Maximum Sample Size',
                  'value': ''
                },
                {
                  'type': 'text',
                  'label': 'Maximum Sample Size',
                  'value': '',
                }
              ]
            }
          ]            
        },
        {
          'type': 'group',
          'label': 'Factory Reference Photo',          
          'editable': true,
                  
          'children': [
            {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 4,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }                   
                  ]
                }
          ]            
        },
        {
          'type': 'group',
          'label': 'Additional Special Attention Points',          
          'editable': true,
                  
          'children': [
            {
              'type': 'container',
              'label': 'Style Sample 1',
              'columnNumber': 1,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 4,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }                   
                  ]
                }
                
              ]
            },            
            {
              'type': 'container',
              'label': 'Style Sample 2',
              'columnNumber': 1,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 4,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }                   
                  ]
                }
              ]
            }
          ]            
        },
        {
          'type': 'group',
          'label': 'Additional Checklists & Tests',          
          'editable': true,
                  
          'children': [
            {
              'type': 'container',
              'label': 'Style Sample 1',
              'columnNumber': 1,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 4,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }                   
                  ]
                }
                
              ]
            },            
            {
              'type': 'container',
              'label': 'Style Sample 2',
              'columnNumber': 1,
              'children': [
                {
                  'type': 'photo_panel',
                  'label': 'Sample Picture',
                  'columnNumber': 4,
                  'children': [
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    },
                    {
                      'type': 'photo',
                      'value': {
                        'source': 'https://unsplash.it/1280/768?image=487',
                        'description': 'This is a Sample Picture'
                      },
                      'placeholder': 'Sample Picture',
                      'editable': true,
                      'disable': false,
                      'removable': true,
                      'dataName': 'photoid-1234.4321.abcdef'
                    }                   
                  ]
                }
              ]
            }
          ]            
        }
      ]

    };
   
    return Promise.resolve(inspectionInformation);

  }


}
