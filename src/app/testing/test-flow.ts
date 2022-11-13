import { FlowConfig } from '../services/flow-controller.service';

export const TEST_FLOW: FlowConfig = {
    'name': '0800304050 Gore open O13633362',
    'operations': {
        '53': {
            'config': {
                'destinations': [
                    {
                        'address': '099513959'
                    }
                ]
            },
            'base_node': '219',
            'id': 53,
            'notes': [],
            'exits': [
                null
            ],
            'name': '099513959',
            'type': 'AttemptTerminate'
        },
        '28': {
            'exits': [
                null
            ],
            'id': 28,
            'notes': [],
            'base_node': '85',
            'config': {
                'destinations': [
                    {
                        'address': '098150885'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '098150885'
        },
        '178': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '034092548'
                    }
                ]
            },
            'base_node': '164',
            'id': 178,
            'notes': [],
            'name': '034092548',
            'type': 'AttemptTerminate'
        },
        '80': {
            'exits': [
                null,
                80,
                73,
                74,
                75,
                76,
                77,
                78,
                79
            ],
            'notes': [],
            'base_node': '29',
            'id': 80,
            'config': {
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'exit_idx': 5,
                        'digit': '4'
                    },
                    {
                        'exit_idx': 6,
                        'digit': '5'
                    },
                    {
                        'exit_idx': 7,
                        'digit': '6'
                    },
                    {
                        'digit': '7',
                        'exit_idx': 8
                    }
                ],
                'main_announcement': {
                    'entry': '23447',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'max_iterations': '3',
                'bad_digit_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '50'
                }
            },
            'type': 'Menu',
            'name': 'Hamilton'
        },
        '20': {
            'exits': [
                null
            ],
            'id': 20,
            'base_node': '203',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '099503085'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '099503085'
        },
        '114': {
            'name': 'New Plymouth/Moturoa/Hawera',
            'type': 'Menu',
            'exits': [
                null,
                111,
                112,
                113
            ],
            'config': {
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'bad_digit_announcement': {
                    'entry': '51',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'type': 'announcement',
                'max_iterations': '3',
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '3'
                    }
                ],
                'first_digit_timeout': 0,
                'main_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '10754',
                    'duration': 0
                }
            },
            'notes': [],
            'id': 114,
            'base_node': '234'
        },
        '56': {
            'type': 'AttemptTerminate',
            'name': '092795900',
            'exits': [
                null
            ],
            'id': 56,
            'notes': [],
            'base_node': '98',
            'config': {
                'destinations': [
                    {
                        'address': '092795900'
                    }
                ]
            }
        },
        '142': {
            'config': {
                'destinations': [
                    {
                        'address': '042346138'
                    }
                ]
            },
            'notes': [],
            'base_node': '169',
            'id': 142,
            'exits': [
                null
            ],
            'name': '042346138',
            'type': 'AttemptTerminate'
        },
        '88': {
            'id': 88,
            'base_node': '27',
            'notes': [],
            'config': {
                'max_iterations': '3',
                'first_digit_timeout': 0,
                'main_announcement': {
                    'entry': '10751',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'digit': '0',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 5
                    },
                    {
                        'exit_idx': 6,
                        'digit': '5'
                    },
                    {
                        'exit_idx': 7,
                        'digit': '6'
                    }
                ],
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'type': 'announcement',
                'bad_digit_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                }
            },
            'exits': [
                null,
                88,
                82,
                83,
                84,
                85,
                86,
                87
            ],
            'type': 'Menu',
            'name': 'Waikato'
        },
        '47': {
            'exits': [
                null
            ],
            'notes': [],
            'base_node': '196',
            'id': 47,
            'config': {
                'destinations': [
                    {
                        'address': '099509093'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '099509093'
        },
        '173': {
            'name': '037454108',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '037454108'
                    }
                ]
            },
            'id': 173,
            'base_node': '194',
            'notes': []
        },
        '126': {
            'name': '043892586',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '043892586'
                    }
                ]
            },
            'base_node': '128',
            'id': 126,
            'notes': [],
            'exits': [
                null
            ]
        },
        '71': {
            'type': 'Menu',
            'name': 'Whangarei/Warkworth',
            'exits': [
                null,
                67,
                68,
                69,
                71
            ],
            'notes': [],
            'base_node': '192',
            'id': 71,
            'config': {
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'type': 'announcement',
                'max_iterations': '3',
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '1'
                    },
                    {
                        'digit': '2',
                        'exit_idx': 2
                    },
                    {
                        'exit_idx': 3,
                        'digit': '3'
                    },
                    {
                        'exit_idx': 4,
                        'digit': '4'
                    }
                ],
                'first_digit_timeout': 0,
                'main_announcement': {
                    'entry': '23583',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                }
            }
        },
        '66': {
            'type': 'AttemptTerminate',
            'name': '094357480',
            'notes': [],
            'id': 66,
            'base_node': '180',
            'config': {
                'destinations': [
                    {
                        'address': '094357480'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '139': {
            'type': 'AttemptTerminate',
            'name': '045649948',
            'exits': [
                null
            ],
            'id': 139,
            'notes': [],
            'base_node': '232',
            'config': {
                'destinations': [
                    {
                        'address': '045649948'
                    }
                ]
            }
        },
        '65': {
            'id': 65,
            'base_node': '47',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '094302852'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '094302852'
        },
        '175': {
            'type': 'AttemptTerminate',
            'name': '034348260',
            'exits': [
                null
            ],
            'id': 175,
            'base_node': '142',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '034348260'
                    }
                ]
            }
        },
        '14': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '099504725'
                    }
                ]
            },
            'notes': [],
            'id': 14,
            'base_node': '213',
            'name': '099504725',
            'type': 'AttemptTerminate'
        },
        '169': {
            'name': '033816099',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '033816099'
                    }
                ]
            },
            'id': 169,
            'notes': [],
            'base_node': '175',
            'exits': [
                null
            ]
        },
        '97': {
            'type': 'Menu',
            'name': 'Tauranga',
            'exits': [
                null,
                97,
                91,
                92,
                93,
                94,
                95,
                96
            ],
            'id': 97,
            'notes': [],
            'base_node': '43',
            'config': {
                'first_digit_timeout': 0,
                'main_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '23204'
                },
                'digits': [
                    {
                        'digit': '0',
                        'exit_idx': 1
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 5
                    },
                    {
                        'exit_idx': 6,
                        'digit': '5'
                    },
                    {
                        'exit_idx': 7,
                        'digit': '6'
                    }
                ],
                'max_iterations': '3',
                'type': 'announcement',
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                }
            }
        },
        '3': {
            'config': {
                'destinations': [
                    {
                        'address': '094278990'
                    }
                ]
            },
            'base_node': '71',
            'id': 3,
            'notes': [],
            'exits': [
                null
            ],
            'name': '094278990',
            'type': 'AttemptTerminate'
        },
        '159': {
            'name': '037416408',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '037416408'
                    }
                ]
            },
            'base_node': '276',
            'notes': [],
            'id': 159,
            'exits': [
                null
            ]
        },
        '63': {
            'type': 'Menu',
            'name': 'Auckland South',
            'base_node': '70',
            'notes': [],
            'id': 63,
            'config': {
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'digit': '2',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 5
                    },
                    {
                        'exit_idx': 6,
                        'digit': '5'
                    },
                    {
                        'exit_idx': 7,
                        'digit': '6'
                    },
                    {
                        'digit': '7',
                        'exit_idx': 8
                    },
                    {
                        'exit_idx': 9,
                        'digit': '8'
                    },
                    {
                        'digit': '9',
                        'exit_idx': 10
                    }
                ],
                'first_digit_timeout': 0,
                'main_announcement': {
                    'duration': 0,
                    'entry': '23420',
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'max_iterations': '3'
            },
            'exits': [
                null,
                63,
                48,
                51,
                56,
                57,
                58,
                59,
                60,
                61,
                62
            ]
        },
        '7': {
            'exits': [
                null
            ],
            'id': 7,
            'base_node': '184',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '094492820'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '094492820'
        },
        '87': {
            'type': 'AttemptTerminate',
            'name': '079853288',
            'notes': [],
            'id': 87,
            'base_node': '274',
            'config': {
                'destinations': [
                    {
                        'address': '079853288'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '48': {
            'type': 'AttemptTerminate',
            'name': '092594592',
            'notes': [],
            'base_node': '94',
            'id': 48,
            'config': {
                'destinations': [
                    {
                        'address': '092594592'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '108': {
            'name': '068630710',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '068630710'
                    }
                ]
            },
            'notes': [],
            'id': 108,
            'base_node': '30',
            'exits': [
                null
            ]
        },
        '40': {
            'exits': [
                null
            ],
            'base_node': '91',
            'notes': [],
            'id': 40,
            'config': {
                'destinations': [
                    {
                        'address': '098187143'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '098187143'
        },
        '111': {
            'exits': [
                null
            ],
            'id': 111,
            'base_node': '35',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '067598009'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '067598009'
        },
        '31': {
            'type': 'Menu',
            'name': 'Auckland Central West',
            'id': 31,
            'notes': [],
            'base_node': '65',
            'config': {
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'digit': '2',
                        'exit_idx': 3
                    },
                    {
                        'digit': '3',
                        'exit_idx': 4
                    },
                    {
                        'exit_idx': 5,
                        'digit': '4'
                    }
                ],
                'main_announcement': {
                    'entry': '23586',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'first_digit_timeout': 0,
                'max_iterations': '3'
            },
            'exits': [
                null,
                31,
                28,
                29,
                21,
                30
            ]
        },
        '52': {
            'name': '099502444',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '099502444'
                    }
                ]
            },
            'id': 52,
            'base_node': '217',
            'notes': [],
            'exits': [
                null
            ]
        },
        '19': {
            'name': '093023662',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '093023662'
                    }
                ]
            },
            'base_node': '174',
            'id': 19,
            'notes': [],
            'exits': [
                null
            ]
        },
        '188': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '037427365'
                    }
                ]
            },
            'id': 188,
            'base_node': '216',
            'notes': [],
            'name': '037427365',
            'type': 'AttemptTerminate'
        },
        '62': {
            'name': '099504090',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '099504090'
                    }
                ]
            },
            'id': 62,
            'base_node': '252',
            'notes': [],
            'exits': [
                null
            ]
        },
        '105': {
            'type': 'AttemptTerminate',
            'name': '068459700',
            'id': 105,
            'base_node': '123',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '068459700'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '166': {
            'name': '033445267',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '033445267'
                    }
                ]
            },
            'base_node': '108',
            'id': 166,
            'notes': []
        },
        '103': {
            'config': {
                'max_iterations': '3',
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 5
                    }
                ],
                'first_digit_timeout': 0,
                'main_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '20732'
                },
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'type': 'announcement'
            },
            'base_node': '39',
            'id': 103,
            'notes': [],
            'exits': [
                null,
                103,
                99,
                100,
                101,
                102
            ],
            'name': 'wav 4-11',
            'type': 'Menu'
        },
        '156': {
            'exits': [
                null
            ],
            'id': 156,
            'notes': [],
            'base_node': '261',
            'config': {
                'destinations': [
                    {
                        'address': '037411776'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '037411776'
        },
        '129': {
            'config': {
                'destinations': [
                    {
                        'address': '048025826'
                    }
                ]
            },
            'base_node': '131',
            'id': 129,
            'notes': [],
            'exits': [
                null
            ],
            'name': '048025826',
            'type': 'AttemptTerminate'
        },
        '192': {
            'config': {
                'type': 'announcement',
                'bad_digit_announcement': {
                    'duration': 0,
                    'entry': '51',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'main_announcement': {
                    'duration': 0,
                    'entry': '22482',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'digit': '2',
                        'exit_idx': 2
                    }
                ],
                'max_iterations': '3'
            },
            'id': 192,
            'base_node': '205',
            'notes': [],
            'exits': [
                null,
                190,
                191
            ],
            'name': 'Invercargill',
            'type': 'Menu'
        },
        '185': {
            'type': 'AttemptTerminate',
            'name': '034562007',
            'id': 185,
            'base_node': '144',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '034562007'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '110': {
            'exits': [
                null,
                80,
                89,
                97,
                103,
                109
            ],
            'config': {
                'first_digit_timeout': 0,
                'main_announcement': {
                    'duration': 0,
                    'entry': '19360',
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 4
                    },
                    {
                        'digit': '5',
                        'exit_idx': 5
                    }
                ],
                'max_iterations': '3',
                'type': 'announcement',
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                },
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                }
            },
            'base_node': '55',
            'id': 110,
            'notes': [],
            'name': 'Waikato BoP Hawkes Bay',
            'type': 'Menu'
        },
        '136': {
            'name': '048311256',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '048311256'
                    }
                ]
            },
            'id': 136,
            'notes': [],
            'base_node': '181',
            'exits': [
                null
            ]
        },
        '176': {
            'type': 'Menu',
            'name': 'Ashburton, Timaru, Oamaru',
            'exits': [
                null,
                173,
                174,
                175
            ],
            'notes': [],
            'id': 176,
            'base_node': '20',
            'config': {
                'type': 'announcement',
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '50'
                },
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'main_announcement': {
                    'duration': 0,
                    'entry': '22221',
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'digit': '2',
                        'exit_idx': 2
                    },
                    {
                        'digit': '3',
                        'exit_idx': 3
                    }
                ],
                'max_iterations': '3'
            }
        },
        '189': {
            'name': 'Dunedin',
            'type': 'Menu',
            'exits': [
                null,
                189,
                184,
                185,
                186,
                187,
                188
            ],
            'config': {
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'type': 'announcement',
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'max_iterations': '3',
                'main_announcement': {
                    'entry': '22780',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 5
                    },
                    {
                        'digit': '5',
                        'exit_idx': 6
                    }
                ]
            },
            'base_node': '23',
            'notes': [],
            'id': 189
        },
        '60': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '099850650'
                    }
                ]
            },
            'notes': [],
            'id': 60,
            'base_node': '102',
            'name': '099850650',
            'type': 'AttemptTerminate'
        },
        '140': {
            'name': 'wav 4-17',
            'type': 'Menu',
            'config': {
                'type': 'announcement',
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'timeout_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                },
                'first_digit_timeout': 0,
                'main_announcement': {
                    'duration': 0,
                    'entry': '21904',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'digits': [
                    {
                        'digit': '0',
                        'exit_idx': 1
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'digit': '2',
                        'exit_idx': 3
                    },
                    {
                        'digit': '3',
                        'exit_idx': 4
                    },
                    {
                        'exit_idx': 5,
                        'digit': '4'
                    },
                    {
                        'digit': '5',
                        'exit_idx': 6
                    }
                ],
                'max_iterations': '3'
            },
            'notes': [],
            'id': 140,
            'base_node': '59',
            'exits': [
                null,
                140,
                135,
                136,
                137,
                138,
                139
            ]
        },
        '194': {
            'id': 194,
            'base_node': '281',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '037480531'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '037480531'
        },
        '92': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '079856151'
                    }
                ]
            },
            'notes': [],
            'base_node': '119',
            'id': 92,
            'name': '079856151',
            'type': 'AttemptTerminate'
        },
        '68': {
            'name': '099557105',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '099557105'
                    }
                ]
            },
            'base_node': '190',
            'id': 68,
            'notes': []
        },
        '109': {
            'id': 109,
            'base_node': '25',
            'notes': [],
            'config': {
                'timeout_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '50'
                },
                'bad_digit_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'type': 'announcement',
                'max_iterations': '3',
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'digit': '2',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'exit_idx': 5,
                        'digit': '4'
                    }
                ],
                'main_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '19377',
                    'duration': 0
                },
                'first_digit_timeout': 0
            },
            'exits': [
                null,
                109,
                105,
                106,
                107,
                108
            ],
            'type': 'Menu',
            'name': 'wav 4-12'
        },
        '147': {
            'exits': [
                null,
                64,
                71,
                110,
                124,
                146
            ],
            'config': {
                'type': 'announcement',
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'main_announcement': {
                    'entry': '23582',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'digit': '3',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 4,
                        'digit': '4'
                    },
                    {
                        'exit_idx': 5,
                        'digit': '5'
                    }
                ],
                'max_iterations': '3'
            },
            'notes': [],
            'id': 147,
            'base_node': '51',
            'name': 'North Island',
            'type': 'Menu'
        },
        '79': {
            'name': '079812184',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '079812184'
                    }
                ]
            },
            'base_node': '256',
            'notes': [],
            'id': 79
        },
        '86': {
            'config': {
                'destinations': [
                    {
                        'address': '079842116'
                    }
                ]
            },
            'id': 86,
            'base_node': '262',
            'notes': [],
            'exits': [
                null
            ],
            'name': '079842116',
            'type': 'AttemptTerminate'
        },
        '23': {
            'exits': [
                null
            ],
            'base_node': '83',
            'notes': [],
            'id': 23,
            'config': {
                'destinations': [
                    {
                        'address': '095228340'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '095228340'
        },
        '58': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '092993601'
                    }
                ]
            },
            'notes': [],
            'base_node': '208',
            'id': 58,
            'name': '092993601',
            'type': 'AttemptTerminate'
        },
        '128': {
            'name': '044756052',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '044756052'
                    }
                ]
            },
            'notes': [],
            'id': 128,
            'base_node': '130',
            'exits': [
                null
            ]
        },
        '85': {
            'name': '079841101',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '079841101'
                    }
                ]
            },
            'base_node': '243',
            'id': 85,
            'notes': [],
            'exits': [
                null
            ]
        },
        '34': {
            'exits': [
                null,
                32,
                33
            ],
            'config': {
                'max_iterations': '3',
                'main_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '23669',
                    'duration': 0
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '1'
                    },
                    {
                        'digit': '2',
                        'exit_idx': 2
                    }
                ],
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'type': 'announcement',
                'bad_digit_announcement': {
                    'entry': '51',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                }
            },
            'id': 34,
            'notes': [],
            'base_node': '245',
            'name': 'more stores in west akl',
            'type': 'Menu'
        },
        '50': {
            'type': 'AttemptTerminate',
            'name': '095351290',
            'exits': [
                null
            ],
            'base_node': '96',
            'id': 50,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '095351290'
                    }
                ]
            }
        },
        '25': {
            'exits': [
                null
            ],
            'id': 25,
            'base_node': '199',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '099516053'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '099516053'
        },
        '200': {
            'config': {},
            'id': 200,
            'base_node': '1',
            'notes': [
                'test'
            ],
            'exits': [
                199
            ],
            'name': 'Start',
            'type': 'Start'
        },
        '141': {
            'config': {
                'destinations': [
                    {
                        'address': '042381623'
                    }
                ]
            },
            'notes': [],
            'base_node': '137',
            'id': 141,
            'exits': [
                null
            ],
            'name': '042381623',
            'type': 'AttemptTerminate'
        },
        '83': {
            'name': '078234653',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '078234653'
                    }
                ]
            },
            'id': 83,
            'base_node': '117',
            'notes': []
        },
        '26': {
            'exits': [
                null,
                15,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25
            ],
            'base_node': '63',
            'notes': [],
            'id': 26,
            'config': {
                'bad_digit_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'exit_idx': 5,
                        'digit': '4'
                    },
                    {
                        'digit': '5',
                        'exit_idx': 6
                    },
                    {
                        'exit_idx': 7,
                        'digit': '6'
                    },
                    {
                        'digit': '7',
                        'exit_idx': 8
                    },
                    {
                        'digit': '8',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 10,
                        'digit': '9'
                    }
                ],
                'first_digit_timeout': 0,
                'main_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '23187',
                    'duration': 0
                },
                'max_iterations': '3'
            },
            'type': 'Menu',
            'name': 'Auckland Central suburbs'
        },
        '42': {
            'type': 'Menu',
            'name': 'Auckland West',
            'notes': [],
            'base_node': '67',
            'id': 42,
            'config': {
                'main_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '23276',
                    'duration': 0
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'digit': '0',
                        'exit_idx': 1
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'digit': '3',
                        'exit_idx': 4
                    },
                    {
                        'exit_idx': 5,
                        'digit': '4'
                    },
                    {
                        'exit_idx': 6,
                        'digit': '5'
                    },
                    {
                        'digit': '6',
                        'exit_idx': 7
                    },
                    {
                        'exit_idx': 8,
                        'digit': '7'
                    },
                    {
                        'digit': '8',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 10,
                        'digit': '9'
                    }
                ],
                'max_iterations': '3',
                'type': 'announcement',
                'bad_digit_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'repetition': 1,
                    'set': 'Public Announcements'
                }
            },
            'exits': [
                null,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                28,
                29,
                41
            ]
        },
        '155': {
            'notes': [],
            'base_node': '257',
            'id': 155,
            'config': {
                'destinations': [
                    {
                        'address': '037415294'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '037415294'
        },
        '67': {
            'exits': [
                null,
                65,
                66
            ],
            'base_node': '179',
            'notes': [],
            'id': 67,
            'config': {
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    }
                ],
                'first_digit_timeout': 0,
                'main_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '21517',
                    'duration': 0
                },
                'max_iterations': '3',
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                }
            },
            'type': 'Menu',
            'name': 'Whangarei/Kamo'
        },
        '93': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '072180701'
                    }
                ]
            },
            'id': 93,
            'notes': [],
            'base_node': '265',
            'name': '072180701',
            'type': 'AttemptTerminate'
        },
        '163': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '033591650'
                    }
                ]
            },
            'id': 163,
            'notes': [],
            'base_node': '105',
            'name': '033591650',
            'type': 'AttemptTerminate'
        },
        '165': {
            'exits': [
                null
            ],
            'base_node': '107',
            'notes': [],
            'id': 165,
            'config': {
                'destinations': [
                    {
                        'address': '033380961'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '033380961'
        },
        '197': {
            'name': '12718',
            'type': 'PlayAnnouncement',
            'exits': [
                null
            ],
            'config': {
                'announcement': {
                    'entry': '12718',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'type': 'announcement'
            },
            'base_node': '14',
            'id': 197,
            'notes': []
        },
        '74': {
            'exits': [
                null
            ],
            'base_node': '113',
            'id': 74,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '078560555'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '078560555'
        },
        '153': {
            'name': '037414040',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '037414040'
                    }
                ]
            },
            'base_node': '223',
            'id': 153,
            'notes': [],
            'exits': [
                null
            ]
        },
        '106': {
            'name': '068336254',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '068336254'
                    }
                ]
            },
            'base_node': '124',
            'id': 106,
            'notes': []
        },
        '191': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '037481103'
                    }
                ]
            },
            'id': 191,
            'notes': [],
            'base_node': '206',
            'name': '037481103',
            'type': 'AttemptTerminate'
        },
        '135': {
            'type': 'AttemptTerminate',
            'name': '045283762',
            'exits': [
                null
            ],
            'id': 135,
            'base_node': '133',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '045283762'
                    }
                ]
            }
        },
        '179': {
            'type': 'AttemptTerminate',
            'name': '037468164',
            'base_node': '226',
            'id': 179,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '037468164'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '95': {
            'type': 'AttemptTerminate',
            'name': '079856967',
            'exits': [
                null
            ],
            'id': 95,
            'notes': [],
            'base_node': '227',
            'config': {
                'destinations': [
                    {
                        'address': '079856967'
                    }
                ]
            }
        },
        '39': {
            'exits': [
                null
            ],
            'base_node': '183',
            'id': 39,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '099503536'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '099503536'
        },
        '186': {
            'exits': [
                null
            ],
            'notes': [],
            'id': 186,
            'base_node': '177',
            'config': {
                'destinations': [
                    {
                        'address': '034250969'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '034250969'
        },
        '11': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '094150937'
                    }
                ]
            },
            'notes': [],
            'id': 11,
            'base_node': '77',
            'name': '094150937',
            'type': 'AttemptTerminate'
        },
        '96': {
            'type': 'AttemptTerminate',
            'name': '079856960',
            'exits': [
                null
            ],
            'id': 96,
            'base_node': '249',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '079856960'
                    }
                ]
            }
        },
        '133': {
            'notes': [],
            'id': 133,
            'base_node': '280',
            'config': {
                'announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '10117'
                },
                'type': 'announcement'
            },
            'exits': [
                132
            ],
            'type': 'PlayAnnouncement',
            'name': 'Khandallah open'
        },
        '82': {
            'type': 'AttemptTerminate',
            'name': '078703025',
            'exits': [
                null
            ],
            'base_node': '116',
            'id': 82,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '078703025'
                    }
                ]
            }
        },
        '168': {
            'config': {
                'destinations': [
                    {
                        'address': '033474812'
                    }
                ]
            },
            'base_node': '110',
            'id': 168,
            'notes': [],
            'exits': [
                null
            ],
            'name': '033474812',
            'type': 'AttemptTerminate'
        },
        '43': {
            'name': 'Announcement',
            'type': 'PlayAnnouncement',
            'config': {
                'type': 'announcement',
                'announcement': {
                    'duration': 0,
                    'entry': '23670',
                    'set': 'Public Announcements',
                    'repetition': 1
                }
            },
            'notes': [],
            'id': 43,
            'base_node': '264',
            'exits': [
                42
            ]
        },
        '158': {
            'name': '037415133',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '037415133'
                    }
                ]
            },
            'base_node': '269',
            'id': 158,
            'notes': []
        },
        '144': {
            'type': 'AttemptTerminate',
            'name': '042961211',
            'exits': [
                null
            ],
            'id': 144,
            'base_node': '44',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '042961211'
                    }
                ]
            }
        },
        '45': {
            'name': '095701558',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '095701558'
                    }
                ]
            },
            'id': 45,
            'notes': [],
            'base_node': '92',
            'exits': [
                null
            ]
        },
        '112': {
            'id': 112,
            'notes': [],
            'base_node': '235',
            'config': {
                'destinations': [
                    {
                        'address': '068248083'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '068248083'
        },
        '22': {
            'name': '096304407',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '096304407'
                    }
                ]
            },
            'base_node': '82',
            'notes': [
                'before 096304407',
                'after 0223024845'
            ],
            'id': 22
        },
        '138': {
            'base_node': '135',
            'id': 138,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '045684385'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '045684385'
        },
        '46': {
            'config': {
                'destinations': [
                    {
                        'address': '095215575'
                    }
                ]
            },
            'id': 46,
            'base_node': '93',
            'notes': [],
            'exits': [
                null
            ],
            'name': '095215575',
            'type': 'AttemptTerminate'
        },
        '190': {
            'type': 'AttemptTerminate',
            'name': '032145454',
            'exits': [
                null
            ],
            'id': 190,
            'notes': [],
            'base_node': '41',
            'config': {
                'destinations': [
                    {
                        'address': '032145454'
                    }
                ]
            }
        },
        '57': {
            'type': 'AttemptTerminate',
            'name': '092574631',
            'base_node': '99',
            'id': 57,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '092574631'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '32': {
            'config': {
                'destinations': [
                    {
                        'address': '099514044'
                    }
                ]
            },
            'id': 32,
            'base_node': '246',
            'notes': [],
            'exits': [
                null
            ],
            'name': '099514044',
            'type': 'AttemptTerminate'
        },
        '51': {
            'type': 'AttemptTerminate',
            'name': '092713175',
            'exits': [
                null
            ],
            'id': 51,
            'notes': [],
            'base_node': '97',
            'config': {
                'destinations': [
                    {
                        'address': '092713175'
                    }
                ]
            }
        },
        '164': {
            'exits': [
                null
            ],
            'id': 164,
            'base_node': '106',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '033570416'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '033570416'
        },
        '121': {
            'config': {
                'destinations': [
                    {
                        'address': '063670110'
                    }
                ]
            },
            'base_node': '170',
            'id': 121,
            'notes': [],
            'exits': [
                null
            ],
            'name': '063670110',
            'type': 'AttemptTerminate'
        },
        '172': {
            'config': {
                'type': 'announcement',
                'announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '10748'
                }
            },
            'id': 172,
            'base_node': '268',
            'notes': [],
            'exits': [
                171
            ],
            'name': 'Announcement',
            'type': 'PlayAnnouncement'
        },
        '154': {
            'type': 'Menu',
            'name': 'Rangiora/Kaiapoi',
            'base_node': '251',
            'id': 154,
            'notes': [],
            'config': {
                'max_iterations': '3',
                'main_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '22935',
                    'duration': 0
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    }
                ],
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'type': 'announcement',
                'bad_digit_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'repetition': 1,
                    'set': 'Public Announcements'
                }
            },
            'exits': [
                null,
                152,
                153
            ]
        },
        '127': {
            'id': 127,
            'base_node': '129',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '044784936'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '044784936'
        },
        '148': {
            'config': {
                'destinations': [
                    {
                        'address': '035390002'
                    }
                ]
            },
            'notes': [],
            'base_node': '138',
            'id': 148,
            'exits': [
                null
            ],
            'name': '035390002',
            'type': 'AttemptTerminate'
        },
        '29': {
            'base_node': '86',
            'notes': [],
            'id': 29,
            'config': {
                'destinations': [
                    {
                        'address': '096291440'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '096291440'
        },
        '120': {
            'name': 'wav 4-15',
            'type': 'Menu',
            'exits': [
                null,
                120,
                118,
                119
            ],
            'config': {
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'type': 'announcement',
                'bad_digit_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'max_iterations': '3',
                'first_digit_timeout': 0,
                'main_announcement': {
                    'entry': '19378',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    }
                ]
            },
            'id': 120,
            'base_node': '37',
            'notes': []
        },
        '17': {
            'name': '093098040',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '093098040',
                        'timeout_seconds': 15
                    },
                    {
                        'address': '093771580'
                    }
                ]
            },
            'base_node': '193',
            'id': 17,
            'notes': []
        },
        '73': {
            'id': 73,
            'base_node': '112',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '078390705'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '078390705'
        },
        '119': {
            'type': 'AttemptTerminate',
            'name': '063571212',
            'exits': [
                null
            ],
            'notes': [],
            'id': 119,
            'base_node': '111',
            'config': {
                'destinations': [
                    {
                        'address': '063571212'
                    }
                ]
            }
        },
        '94': {
            'name': '079856206',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '079856206'
                    }
                ]
            },
            'base_node': '248',
            'id': 94,
            'notes': []
        },
        '143': {
            'name': 'Poritua/Whitby',
            'type': 'Menu',
            'config': {
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'digit': '2',
                        'exit_idx': 2
                    }
                ],
                'main_announcement': {
                    'entry': '20598',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'first_digit_timeout': 0,
                'max_iterations': '3'
            },
            'base_node': '168',
            'id': 143,
            'notes': [],
            'exits': [
                null,
                141,
                142
            ]
        },
        '75': {
            'type': 'AttemptTerminate',
            'name': '079811447',
            'exits': [
                null
            ],
            'id': 75,
            'notes': [],
            'base_node': '185',
            'config': {
                'destinations': [
                    {
                        'address': '079811447'
                    }
                ]
            }
        },
        '89': {
            'base_node': '273',
            'id': 89,
            'notes': [],
            'config': {
                'announcement': {
                    'duration': 0,
                    'entry': '10750',
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'type': 'announcement'
            },
            'exits': [
                88
            ],
            'type': 'PlayAnnouncement',
            'name': 'Announcement'
        },
        '61': {
            'id': 61,
            'base_node': '103',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '092392781'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '092392781'
        },
        '145': {
            'config': {
                'destinations': [
                    {
                        'address': '068261671'
                    }
                ]
            },
            'base_node': '218',
            'notes': [],
            'id': 145,
            'exits': [
                null
            ],
            'name': '068261671',
            'type': 'AttemptTerminate'
        },
        '76': {
            'config': {
                'destinations': [
                    {
                        'address': '078465394'
                    }
                ]
            },
            'notes': [],
            'id': 76,
            'base_node': '171',
            'exits': [
                null
            ],
            'name': '078465394',
            'type': 'AttemptTerminate'
        },
        '124': {
            'name': 'Taranaki/Manawatu',
            'type': 'Menu',
            'exits': [
                null,
                115,
                116,
                120,
                121,
                122,
                124
            ],
            'config': {
                'max_iterations': '3',
                'main_announcement': {
                    'duration': 0,
                    'entry': '10753',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'digit': '3',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 4,
                        'digit': '4'
                    },
                    {
                        'exit_idx': 5,
                        'digit': '5'
                    },
                    {
                        'exit_idx': 6,
                        'digit': '6'
                    }
                ],
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'type': 'announcement',
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                }
            },
            'id': 124,
            'base_node': '34',
            'notes': []
        },
        '99': {
            'type': 'AttemptTerminate',
            'name': '073084333',
            'notes': [],
            'id': 99,
            'base_node': '120',
            'config': {
                'destinations': [
                    {
                        'address': '073084333'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '151': {
            'name': 'Nelson & Blenheim',
            'type': 'Menu',
            'exits': [
                null,
                148,
                149,
                150
            ],
            'config': {
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'type': 'announcement',
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                },
                'max_iterations': '3',
                'main_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '19363'
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '3'
                    }
                ]
            },
            'base_node': '32',
            'id': 151,
            'notes': []
        },
        '102': {
            'type': 'AttemptTerminate',
            'name': '073492155',
            'exits': [
                null
            ],
            'base_node': '122',
            'id': 102,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '073492155'
                    }
                ]
            }
        },
        '36': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '098365929'
                    }
                ]
            },
            'notes': [],
            'id': 36,
            'base_node': '88',
            'name': '098365929',
            'type': 'AttemptTerminate'
        },
        '24': {
            'name': '096349229',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '096349229'
                    }
                ]
            },
            'notes': [],
            'id': 24,
            'base_node': '84',
            'exits': [
                null
            ]
        },
        '161': {
            'base_node': '222',
            'id': 161,
            'notes': [],
            'config': {
                'first_digit_timeout': 0,
                'main_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '10749',
                    'duration': 0
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'digit': '3',
                        'exit_idx': 3
                    },
                    {
                        'digit': '4',
                        'exit_idx': 4
                    },
                    {
                        'exit_idx': 5,
                        'digit': '5'
                    },
                    {
                        'exit_idx': 6,
                        'digit': '6'
                    },
                    {
                        'digit': '7',
                        'exit_idx': 7
                    }
                ],
                'max_iterations': '3',
                'type': 'announcement',
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                }
            },
            'exits': [
                null,
                153,
                155,
                156,
                157,
                158,
                159,
                160
            ],
            'type': 'Menu',
            'name': 'Kaiapoi and more stores'
        },
        '137': {
            'exits': [
                null
            ],
            'id': 137,
            'notes': [],
            'base_node': '134',
            'config': {
                'destinations': [
                    {
                        'address': '045868010'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '045868010'
        },
        '35': {
            'type': 'AttemptTerminate',
            'name': '098270600',
            'id': 35,
            'base_node': '87',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '098270600'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '84': {
            'name': '079843103',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '079843103'
                    }
                ]
            },
            'notes': [],
            'id': 84,
            'base_node': '198'
        },
        '182': {
            'type': 'Menu',
            'name': 'Q\'town Wanaka Frankton',
            'exits': [
                null,
                178,
                179,
                180,
                181
            ],
            'id': 182,
            'base_node': '225',
            'notes': [],
            'config': {
                'first_digit_timeout': 0,
                'main_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '23485',
                    'duration': 0
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 4
                    }
                ],
                'max_iterations': '3',
                'type': 'announcement',
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '50'
                },
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                }
            }
        },
        '195': {
            'exits': [
                null,
                151,
                154,
                172,
                176,
                177,
                182,
                189,
                193,
                194
            ],
            'config': {
                'max_iterations': '3',
                'main_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '10137'
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'digit': '3',
                        'exit_idx': 3
                    },
                    {
                        'digit': '4',
                        'exit_idx': 4
                    },
                    {
                        'exit_idx': 5,
                        'digit': '5'
                    },
                    {
                        'digit': '6',
                        'exit_idx': 6
                    },
                    {
                        'digit': '7',
                        'exit_idx': 7
                    },
                    {
                        'digit': '8',
                        'exit_idx': 8
                    },
                    {
                        'exit_idx': 9,
                        'digit': '9'
                    }
                ],
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'type': 'announcement',
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                }
            },
            'notes': [],
            'id': 195,
            'base_node': '53',
            'name': 'South Island',
            'type': 'Menu'
        },
        '131': {
            'config': {
                'destinations': [
                    {
                        'address': '048311873'
                    }
                ]
            },
            'base_node': '278',
            'notes': [
                'Incorrect number 048312002 was setup. Correct hunt group number is 048311873 ',
                'INC000002794215'
            ],
            'id': 131,
            'exits': [
                null
            ],
            'name': '048311873',
            'type': 'AttemptTerminate'
        },
        '167': {
            'name': '033764921',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '033764921'
                    }
                ]
            },
            'id': 167,
            'base_node': '109',
            'notes': []
        },
        '193': {
            'exits': [
                192
            ],
            'id': 193,
            'base_node': '214',
            'notes': [],
            'config': {
                'announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '22758',
                    'duration': 0
                },
                'type': 'announcement'
            },
            'type': 'PlayAnnouncement',
            'name': 'Announcement'
        },
        '6': {
            'type': 'AttemptTerminate',
            'name': '094785537',
            'exits': [
                null
            ],
            'notes': [],
            'base_node': '163',
            'id': 6,
            'config': {
                'destinations': [
                    {
                        'address': '094785537'
                    }
                ]
            }
        },
        '157': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '037400015'
                    }
                ]
            },
            'id': 157,
            'base_node': '267',
            'notes': [],
            'name': '037400015',
            'type': 'AttemptTerminate'
        },
        '33': {
            'type': 'AttemptTerminate',
            'name': '099533150',
            'base_node': '263',
            'id': 33,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '099533150'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '160': {
            'name': '037416109',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '037416109'
                    }
                ]
            },
            'notes': [],
            'id': 160,
            'base_node': '271'
        },
        '49': {
            'name': '095762675',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '095762675'
                    }
                ]
            },
            'base_node': '95',
            'id': 49,
            'notes': []
        },
        '5': {
            'exits': [
                null,
                5,
                3,
                4
            ],
            'config': {
                'bad_digit_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'digit': '1',
                        'exit_idx': 2
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    }
                ],
                'main_announcement': {
                    'entry': '22033',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'max_iterations': '3'
            },
            'base_node': '187',
            'id': 5,
            'notes': [],
            'name': 'Hibiscus Coast',
            'type': 'Menu'
        },
        '150': {
            'type': 'AttemptTerminate',
            'name': '035447117',
            'notes': [],
            'id': 150,
            'base_node': '204',
            'config': {
                'destinations': [
                    {
                        'address': '035447117'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '10': {
            'name': '094441336',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '094441336'
                    }
                ]
            },
            'id': 10,
            'notes': [],
            'base_node': '76'
        },
        '116': {
            'exits': [
                null
            ],
            'id': 116,
            'base_node': '172',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '063489529'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '063489529'
        },
        '130': {
            'type': 'AttemptTerminate',
            'name': '043807150',
            'exits': [
                null
            ],
            'base_node': '132',
            'id': 130,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '043807150'
                    }
                ]
            }
        },
        '18': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '093006001'
                    }
                ]
            },
            'notes': [],
            'base_node': '176',
            'id': 18,
            'name': '093006001',
            'type': 'AttemptTerminate'
        },
        '198': {
            'type': 'CallerLocation',
            'name': 'Geographical',
            'base_node': '3',
            'id': 198,
            'notes': [
                'We now have a generic maintenance message for Dominos',
                'ID 23073',
                'script:',
                'We are currently making this Domino?s store even better for our customers and',
                ' will be closed for a very short time for maintenance.  ',
                'We apologise for any inconvenience.'
            ],
            'config': {
                'type': 'announcement',
                'default_exit_idx': 0,
                'geography_set': 'Public Geography',
                'rules': [
                    {
                        'geography_entry': 'Ahaura 1546',
                        'exit_idx': 5
                    },
                    {
                        'geography_entry': 'Alexandra 301',
                        'exit_idx': 30
                    },
                    {
                        'geography_entry': 'Alicetown 1004',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 24,
                        'geography_entry': 'Ashburton 1009'
                    },
                    {
                        'exit_idx': 19,
                        'geography_entry': 'Ashurst 1010'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Avonhead 1016'
                    },
                    {
                        'exit_idx': 5,
                        'geography_entry': 'Barrytown 1559'
                    },
                    {
                        'geography_entry': 'Beckenham 1023',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Belfast 1024'
                    },
                    {
                        'geography_entry': 'Belmont 1027',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 11,
                        'geography_entry': 'Blenheim 311'
                    },
                    {
                        'geography_entry': 'Bluff 1032',
                        'exit_idx': 15
                    },
                    {
                        'exit_idx': 15,
                        'geography_entry': 'Browns 313'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Brunswick 1563'
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Brymer 1039'
                    },
                    {
                        'geography_entry': 'Bunnythorpe 1041',
                        'exit_idx': 19
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Burwood 1043'
                    },
                    {
                        'exit_idx': 8,
                        'geography_entry': 'Cambridge 1044'
                    },
                    {
                        'geography_entry': 'Christchurch 1049',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'Claudelands 1052',
                        'exit_idx': 9
                    },
                    {
                        'geography_entry': 'Cloverlea 1566',
                        'exit_idx': 12
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Darfield 1066'
                    },
                    {
                        'exit_idx': 5,
                        'geography_entry': 'Dobson 1879'
                    },
                    {
                        'geography_entry': 'Drummond 325',
                        'exit_idx': 15
                    },
                    {
                        'exit_idx': 6,
                        'geography_entry': 'Dunedin 326'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Dunsandel 327'
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Eastbourne 1076'
                    },
                    {
                        'exit_idx': 14,
                        'geography_entry': 'Edgecumbe 1078'
                    },
                    {
                        'geography_entry': 'Eureka 1083',
                        'exit_idx': 9
                    },
                    {
                        'geography_entry': 'Feilding 1086',
                        'exit_idx': 28
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Fendalton 1087'
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Flagstaff 1088'
                    },
                    {
                        'geography_entry': 'Fordell 1577',
                        'exit_idx': 12
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Frankton 1094'
                    },
                    {
                        'geography_entry': 'Glentunnel 1588',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'Gonville 1102',
                        'exit_idx': 12
                    },
                    {
                        'geography_entry': 'Gordonton 1103',
                        'exit_idx': 9
                    },
                    {
                        'geography_entry': 'Gore 1104',
                        'exit_idx': 33
                    },
                    {
                        'geography_entry': 'Greenpark 1590',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 5,
                        'geography_entry': 'Greymouth 1109'
                    },
                    {
                        'exit_idx': 15,
                        'geography_entry': 'Halfmoon Bay 1112'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Halswell 1114'
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Hamilton 1115'
                    },
                    {
                        'geography_entry': 'Hamilton East 1117',
                        'exit_idx': 9
                    },
                    {
                        'geography_entry': 'Harewood 1120',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'Hataitai 1123',
                        'exit_idx': 18
                    },
                    {
                        'geography_entry': 'Hawera 347',
                        'exit_idx': 32
                    },
                    {
                        'geography_entry': 'Hedgehope 1129',
                        'exit_idx': 15
                    },
                    {
                        'geography_entry': 'Hillmorton 1135',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'Hinuera 1599',
                        'exit_idx': 8
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Hororata 1601'
                    },
                    {
                        'geography_entry': 'Horotiu 1139',
                        'exit_idx': 9
                    },
                    {
                        'geography_entry': 'Hosham Downs 1602',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 26,
                        'geography_entry': 'Huntly 1142'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Inglewood 354'
                    },
                    {
                        'exit_idx': 15,
                        'geography_entry': 'Invercargill 1146'
                    },
                    {
                        'geography_entry': 'Invercargill East 1147',
                        'exit_idx': 15
                    },
                    {
                        'geography_entry': 'Irwell 1605',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'Island Bay 1148',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Islington 1149'
                    },
                    {
                        'geography_entry': 'J F Kennedy Dr 1606',
                        'exit_idx': 12
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Johnsonville 1150'
                    },
                    {
                        'geography_entry': 'Kai Iwi 1607',
                        'exit_idx': 12
                    },
                    {
                        'geography_entry': 'Kaiapoi 1153',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 23,
                        'geography_entry': 'Kaipara Flats 1609'
                    },
                    {
                        'geography_entry': 'Kaiwaka 360',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Karori 1166'
                    },
                    {
                        'geography_entry': 'Kawau Island 1170',
                        'exit_idx': 1
                    },
                    {
                        'geography_entry': 'Kelburn 1173',
                        'exit_idx': 18
                    },
                    {
                        'geography_entry': 'Kelvin Grove 1174',
                        'exit_idx': 12
                    },
                    {
                        'geography_entry': 'Kennington 1175',
                        'exit_idx': 15
                    },
                    {
                        'geography_entry': 'Kerikeri 1177',
                        'exit_idx': 29
                    },
                    {
                        'geography_entry': 'Khandallah 1178',
                        'exit_idx': 18
                    },
                    {
                        'geography_entry': 'Kilbirnie 1179',
                        'exit_idx': 18
                    },
                    {
                        'geography_entry': 'Kirwee 364',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 1,
                        'geography_entry': 'LCA Auckland 104'
                    },
                    {
                        'exit_idx': 7,
                        'geography_entry': 'LCA Gisborne 123'
                    },
                    {
                        'geography_entry': 'LCA Gt Barrier Is. 125',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 1,
                        'geography_entry': 'LCA Helensville 130'
                    },
                    {
                        'geography_entry': 'LCA Hibiscus Coast 131',
                        'exit_idx': 1
                    },
                    {
                        'geography_entry': 'LCA Morrinsville 149',
                        'exit_idx': 8
                    },
                    {
                        'exit_idx': 7,
                        'geography_entry': 'LCA Napier 153'
                    },
                    {
                        'exit_idx': 17,
                        'geography_entry': 'LCA Paraparaumu 166'
                    },
                    {
                        'geography_entry': 'LCA Pukekohe 167',
                        'exit_idx': 1
                    },
                    {
                        'geography_entry': 'LCA Rangiora 171',
                        'exit_idx': 22
                    },
                    {
                        'geography_entry': 'LCA Te Awamutu 184',
                        'exit_idx': 8
                    },
                    {
                        'geography_entry': 'LCA Timaru 187',
                        'exit_idx': 4
                    },
                    {
                        'exit_idx': 7,
                        'geography_entry': 'LCA Waipukurau 195'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Lake Colridge 367'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Leeston 1186'
                    },
                    {
                        'exit_idx': 1,
                        'geography_entry': 'Leigh 1621'
                    },
                    {
                        'exit_idx': 21,
                        'geography_entry': 'Levin 1189'
                    },
                    {
                        'exit_idx': 31,
                        'geography_entry': 'Lichfield 1622'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Lincoln 1190'
                    },
                    {
                        'geography_entry': 'Linton 1191',
                        'exit_idx': 12
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Linwood 1192'
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Lower Hutt 1195'
                    },
                    {
                        'geography_entry': 'Lower Moutere 372',
                        'exit_idx': 11
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Lyttelton 1198'
                    },
                    {
                        'geography_entry': 'Mahia 1201',
                        'exit_idx': 10
                    },
                    {
                        'geography_entry': 'Mahurangi 1202',
                        'exit_idx': 23
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Makirikiri 1628'
                    },
                    {
                        'geography_entry': 'Manawahae 1632',
                        'exit_idx': 14
                    },
                    {
                        'exit_idx': 11,
                        'geography_entry': 'Mapua 375'
                    },
                    {
                        'geography_entry': 'Masterton 1226',
                        'exit_idx': 25
                    },
                    {
                        'exit_idx': 23,
                        'geography_entry': 'Matakana 1638'
                    },
                    {
                        'exit_idx': 8,
                        'geography_entry': 'Matamata 1227'
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Matangi 1228'
                    },
                    {
                        'geography_entry': 'Matata 1230',
                        'exit_idx': 14
                    },
                    {
                        'exit_idx': 33,
                        'geography_entry': 'Mataura 1232'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Maxwell 1644'
                    },
                    {
                        'geography_entry': 'Maxwells Line 1238',
                        'exit_idx': 12
                    },
                    {
                        'geography_entry': 'Melville 1240',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Memorial Ave 1645'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Middleton 1646'
                    },
                    {
                        'geography_entry': 'Miramar 1244',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 5,
                        'geography_entry': 'Moana 1650'
                    },
                    {
                        'geography_entry': 'Motukarara 1655',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Mount Pleasant 1256'
                    },
                    {
                        'geography_entry': 'Naenae 1261',
                        'exit_idx': 18
                    },
                    {
                        'geography_entry': 'Nelson 389',
                        'exit_idx': 11
                    },
                    {
                        'geography_entry': 'New Brighton 1265',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'New Plymouth 390',
                        'exit_idx': 12
                    },
                    {
                        'geography_entry': 'Ngahere 1659',
                        'exit_idx': 5
                    },
                    {
                        'geography_entry': 'Ngaruawahia 1271',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 10,
                        'geography_entry': 'Nuhaka 1664'
                    },
                    {
                        'geography_entry': 'Oamaru 392',
                        'exit_idx': 4
                    },
                    {
                        'geography_entry': 'Ohaupo 1285',
                        'exit_idx': 8
                    },
                    {
                        'exit_idx': 14,
                        'geography_entry': 'Ohope 1287'
                    },
                    {
                        'exit_idx': 13,
                        'geography_entry': 'Okato 395'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Okoia 1670'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Opiki 1674'
                    },
                    {
                        'geography_entry': 'Orini 1306',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 15,
                        'geography_entry': 'Otatara 1312'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Palm Nth Central 1327'
                    },
                    {
                        'geography_entry': 'Papanui 1331',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'Paroa 1336',
                        'exit_idx': 5
                    },
                    {
                        'geography_entry': 'Petone 1340',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Plimmerton 1346'
                    },
                    {
                        'geography_entry': 'Porirua 1350',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 1,
                        'geography_entry': 'Puhoi 1354'
                    },
                    {
                        'exit_idx': 33,
                        'geography_entry': 'Pukerau 1707'
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Pukerua Bay 417'
                    },
                    {
                        'exit_idx': 20,
                        'geography_entry': 'Queenstown 419'
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Raglan 1363'
                    },
                    {
                        'exit_idx': 11,
                        'geography_entry': 'Rai Valley 422'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Riccarton 1377'
                    },
                    {
                        'geography_entry': 'Rolleston 430',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 14,
                        'geography_entry': 'Rotoma 1714'
                    },
                    {
                        'exit_idx': 14,
                        'geography_entry': 'Rotorua 432'
                    },
                    {
                        'exit_idx': 5,
                        'geography_entry': 'Runanga 1394'
                    },
                    {
                        'geography_entry': 'Ryal Bush 1397',
                        'exit_idx': 15
                    },
                    {
                        'geography_entry': 'Sheffield 1720',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'Shirley 1402',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'South Invercargill 1404',
                        'exit_idx': 15
                    },
                    {
                        'geography_entry': 'Southbridge 1405',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Springfield 1724'
                    },
                    {
                        'geography_entry': 'Springston 1409',
                        'exit_idx': 3
                    },
                    {
                        'geography_entry': 'St Albans 1410',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Stokes Valley 1414'
                    },
                    {
                        'geography_entry': 'Sumner 1416',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'TCL PN Local 1326'
                    },
                    {
                        'exit_idx': 3,
                        'geography_entry': 'Taitapu 1729'
                    },
                    {
                        'exit_idx': 14,
                        'geography_entry': 'Taneatua 1426'
                    },
                    {
                        'exit_idx': 1,
                        'geography_entry': 'Tapora 1730'
                    },
                    {
                        'geography_entry': 'Tariki 442',
                        'exit_idx': 13
                    },
                    {
                        'exit_idx': 11,
                        'geography_entry': 'Tasman 443'
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Taupiri 1431'
                    },
                    {
                        'geography_entry': 'Taupo 1432',
                        'exit_idx': 14
                    },
                    {
                        'exit_idx': 16,
                        'geography_entry': 'Tauranga 5'
                    },
                    {
                        'geography_entry': 'Tauwhare 1737',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Tawa 1434'
                    },
                    {
                        'geography_entry': 'Te Akau 1739',
                        'exit_idx': 9
                    },
                    {
                        'geography_entry': 'Te Kowhai 1445',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Te Rapa 1452'
                    },
                    {
                        'geography_entry': 'Te Teko 1453',
                        'exit_idx': 14
                    },
                    {
                        'exit_idx': 9,
                        'geography_entry': 'Te Uku 1748'
                    },
                    {
                        'exit_idx': 15,
                        'geography_entry': 'Thornbury 452'
                    },
                    {
                        'geography_entry': 'Tihoi South 1751',
                        'exit_idx': 14
                    },
                    {
                        'geography_entry': 'Tirohanga 1753',
                        'exit_idx': 14
                    },
                    {
                        'geography_entry': 'Titahi Bay 1462',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Tokomaru 1755'
                    },
                    {
                        'exit_idx': 31,
                        'geography_entry': 'Tokoroa 1467'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Turitea 1474'
                    },
                    {
                        'geography_entry': 'Upper Hutt 1477',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Upper Hutt North 1478'
                    },
                    {
                        'exit_idx': 15,
                        'geography_entry': 'Waianiwa 1761'
                    },
                    {
                        'geography_entry': 'Waikiwi 1489',
                        'exit_idx': 15
                    },
                    {
                        'geography_entry': 'Waimahaka 1766',
                        'exit_idx': 15
                    },
                    {
                        'exit_idx': 14,
                        'geography_entry': 'Waimana 1491'
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Wainuiomata 1495'
                    },
                    {
                        'geography_entry': 'Wairakei 1501',
                        'exit_idx': 14
                    },
                    {
                        'exit_idx': 10,
                        'geography_entry': 'Wairoa 1502'
                    },
                    {
                        'geography_entry': 'Wairoa West 1774',
                        'exit_idx': 10
                    },
                    {
                        'geography_entry': 'Waitangirua 1506',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 24,
                        'geography_entry': 'Wakanui 1512'
                    },
                    {
                        'exit_idx': 27,
                        'geography_entry': 'Wanaka 472'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Wanganui 1517'
                    },
                    {
                        'geography_entry': 'Wanganui East 1518',
                        'exit_idx': 12
                    },
                    {
                        'geography_entry': 'Wanganui Girls Col 1776',
                        'exit_idx': 12
                    },
                    {
                        'exit_idx': 23,
                        'geography_entry': 'Warkworth 1520'
                    },
                    {
                        'geography_entry': 'Wellington 1523',
                        'exit_idx': 18
                    },
                    {
                        'geography_entry': 'Wellington Central 1524',
                        'exit_idx': 18
                    },
                    {
                        'exit_idx': 18,
                        'geography_entry': 'Wellington South 1525'
                    },
                    {
                        'geography_entry': 'Wellsford 1526',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 14,
                        'geography_entry': 'Whakatane 1528'
                    },
                    {
                        'exit_idx': 12,
                        'geography_entry': 'Whangaehu 1785'
                    },
                    {
                        'geography_entry': 'Whangarei 480',
                        'exit_idx': 2
                    },
                    {
                        'geography_entry': 'Whatawhata 1534',
                        'exit_idx': 9
                    },
                    {
                        'geography_entry': 'Whitby 1537',
                        'exit_idx': 18
                    },
                    {
                        'geography_entry': 'Willowbank 1789',
                        'exit_idx': 33
                    },
                    {
                        'exit_idx': 24,
                        'geography_entry': 'Willowby 1790'
                    },
                    {
                        'exit_idx': 24,
                        'geography_entry': 'Winchmore 1540'
                    }
                ],
                'source_buffer': 'CC Calling Network Address'
            },
            'exits': [
                197,
                64,
                67,
                172,
                176,
                177,
                189,
                109,
                88,
                80,
                108,
                151,
                124,
                111,
                103,
                193,
                97,
                144,
                146,
                120,
                182,
                121,
                152,
                68,
                173,
                145,
                85,
                179,
                122,
                69,
                181,
                87,
                113,
                194
            ]
        },
        '78': {
            'type': 'AttemptTerminate',
            'name': '079811241',
            'id': 78,
            'base_node': '195',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '079811241'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '12': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '094458257'
                    }
                ]
            },
            'id': 12,
            'notes': [],
            'base_node': '78',
            'name': '094458257',
            'type': 'AttemptTerminate'
        },
        '4': {
            'name': '099590261',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '099590261'
                    }
                ]
            },
            'id': 4,
            'base_node': '188',
            'notes': [],
            'exits': [
                null
            ]
        },
        '59': {
            'base_node': '101',
            'id': 59,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '092680731'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '092680731'
        },
        '170': {
            'id': 170,
            'base_node': '197',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '037412363'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '037412363'
        },
        '146': {
            'exits': [
                null,
                133,
                140,
                143,
                144,
                145
            ],
            'config': {
                'max_iterations': '3',
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '2'
                    },
                    {
                        'digit': '3',
                        'exit_idx': 3
                    },
                    {
                        'digit': '4',
                        'exit_idx': 4
                    },
                    {
                        'digit': '5',
                        'exit_idx': 5
                    }
                ],
                'main_announcement': {
                    'duration': 0,
                    'entry': '22796',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'bad_digit_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'type': 'announcement'
            },
            'id': 146,
            'base_node': '4',
            'notes': [],
            'name': 'Wellington',
            'type': 'Menu'
        },
        '21': {
            'config': {
                'destinations': [
                    {
                        'address': '098465770'
                    }
                ]
            },
            'notes': [],
            'base_node': '81',
            'id': 21,
            'exits': [
                null
            ],
            'name': '098465770',
            'type': 'AttemptTerminate'
        },
        '9': {
            'type': 'AttemptTerminate',
            'name': '094806666',
            'exits': [
                null
            ],
            'id': 9,
            'base_node': '75',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '094806666'
                    }
                ]
            }
        },
        '37': {
            'type': 'AttemptTerminate',
            'name': '098311001',
            'notes': [],
            'id': 37,
            'base_node': '89',
            'config': {
                'destinations': [
                    {
                        'address': '098311001'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '199': {
            'exits': [
                196,
                198,
                172,
                146
            ],
            'config': {
                'rules': [
                    {
                        'exit_idx': 1,
                        'prefix': '03'
                    },
                    {
                        'exit_idx': 2,
                        'prefix': '039'
                    },
                    {
                        'prefix': '04',
                        'exit_idx': 1
                    },
                    {
                        'prefix': '049',
                        'exit_idx': 3
                    },
                    {
                        'prefix': '06',
                        'exit_idx': 1
                    },
                    {
                        'prefix': '07',
                        'exit_idx': 1
                    },
                    {
                        'prefix': '09',
                        'exit_idx': 1
                    }
                ]
            },
            'base_node': '2',
            'notes': [
                'Intention of this node is to allow calls from overseas mibiles roaming in NZ - refer to O13451639.'
            ],
            'id': 199,
            'name': 'Caller',
            'type': 'CallingParty'
        },
        '122': {
            'notes': [],
            'id': 122,
            'base_node': '258',
            'config': {
                'destinations': [
                    {
                        'address': '062120101'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '062120101'
        },
        '171': {
            'exits': [
                null,
                161,
                162,
                163,
                164,
                165,
                166,
                167,
                168,
                169,
                170
            ],
            'id': 171,
            'notes': [],
            'base_node': '5',
            'config': {
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'entry': '50',
                    'duration': 0,
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '0'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'digit': '3',
                        'exit_idx': 4
                    },
                    {
                        'digit': '4',
                        'exit_idx': 5
                    },
                    {
                        'digit': '5',
                        'exit_idx': 6
                    },
                    {
                        'exit_idx': 7,
                        'digit': '6'
                    },
                    {
                        'exit_idx': 8,
                        'digit': '7'
                    },
                    {
                        'exit_idx': 9,
                        'digit': '8'
                    },
                    {
                        'exit_idx': 10,
                        'digit': '9'
                    }
                ],
                'main_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '23714',
                    'duration': 0
                },
                'first_digit_timeout': 0,
                'max_iterations': '3'
            },
            'type': 'Menu',
            'name': 'Christchurch'
        },
        '177': {
            'name': '037689829',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '037689829'
                    }
                ]
            },
            'base_node': '21',
            'id': 177,
            'notes': [],
            'exits': [
                null
            ]
        },
        '69': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '099553106'
                    }
                ]
            },
            'notes': [],
            'base_node': '260',
            'id': 69,
            'name': '099553106',
            'type': 'AttemptTerminate'
        },
        '184': {
            'exits': [
                null
            ],
            'id': 184,
            'base_node': '143',
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '034770444'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '034770444'
        },
        '149': {
            'notes': [],
            'base_node': '139',
            'id': 149,
            'config': {
                'destinations': [
                    {
                        'address': '035795617'
                    }
                ]
            },
            'exits': [
                null
            ],
            'type': 'AttemptTerminate',
            'name': '035795617'
        },
        '91': {
            'type': 'AttemptTerminate',
            'name': '075794434',
            'exits': [
                null
            ],
            'notes': [],
            'id': 91,
            'base_node': '118',
            'config': {
                'destinations': [
                    {
                        'address': '075794434'
                    }
                ]
            }
        },
        '15': {
            'config': {
                'first_digit_timeout': 0,
                'main_announcement': {
                    'entry': '23585',
                    'duration': 0,
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    }
                ],
                'max_iterations': '3',
                'type': 'announcement',
                'bad_digit_announcement': {
                    'duration': 0,
                    'entry': '51',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'timeout_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                }
            },
            'id': 15,
            'notes': [],
            'base_node': '212',
            'exits': [
                null,
                14
            ],
            'name': 'more stores in central akl',
            'type': 'Menu'
        },
        '100': {
            'name': '072170176',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '072170176'
                    }
                ]
            },
            'notes': [],
            'id': 100,
            'base_node': '121',
            'exits': [
                null
            ]
        },
        '64': {
            'name': 'Auckland',
            'type': 'Menu',
            'exits': [
                null,
                13,
                26,
                31,
                43,
                54,
                63
            ],
            'config': {
                'first_digit_timeout': 0,
                'main_announcement': {
                    'duration': 0,
                    'entry': '19359',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'digits': [
                    {
                        'digit': '1',
                        'exit_idx': 1
                    },
                    {
                        'digit': '2',
                        'exit_idx': 2
                    },
                    {
                        'exit_idx': 3,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 4
                    },
                    {
                        'exit_idx': 5,
                        'digit': '5'
                    },
                    {
                        'digit': '6',
                        'exit_idx': 6
                    }
                ],
                'max_iterations': '3',
                'type': 'announcement',
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '50'
                },
                'timeout_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'entry': '50',
                    'duration': 0
                }
            },
            'id': 64,
            'base_node': '16',
            'notes': []
        },
        '115': {
            'exits': [
                114
            ],
            'id': 115,
            'notes': [],
            'base_node': '237',
            'config': {
                'announcement': {
                    'duration': 0,
                    'entry': '10752',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'type': 'announcement'
            },
            'type': 'PlayAnnouncement',
            'name': 'Announcement'
        },
        '77': {
            'name': '078533602',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '078533602'
                    }
                ]
            },
            'notes': [],
            'id': 77,
            'base_node': '115',
            'exits': [
                null
            ]
        },
        '13': {
            'name': 'Auckland Northern',
            'type': 'Menu',
            'exits': [
                null,
                13,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ],
            'config': {
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'duration': 0,
                    'entry': '50'
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'digits': [
                    {
                        'digit': '0',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'digit': '4',
                        'exit_idx': 5
                    },
                    {
                        'digit': '5',
                        'exit_idx': 6
                    },
                    {
                        'exit_idx': 7,
                        'digit': '6'
                    },
                    {
                        'digit': '7',
                        'exit_idx': 8
                    },
                    {
                        'digit': '8',
                        'exit_idx': 9
                    }
                ],
                'first_digit_timeout': 0,
                'main_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '19367',
                    'duration': 0
                },
                'max_iterations': '3'
            },
            'base_node': '61',
            'id': 13,
            'notes': []
        },
        '113': {
            'exits': [
                null
            ],
            'base_node': '277',
            'notes': [],
            'id': 113,
            'config': {
                'destinations': [
                    {
                        'address': '068246106'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '068246106'
        },
        '8': {
            'type': 'AttemptTerminate',
            'name': '094824192',
            'exits': [
                null
            ],
            'base_node': '74',
            'id': 8,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '094824192'
                    }
                ]
            }
        },
        '180': {
            'name': '037467098',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '037467098'
                    }
                ]
            },
            'id': 180,
            'base_node': '228',
            'notes': []
        },
        '174': {
            'type': 'AttemptTerminate',
            'name': '036883160',
            'id': 174,
            'notes': [],
            'base_node': '141',
            'config': {
                'destinations': [
                    {
                        'address': '036883160'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '41': {
            'name': '099514355',
            'type': 'AttemptTerminate',
            'config': {
                'destinations': [
                    {
                        'address': '099514355'
                    }
                ]
            },
            'id': 41,
            'base_node': '220',
            'notes': [],
            'exits': [
                null
            ]
        },
        '101': {
            'config': {
                'destinations': [
                    {
                        'address': '072160516'
                    }
                ]
            },
            'id': 101,
            'notes': [],
            'base_node': '189',
            'exits': [
                null
            ],
            'name': '072160516',
            'type': 'AttemptTerminate'
        },
        '152': {
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '033107198'
                    }
                ]
            },
            'notes': [],
            'base_node': '173',
            'id': 152,
            'name': '033107198',
            'type': 'AttemptTerminate'
        },
        '187': {
            'exits': [
                null
            ],
            'base_node': '200',
            'id': 187,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '037425002'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '037425002'
        },
        '54': {
            'config': {
                'digits': [
                    {
                        'digit': '0',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '1'
                    },
                    {
                        'exit_idx': 3,
                        'digit': '2'
                    },
                    {
                        'digit': '3',
                        'exit_idx': 4
                    },
                    {
                        'digit': '4',
                        'exit_idx': 5
                    },
                    {
                        'digit': '5',
                        'exit_idx': 6
                    },
                    {
                        'digit': '6',
                        'exit_idx': 7
                    },
                    {
                        'digit': '7',
                        'exit_idx': 8
                    },
                    {
                        'digit': '8',
                        'exit_idx': 9
                    },
                    {
                        'exit_idx': 10,
                        'digit': '9'
                    }
                ],
                'first_digit_timeout': 0,
                'main_announcement': {
                    'duration': 0,
                    'entry': '22861',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'max_iterations': '3',
                'bad_digit_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                },
                'type': 'announcement',
                'timeout_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '50'
                }
            },
            'id': 54,
            'base_node': '68',
            'notes': [],
            'exits': [
                null,
                54,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53
            ],
            'name': 'Auckland Eastern',
            'type': 'Menu'
        },
        '30': {
            'config': {
                'destinations': [
                    {
                        'address': '099507880'
                    }
                ]
            },
            'id': 30,
            'base_node': '224',
            'notes': [],
            'exits': [
                null
            ],
            'name': '099507880',
            'type': 'AttemptTerminate'
        },
        '162': {
            'type': 'AttemptTerminate',
            'name': '034200161',
            'base_node': '266',
            'notes': [],
            'id': 162,
            'config': {
                'destinations': [
                    {
                        'address': '034200161'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '181': {
            'name': '037469130',
            'type': 'AttemptTerminate',
            'exits': [
                null
            ],
            'config': {
                'destinations': [
                    {
                        'address': '037469130'
                    }
                ]
            },
            'id': 181,
            'base_node': '255',
            'notes': []
        },
        '132': {
            'type': 'Menu',
            'name': 'Wellington Central',
            'exits': [
                null,
                132,
                126,
                127,
                128,
                129,
                130,
                131
            ],
            'notes': [],
            'id': 132,
            'base_node': '57',
            'config': {
                'main_announcement': {
                    'duration': 0,
                    'entry': '11115',
                    'repetition': 1,
                    'set': 'Public Announcements'
                },
                'first_digit_timeout': 0,
                'digits': [
                    {
                        'digit': '0',
                        'exit_idx': 1
                    },
                    {
                        'exit_idx': 2,
                        'digit': '1'
                    },
                    {
                        'digit': '2',
                        'exit_idx': 3
                    },
                    {
                        'exit_idx': 4,
                        'digit': '3'
                    },
                    {
                        'exit_idx': 5,
                        'digit': '4'
                    },
                    {
                        'exit_idx': 6,
                        'digit': '5'
                    },
                    {
                        'digit': '6',
                        'exit_idx': 7
                    }
                ],
                'max_iterations': '3',
                'type': 'announcement',
                'bad_digit_announcement': {
                    'set': 'Public Announcements',
                    'repetition': 1,
                    'duration': 0,
                    'entry': '50'
                },
                'timeout_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '50',
                    'duration': 0
                }
            }
        },
        '196': {
            'name': 'wav 1-1a',
            'type': 'Menu',
            'config': {
                'type': 'announcement',
                'bad_digit_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'timeout_announcement': {
                    'duration': 0,
                    'entry': '50',
                    'set': 'Public Announcements',
                    'repetition': 1
                },
                'first_digit_timeout': 0,
                'main_announcement': {
                    'repetition': 1,
                    'set': 'Public Announcements',
                    'entry': '19353',
                    'duration': 0
                },
                'digits': [
                    {
                        'exit_idx': 1,
                        'digit': '2'
                    },
                    {
                        'exit_idx': 2,
                        'digit': '3'
                    }
                ],
                'max_iterations': '3'
            },
            'base_node': '49',
            'id': 196,
            'notes': [],
            'exits': [
                null,
                147,
                195
            ]
        },
        '38': {
            'type': 'AttemptTerminate',
            'name': '098361726',
            'notes': [],
            'base_node': '90',
            'id': 38,
            'config': {
                'destinations': [
                    {
                        'address': '098361726'
                    }
                ]
            },
            'exits': [
                null
            ]
        },
        '107': {
            'exits': [
                null
            ],
            'base_node': '125',
            'id': 107,
            'notes': [],
            'config': {
                'destinations': [
                    {
                        'address': '068704999'
                    }
                ]
            },
            'type': 'AttemptTerminate',
            'name': '068704999'
        },
        '118': {
            'config': {
                'destinations': [
                    {
                        'address': '063555740'
                    }
                ]
            },
            'base_node': '127',
            'notes': [],
            'id': 118,
            'exits': [
                null
            ],
            'name': '063555740',
            'type': 'AttemptTerminate'
        }
    },
    'change_user': 'MHANYA',
    'is_active': false,
    'is_active_in_future': 0,
    'change_date': '2020-10-22T00:54:56Z',
    'id': '311209',
    'flow_version_id': 0,
    'customer_id': 40551,
    'customer_name': 'DOMINOS PIZZA NZ LTD 15694475',
    'version': 1
};