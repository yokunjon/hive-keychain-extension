// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: '1',

      macros: [
        { function: '__e' },
        { function: '__c', vtp_value: 'google.com.tw' },
        { function: '__c', vtp_value: 0 },
        { vtp_signal: 0, function: '__c', vtp_value: 0 },
      ],
      tags: [
        {
          function: '__gct',
          vtp_trackingId: 'G-1LRCTFLVBH',
          vtp_sessionDuration: 0,
          tag_id: 1,
        },
        {
          function: '__set_product_settings',
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          vtp_foreignTldMacroResult: ['macro', 1],
          vtp_isChinaVipRegionMacroResult: ['macro', 2],
          tag_id: 3,
        },
        {
          function: '__ogt_google_signals',
          vtp_googleSignals: 'DISABLED',
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          vtp_serverMacroResult: ['macro', 3],
          tag_id: 5,
        },
        {
          function: '__ccd_ga_regscope',
          vtp_settingsTable: [
            'list',
            [
              'map',
              'redactFieldGroup',
              'DEVICE_AND_GEO',
              'disallowAllRegions',
              false,
              'disallowedRegions',
              '',
            ],
            [
              'map',
              'redactFieldGroup',
              'GOOGLE_SIGNALS',
              'disallowAllRegions',
              true,
              'disallowedRegions',
              '',
            ],
          ],
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          tag_id: 6,
        },
        {
          function: '__ccd_em_outbound_click',
          priority: 0,
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          tag_id: 7,
        },
        {
          function: '__ogt_event_edit',
          vtp_instanceOrder: 1,
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          vtp_precompiledRule: [
            'map',
            'instance_order',
            1,
            'event_name_predicate',
            [
              'map',
              'values',
              [
                'list',
                ['map', 'type', 'event_name'],
                ['map', 'type', 'const', 'const_value', 'navigation'],
              ],
              'type',
              'eq',
            ],
            'conditions',
            ['list', ['map', 'predicates', ['list']]],
            'new_event_name',
            ['map', 'type', 'const', 'const_value', ''],
            'event_param_ops',
            ['list'],
          ],
          tag_id: 8,
        },
        {
          function: '__ccd_conversion_marking',
          vtp_conversionRules: [
            'list',
            [
              'map',
              'matchingRules',
              '{"type":5,"args":[{"stringValue":"purchase"},{"contextValue":{"namespaceType":1,"keyParts":["eventName"]}}]}',
            ],
          ],
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          tag_id: 9,
        },
        {
          function: '__ccd_em_page_view',
          vtp_historyEvents: true,
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          tag_id: 10,
        },
        {
          function: '__ogt_event_create',
          vtp_eventName: 'navigation',
          vtp_isCopy: true,
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          vtp_precompiledRule: [
            'map',
            'new_event_name',
            'navigation',
            'merge_source_event_params',
            true,
            'conditions',
            [
              'list',
              [
                'map',
                'predicates',
                [
                  'list',
                  [
                    'map',
                    'values',
                    [
                      'list',
                      [
                        'map',
                        'type',
                        'event_param',
                        'event_param',
                        ['map', 'param_name', 'navigation'],
                      ],
                      ['map', 'type', 'const', 'const_value', 'navigation'],
                    ],
                    'type',
                    'eq',
                  ],
                ],
              ],
            ],
          ],
          tag_id: 11,
        },
        {
          function: '__ccd_em_download',
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-1LRCTFLVBH',
          tag_id: 12,
        },
      ],
      predicates: [
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.js' },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.init' },
      ],
      rules: [
        [
          ['if', 0],
          ['add', 0],
        ],
        [
          ['if', 1],
          ['add', 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ],
      ],
    },
    runtime: [
      [
        50,
        '__set_product_settings',
        [46, 'a'],
        [52, 'b', ['require', 'internal.setProductSettingsParameter']],
        [52, 'c', ['require', 'getContainerVersion']],
        [
          52,
          'd',
          [
            30,
            [17, [15, 'a'], 'instanceDestinationId'],
            [17, ['c'], 'containerId'],
          ],
        ],
        [
          'b',
          [15, 'd'],
          'google_tld',
          [17, [15, 'a'], 'foreignTldMacroResult'],
        ],
        [
          'b',
          [15, 'd'],
          'ga_restrict_domain',
          [20, [17, [15, 'a'], 'isChinaVipRegionMacroResult'], 1],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ogt_google_signals',
        [46, 'a'],
        [52, 'b', ['require', 'internal.setProductSettingsParameter']],
        [52, 'c', ['require', 'getContainerVersion']],
        [
          52,
          'd',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [
          52,
          'e',
          [
            30,
            [17, [15, 'a'], 'instanceDestinationId'],
            [17, ['c'], 'containerId'],
          ],
        ],
        [
          'b',
          [15, 'e'],
          'google_signals',
          [20, [17, [15, 'a'], 'serverMacroResult'], 1],
        ],
        [
          22,
          [17, [15, 'd'], 'enableGa4OnoRemarketing'],
          [
            46,
            [
              'b',
              [15, 'e'],
              'google_ono',
              [20, [17, [15, 'a'], 'serverMacroResult'], 2],
            ],
          ],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_conversion_marking',
        [46, 'a'],
        [
          50,
          'm',
          [46, 'n'],
          [52, 'o', [2, [15, 'j'], 'parse', [7, [15, 'n']]]],
          [
            22,
            [
              30,
              [30, [28, [15, 'o']], [28, [16, [15, 'o'], 'args']]],
              [21, [17, [16, [15, 'o'], 'args'], 'length'], 2],
            ],
            [46, [36]],
          ],
          [52, 'p', [16, [16, [16, [15, 'o'], 'args'], 1], 'contextValue']],
          [
            22,
            [
              30,
              [
                30,
                [
                  30,
                  [28, [15, 'p']],
                  [21, [16, [15, 'p'], 'namespaceType'], 1],
                ],
                [21, [17, [16, [15, 'p'], 'keyParts'], 'length'], 1],
              ],
              [21, [16, [16, [15, 'p'], 'keyParts'], 0], 'eventName'],
            ],
            [46, [36, [44]]],
          ],
          [52, 'q', [16, [16, [15, 'o'], 'args'], 0]],
          [36, [1, [15, 'q'], [16, [15, 'q'], 'stringValue']]],
        ],
        [
          22,
          [
            30,
            [28, [17, [15, 'a'], 'conversionRules']],
            [20, [17, [17, [15, 'a'], 'conversionRules'], 'length'], 0],
          ],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'b', ['require', 'internal.evaluateBooleanExpression']],
        [
          52,
          'c',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'd', ['require', 'internal.registerCcdCallback']],
        [52, 'e', 'is_conversion'],
        [52, 'f', 'syn_or_mod'],
        [
          22,
          [16, [15, 'c'], 'enableCcdGaConversions'],
          [
            46,
            [
              'd',
              [17, [15, 'a'], 'instanceDestinationId'],
              [
                51,
                '',
                [7, 'n'],
                [22, [2, [15, 'n'], 'getMetadata', [7, [15, 'f']]], [46, [36]]],
                [52, 'o', [8, 'preHit', [15, 'n']]],
                [
                  65,
                  'p',
                  [17, [15, 'a'], 'conversionRules'],
                  [
                    46,
                    [
                      22,
                      ['b', [17, [15, 'p'], 'matchingRules'], [15, 'o']],
                      [
                        46,
                        [2, [15, 'n'], 'setMetadata', [7, [15, 'e'], true]],
                        [4],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [2, [15, 'a'], 'gtmOnSuccess', [7]],
            [36],
          ],
        ],
        [52, 'g', ['require', 'internal.setProductSettingsParameter']],
        [52, 'h', ['require', 'internal.getProductSettingsParameter']],
        [52, 'i', ['require', 'getContainerVersion']],
        [52, 'j', ['require', 'JSON']],
        [
          52,
          'k',
          [
            30,
            [17, [15, 'a'], 'instanceDestinationId'],
            [17, ['i'], 'containerId'],
          ],
        ],
        [52, 'l', [30, ['h', [15, 'k'], 'event_settings'], [8]]],
        [
          53,
          [41, 'n'],
          [3, 'n', 0],
          [
            63,
            [7, 'n'],
            [23, [15, 'n'], [17, [17, [15, 'a'], 'conversionRules'], 'length']],
            [33, [15, 'n'], [3, 'n', [0, [15, 'n'], 1]]],
            [
              46,
              [
                53,
                [
                  52,
                  'o',
                  [
                    'm',
                    [
                      16,
                      [16, [17, [15, 'a'], 'conversionRules'], [15, 'n']],
                      'matchingRules',
                    ],
                  ],
                ],
                [22, [28, [15, 'o']], [46, [6]]],
                [41, 'p'],
                [3, 'p', [16, [15, 'l'], [15, 'o']]],
                [
                  22,
                  [28, [15, 'p']],
                  [46, [3, 'p', [8]], [43, [15, 'l'], [15, 'o'], [15, 'p']]],
                ],
                [43, [15, 'p'], 'conversion', true],
              ],
            ],
          ],
        ],
        ['g', [15, 'k'], 'event_settings', [15, 'l']],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ogt_event_edit',
        [46, 'a'],
        [
          50,
          'bi',
          [46, 'bq', 'br'],
          [52, 'bs', [30, [16, [15, 'br'], [15, 's']], [7]]],
          [
            66,
            'bt',
            [15, 'bs'],
            [
              46,
              [
                22,
                [16, [15, 'bt'], [15, 't']],
                [
                  46,
                  [
                    53,
                    [52, 'bu', [16, [16, [15, 'bt'], [15, 't']], [15, 'v']]],
                    [
                      52,
                      'bv',
                      [
                        'bo',
                        [15, 'bq'],
                        [16, [16, [15, 'bt'], [15, 't']], [15, 'w']],
                      ],
                    ],
                    [
                      2,
                      [15, 'bq'],
                      'setHitData',
                      [7, [15, 'bu'], ['bj', [15, 'bv']]],
                    ],
                  ],
                ],
                [
                  46,
                  [
                    22,
                    [16, [15, 'bt'], [15, 'u']],
                    [
                      46,
                      [
                        53,
                        [
                          52,
                          'bu',
                          [16, [16, [15, 'bt'], [15, 'u']], [15, 'v']],
                        ],
                        [2, [15, 'bq'], 'setHitData', [7, [15, 'bu'], [44]]],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          50,
          'bj',
          [46, 'bq'],
          [22, [28, [15, 'bq']], [46, [36, [15, 'bq']]]],
          [52, 'br', ['e', [15, 'bq']]],
          [52, 'bs', [21, [15, 'br'], [15, 'br']]],
          [22, [15, 'bs'], [46, [36, [15, 'bq']]]],
          [36, [15, 'br']],
        ],
        [
          50,
          'bk',
          [46, 'bq'],
          [22, [28, [15, 'bq']], [46, [36, true]]],
          [3, 'bq', ['f', [15, 'bq']]],
          [
            66,
            'br',
            [15, 'bh'],
            [
              46,
              [
                22,
                [20, [2, [15, 'bq'], 'indexOf', [7, [15, 'br']]], 0],
                [46, [36, true]],
              ],
            ],
          ],
          [
            22,
            [18, [2, [15, 'bg'], 'indexOf', [7, [15, 'bq']]], [27, 1]],
            [46, [36, true]],
          ],
          [36, false],
        ],
        [
          50,
          'bl',
          [46, 'bq', 'br', 'bs'],
          [
            22,
            [1, [15, 'br'], [28, ['bn', [15, 'bq'], [15, 'br']]]],
            [46, [36, false]],
          ],
          [
            22,
            [30, [28, [15, 'bs']], [20, [17, [15, 'bs'], 'length'], 0]],
            [46, [36, true]],
          ],
          [
            53,
            [41, 'bt'],
            [3, 'bt', 0],
            [
              63,
              [7, 'bt'],
              [23, [15, 'bt'], [17, [15, 'bs'], 'length']],
              [33, [15, 'bt'], [3, 'bt', [0, [15, 'bt'], 1]]],
              [
                46,
                [
                  53,
                  [
                    52,
                    'bu',
                    [30, [16, [16, [15, 'bs'], [15, 'bt']], [15, 'ba']], [7]],
                  ],
                  [22, ['bm', [15, 'bq'], [15, 'bu']], [46, [36, true]]],
                ],
              ],
            ],
          ],
          [36, false],
        ],
        [
          50,
          'bm',
          [46, 'bq', 'br'],
          [
            53,
            [41, 'bs'],
            [3, 'bs', 0],
            [
              63,
              [7, 'bs'],
              [23, [15, 'bs'], [17, [15, 'br'], 'length']],
              [33, [15, 'bs'], [3, 'bs', [0, [15, 'bs'], 1]]],
              [
                46,
                [
                  22,
                  [28, ['bn', [15, 'bq'], [16, [15, 'br'], [15, 'bs']]]],
                  [46, [36, false]],
                ],
              ],
            ],
          ],
          [36, true],
        ],
        [
          50,
          'bn',
          [46, 'bq', 'br'],
          [52, 'bs', [30, [16, [15, 'br'], [15, 'bd']], [7]]],
          [41, 'bt'],
          [3, 'bt', ['bo', [15, 'bq'], [16, [15, 'bs'], 0]]],
          [41, 'bu'],
          [3, 'bu', ['bo', [15, 'bq'], [16, [15, 'bs'], 1]]],
          [52, 'bv', [16, [15, 'br'], [15, 'bc']]],
          [
            22,
            [
              30,
              [
                30,
                [30, [20, [15, 'bv'], 'eqi'], [20, [15, 'bv'], 'swi']],
                [20, [15, 'bv'], 'ewi'],
              ],
              [20, [15, 'bv'], 'cni'],
            ],
            [
              46,
              [3, 'bt', [2, ['f', [15, 'bt']], 'toLowerCase', [7]]],
              [3, 'bu', [2, ['f', [15, 'bu']], 'toLowerCase', [7]]],
            ],
          ],
          [41, 'bw'],
          [3, 'bw', false],
          [
            38,
            [15, 'bv'],
            [
              46,
              'eq',
              'eqi',
              'sw',
              'swi',
              'ew',
              'ewi',
              'cn',
              'cni',
              'lt',
              'le',
              'gt',
              'ge',
            ],
            [
              46,
              [5, [46]],
              [
                5,
                [
                  46,
                  [3, 'bw', [20, ['f', [15, 'bt']], ['f', [15, 'bu']]]],
                  [4],
                ],
              ],
              [5, [46]],
              [
                5,
                [
                  46,
                  [
                    3,
                    'bw',
                    [
                      20,
                      [2, ['f', [15, 'bt']], 'indexOf', [7, ['f', [15, 'bu']]]],
                      0,
                    ],
                  ],
                  [4],
                ],
              ],
              [5, [46]],
              [
                5,
                [
                  46,
                  [41, 'bx'],
                  [3, 'bx', ['f', [15, 'bt']]],
                  [41, 'by'],
                  [3, 'by', ['f', [15, 'bu']]],
                  [
                    52,
                    'bz',
                    [
                      37,
                      [17, [15, 'bx'], 'length'],
                      [17, [15, 'by'], 'length'],
                    ],
                  ],
                  [
                    3,
                    'bw',
                    [
                      1,
                      [19, [15, 'bz'], 0],
                      [
                        20,
                        [2, [15, 'bx'], 'indexOf', [7, [15, 'by'], [15, 'bz']]],
                        [15, 'bz'],
                      ],
                    ],
                  ],
                  [4],
                ],
              ],
              [5, [46]],
              [
                5,
                [
                  46,
                  [
                    3,
                    'bw',
                    [
                      19,
                      [2, ['f', [15, 'bt']], 'indexOf', [7, ['f', [15, 'bu']]]],
                      0,
                    ],
                  ],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [3, 'bw', [23, ['e', [15, 'bt']], ['e', [15, 'bu']]]],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [3, 'bw', [24, ['e', [15, 'bt']], ['e', [15, 'bu']]]],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [3, 'bw', [18, ['e', [15, 'bt']], ['e', [15, 'bu']]]],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [3, 'bw', [19, ['e', [15, 'bt']], ['e', [15, 'bu']]]],
                  [4],
                ],
              ],
              [9, [46]],
            ],
          ],
          [
            22,
            [28, [28, [16, [15, 'br'], [15, 'bb']]]],
            [46, [36, [28, [15, 'bw']]]],
          ],
          [36, [15, 'bw']],
        ],
        [
          50,
          'bo',
          [46, 'bq', 'br'],
          [22, [28, [15, 'br']], [46, [36, [44]]]],
          [
            38,
            [16, [15, 'br'], [15, 'be']],
            [46, 'event_name', 'const', 'event_param'],
            [
              46,
              [5, [46, [36, [2, [15, 'bq'], 'getEventName', [7]]]]],
              [5, [46, [36, [16, [15, 'br'], [15, 'x']]]]],
              [
                5,
                [
                  46,
                  [52, 'bs', [16, [16, [15, 'br'], [15, 'z']], [15, 'y']]],
                  [
                    22,
                    [
                      1,
                      [16, [15, 'b'], 'enableEesPagePath'],
                      [20, [15, 'bs'], [15, 'bf']],
                    ],
                    [46, [36, [2, [15, 'bq'], 'getMetadata', [7, [15, 'bf']]]]],
                  ],
                  [36, [2, [15, 'bq'], 'getHitData', [7, [15, 'bs']]]],
                ],
              ],
              [9, [46, [36, [44]]]],
            ],
          ],
        ],
        [
          50,
          'bp',
          [46, 'bq', 'br'],
          [
            22,
            [
              28,
              [
                'bl',
                [15, 'bq'],
                [16, [15, 'br'], [15, 'p']],
                [30, [16, [15, 'br'], [15, 'q']], [7]],
              ],
            ],
            [46, [36, false]],
          ],
          [
            22,
            [16, [15, 'br'], [15, 'r']],
            [
              46,
              [
                53,
                [
                  52,
                  'bs',
                  [
                    39,
                    [20, ['d', [16, [15, 'br'], [15, 'r']]], 'string'],
                    [16, [15, 'br'], [15, 'r']],
                    ['bo', [15, 'bq'], [16, [15, 'br'], [15, 'r']]],
                  ],
                ],
                [22, ['bk', [15, 'bs']], [46, [36, false]]],
                [2, [15, 'bq'], 'setEventName', [7, ['f', [15, 'bs']]]],
              ],
            ],
          ],
          ['bi', [15, 'bq'], [15, 'br']],
          [36, true],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          [28, [16, [15, 'b'], 'enableCcdEventEditingAndCreation']],
          [
            46,
            [
              53,
              [52, 'bq', ['require', 'internal.appendRemoteConfigParameter']],
              [52, 'br', ['require', 'internal.sortRemoteConfigParameters']],
              [
                'bq',
                [15, 'c'],
                'dynamic_event_settings.edit_rules',
                [17, [15, 'a'], 'precompiledRule'],
              ],
              [
                'br',
                [15, 'c'],
                'dynamic_event_settings.edit_rules',
                [8, 'sortKey', 'instance_order'],
              ],
              [2, [15, 'a'], 'gtmOnSuccess', [7]],
              [36],
            ],
          ],
        ],
        [52, 'd', ['require', 'getType']],
        [52, 'e', ['require', 'makeNumber']],
        [52, 'f', ['require', 'makeString']],
        [52, 'g', ['require', 'internal.processAsNewEvent']],
        [52, 'h', ['require', 'internal.registerCcdCallback']],
        [52, 'i', ['require', 'templateStorage']],
        [41, 'j'],
        [3, 'j', [2, [15, 'i'], 'getItem', [7, [15, 'c']]]],
        [41, 'k'],
        [3, 'k', [28, [28, [15, 'j']]]],
        [
          22,
          [15, 'k'],
          [
            46,
            [2, [15, 'j'], 'push', [7, [17, [15, 'a'], 'precompiledRule']]],
            [
              2,
              [15, 'j'],
              'sort',
              [
                7,
                [
                  51,
                  '',
                  [7, 'bq', 'br'],
                  [
                    36,
                    [
                      37,
                      [17, [15, 'bq'], 'instance_order'],
                      [17, [15, 'br'], 'instance_order'],
                    ],
                  ],
                ],
              ],
            ],
            [2, [15, 'a'], 'gtmOnSuccess', [7]],
            [36],
          ],
        ],
        [
          2,
          [15, 'i'],
          'setItem',
          [7, [15, 'c'], [7, [17, [15, 'a'], 'precompiledRule']]],
        ],
        [52, 'l', 'syn_or_mod'],
        [52, 'm', 'is_external_event'],
        [52, 'n', 'event_usage'],
        [52, 'o', 2],
        [52, 'p', 'event_name_predicate'],
        [52, 'q', 'conditions'],
        [52, 'r', 'new_event_name'],
        [52, 's', 'event_param_ops'],
        [52, 't', 'edit_param'],
        [52, 'u', 'delete_param'],
        [52, 'v', 'param_name'],
        [52, 'w', 'param_value'],
        [52, 'x', 'const_value'],
        [52, 'y', 'param_name'],
        [52, 'z', 'event_param'],
        [52, 'ba', 'predicates'],
        [52, 'bb', 'negate'],
        [52, 'bc', 'type'],
        [52, 'bd', 'values'],
        [52, 'be', 'type'],
        [52, 'bf', 'page_path'],
        [
          52,
          'bg',
          [
            7,
            'app_remove',
            'app_store_refund',
            'app_store_subscription_cancel',
            'app_store_subscription_convert',
            'app_store_subscription_renew',
            'first_open',
            'first_visit',
            'in_app_purchase',
            'session_start',
            'user_engagement',
          ],
        ],
        [52, 'bh', [7, '_', 'ga_', 'google_', 'gtag.', 'firebase_']],
        [
          'h',
          [15, 'c'],
          [
            51,
            '',
            [7, 'bq'],
            [22, [2, [15, 'bq'], 'getMetadata', [7, [15, 'l']]], [46, [36]]],
            [52, 'br', [2, [15, 'i'], 'getItem', [7, [15, 'c']]]],
            [41, 'bs'],
            [3, 'bs', false],
            [
              66,
              'bt',
              [15, 'br'],
              [46, [22, ['bp', [15, 'bq'], [15, 'bt']], [46, [3, 'bs', true]]]],
            ],
            [
              22,
              [15, 'bs'],
              [
                46,
                [
                  53,
                  [
                    2,
                    [15, 'bq'],
                    'setMetadata',
                    [
                      7,
                      [15, 'm'],
                      [
                        28,
                        [28, [2, [15, 'bq'], 'getMetadata', [7, [15, 'm']]]],
                      ],
                    ],
                  ],
                  [
                    52,
                    'bt',
                    [30, [2, [15, 'bq'], 'getMetadata', [7, [15, 'n']]], [7]],
                  ],
                  [
                    22,
                    [20, [2, [15, 'bt'], 'indexOf', [7, [15, 'o']]], [27, 1]],
                    [46, [2, [15, 'bt'], 'push', [7, [15, 'o']]]],
                  ],
                  [2, [15, 'bq'], 'setMetadata', [7, [15, 'n'], [15, 'bt']]],
                  ['g', [15, 'bq']],
                  [2, [15, 'bq'], 'abort', [7]],
                ],
              ],
            ],
          ],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_em_download',
        [46, 'a'],
        [
          50,
          's',
          [46, 'y'],
          [
            36,
            [
              1,
              [15, 'y'],
              [
                21,
                [
                  2,
                  [2, [15, 'y'], 'toLowerCase', [7]],
                  'match',
                  [7, [15, 'r']],
                ],
                [45],
              ],
            ],
          ],
        ],
        [
          50,
          't',
          [46, 'y'],
          [52, 'z', [2, [17, [15, 'y'], 'pathname'], 'split', [7, '.']]],
          [
            52,
            'ba',
            [
              39,
              [18, [17, [15, 'z'], 'length'], 1],
              [16, [15, 'z'], [37, [17, [15, 'z'], 'length'], 1]],
              '',
            ],
          ],
          [36, [16, [2, [15, 'ba'], 'split', [7, '/']], 0]],
        ],
        [
          50,
          'u',
          [46, 'y'],
          [
            36,
            [
              39,
              [
                12,
                [2, [17, [15, 'y'], 'pathname'], 'substring', [7, 0, 1]],
                '/',
              ],
              [17, [15, 'y'], 'pathname'],
              [0, '/', [17, [15, 'y'], 'pathname']],
            ],
          ],
        ],
        [
          50,
          'v',
          [46, 'y'],
          [41, 'z'],
          [3, 'z', ''],
          [
            22,
            [1, [15, 'y'], [17, [15, 'y'], 'href']],
            [
              46,
              [
                53,
                [41, 'ba'],
                [3, 'ba', [2, [17, [15, 'y'], 'href'], 'indexOf', [7, '#']]],
                [
                  3,
                  'z',
                  [
                    39,
                    [23, [15, 'ba'], 0],
                    [17, [15, 'y'], 'href'],
                    [
                      2,
                      [17, [15, 'y'], 'href'],
                      'substring',
                      [7, 0, [15, 'ba']],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, 'z']],
        ],
        [
          50,
          'x',
          [46, 'y'],
          [52, 'z', [8]],
          [43, [15, 'z'], [15, 'j'], true],
          [43, [15, 'z'], [15, 'f'], true],
          [43, [15, 'y'], 'eventMetadata', [15, 'z']],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', ['require', 'internal.getProductSettingsParameter']],
        [52, 'd', ['require', 'internal.registerCcdCallback']],
        [52, 'e', ['require', 'templateStorage']],
        [52, 'f', 'speculative'],
        [52, 'g', 'ae_block_downloads'],
        [52, 'h', 'file_download'],
        [52, 'i', 'isRegistered'],
        [52, 'j', 'em_event'],
        [52, 'k', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          ['c', [15, 'k'], [15, 'g']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'l', [28, [28, [16, [15, 'b'], 'enableCcdEnhancedMeasurement']]]],
        [
          22,
          [15, 'l'],
          [
            46,
            [
              'd',
              [15, 'k'],
              [
                51,
                '',
                [7, 'y'],
                [
                  22,
                  [
                    30,
                    [21, [2, [15, 'y'], 'getEventName', [7]], [15, 'h']],
                    [28, [2, [15, 'y'], 'getMetadata', [7, [15, 'j']]]],
                  ],
                  [46, [36]],
                ],
                [
                  22,
                  ['c', [15, 'k'], [15, 'g']],
                  [46, [2, [15, 'y'], 'abort', [7]], [36]],
                ],
                [2, [15, 'y'], 'setMetadata', [7, [15, 'f'], false]],
                [
                  22,
                  [28, [17, [15, 'a'], 'includeParams']],
                  [
                    46,
                    [2, [15, 'y'], 'setHitData', [7, 'link_id', [44]]],
                    [2, [15, 'y'], 'setHitData', [7, 'link_url', [44]]],
                    [2, [15, 'y'], 'setHitData', [7, 'link_text', [44]]],
                    [2, [15, 'y'], 'setHitData', [7, 'file_name', [44]]],
                    [2, [15, 'y'], 'setHitData', [7, 'file_extension', [44]]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [1, [15, 'l'], [2, [15, 'e'], 'getItem', [7, [15, 'i']]]],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'm', ['require', 'internal.addDataLayerEventListener']],
        [52, 'n', ['require', 'internal.enableAutoEventOnLinkClick']],
        [52, 'o', ['require', 'internal.getDestinationIds']],
        [52, 'p', ['require', 'parseUrl']],
        [52, 'q', ['require', 'internal.sendGtagEvent']],
        [
          52,
          'r',
          [
            0,
            'pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|',
            'mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma',
          ],
        ],
        [52, 'w', ['n', [8, 'checkValidation', true]]],
        [22, [28, [15, 'w']], [46, [2, [15, 'a'], 'gtmOnFailure', [7]], [36]]],
        [2, [15, 'e'], 'setItem', [7, [15, 'i'], true]],
        [
          'm',
          'gtm.linkClick',
          [
            51,
            '',
            [7, 'y', 'z'],
            ['z'],
            [52, 'ba', [8]],
            [
              22,
              [28, [28, [16, [15, 'b'], 'enableSendGtagEventId']]],
              [
                46,
                [
                  43,
                  [15, 'ba'],
                  'eventId',
                  [16, [15, 'y'], 'gtm.uniqueEventId'],
                ],
              ],
            ],
            [52, 'bb', [16, [15, 'y'], 'gtm.elementUrl']],
            [52, 'bc', ['p', [15, 'bb']]],
            [22, [28, [15, 'bc']], [46, [36]]],
            [52, 'bd', ['t', [15, 'bc']]],
            [22, [28, ['s', [15, 'bd']]], [46, [36]]],
            [
              52,
              'be',
              [
                39,
                [30, [28, [28, [17, [15, 'a'], 'includeParams']]], [15, 'l']],
                [
                  8,
                  'link_id',
                  [16, [15, 'y'], 'gtm.elementId'],
                  'link_url',
                  ['v', [15, 'bc']],
                  'link_text',
                  [16, [15, 'y'], 'gtm.elementText'],
                  'file_name',
                  ['u', [15, 'bc']],
                  'file_extension',
                  [15, 'bd'],
                ],
                [8],
              ],
            ],
            [
              22,
              [15, 'l'],
              [
                46,
                ['x', [15, 'ba']],
                ['q', ['o'], [15, 'h'], [15, 'be'], [15, 'ba']],
              ],
              [46, ['q', [15, 'k'], [15, 'h'], [15, 'be'], [15, 'ba']]],
            ],
          ],
          [15, 'w'],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_ga_regscope',
        [46, 'a'],
        [
          50,
          'k',
          [46, 'm'],
          [
            22,
            [30, [28, [15, 'i']], [21, [17, [15, 'i'], 'length'], 2]],
            [46, [36, false]],
          ],
          [52, 'n', ['l', [15, 'm']]],
          [
            53,
            [41, 'o'],
            [3, 'o', 0],
            [
              63,
              [7, 'o'],
              [23, [15, 'o'], [17, [15, 'n'], 'length']],
              [33, [15, 'o'], [3, 'o', [0, [15, 'o'], 1]]],
              [
                46,
                [
                  53,
                  [52, 'p', [16, [15, 'n'], [15, 'o']]],
                  [52, 'q', [17, [15, 'p'], 'countryCode']],
                  [52, 'r', [17, [15, 'p'], 'regionCode']],
                  [52, 's', [20, [15, 'q'], [15, 'i']]],
                  [52, 't', [30, [28, [15, 'r']], [20, [15, 'r'], [15, 'j']]]],
                  [22, [1, [15, 's'], [15, 't']], [46, [36, true]]],
                ],
              ],
            ],
          ],
          [36, false],
        ],
        [
          50,
          'l',
          [46, 'm'],
          [52, 'n', [7]],
          [22, [28, [15, 'm']], [46, [36, [15, 'n']]]],
          [52, 'o', [2, [15, 'm'], 'split', [7, ',']]],
          [
            53,
            [41, 'p'],
            [3, 'p', 0],
            [
              63,
              [7, 'p'],
              [23, [15, 'p'], [17, [15, 'o'], 'length']],
              [33, [15, 'p'], [3, 'p', [0, [15, 'p'], 1]]],
              [
                46,
                [
                  53,
                  [52, 'q', [2, [16, [15, 'o'], [15, 'p']], 'trim', [7]]],
                  [22, [28, [15, 'q']], [46, [6]]],
                  [52, 'r', [2, [15, 'q'], 'split', [7, '-']]],
                  [52, 's', [16, [15, 'r'], 0]],
                  [
                    52,
                    't',
                    [39, [20, [17, [15, 'r'], 'length'], 2], [15, 'q'], [44]],
                  ],
                  [
                    22,
                    [30, [28, [15, 's']], [21, [17, [15, 's'], 'length'], 2]],
                    [46, [6]],
                  ],
                  [
                    22,
                    [
                      1,
                      [21, [15, 't'], [44]],
                      [
                        30,
                        [23, [17, [15, 't'], 'length'], 4],
                        [18, [17, [15, 't'], 'length'], 6],
                      ],
                    ],
                    [46, [6]],
                  ],
                  [
                    2,
                    [15, 'n'],
                    'push',
                    [7, [8, 'countryCode', [15, 's'], 'regionCode', [15, 't']]],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, 'n']],
        ],
        [52, 'b', ['require', 'getContainerVersion']],
        [52, 'c', ['require', 'internal.setRemoteConfigParameter']],
        [52, 'd', ['require', 'internal.getCountryCode']],
        [52, 'e', ['require', 'internal.getRegionCode']],
        [
          22,
          [28, [17, [15, 'a'], 'settingsTable']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [41, 'f'],
        [
          52,
          'g',
          [
            8,
            'GOOGLE_SIGNALS',
            [7, [8, 'name', 'allow_google_signals', 'value', false]],
            'DEVICE_AND_GEO',
            [
              7,
              [8, 'name', 'geo_granularity', 'value', true],
              [8, 'name', 'redact_device_info', 'value', true],
            ],
          ],
        ],
        [
          52,
          'h',
          [
            30,
            [17, [15, 'a'], 'instanceDestinationId'],
            [17, ['b'], 'containerId'],
          ],
        ],
        [52, 'i', ['d']],
        [52, 'j', ['e']],
        [
          53,
          [41, 'm'],
          [3, 'm', 0],
          [
            63,
            [7, 'm'],
            [23, [15, 'm'], [17, [17, [15, 'a'], 'settingsTable'], 'length']],
            [33, [15, 'm'], [3, 'm', [0, [15, 'm'], 1]]],
            [
              46,
              [
                53,
                [52, 'n', [16, [17, [15, 'a'], 'settingsTable'], [15, 'm']]],
                [
                  22,
                  [
                    30,
                    [17, [15, 'n'], 'disallowAllRegions'],
                    ['k', [17, [15, 'n'], 'disallowedRegions']],
                  ],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        'o',
                        [16, [15, 'g'], [17, [15, 'n'], 'redactFieldGroup']],
                      ],
                      [22, [28, [15, 'o']], [46, [6]]],
                      [
                        53,
                        [41, 'p'],
                        [3, 'p', 0],
                        [
                          63,
                          [7, 'p'],
                          [23, [15, 'p'], [17, [15, 'o'], 'length']],
                          [33, [15, 'p'], [3, 'p', [0, [15, 'p'], 1]]],
                          [
                            46,
                            [
                              53,
                              [52, 'q', [16, [15, 'o'], [15, 'p']]],
                              [
                                'c',
                                [15, 'h'],
                                [17, [15, 'q'], 'name'],
                                [17, [15, 'q'], 'value'],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_em_page_view',
        [46, 'a'],
        [
          50,
          's',
          [46, 't'],
          [52, 'u', [8]],
          [43, [15, 'u'], [15, 'k'], true],
          [43, [15, 'u'], [15, 'g'], true],
          [43, [15, 't'], 'eventMetadata', [15, 'u']],
        ],
        [
          22,
          [28, [17, [15, 'a'], 'historyEvents']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', ['require', 'internal.getProductSettingsParameter']],
        [52, 'd', ['require', 'internal.registerCcdCallback']],
        [52, 'e', ['require', 'internal.setRemoteConfigParameter']],
        [52, 'f', ['require', 'templateStorage']],
        [52, 'g', 'speculative'],
        [52, 'h', 'ae_block_history'],
        [52, 'i', 'page_view'],
        [52, 'j', 'isRegistered'],
        [52, 'k', 'em_event'],
        [52, 'l', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          ['c', [15, 'l'], [15, 'h']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'm', [28, [28, [16, [15, 'b'], 'enableCcdEnhancedMeasurement']]]],
        [
          22,
          [15, 'm'],
          [
            46,
            [
              'd',
              [15, 'l'],
              [
                51,
                '',
                [7, 't'],
                [
                  22,
                  [
                    30,
                    [21, [2, [15, 't'], 'getEventName', [7]], [15, 'i']],
                    [28, [2, [15, 't'], 'getMetadata', [7, [15, 'k']]]],
                  ],
                  [46, [36]],
                ],
                [
                  22,
                  ['c', [15, 'l'], [15, 'h']],
                  [46, [2, [15, 't'], 'abort', [7]], [36]],
                ],
                [2, [15, 't'], 'setMetadata', [7, [15, 'g'], false]],
                [
                  'e',
                  [15, 'l'],
                  'page_referrer',
                  [2, [15, 't'], 'getHitData', [7, 'page_referrer']],
                ],
                [
                  22,
                  [28, [17, [15, 'a'], 'includeParams']],
                  [
                    46,
                    [2, [15, 't'], 'setHitData', [7, 'page_location', [44]]],
                    [2, [15, 't'], 'setHitData', [7, 'page_referrer', [44]]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [1, [15, 'm'], [2, [15, 'f'], 'getItem', [7, [15, 'j']]]],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'n', ['require', 'internal.addDataLayerEventListener']],
        [52, 'o', ['require', 'internal.enableAutoEventOnHistoryChange']],
        [52, 'p', ['require', 'internal.getDestinationIds']],
        [52, 'q', ['require', 'internal.sendGtagEvent']],
        [52, 'r', ['o', [8, 'interval', 1000]]],
        [22, [28, [15, 'r']], [46, [2, [15, 'a'], 'gtmOnFailure', [7]], [36]]],
        [2, [15, 'f'], 'setItem', [7, [15, 'j'], true]],
        [
          'n',
          'gtm.historyChange-v2',
          [
            51,
            '',
            [7, 't', 'u'],
            ['u'],
            [52, 'v', [16, [15, 't'], 'gtm.oldUrl']],
            [22, [20, [16, [15, 't'], 'gtm.newUrl'], [15, 'v']], [46, [36]]],
            [52, 'w', [16, [15, 't'], 'gtm.historyChangeSource']],
            [
              22,
              [
                1,
                [1, [21, [15, 'w'], 'pushState'], [21, [15, 'w'], 'popstate']],
                [21, [15, 'w'], 'replaceState'],
              ],
              [46, [36]],
            ],
            [
              52,
              'x',
              [
                39,
                [30, [28, [28, [17, [15, 'a'], 'includeParams']]], [15, 'm']],
                [
                  8,
                  'page_location',
                  [16, [15, 't'], 'gtm.newUrl'],
                  'page_referrer',
                  [15, 'v'],
                ],
                [8],
              ],
            ],
            [52, 'y', [8]],
            [
              22,
              [28, [28, [16, [15, 'b'], 'enableSendGtagEventId']]],
              [
                46,
                [
                  43,
                  [15, 'y'],
                  'eventId',
                  [16, [15, 't'], 'gtm.uniqueEventId'],
                ],
              ],
            ],
            [
              22,
              [15, 'm'],
              [
                46,
                ['s', [15, 'y']],
                ['q', ['p'], [15, 'i'], [15, 'x'], [15, 'y']],
              ],
              [
                46,
                ['q', [15, 'l'], [15, 'i'], [15, 'x'], [15, 'y']],
                ['e', [15, 'l'], 'page_referrer', [15, 'v']],
              ],
            ],
          ],
          [15, 'r'],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_em_outbound_click',
        [46, 'a'],
        [
          50,
          't',
          [46, 'z'],
          [22, [28, [15, 'z']], [46, [36, [44]]]],
          [41, 'ba'],
          [3, 'ba', ''],
          [
            22,
            [1, [15, 'z'], [17, [15, 'z'], 'href']],
            [
              46,
              [
                53,
                [41, 'bb'],
                [3, 'bb', [2, [17, [15, 'z'], 'href'], 'indexOf', [7, '#']]],
                [
                  3,
                  'ba',
                  [
                    39,
                    [23, [15, 'bb'], 0],
                    [17, [15, 'z'], 'href'],
                    [
                      2,
                      [17, [15, 'z'], 'href'],
                      'substring',
                      [7, 0, [15, 'bb']],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, 'ba']],
        ],
        [
          50,
          'u',
          [46, 'z'],
          [22, [28, [15, 'z']], [46, [36, [44]]]],
          [41, 'ba'],
          [3, 'ba', [17, [15, 'z'], 'hostname']],
          [52, 'bb', [2, [15, 'ba'], 'match', [7, '^www\\d*\\.']]],
          [
            22,
            [1, [15, 'bb'], [16, [15, 'bb'], 0]],
            [
              46,
              [
                3,
                'ba',
                [
                  2,
                  [15, 'ba'],
                  'substring',
                  [7, [17, [16, [15, 'bb'], 0], 'length']],
                ],
              ],
            ],
          ],
          [36, [15, 'ba']],
        ],
        [
          50,
          'v',
          [46, 'z'],
          [22, [28, [15, 'z']], [46, [36, false]]],
          [52, 'ba', [2, [17, [15, 'z'], 'hostname'], 'toLowerCase', [7]]],
          [41, 'bb'],
          [3, 'bb', [2, ['u', ['r', ['q']]], 'toLowerCase', [7]]],
          [41, 'bc'],
          [
            3,
            'bc',
            [37, [17, [15, 'ba'], 'length'], [17, [15, 'bb'], 'length']],
          ],
          [
            22,
            [
              1,
              [18, [15, 'bc'], 0],
              [29, [2, [15, 'bb'], 'charAt', [7, 0]], '.'],
            ],
            [
              46,
              [32, [15, 'bc'], [3, 'bc', [37, [15, 'bc'], 1]]],
              [3, 'bb', [0, '.', [15, 'bb']]],
            ],
          ],
          [
            22,
            [
              1,
              [19, [15, 'bc'], 0],
              [
                12,
                [2, [15, 'ba'], 'indexOf', [7, [15, 'bb'], [15, 'bc']]],
                [15, 'bc'],
              ],
            ],
            [46, [36, false]],
          ],
          [36, true],
        ],
        [
          50,
          'y',
          [46, 'z'],
          [52, 'ba', [8]],
          [43, [15, 'ba'], [15, 'j'], true],
          [43, [15, 'ba'], [15, 'f'], true],
          [43, [15, 'z'], 'eventMetadata', [15, 'ba']],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', ['require', 'internal.getProductSettingsParameter']],
        [52, 'd', ['require', 'internal.registerCcdCallback']],
        [52, 'e', ['require', 'templateStorage']],
        [52, 'f', 'speculative'],
        [52, 'g', 'ae_block_outbound_click'],
        [52, 'h', 'click'],
        [52, 'i', 'isRegistered'],
        [52, 'j', 'em_event'],
        [52, 'k', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          ['c', [15, 'k'], [15, 'g']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'l', [28, [28, [16, [15, 'b'], 'enableCcdEnhancedMeasurement']]]],
        [
          22,
          [15, 'l'],
          [
            46,
            [
              'd',
              [15, 'k'],
              [
                51,
                '',
                [7, 'z'],
                [
                  22,
                  [
                    30,
                    [21, [2, [15, 'z'], 'getEventName', [7]], [15, 'h']],
                    [28, [2, [15, 'z'], 'getMetadata', [7, [15, 'j']]]],
                  ],
                  [46, [36]],
                ],
                [
                  22,
                  ['c', [15, 'k'], [15, 'g']],
                  [46, [2, [15, 'z'], 'abort', [7]], [36]],
                ],
                [2, [15, 'z'], 'setMetadata', [7, [15, 'f'], false]],
                [
                  22,
                  [28, [17, [15, 'a'], 'includeParams']],
                  [
                    46,
                    [2, [15, 'z'], 'setHitData', [7, 'link_id', [44]]],
                    [2, [15, 'z'], 'setHitData', [7, 'link_classes', [44]]],
                    [2, [15, 'z'], 'setHitData', [7, 'link_url', [44]]],
                    [2, [15, 'z'], 'setHitData', [7, 'link_domain', [44]]],
                    [2, [15, 'z'], 'setHitData', [7, 'outbound', [44]]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [1, [15, 'l'], [2, [15, 'e'], 'getItem', [7, [15, 'i']]]],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'm', ['require', 'internal.addDataLayerEventListener']],
        [52, 'n', ['require', 'internal.enableAutoEventOnLinkClick']],
        [52, 'o', ['require', 'internal.getDestinationIds']],
        [52, 'p', ['require', 'internal.getRemoteConfigParameter']],
        [52, 'q', ['require', 'getUrl']],
        [52, 'r', ['require', 'parseUrl']],
        [52, 's', ['require', 'internal.sendGtagEvent']],
        [52, 'w', ['p', [15, 'k'], 'cross_domain_conditions']],
        [
          52,
          'x',
          [
            'n',
            [
              8,
              'affiliateDomains',
              [15, 'w'],
              'checkValidation',
              true,
              'waitForTags',
              false,
            ],
          ],
        ],
        [22, [28, [15, 'x']], [46, [2, [15, 'a'], 'gtmOnFailure', [7]], [36]]],
        [2, [15, 'e'], 'setItem', [7, [15, 'i'], true]],
        [
          'm',
          'gtm.linkClick',
          [
            51,
            '',
            [7, 'z', 'ba'],
            [52, 'bb', ['r', [16, [15, 'z'], 'gtm.elementUrl']]],
            [22, [28, ['v', [15, 'bb']]], [46, ['ba'], [36]]],
            [
              52,
              'bc',
              [
                39,
                [30, [28, [28, [17, [15, 'a'], 'includeParams']]], [15, 'l']],
                [
                  8,
                  'link_id',
                  [16, [15, 'z'], 'gtm.elementId'],
                  'link_classes',
                  [16, [15, 'z'], 'gtm.elementClasses'],
                  'link_url',
                  ['t', [15, 'bb']],
                  'link_domain',
                  ['u', [15, 'bb']],
                  'outbound',
                  true,
                ],
                [8],
              ],
            ],
            [43, [15, 'bc'], 'event_callback', [15, 'ba']],
            [52, 'bd', [8]],
            [
              22,
              [28, [28, [16, [15, 'b'], 'enableSendGtagEventId']]],
              [
                46,
                [
                  43,
                  [15, 'bd'],
                  'eventId',
                  [16, [15, 'z'], 'gtm.uniqueEventId'],
                ],
              ],
            ],
            [
              22,
              [15, 'l'],
              [
                46,
                ['y', [15, 'bd']],
                ['s', ['o'], [15, 'h'], [15, 'bc'], [15, 'bd']],
              ],
              [46, ['s', [15, 'k'], [15, 'h'], [15, 'bc'], [15, 'bd']]],
            ],
          ],
          [15, 'x'],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ogt_event_create',
        [46, 'a'],
        [
          50,
          'bi',
          [46, 'bq', 'br'],
          [52, 'bs', [30, [16, [15, 'br'], [15, 'r']], [7]]],
          [
            66,
            'bt',
            [15, 'bs'],
            [
              46,
              [
                22,
                [16, [15, 'bt'], [15, 's']],
                [
                  46,
                  [
                    53,
                    [52, 'bu', [16, [16, [15, 'bt'], [15, 's']], [15, 'u']]],
                    [
                      52,
                      'bv',
                      [
                        'bo',
                        [15, 'bq'],
                        [16, [16, [15, 'bt'], [15, 's']], [15, 'v']],
                      ],
                    ],
                    [
                      2,
                      [15, 'bq'],
                      'setHitData',
                      [7, [15, 'bu'], ['bj', [15, 'bv']]],
                    ],
                  ],
                ],
                [
                  46,
                  [
                    22,
                    [16, [15, 'bt'], [15, 't']],
                    [
                      46,
                      [
                        53,
                        [
                          52,
                          'bu',
                          [16, [16, [15, 'bt'], [15, 't']], [15, 'u']],
                        ],
                        [2, [15, 'bq'], 'setHitData', [7, [15, 'bu'], [44]]],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          50,
          'bj',
          [46, 'bq'],
          [22, [28, [15, 'bq']], [46, [36, [15, 'bq']]]],
          [52, 'br', ['e', [15, 'bq']]],
          [52, 'bs', [21, [15, 'br'], [15, 'br']]],
          [22, [15, 'bs'], [46, [36, [15, 'bq']]]],
          [36, [15, 'br']],
        ],
        [
          50,
          'bk',
          [46, 'bq'],
          [22, [28, [15, 'bq']], [46, [36, true]]],
          [3, 'bq', ['f', [15, 'bq']]],
          [
            66,
            'br',
            [15, 'bh'],
            [
              46,
              [
                22,
                [20, [2, [15, 'bq'], 'indexOf', [7, [15, 'br']]], 0],
                [46, [36, true]],
              ],
            ],
          ],
          [
            22,
            [18, [2, [15, 'bg'], 'indexOf', [7, [15, 'bq']]], [27, 1]],
            [46, [36, true]],
          ],
          [36, false],
        ],
        [
          50,
          'bl',
          [46, 'bq', 'br', 'bs'],
          [
            22,
            [1, [15, 'br'], [28, ['bn', [15, 'bq'], [15, 'br']]]],
            [46, [36, false]],
          ],
          [
            22,
            [30, [28, [15, 'bs']], [20, [17, [15, 'bs'], 'length'], 0]],
            [46, [36, true]],
          ],
          [
            53,
            [41, 'bt'],
            [3, 'bt', 0],
            [
              63,
              [7, 'bt'],
              [23, [15, 'bt'], [17, [15, 'bs'], 'length']],
              [33, [15, 'bt'], [3, 'bt', [0, [15, 'bt'], 1]]],
              [
                46,
                [
                  53,
                  [
                    52,
                    'bu',
                    [30, [16, [16, [15, 'bs'], [15, 'bt']], [15, 'z']], [7]],
                  ],
                  [22, ['bm', [15, 'bq'], [15, 'bu']], [46, [36, true]]],
                ],
              ],
            ],
          ],
          [36, false],
        ],
        [
          50,
          'bm',
          [46, 'bq', 'br'],
          [
            53,
            [41, 'bs'],
            [3, 'bs', 0],
            [
              63,
              [7, 'bs'],
              [23, [15, 'bs'], [17, [15, 'br'], 'length']],
              [33, [15, 'bs'], [3, 'bs', [0, [15, 'bs'], 1]]],
              [
                46,
                [
                  22,
                  [28, ['bn', [15, 'bq'], [16, [15, 'br'], [15, 'bs']]]],
                  [46, [36, false]],
                ],
              ],
            ],
          ],
          [36, true],
        ],
        [
          50,
          'bn',
          [46, 'bq', 'br'],
          [52, 'bs', [30, [16, [15, 'br'], [15, 'bc']], [7]]],
          [41, 'bt'],
          [3, 'bt', ['bo', [15, 'bq'], [16, [15, 'bs'], 0]]],
          [41, 'bu'],
          [3, 'bu', ['bo', [15, 'bq'], [16, [15, 'bs'], 1]]],
          [52, 'bv', [16, [15, 'br'], [15, 'bb']]],
          [
            22,
            [
              30,
              [
                30,
                [30, [20, [15, 'bv'], 'eqi'], [20, [15, 'bv'], 'swi']],
                [20, [15, 'bv'], 'ewi'],
              ],
              [20, [15, 'bv'], 'cni'],
            ],
            [
              46,
              [3, 'bt', [2, ['f', [15, 'bt']], 'toLowerCase', [7]]],
              [3, 'bu', [2, ['f', [15, 'bu']], 'toLowerCase', [7]]],
            ],
          ],
          [41, 'bw'],
          [3, 'bw', false],
          [
            38,
            [15, 'bv'],
            [
              46,
              'eq',
              'eqi',
              'sw',
              'swi',
              'ew',
              'ewi',
              'cn',
              'cni',
              'lt',
              'le',
              'gt',
              'ge',
            ],
            [
              46,
              [5, [46]],
              [
                5,
                [
                  46,
                  [3, 'bw', [20, ['f', [15, 'bt']], ['f', [15, 'bu']]]],
                  [4],
                ],
              ],
              [5, [46]],
              [
                5,
                [
                  46,
                  [
                    3,
                    'bw',
                    [
                      20,
                      [2, ['f', [15, 'bt']], 'indexOf', [7, ['f', [15, 'bu']]]],
                      0,
                    ],
                  ],
                  [4],
                ],
              ],
              [5, [46]],
              [
                5,
                [
                  46,
                  [41, 'bx'],
                  [3, 'bx', ['f', [15, 'bt']]],
                  [41, 'by'],
                  [3, 'by', ['f', [15, 'bu']]],
                  [
                    52,
                    'bz',
                    [
                      37,
                      [17, [15, 'bx'], 'length'],
                      [17, [15, 'by'], 'length'],
                    ],
                  ],
                  [
                    3,
                    'bw',
                    [
                      1,
                      [19, [15, 'bz'], 0],
                      [
                        20,
                        [2, [15, 'bx'], 'indexOf', [7, [15, 'by'], [15, 'bz']]],
                        [15, 'bz'],
                      ],
                    ],
                  ],
                  [4],
                ],
              ],
              [5, [46]],
              [
                5,
                [
                  46,
                  [
                    3,
                    'bw',
                    [
                      19,
                      [2, ['f', [15, 'bt']], 'indexOf', [7, ['f', [15, 'bu']]]],
                      0,
                    ],
                  ],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [3, 'bw', [23, ['e', [15, 'bt']], ['e', [15, 'bu']]]],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [3, 'bw', [24, ['e', [15, 'bt']], ['e', [15, 'bu']]]],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [3, 'bw', [18, ['e', [15, 'bt']], ['e', [15, 'bu']]]],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [3, 'bw', [19, ['e', [15, 'bt']], ['e', [15, 'bu']]]],
                  [4],
                ],
              ],
              [9, [46]],
            ],
          ],
          [
            22,
            [28, [28, [16, [15, 'br'], [15, 'ba']]]],
            [46, [36, [28, [15, 'bw']]]],
          ],
          [36, [15, 'bw']],
        ],
        [
          50,
          'bo',
          [46, 'bq', 'br'],
          [22, [28, [15, 'br']], [46, [36, [44]]]],
          [
            38,
            [16, [15, 'br'], [15, 'bd']],
            [46, 'event_name', 'const', 'event_param'],
            [
              46,
              [5, [46, [36, [2, [15, 'bq'], 'getEventName', [7]]]]],
              [5, [46, [36, [16, [15, 'br'], [15, 'w']]]]],
              [
                5,
                [
                  46,
                  [52, 'bs', [16, [16, [15, 'br'], [15, 'y']], [15, 'x']]],
                  [
                    22,
                    [
                      1,
                      [16, [15, 'b'], 'enableEesPagePath'],
                      [20, [15, 'bs'], [15, 'be']],
                    ],
                    [46, [36, [2, [15, 'bq'], 'getMetadata', [7, [15, 'be']]]]],
                  ],
                  [36, [2, [15, 'bq'], 'getHitData', [7, [15, 'bs']]]],
                ],
              ],
              [9, [46, [36, [44]]]],
            ],
          ],
        ],
        [
          50,
          'bp',
          [46, 'bq', 'br'],
          [
            22,
            [
              28,
              [
                'bl',
                [15, 'bq'],
                [16, [15, 'br'], [15, 'o']],
                [30, [16, [15, 'br'], [15, 'p']], [7]],
              ],
            ],
            [46, [36, false]],
          ],
          [52, 'bs', [16, [15, 'br'], [15, 'q']]],
          [22, ['bk', [15, 'bs']], [46, [36]]],
          [52, 'bt', [28, [16, [15, 'br'], [15, 'bf']]]],
          [52, 'bu', ['d', [15, 'bq'], [15, 'bt']]],
          ['bi', [15, 'bu'], [15, 'br']],
          [52, 'bv', [30, [2, [15, 'bu'], 'getMetadata', [7, [15, 'm']]], [7]]],
          [
            22,
            [20, [2, [15, 'bv'], 'indexOf', [7, [15, 'n']]], [27, 1]],
            [46, [2, [15, 'bv'], 'push', [7, [15, 'n']]]],
          ],
          [2, [15, 'bu'], 'setMetadata', [7, [15, 'm'], [15, 'bv']]],
          [2, [15, 'bu'], 'setEventName', [7, [15, 'bs']]],
          ['g', [15, 'bu']],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          [28, [16, [15, 'b'], 'enableCcdEventEditingAndCreation']],
          [
            46,
            [
              53,
              [52, 'bq', ['require', 'internal.appendRemoteConfigParameter']],
              [
                'bq',
                [15, 'c'],
                'dynamic_event_settings.synthesis_rules',
                [17, [15, 'a'], 'precompiledRule'],
              ],
              [2, [15, 'a'], 'gtmOnSuccess', [7]],
              [36],
            ],
          ],
        ],
        [52, 'd', ['require', 'internal.copyPreHit']],
        [52, 'e', ['require', 'makeNumber']],
        [52, 'f', ['require', 'makeString']],
        [52, 'g', ['require', 'internal.processAsNewEvent']],
        [52, 'h', ['require', 'internal.registerCcdCallback']],
        [52, 'i', ['require', 'templateStorage']],
        [41, 'j'],
        [3, 'j', [2, [15, 'i'], 'getItem', [7, [15, 'c']]]],
        [41, 'k'],
        [3, 'k', [28, [28, [15, 'j']]]],
        [
          22,
          [15, 'k'],
          [
            46,
            [2, [15, 'j'], 'push', [7, [17, [15, 'a'], 'precompiledRule']]],
            [2, [15, 'a'], 'gtmOnSuccess', [7]],
            [36],
          ],
        ],
        [
          2,
          [15, 'i'],
          'setItem',
          [7, [15, 'c'], [7, [17, [15, 'a'], 'precompiledRule']]],
        ],
        [52, 'l', 'syn_or_mod'],
        [52, 'm', 'event_usage'],
        [52, 'n', 1],
        [52, 'o', 'event_name_predicate'],
        [52, 'p', 'conditions'],
        [52, 'q', 'new_event_name'],
        [52, 'r', 'event_param_ops'],
        [52, 's', 'edit_param'],
        [52, 't', 'delete_param'],
        [52, 'u', 'param_name'],
        [52, 'v', 'param_value'],
        [52, 'w', 'const_value'],
        [52, 'x', 'param_name'],
        [52, 'y', 'event_param'],
        [52, 'z', 'predicates'],
        [52, 'ba', 'negate'],
        [52, 'bb', 'type'],
        [52, 'bc', 'values'],
        [52, 'bd', 'type'],
        [52, 'be', 'page_path'],
        [52, 'bf', 'merge_source_event_params'],
        [
          52,
          'bg',
          [
            7,
            'app_remove',
            'app_store_refund',
            'app_store_subscription_cancel',
            'app_store_subscription_convert',
            'app_store_subscription_renew',
            'first_open',
            'first_visit',
            'in_app_purchase',
            'session_start',
            'user_engagement',
          ],
        ],
        [52, 'bh', [7, '_', 'ga_', 'google_', 'gtag.', 'firebase_']],
        [
          'h',
          [15, 'c'],
          [
            51,
            '',
            [7, 'bq'],
            [22, [2, [15, 'bq'], 'getMetadata', [7, [15, 'l']]], [46, [36]]],
            [52, 'br', [2, [15, 'i'], 'getItem', [7, [15, 'c']]]],
            [66, 'bs', [15, 'br'], [46, ['bp', [15, 'bq'], [15, 'bs']]]],
          ],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
    ],
    permissions: {
      __set_product_settings: { read_container_data: {} },
      __ogt_google_signals: { read_container_data: {} },
      __ccd_conversion_marking: { read_container_data: {} },
      __ogt_event_edit: { access_template_storage: {} },
      __ccd_em_download: {
        listen_data_layer: {
          accessType: 'specific',
          allowedEvents: ['gtm.linkClick'],
        },
        process_dom_events: {
          targets: [
            { targetType: 'document', eventName: 'click' },
            { targetType: 'document', eventName: 'auxclick' },
          ],
        },
        access_template_storage: {},
      },
      __ccd_ga_regscope: { read_container_data: {} },
      __ccd_em_page_view: {
        listen_data_layer: {
          accessType: 'specific',
          allowedEvents: ['gtm.historyChange-v2'],
        },
        process_dom_events: {
          targets: [
            { targetType: 'window', eventName: 'pushstate' },
            { targetType: 'window', eventName: 'popstate' },
          ],
        },
        access_template_storage: {},
      },
      __ccd_em_outbound_click: {
        get_url: { urlParts: 'any', queriesAllowed: 'any' },
        listen_data_layer: {
          accessType: 'specific',
          allowedEvents: ['gtm.linkClick'],
        },
        process_dom_events: {
          targets: [
            { targetType: 'document', eventName: 'click' },
            { targetType: 'document', eventName: 'auxclick' },
          ],
        },
        access_template_storage: {},
      },
      __ogt_event_create: { access_template_storage: {} },
    },

    security_groups: {
      google: [
        '__set_product_settings',
        '__ogt_google_signals',
        '__ccd_conversion_marking',
        '__ogt_event_edit',
        '__ccd_em_download',
        '__ccd_ga_regscope',
        '__ccd_em_page_view',
        '__ccd_em_outbound_click',
        '__ogt_event_create',
      ],
    },
  };

  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ('function' == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { a: !0 },
        ja = {};
      try {
        ja.__proto__ = ha;
        fa = ja.a;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var ka = ea,
    la = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.kl = b.prototype;
    },
    na = this || self,
    oa = function (a) {
      return a;
    };
  var pa = function (a, b) {
    this.h = a;
    this.B = b;
  };
  var qa = function (a) {
      return (
        ('number' === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ('string' === typeof a && '-' !== a[0] && a === '' + parseInt(a, 10))
      );
    },
    ra = function () {
      this.D = {};
      this.F = !1;
      this.I = {};
    },
    sa = function (a, b) {
      var c = [],
        d;
      for (d in a.D)
        if (a.D.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  ra.prototype.get = function (a) {
    return this.D['dust.' + a];
  };
  ra.prototype.set = function (a, b) {
    this.F || ((a = 'dust.' + a), this.I.hasOwnProperty(a) || (this.D[a] = b));
  };
  ra.prototype.has = function (a) {
    return this.D.hasOwnProperty('dust.' + a);
  };
  var ta = function (a, b) {
    b = 'dust.' + b;
    a.F || a.I.hasOwnProperty(b) || delete a.D[b];
  };
  ra.prototype.Mb = function () {
    this.F = !0;
  };
  ra.prototype.Me = function () {
    return this.F;
  };
  var ua = function (a) {
    this.B = new ra();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (qa(b) ? (this.h[Number(b)] = a[Number(b)]) : this.B.set(b, a[b]));
  };
  aa = ua.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return '';
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push('')
        : d instanceof ua
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(',');
  };
  aa.set = function (a, b) {
    if (!this.D)
      if ('length' === a) {
        if (!qa(b))
          throw Error('RangeError: Length property must be a valid integer.');
        this.h.length = Number(b);
      } else qa(a) ? (this.h[Number(a)] = b) : this.B.set(a, b);
  };
  aa.get = function (a) {
    return 'length' === a
      ? this.length()
      : qa(a)
      ? this.h[Number(a)]
      : this.B.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Lb = function () {
    for (var a = sa(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + '');
    return new ua(a);
  };
  var va = function (a, b) {
    qa(b) ? delete a.h[Number(b)] : ta(a.B, b);
  };
  aa = ua.prototype;
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new ua(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (qa(a) && this.h.hasOwnProperty(a)) || this.B.has(a);
  };
  aa.Mb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.B.Mb();
  };
  aa.Me = function () {
    return this.D;
  };
  var wa = function () {
    function a(f, g) {
      if (b[f]) {
        if (b[f].Be + g > b[f].max) throw Error('Quota exceeded');
        b[f].Be += g;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        nk: function (f) {
          c = f;
        },
        Nh: function () {
          c && a(c, 1);
        },
        qk: function (f) {
          d = f;
        },
        Ob: function (f) {
          d && a(d, f);
        },
        Mk: function (f, g) {
          b[f] = b[f] || { Be: 0 };
          b[f].max = g;
        },
        Lj: function (f) {
          return (b[f] && b[f].Be) || 0;
        },
        reset: function () {
          b = {};
        },
        xj: a,
      };
    e.onFnConsume = e.nk;
    e.consumeFn = e.Nh;
    e.onStorageConsume = e.qk;
    e.consumeStorage = e.Ob;
    e.setMax = e.Mk;
    e.getConsumed = e.Lj;
    e.reset = e.reset;
    e.consume = e.xj;
    return e;
  };
  var xa = function (a, b) {
    this.D = a;
    this.T = function (c, d, e) {
      return c.apply(d, e);
    };
    this.F = b;
    this.B = new ra();
    this.h = this.I = void 0;
  };
  xa.prototype.add = function (a, b) {
    ya(this, a, b, !1);
  };
  var ya = function (a, b, c, d) {
    if (!a.B.Me())
      if (
        (a.D.Ob(
          ('string' === typeof b ? b.length : 1) +
            ('string' === typeof c ? c.length : 1),
        ),
        d)
      ) {
        var e = a.B;
        e.set(b, c);
        e.I['dust.' + b] = !0;
      } else a.B.set(b, c);
  };
  xa.prototype.set = function (a, b) {
    this.B.Me() ||
      (!this.B.has(a) && this.F && this.F.has(a)
        ? this.F.set(a, b)
        : (this.D.Ob(
            ('string' === typeof a ? a.length : 1) +
              ('string' === typeof b ? b.length : 1),
          ),
          this.B.set(a, b)));
  };
  xa.prototype.get = function (a) {
    return this.B.has(a) ? this.B.get(a) : this.F ? this.F.get(a) : void 0;
  };
  xa.prototype.has = function (a) {
    return !!this.B.has(a) || !(!this.F || !this.F.has(a));
  };
  var za = function (a) {
    var b = new xa(a.D, a);
    a.I && (b.I = a.I);
    b.T = a.T;
    b.h = a.h;
    return b;
  };
  var Aa = function () {},
    Ba = function (a) {
      return 'function' === typeof a;
    },
    k = function (a) {
      return 'string' === typeof a;
    },
    Ca = function (a) {
      return 'number' === typeof a && !isNaN(a);
    },
    Da = Array.isArray,
    Ea = function (a, b) {
      if (a && Da(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ha = function (a, b) {
      if (!Ca(a) || !Ca(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ka = function (a, b) {
      for (var c = new Ja(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    La = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ma = function (a) {
      return (
        !!a &&
        ('[object Arguments]' === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, 'callee'))
      );
    },
    Na = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Oa = function (a) {
      return 'false' === String(a).toLowerCase() ? !1 : !!a;
    },
    Pa = function (a) {
      var b = [];
      if (Da(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Qa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : '';
    },
    Ra = function () {
      return new Date(Date.now());
    },
    Sa = function () {
      return Ra().getTime();
    },
    Ja = function () {
      this.prefix = 'gtm.';
      this.values = {};
    };
  Ja.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ja.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ta = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ua = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Va = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ya = function (a, b) {
      var c = m;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    ab = function (a, b) {
      for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    bb = /^\w{1,9}$/,
    cb = function (a, b) {
      a = a || {};
      b = b || ',';
      var c = [];
      La(a, function (d, e) {
        bb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    db = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var eb = function (a, b) {
    ra.call(this);
    this.T = a;
    this.Ca = b;
  };
  la(eb, ra);
  eb.prototype.toString = function () {
    return this.T;
  };
  eb.prototype.Lb = function () {
    return new ua(sa(this, 1));
  };
  eb.prototype.h = function (a, b) {
    a.D.Nh();
    return this.Ca.apply(
      new fb(this, a),
      Array.prototype.slice.call(arguments, 1),
    );
  };
  eb.prototype.B = function (a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var hb = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = gb(a, b[d])), c instanceof pa);
        d++
      );
      return c;
    },
    gb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof eb))
          throw Error('Attempting to execute non-function ' + b[0] + '.');
        return c.h.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.I;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    fb = function (a, b) {
      this.B = a;
      this.h = b;
    },
    z = function (a, b) {
      return Da(b) ? gb(a.h, b) : b;
    },
    E = function (a) {
      return a.B.T;
    };
  var ib = function () {
    ra.call(this);
  };
  la(ib, ra);
  ib.prototype.Lb = function () {
    return new ua(sa(this, 1));
  };
  var jb = {
    control: function (a, b) {
      return new pa(a, z(this, b));
    },
    fn: function (a, b, c) {
      var d = this.h,
        e = z(this, b);
      if (!(e instanceof ua))
        throw Error('Error: non-List value given for Fn argument names.');
      var f = Array.prototype.slice.call(arguments, 2);
      this.h.D.Ob(a.length + f.length);
      return new eb(
        a,
        (function () {
          return function (g) {
            var h = za(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var l = Array.prototype.slice.call(arguments, 0), n = 0;
              n < l.length;
              n++
            )
              if (((l[n] = z(this, l[n])), l[n] instanceof pa)) return l[n];
            for (var p = e.get('length'), q = 0; q < p; q++)
              q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
            h.add('arguments', new ua(l));
            var r = hb(h, f);
            if (r instanceof pa) return 'return' === r.h ? r.B : r;
          };
        })(),
      );
    },
    list: function (a) {
      var b = this.h.D;
      b.Ob(arguments.length);
      for (var c = new ua(), d = 0; d < arguments.length; d++) {
        var e = z(this, arguments[d]);
        'string' === typeof e && b.Ob(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function (a) {
      for (
        var b = this.h.D, c = new ib(), d = 0;
        d < arguments.length - 1;
        d += 2
      ) {
        var e = z(this, arguments[d]) + '',
          f = z(this, arguments[d + 1]),
          g = e.length;
        g += 'string' === typeof f ? f.length : 1;
        b.Ob(g);
        c.set(e, f);
      }
      return c;
    },
    undefined: function () {},
  };
  var kb = function () {
      this.D = wa();
      this.h = new xa(this.D);
    },
    lb = function (a, b, c) {
      var d = new eb(b, c);
      d.Mb();
      a.h.set(b, d);
    },
    mb = function (a, b, c) {
      jb.hasOwnProperty(b) && lb(a, c || b, jb[b]);
    };
  kb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.B(c);
  };
  kb.prototype.B = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = gb(this.h, arguments[c]);
    return b;
  };
  kb.prototype.F = function (a, b) {
    var c = za(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = gb(c, arguments[e]);
    return d;
  }; /*
  
   SPDX-License-Identifier: Apache-2.0
  */
  var nb,
    ob = function () {
      if (void 0 === nb) {
        var a = null,
          b = na.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy('goog#html', {
              createHTML: oa,
              createScript: oa,
              createScriptURL: oa,
            });
          } catch (c) {
            na.console && na.console.error(c.message);
          }
          nb = a;
        } else nb = a;
      }
      return nb;
    };
  var qb = function (a, b) {
    this.h = b === pb ? a : '';
  };
  qb.prototype.toString = function () {
    return this.h + '';
  };
  var rb = function (a) {
      return a instanceof qb && a.constructor === qb
        ? a.h
        : 'type_error:TrustedResourceUrl';
    },
    pb = {},
    sb = function (a) {
      var b = a,
        c = ob(),
        d = c ? c.createScriptURL(b) : b;
      return new qb(d, pb);
    };
  var tb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function ub() {
    var a = na.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return '';
  }
  function vb(a) {
    return -1 != ub().indexOf(a);
  }
  function wb() {
    return vb('Firefox') || vb('FxiOS');
  }
  function xb() {
    return ((vb('Chrome') || vb('CriOS')) && !vb('Edge')) || vb('Silk');
  }
  var yb = {},
    zb = function (a, b) {
      this.h = b === yb ? a : '';
    };
  zb.prototype.toString = function () {
    return this.h.toString();
  };
  var Ab = function (a) {
      return a instanceof zb && a.constructor === zb
        ? a.h
        : 'type_error:SafeHtml';
    },
    Bb = function (a) {
      var b = a,
        c = ob(),
        d = c ? c.createHTML(b) : b;
      return new zb(d, yb);
    };
  var Cb = {};
  var Db = function () {},
    Eb = function (a) {
      this.h = a;
    };
  la(Eb, Db);
  Eb.prototype.toString = function () {
    return this.h;
  };
  function Fb(a, b) {
    var c = [new Eb(Gb[0].toLowerCase(), Cb)];
    if (0 === c.length) throw Error('No prefixes are provided');
    var d = c.map(function (f) {
        var g;
        if (f instanceof Eb) g = f.h;
        else throw Error('');
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.',
      );
    a.setAttribute(b, 'true');
  }
  function Hb(a) {
    if ('script' === a.tagName.toLowerCase())
      throw Error('Use setTextContent with a SafeScript.');
    if ('style' === a.tagName.toLowerCase())
      throw Error('Use setTextContent with a SafeStyleSheet.');
  }
  var Ib = {},
    Jb = function (a, b) {
      Ib[a] = Ib[a] || [];
      Ib[a][b] = !0;
    },
    Kb = function () {
      delete Ib.GA4_EVENT;
    },
    Lb = function (a) {
      for (var b = [], c = Ib[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(
            b[e] || 0,
          );
      return b.join('');
    };
  var m = window,
    H = document,
    Mb = navigator,
    Nb = H.currentScript && H.currentScript.src,
    Ob = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    Pb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Qb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Rb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Sb(a, b, c) {
    b &&
      La(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Tb = function (a, b, c, d, e) {
      var f = H.createElement('script');
      Sb(f, d, Qb);
      f.type = 'text/javascript';
      f.async = !0;
      var g = sb(a);
      f.src = rb(g);
      var h,
        l,
        n,
        p =
          null ==
          (n = (l = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(l, 'script[nonce]');
      (h = p ? p.nonce || p.getAttribute('nonce') || '' : '') &&
        f.setAttribute('nonce', h);
      Pb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName('script')[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Ub = function () {
      if (Nb) {
        var a = Nb.toLowerCase();
        if (0 === a.indexOf('https://')) return 2;
        if (0 === a.indexOf('http://')) return 3;
      }
      return 1;
    },
    Vb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = H.createElement('iframe')), (h = !0));
      Sb(g, c, Rb);
      d &&
        La(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = '0'),
        (g.width = '0'),
        (g.style.display = 'none'),
        (g.style.visibility = 'hidden'));
      if (h) {
        var l = (H.body && H.body.lastChild) || H.body || H.head;
        l.parentNode.insertBefore(g, l);
      }
      Pb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Wb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    Xb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    },
    Yb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c);
    },
    I = function (a) {
      m.setTimeout(a, 0);
    },
    Zb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    $b = function (a) {
      var b = a.innerText || a.textContent || '';
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
      return b;
    },
    ac = function (a) {
      var b = H.createElement('div'),
        c = b,
        d = Bb('A<div>' + a + '</div>');
      void 0 !== c.tagName && Hb(c);
      c.innerHTML = Ab(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    bc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    cc = function (a) {
      var b;
      try {
        b = Mb.sendBeacon && Mb.sendBeacon(a);
      } catch (c) {
        Jb('TAGGING', 15);
      }
      b || Wb(a);
    },
    dc = function (a, b) {
      var c = a[b];
      c && 'string' === typeof c.animVal && (c = c.animVal);
      return c;
    },
    ec = function () {
      var a = m.performance;
      if (a && Ba(a.now)) return a.now();
    };
  var fc = function (a, b) {
      return z(this, a) && z(this, b);
    },
    gc = function (a, b) {
      return z(this, a) === z(this, b);
    },
    hc = function (a, b) {
      return z(this, a) || z(this, b);
    },
    ic = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    jc = function (a, b) {
      a = String(z(this, a));
      b = String(z(this, b));
      return a.substring(0, b.length) === b;
    },
    kc = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      switch (a) {
        case 'pageLocation':
          var c = m.location.href;
          b instanceof ib &&
            b.get('stripProtocol') &&
            (c = c.replace(/^https?:\/\//, ''));
          return c;
      }
    };
  var mc = function () {
    this.h = new kb();
    lc(this);
  };
  mc.prototype.execute = function (a) {
    return this.h.B(a);
  };
  var lc = function (a) {
    mb(a.h, 'map');
    var b = function (c, d) {
      lb(a.h, c, d);
    };
    b('and', fc);
    b('contains', ic);
    b('equals', gc);
    b('or', hc);
    b('startsWith', jc);
    b('variable', kc);
  };
  var nc = function (a) {
    if (a instanceof nc) return a;
    this.Ya = a;
  };
  nc.prototype.toString = function () {
    return String(this.Ya);
  };
  var qc = function (a) {
    ra.call(this);
    this.h = a;
    this.set('then', pc(this));
    this.set('catch', pc(this, !0));
    this.set('finally', pc(this, !1, !0));
  };
  la(qc, ib);
  var pc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new eb('', function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof eb || (d = void 0);
      e instanceof eb || (e = void 0);
      var f = za(this.h),
        g = function (l) {
          return function (n) {
            return c ? (l.h(f), a.h) : l.h(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new qc(h);
    });
  }; /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var rc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    sc = function (a) {
      if (null == a) return String(a);
      var b = rc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : 'object';
    },
    tc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    uc = function (a) {
      if (!a || 'object' != sc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !tc(a, 'constructor') &&
          !tc(a.constructor.prototype, 'isPrototypeOf')
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || tc(a, b);
    },
    J = function (a, b) {
      var c = b || ('array' == sc(a) ? [] : {}),
        d;
      for (d in a)
        if (tc(a, d)) {
          var e = a[d];
          'array' == sc(e)
            ? ('array' != sc(c[d]) && (c[d] = []), (c[d] = J(e, c[d])))
            : uc(e)
            ? (uc(c[d]) || (c[d] = {}), (c[d] = J(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var wc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, l) {
          for (var n = sa(h, 1), p = 0; p < n.length; p++)
            l[n[p]] = g(h.get(n[p]));
        },
        g = function (h) {
          var l = d.indexOf(h);
          if (-1 < l) return e[l];
          if (h instanceof ua) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Lb(), q = 0; q < p.length(); q++)
              n[p.get(q)] = g(h.get(p.get(q)));
            return n;
          }
          if (h instanceof qc) return h.h;
          if (h instanceof ib) {
            var r = {};
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          if (h instanceof eb) {
            var u = function () {
              for (
                var v = Array.prototype.slice.call(arguments, 0), w = 0;
                w < v.length;
                w++
              )
                v[w] = vc(v[w], b, c);
              var y = b ? b.D : wa(),
                x = new xa(y);
              b && (x.h = b.h);
              return g(h.h.apply(h, [x].concat(v)));
            };
            d.push(h);
            e.push(u);
            f(h, u);
            return u;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (h instanceof nc && t) return h.Ya;
          switch (typeof h) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
              return h;
            case 'object':
              if (null === h) return null;
          }
        };
      return g(a);
    },
    vc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, l) {
          for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]));
        },
        g = function (h) {
          var l = d.indexOf(h);
          if (-1 < l) return e[l];
          if (Da(h) || Ma(h)) {
            var n = new ua([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
          }
          if (uc(h)) {
            var q = new ib();
            d.push(h);
            e.push(q);
            f(h, q);
            return q;
          }
          if ('function' === typeof h) {
            var r = new eb('', function (x) {
              for (
                var A = Array.prototype.slice.call(arguments, 0), B = 0;
                B < A.length;
                B++
              )
                A[B] = wc(z(this, A[B]), b, c);
              return g((0, this.h.T)(h, h, A));
            });
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          var w = typeof h;
          if (null === h || 'string' === w || 'number' === w || 'boolean' === w)
            return h;
          var y = !1;
          switch (c) {
            case 1:
              y = !0;
              break;
            case 2:
              y = !1;
              break;
            default:
          }
          if (void 0 !== h && y) return new nc(h);
        };
      return g(a);
    };
  var xc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    yc = function (a) {
      if (void 0 === a || Da(a) || uc(a)) return !0;
      switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'function':
          return !0;
      }
      return !1;
    };
  var zc = {
    supportedMethods:
      'concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString'.split(
        ' ',
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof ua)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new ua(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new ua(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.h(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new ua(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error('TypeError: Reduce on List with no elements.');
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error('TypeError: Reduce on List with no elements.');
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error('TypeError: ReduceRight on List with no elements.');
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error('TypeError: ReduceRight on List with no elements.');
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = xc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ua(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = xc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.h(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1),
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var Ac =
      'charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim'.split(
        ' ',
      ),
    Bc = new pa('break'),
    Cc = new pa('continue'),
    Dc = function (a, b) {
      return z(this, a) + z(this, b);
    },
    Ec = function (a, b) {
      return z(this, a) && z(this, b);
    },
    Fc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      if (!(c instanceof ua))
        throw Error('Error: Non-List argument given to Apply instruction.');
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + ' of ' + a + '.');
      var d = 'number' === typeof a;
      if ('boolean' === typeof a || d) {
        if ('toString' === b) {
          if (d && c.length()) {
            var e = wc(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {}
          }
          return a.toString();
        }
        throw Error('TypeError: ' + a + '.' + b + ' is not a function.');
      }
      if ('string' === typeof a) {
        if (0 <= Ac.indexOf(b)) {
          var f = wc(c);
          return vc(a[b].apply(a, f), this.h);
        }
        throw Error('TypeError: ' + b + ' is not a function');
      }
      if (a instanceof ua) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof eb) {
            var h = xc(c);
            h.unshift(this.h);
            return g.h.apply(g, h);
          }
          throw Error('TypeError: ' + b + ' is not a function');
        }
        if (0 <= zc.supportedMethods.indexOf(b)) {
          var l = xc(c);
          l.unshift(this.h);
          return zc[b].apply(a, l);
        }
      }
      if (a instanceof eb || a instanceof ib) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof eb) {
            var p = xc(c);
            p.unshift(this.h);
            return n.h.apply(n, p);
          }
          throw Error('TypeError: ' + b + ' is not a function');
        }
        if ('toString' === b) return a instanceof eb ? a.T : a.toString();
        if ('hasOwnProperty' === b) return a.has.apply(a, xc(c));
      }
      if (a instanceof nc && 'toString' === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    Gc = function (a, b) {
      a = z(this, a);
      if ('string' !== typeof a)
        throw Error('Invalid key name given for assignment.');
      var c = this.h;
      if (!c.has(a))
        throw Error('Attempting to assign to undefined value ' + b);
      var d = z(this, b);
      c.set(a, d);
      return d;
    },
    Hc = function (a) {
      var b = za(this.h),
        c = hb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof pa) return c;
    },
    Ic = function () {
      return Bc;
    },
    Jc = function (a) {
      for (var b = z(this, a), c = 0; c < b.length; c++) {
        var d = z(this, b[c]);
        if (d instanceof pa) return d;
      }
    },
    Kc = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ('string' === typeof d) {
          var e = z(this, arguments[c + 1]);
          ya(b, d, e, !0);
        }
      }
    },
    Lc = function () {
      return Cc;
    },
    Mc = function (a, b, c) {
      var d = new ua();
      b = z(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2),
      );
      this.h.add(a, z(this, f));
    },
    Nc = function (a, b) {
      return z(this, a) / z(this, b);
    },
    Oc = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      var c = a instanceof nc,
        d = b instanceof nc;
      return c || d ? (c && d ? a.Ya == b.Ya : !1) : a == b;
    },
    Pc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]);
      return b;
    };
  function Qc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = hb(f, d);
      if (g instanceof pa) {
        if ('break' === g.h) break;
        if ('return' === g.h) return g;
      }
    }
  }
  function Rc(a, b, c) {
    if ('string' === typeof b)
      return Qc(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c,
      );
    if (b instanceof ib || b instanceof ua || b instanceof eb) {
      var d = b.Lb(),
        e = d.length();
      return Qc(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c,
      );
    }
  }
  var Sc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c,
      );
    },
    Tc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          var f = za(d);
          ya(f, a, e, !0);
          return f;
        },
        b,
        c,
      );
    },
    Uc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          var f = za(d);
          f.add(a, e);
          return f;
        },
        b,
        c,
      );
    },
    Wc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Vc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c,
      );
    },
    Xc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Vc(
        function (e) {
          var f = za(d);
          ya(f, a, e, !0);
          return f;
        },
        b,
        c,
      );
    },
    Yc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Vc(
        function (e) {
          var f = za(d);
          f.add(a, e);
          return f;
        },
        b,
        c,
      );
    };
  function Vc(a, b, c) {
    if ('string' === typeof b)
      return Qc(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c,
      );
    if (b instanceof ua)
      return Qc(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c,
      );
    throw new TypeError('The value is not iterable.');
  }
  var Zc = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var u = f.get(r);
          q.add(u, p.get(u));
        }
      }
      var f = z(this, a);
      if (!(f instanceof ua))
        throw Error(
          'TypeError: Non-List argument given to ForLet instruction.',
        );
      var g = this.h;
      d = z(this, d);
      var h = za(g);
      for (e(g, h); gb(h, b); ) {
        var l = hb(h, d);
        if (l instanceof pa) {
          if ('break' === l.h) break;
          if ('return' === l.h) return l;
        }
        var n = za(g);
        e(h, n);
        gb(n, c);
        h = n;
      }
    },
    $c = function (a) {
      a = z(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + ' is not defined.');
      return b.get(a);
    },
    ad = function (a, b) {
      var c;
      a = z(this, a);
      b = z(this, b);
      if (void 0 === a || null === a)
        throw Error('TypeError: cannot access property of ' + a + '.');
      if (a instanceof ib || a instanceof ua || a instanceof eb) c = a.get(b);
      else if ('string' === typeof a)
        'length' === b ? (c = a.length) : qa(b) && (c = a[b]);
      else if (a instanceof nc) return;
      return c;
    },
    bd = function (a, b) {
      return z(this, a) > z(this, b);
    },
    cd = function (a, b) {
      return z(this, a) >= z(this, b);
    },
    dd = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      a instanceof nc && (a = a.Ya);
      b instanceof nc && (b = b.Ya);
      return a === b;
    },
    ed = function (a, b) {
      return !dd.call(this, a, b);
    },
    fd = function (a, b, c) {
      var d = [];
      z(this, a) ? (d = z(this, b)) : c && (d = z(this, c));
      var e = hb(this.h, d);
      if (e instanceof pa) return e;
    },
    gd = function (a, b) {
      return z(this, a) < z(this, b);
    },
    hd = function (a, b) {
      return z(this, a) <= z(this, b);
    },
    id = function (a, b) {
      return z(this, a) % z(this, b);
    },
    jd = function (a, b) {
      return z(this, a) * z(this, b);
    },
    kd = function (a) {
      return -z(this, a);
    },
    ld = function (a) {
      return !z(this, a);
    },
    md = function (a, b) {
      return !Oc.call(this, a, b);
    },
    nd = function () {
      return null;
    },
    od = function (a, b) {
      return z(this, a) || z(this, b);
    },
    pd = function (a, b) {
      var c = z(this, a);
      z(this, b);
      return c;
    },
    qd = function (a) {
      return z(this, a);
    },
    rd = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    sd = function (a) {
      return new pa('return', z(this, a));
    },
    td = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + ' of ' + a + '.');
      (a instanceof eb || a instanceof ua || a instanceof ib) && a.set(b, c);
      return c;
    },
    ud = function (a, b) {
      return z(this, a) - z(this, b);
    },
    vd = function (a, b, c) {
      a = z(this, a);
      var d = z(this, b),
        e = z(this, c);
      if (!Da(d) || !Da(e)) throw Error('Error: Malformed switch instruction.');
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === z(this, d[h]))
          if (((f = z(this, e[h])), f instanceof pa)) {
            var l = f.h;
            if ('break' === l) return;
            if ('return' === l || 'continue' === l) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = z(this, e[e.length - 1])),
        f instanceof pa && ('return' === f.h || 'continue' === f.h))
      )
        return f;
    },
    wd = function (a, b, c) {
      return z(this, a) ? z(this, b) : z(this, c);
    },
    xd = function (a) {
      a = z(this, a);
      return a instanceof eb ? 'function' : typeof a;
    },
    yd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        'string' !== typeof d || b.add(d, void 0);
      }
    },
    zd = function (a, b, c, d) {
      var e = z(this, d);
      if (z(this, c)) {
        var f = hb(this.h, e);
        if (f instanceof pa) {
          if ('break' === f.h) return;
          if ('return' === f.h) return f;
        }
      }
      for (; z(this, a); ) {
        var g = hb(this.h, e);
        if (g instanceof pa) {
          if ('break' === g.h) break;
          if ('return' === g.h) return g;
        }
        z(this, b);
      }
    },
    Ad = function (a) {
      return ~Number(z(this, a));
    },
    Bd = function (a, b) {
      return Number(z(this, a)) << Number(z(this, b));
    },
    Cd = function (a, b) {
      return Number(z(this, a)) >> Number(z(this, b));
    },
    Dd = function (a, b) {
      return Number(z(this, a)) >>> Number(z(this, b));
    },
    Ed = function (a, b) {
      return Number(z(this, a)) & Number(z(this, b));
    },
    Fd = function (a, b) {
      return Number(z(this, a)) ^ Number(z(this, b));
    },
    Jd = function (a, b) {
      return Number(z(this, a)) | Number(z(this, b));
    };
  var Ld = function () {
    this.h = new kb();
    Kd(this);
  };
  Ld.prototype.execute = function (a) {
    return Md(this.h.B(a));
  };
  var Nd = function (a, b, c) {
      return Md(a.h.F(b, c));
    },
    Kd = function (a) {
      var b = function (d, e) {
        mb(a.h, d, String(e));
      };
      b('control', 49);
      b('fn', 51);
      b('list', 7);
      b('map', 8);
      b('undefined', 44);
      var c = function (d, e) {
        lb(a.h, String(d), e);
      };
      c(0, Dc);
      c(1, Ec);
      c(2, Fc);
      c(3, Gc);
      c(53, Hc);
      c(4, Ic);
      c(5, Jc);
      c(52, Kc);
      c(6, Lc);
      c(9, Jc);
      c(50, Mc);
      c(10, Nc);
      c(12, Oc);
      c(13, Pc);
      c(47, Sc);
      c(54, Tc);
      c(55, Uc);
      c(63, Zc);
      c(64, Wc);
      c(65, Xc);
      c(66, Yc);
      c(15, $c);
      c(16, ad);
      c(17, ad);
      c(18, bd);
      c(19, cd);
      c(20, dd);
      c(21, ed);
      c(22, fd);
      c(23, gd);
      c(24, hd);
      c(25, id);
      c(26, jd);
      c(27, kd);
      c(28, ld);
      c(29, md);
      c(45, nd);
      c(30, od);
      c(32, pd);
      c(33, pd);
      c(34, qd);
      c(35, qd);
      c(46, rd);
      c(36, sd);
      c(43, td);
      c(37, ud);
      c(38, vd);
      c(39, wd);
      c(40, xd);
      c(41, yd);
      c(42, zd);
      c(58, Ad);
      c(57, Bd);
      c(60, Cd);
      c(61, Dd);
      c(56, Ed);
      c(62, Fd);
      c(59, Jd);
    };
  function Md(a) {
    if (
      a instanceof pa ||
      a instanceof eb ||
      a instanceof ua ||
      a instanceof ib ||
      a instanceof nc ||
      null === a ||
      void 0 === a ||
      'string' === typeof a ||
      'number' === typeof a ||
      'boolean' === typeof a
    )
      return a;
  }
  var Od = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      vi: a('consent'),
      ug: a('convert_case_to'),
      vg: a('convert_false_to'),
      wg: a('convert_null_to'),
      xg: a('convert_true_to'),
      yg: a('convert_undefined_to'),
      Wk: a('debug_mode_metadata'),
      Kb: a('function'),
      xf: a('instance_name'),
      fj: a('live_only'),
      gj: a('malware_disabled'),
      ij: a('metadata'),
      lj: a('original_activity_id'),
      Zk: a('original_vendor_template_id'),
      Yk: a('once_on_load'),
      kj: a('once_per_event'),
      Bh: a('once_per_load'),
      al: a('priority_override'),
      bl: a('respected_consent_types'),
      Fh: a('setup_tags'),
      Gh: a('tag_id'),
      Hh: a('teardown_tags'),
    };
  })();
  var je;
  var ke = [],
    le = [],
    me = [],
    ne = [],
    oe = [],
    pe = {},
    qe,
    re,
    te = function () {
      var a = se;
      re = re || a;
    },
    ue,
    we = function (a, b) {
      var c = {};
      c['function'] = '__' + a;
      for (var d in b) b.hasOwnProperty(d) && (c['vtp_' + d] = b[d]);
      return c;
    },
    xe = function (a, b) {
      var c = a['function'],
        d = b && b.event;
      if (!c) throw Error('Error: No function name given for function call.');
      var e = pe[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf('vtp_') &&
          (e && d && d.Mh && d.Mh(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.Lh && (f.vtp_gtmCachedValues = d.Lh);
      if (b) {
        if (null == b.name) {
          var h;
          a: {
            var l = b.index;
            if (null == l) h = '';
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = ke[l];
                  break;
                case 1:
                  n = ne[l];
                  break;
                default:
                  h = '';
                  break a;
              }
              var p = n && n[Od.xf];
              h = p ? String(p) : '';
            }
          }
          b.name = h;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : je(c, f, b);
    },
    ze = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = ye(a[e], b, c));
      return d;
    },
    ye = function (a, b, c) {
      if (Da(a)) {
        var d;
        switch (a[0]) {
          case 'function_id':
            return a[1];
          case 'list':
            d = [];
            for (var e = 1; e < a.length; e++) d.push(ye(a[e], b, c));
            return d;
          case 'macro':
            var f = a[1];
            if (c[f]) return;
            var g = ke[f];
            if (!g || b.Rf(g)) return;
            c[f] = !0;
            var h = String(g[Od.xf]);
            try {
              var l = ze(g, b, c);
              l.vtp_gtmEventId = b.id;
              b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
              d = xe(l, { event: b, index: f, type: 2, name: h });
              ue && (d = ue.yj(d, l));
            } catch (x) {
              b.Yh && b.Yh(x, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case 'map':
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[ye(a[n], b, c)] = ye(a[n + 1], b, c);
            return d;
          case 'template':
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = ye(a[q], b, c);
              re && (p = p || r === re.pe);
              d.push(r);
            }
            return re && p ? re.zj(d) : d.join('');
          case 'escape':
            d = ye(a[1], b, c);
            if (re && Da(a[1]) && 'macro' === a[1][0] && re.Zj(a))
              return re.wk(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Pd[a[u]] && (d = Pd[a[u]](d));
            return d;
          case 'tag':
            var t = a[1];
            if (!ne[t])
              throw Error('Unable to resolve tag reference ' + t + '.');
            return (d = { Sh: a[2], index: t });
          case 'zb':
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v['function'] = a[1];
            var w = Ae(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error(
              'Attempting to expand unknown Value type: ' + a[0] + '.',
            );
        }
      }
      return a;
    },
    Ae = function (a, b, c) {
      try {
        return qe(ze(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Be = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    'stack' in d && (this.stack = d.stack);
    this.B = a;
    this.h = c;
  };
  la(Be, Error);
  function Ce(a, b) {
    if (Da(a)) {
      Object.defineProperty(a, 'context', { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Ce(a[c], b[c]);
    }
  }
  var De = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    'stack' in c && (this.stack = c.stack);
    this.rk = a;
    this.B = b;
    this.h = [];
  };
  la(De, Error);
  var Fe = function () {
    return function (a, b) {
      a instanceof De || (a = new De(a, Ee));
      b && a.h.push(b);
      throw a;
    };
  };
  function Ee(a) {
    if (!a.length) return a;
    a.push({ id: 'main', line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ca(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Ie = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Ge(a), f = 0; f < le.length; f++) {
        var g = le[f],
          h = He(g, e);
        if (h) {
          for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < ne.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    He = function (a, b) {
      for (var c = a['if'] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Ge = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Ae(me[c], a));
        return b[c];
      };
    };
  var Je = {
    yj: function (a, b) {
      b[Od.ug] &&
        'string' === typeof a &&
        (a = 1 == b[Od.ug] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Od.wg) && null === a && (a = b[Od.wg]);
      b.hasOwnProperty(Od.yg) && void 0 === a && (a = b[Od.yg]);
      b.hasOwnProperty(Od.xg) && !0 === a && (a = b[Od.xg]);
      b.hasOwnProperty(Od.vg) && !1 === a && (a = b[Od.vg]);
      return a;
    },
  };
  var Ke = function () {
    this.h = {};
  };
  function Le(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = 'A policy function denied the permission request';
        try {
          (f = a[e].call(void 0, b, c, d)), (g += '.');
        } catch (h) {
          g =
            'string' === typeof h
              ? g + (': ' + h)
              : h instanceof Error
              ? g + (': ' + h.message)
              : g + '.';
        }
        if (!f) throw new Be(c, d, g);
      }
  }
  function Me(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Le(e, b, d, g);
          Le(f, b, d, g);
        }
      }
    };
  }
  var Qe = function () {
      var a = data.permissions || {},
        b = Ne.R,
        c = this;
      this.B = new Ke();
      this.h = {};
      var d = {},
        e = Me(this.B, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      La(a, function (f, g) {
        var h = {};
        La(g, function (l, n) {
          var p = Oe(l, n);
          h[l] = p.assert;
          d[l] || (d[l] = p.ca);
        });
        c.h[f] = function (l, n) {
          var p = h[l];
          if (!p)
            throw Pe(
              l,
              {},
              'The requested permission ' + l + ' is not configured.',
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Se = function (a) {
      return Re.h[a] || function () {};
    };
  function Oe(a, b) {
    var c = we(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Pe;
    try {
      return xe(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Be(e, {}, 'Permission ' + e + ' is unknown.');
        },
        ca: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e['arg' + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Pe(a, b, c) {
    return new Be(a, b, c);
  }
  var Te = !1;
  var Ue = {};
  Ue.Vk = Oa('');
  Ue.Bj = Oa('');
  var Ve = Te,
    We = Ue.Bj,
    Xe = Ue.Vk;
  var Ye = function (a, b) {
    var c = String(a);
    return c;
  };
  var cf = function (a) {
      var b = {},
        c = 0;
      La(a, function (e, f) {
        if (void 0 !== f)
          if (((f = Ye(f, 100)), Ze.hasOwnProperty(e))) b[Ze[e]] = $e(f);
          else if (af.hasOwnProperty(e)) {
            var g = af[e],
              h = $e(f);
            b.hasOwnProperty(g) || (b[g] = h);
          } else if ('category' === e)
            for (var l = $e(f).split('/', 5), n = 0; n < l.length; n++) {
              var p = bf[n],
                q = l[n];
              b.hasOwnProperty(p) || (b[p] = q);
            }
          else
            10 > c && ((b['k' + c] = $e(Ye(e, 40))), (b['v' + c] = $e(f)), c++);
      });
      var d = [];
      La(b, function (e, f) {
        d.push('' + e + f);
      });
      return d.join('~');
    },
    $e = function (a) {
      return ('' + a).replace(/~/g, function () {
        return '~~';
      });
    },
    Ze = {
      item_id: 'id',
      item_name: 'nm',
      item_brand: 'br',
      item_category: 'ca',
      item_category2: 'c2',
      item_category3: 'c3',
      item_category4: 'c4',
      item_category5: 'c5',
      item_variant: 'va',
      price: 'pr',
      quantity: 'qt',
      coupon: 'cp',
      item_list_name: 'ln',
      index: 'lp',
      item_list_id: 'li',
      discount: 'ds',
      affiliation: 'af',
      promotion_id: 'pi',
      promotion_name: 'pn',
      creative_name: 'cn',
      creative_slot: 'cs',
      location_id: 'lo',
    },
    af = {
      id: 'id',
      name: 'nm',
      brand: 'br',
      variant: 'va',
      list_name: 'ln',
      list_position: 'lp',
      list: 'ln',
      position: 'lp',
      creative: 'cn',
    },
    bf = ['ca', 'c2', 'c3', 'c4', 'c5'];
  var df = function (a) {
      var b = [];
      La(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + '=' + encodeURIComponent(String(d)));
      });
      return b.join('&');
    },
    ef = function (a, b, c, d) {
      this.Ha = a.Ha;
      this.Ub = a.Ub;
      this.Lf = a.Lf;
      this.h = b;
      this.F = c;
      this.D = df(a.Ha);
      this.B = df(a.Lf);
      this.I = this.B.length;
      if (d && 16384 < this.I) throw Error('EVENT_TOO_LARGE');
    };
  var ff = function () {
    this.events = [];
    this.h = this.Ha = '';
    this.D = 0;
    this.B = !1;
  };
  ff.prototype.add = function (a) {
    return this.F(a)
      ? (this.events.push(a),
        (this.Ha = a.D),
        (this.h = a.h),
        (this.D += a.I),
        (this.B = a.F),
        !0)
      : !1;
  };
  ff.prototype.F = function (a) {
    var b = 20 > this.events.length && 16384 > a.I + this.D,
      c = this.Ha === a.D && this.h === a.h && this.B === a.F;
    return 0 == this.events.length || (b && c);
  };
  var gf = function (a, b) {
      La(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + '=' + encodeURIComponent(d));
      });
    },
    hf = function (a, b) {
      var c = [];
      a.D && c.push(a.D);
      b && c.push('_s=' + b);
      gf(a.Ub, c);
      var d = !1;
      a.B && (c.push(a.B), (d = !0));
      var e = c.join('&'),
        f = '',
        g = e.length + a.h.length + 1;
      d && 2048 < g && ((f = c.pop()), (e = c.join('&')));
      return { eg: e, body: f };
    },
    jf = function (a, b) {
      var c = a.events;
      if (1 == c.length) return hf(c[0], b);
      var d = [];
      a.Ha && d.push(a.Ha);
      for (var e = {}, f = 0; f < c.length; f++)
        La(c[f].Ub, function (u, t) {
          null != t &&
            ((e[u] = e[u] || {}), (e[u][String(t)] = e[u][String(t)] + 1 || 1));
        });
      var g = {};
      La(e, function (u, t) {
        var v,
          w = -1,
          y = 0;
        La(t, function (x, A) {
          y += A;
          var B = (x.length + u.length + 2) * (A - 1);
          B > w && ((v = x), (w = B));
        });
        y == c.length && (g[u] = v);
      });
      gf(g, d);
      b && d.push('_s=' + b);
      for (
        var h = d.join('&'), l = [], n = {}, p = 0;
        p < c.length;
        n = { Nd: n.Nd }, p++
      ) {
        var q = [];
        n.Nd = {};
        La(
          c[p].Ub,
          (function (u) {
            return function (t, v) {
              g[t] != '' + v && (u.Nd[t] = v);
            };
          })(n),
        );
        c[p].B && q.push(c[p].B);
        gf(n.Nd, q);
        l.push(q.join('&'));
      }
      var r = l.join('\r\n');
      return { eg: h, body: r };
    };
  var tf =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    uf = { Fn: 'function', DustMap: 'Object', List: 'Array' },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = tf.exec(b[d]);
        if (!e) throw Error('Internal Error in ' + a);
        var f = e[1],
          g = '!' === e[2],
          h = e[3],
          l = c[d];
        if (null == l) {
          if (g)
            throw Error(
              'Error in ' + a + '. Required argument ' + f + ' not supplied.',
            );
        } else if ('*' !== h) {
          var n = typeof l;
          l instanceof eb
            ? (n = 'Fn')
            : l instanceof ua
            ? (n = 'List')
            : l instanceof ib
            ? (n = 'DustMap')
            : l instanceof nc && (n = 'OpaqueValue');
          if (n != h)
            throw Error(
              'Error in ' +
                a +
                '. Argument ' +
                f +
                ' has type ' +
                (uf[n] || n) +
                ', which does not match required type ' +
                (uf[h] || h) +
                '.',
            );
        }
      }
    };
  function vf(a) {
    return '' + a;
  }
  function wf(a, b) {
    var c = [];
    return c;
  }
  var xf = function (a, b) {
      var c = new eb(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = z(this, d[e]);
        return b.apply(this, d);
      });
      c.Mb();
      return c;
    },
    yf = function (a, b) {
      var c = new ib(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ba(e)
            ? c.set(d, xf(a + '_' + d, e))
            : (Ca(e) || k(e) || 'boolean' === typeof e) && c.set(d, e);
        }
      c.Mb();
      return c;
    };
  var zf = function (a, b) {
    L(E(this), ['apiName:!string', 'message:?string'], arguments);
    var c = {},
      d = new ib();
    return (d = yf('AssertApiSubject', c));
  };
  var Af = function (a, b) {
    L(E(this), ['actual:?*', 'message:?string'], arguments);
    if (a instanceof qc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.",
      );
    var c = {},
      d = new ib();
    return (d = yf('AssertThatSubject', c));
  };
  function Df(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(wc(arguments[d], c));
      return vc(a.apply(null, b));
    };
  }
  var Ff = function () {
    for (var a = Math, b = Ef, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Df(a[e].bind(a)));
    }
    return c;
  };
  var Gf = function (a) {
    var b;
    return b;
  };
  var Hf = function (a) {
    var b;
    return b;
  };
  var If = function (a) {
    return encodeURI(a);
  };
  var Jf = function (a) {
    return encodeURIComponent(a);
  };
  var Kf = function (a) {
    L(E(this), ['message:?string'], arguments);
  };
  var Lf = function (a, b) {
    L(E(this), ['min:!number', 'max:!number'], arguments);
    return Ha(a, b);
  };
  var M = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error('Missing program state.');
    d.vj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Mf = function () {
    M(this, 'read_container_data');
    var a = new ib();
    a.set('containerId', 'G-1LRCTFLVBH');
    a.set('version', '1');
    a.set('environmentName', '');
    a.set('debugMode', Ve);
    a.set('previewMode', Xe);
    a.set('environmentMode', We);
    a.Mb();
    return a;
  };
  var Nf = function () {
    return new Date().getTime();
  };
  var Of = function (a) {
    if (null === a) return 'null';
    if (a instanceof ua) return 'array';
    if (a instanceof eb) return 'function';
    if (a instanceof nc) {
      a = a.Ya;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Pf = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Ve || Xe) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return vc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(wc(c));
      }),
    };
  };
  var Qf = function (a) {
    return Na(wc(a, this.h));
  };
  var Rf = function (a) {
    return Number(wc(a, this.h));
  };
  var Sf = function (a) {
    return null === a ? 'null' : void 0 === a ? 'undefined' : a.toString();
  };
  var Tf = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Ef = 'floor ceil round max min abs pow sqrt'.split(' ');
  var Uf = function () {
      var a = {};
      return {
        Nj: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Nk: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Vf = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return eb.prototype.h.apply(a, c);
      };
    },
    Wf = function (a, b) {
      L(E(this), ['apiName:!string', 'mock:?*'], arguments);
    };
  var Xf = {};
  Xf.keys = function (a) {
    return new ua();
  };
  Xf.values = function (a) {
    return new ua();
  };
  Xf.entries = function (a) {
    return new ua();
  };
  Xf.freeze = function (a) {
    return a;
  };
  Xf.delete = function (a, b) {
    return !1;
  };
  var Zf = function () {
    this.h = {};
    this.B = {};
  };
  Zf.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  Zf.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw 'Attempting to add a function which already exists: ' + a + '.';
    if (this.B.hasOwnProperty(a))
      throw (
        'Attempting to add an API with an existing private API name: ' + a + '.'
      );
    this.h[a] = c ? void 0 : Ba(b) ? xf(a, b) : yf(a, b);
  };
  function $f(a, b) {
    var c = void 0;
    return c;
  }
  function ag() {
    var a = {};
    return a;
  }
  var cg = function (a) {
      return bg ? H.querySelectorAll(a) : null;
    },
    dg = function (a, b) {
      if (!bg) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    eg = !1;
  if (H.querySelectorAll)
    try {
      var fg = H.querySelectorAll(':root');
      fg && 1 == fg.length && fg[0] == H.documentElement && (eg = !0);
    } catch (a) {}
  var bg = eg;
  var gg = [];
  gg[7] = !0;
  gg[9] = !0;
  gg[27] = !0;
  gg[5] = !0;
  gg[6] = !0;
  gg[11] = !0;
  gg[15] = !0;
  gg[18] = !0;
  gg[19] = !0;
  gg[24] = !0;

  gg[35] = !0;
  gg[36] = !0;
  gg[38] = !0;
  gg[42] = !0;
  gg[43] = !0;
  gg[44] = !0;
  hg(46, 47);
  function hg(a, b) {
    for (var c, d, e = 0; c === d; )
      if (
        ((c = Math.floor(2 * Math.random())),
        (d = Math.floor(2 * Math.random())),
        e++,
        20 < e)
      )
        return;
    c ? (gg[a] = !0) : (gg[b] = !0);
  }
  var ig = function (a) {
    return !!gg[a];
  };
  var N = function (a) {
    Jb('GTM', a);
  };
  var jg = function (a) {
      return null == a ? '' : k(a) ? Qa(String(a)) : 'e0';
    },
    lg = function (a) {
      return a.replace(kg, '');
    },
    ng = function (a) {
      return mg(a.replace(/\s/g, ''));
    },
    mg = function (a) {
      return Qa(a.replace(og, '').toLowerCase());
    },
    qg = function (a) {
      a = a.replace(/[\s-()/.]/g, '');
      '+' !== a.charAt(0) && (a = '+' + a);
      return pg.test(a) ? a : 'e0';
    },
    sg = function (a) {
      var b = a.toLowerCase().split('@');
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ''));
        c = c + '@' + b[1];
        if (rg.test(c)) return c;
      }
      return 'e0';
    },
    vg = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== tg.indexOf(c.name)
            ? ug(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        }),
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    ug = function (a) {
      if ('' === a || 'e0' === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle) {
        if (ig(14) && wg.test(a)) return Promise.resolve(a);
        try {
          var b = xg(a);
          return m.crypto.subtle
            .digest('SHA-256', b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join('');
              return m
                .btoa(d)
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
            })
            .catch(function () {
              return 'e2';
            });
        } catch (c) {
          return Promise.resolve('e2');
        }
      } else return Promise.resolve('e1');
    },
    xg = function (a) {
      var b;
      if (m.TextEncoder) b = new m.TextEncoder('utf-8').encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63),
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    og = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    rg = /^\S+@\S+\.\S+$/,
    pg = /^\+\d{10,15}$/,
    kg = /[.~]/g,
    yg = /^[0-9A-Za-z_-]{43}$/,
    wg = /^[0-9A-Fa-f]{64}$/,
    zg = {},
    Ag =
      ((zg.email = 'em'),
      (zg.phone_number = 'pn'),
      (zg.first_name = 'fn'),
      (zg.last_name = 'ln'),
      (zg.street = 'sa'),
      (zg.city = 'ct'),
      (zg.region = 'rg'),
      (zg.country = 'co'),
      (zg.postal_code = 'pc'),
      (zg.error_code = 'ec'),
      zg),
    Bg = {},
    Cg =
      ((Bg.email = 'sha256_email_address'),
      (Bg.phone_number = 'sha256_phone_number'),
      (Bg.first_name = 'sha256_first_name'),
      (Bg.last_name = 'sha256_last_name'),
      (Bg.street = 'sha256_street'),
      Bg),
    Dg = function (a, b) {
      function c(u, t, v, w) {
        var y = jg(u);
        '' !== y &&
          (ig(14) && wg.test(y)
            ? l.push({ name: t, value: y, index: w })
            : l.push({ name: t, value: v(y), index: w }));
      }
      function d(u, t) {
        var v = u;
        if (k(v) || Da(v)) {
          v = Da(u) ? u : [u];
          for (var w = 0; w < v.length; ++w) {
            var y = jg(v[w]),
              x = wg.test(y);
            t && !x && N(89);
            !t && x && N(88);
          }
        }
      }
      function e(u, t) {
        var v = u[t];
        d(v, !1);
        var w = Cg[t];
        ig(14) &&
          u.hasOwnProperty(w) &&
          (u.hasOwnProperty(t) && N(90), (v = u[w]), d(v, !0));
        return v;
      }
      function f(u, t, v) {
        var w = e(u, t);
        w = Da(w) ? w : [w];
        for (var y = 0; y < w.length; ++y) c(w[y], t, v);
      }
      function g(u, t, v, w) {
        var y = e(u, t);
        c(y, t, v, w);
      }
      function h(u) {
        return function (t) {
          N(64);
          return u(t);
        };
      }
      var l = [];
      if ('https:' === m.location.protocol) {
        f(a, 'email', sg);
        f(a, 'phone_number', qg);
        f(a, 'first_name', h(ng));
        f(a, 'last_name', h(ng));
        var n = a.home_address || {};
        f(n, 'street', h(mg));
        f(n, 'city', h(mg));
        f(n, 'postal_code', h(lg));
        f(n, 'region', h(mg));
        f(n, 'country', h(lg));
        var p = a.address || {};
        p = Da(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, 'first_name', ng, q);
          g(r, 'last_name', ng, q);
          g(r, 'street', mg, q);
          g(r, 'city', mg, q);
          g(r, 'postal_code', lg, q);
          g(r, 'region', mg, q);
          g(r, 'country', lg, q);
        }
        vg(l, b);
      } else l.push({ name: 'error_code', value: 'e3', index: void 0 }), b(l);
    },
    Eg = function (a, b) {
      Dg(a, function (c) {
        for (var d = ['tv.1'], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            l = c[f].index,
            n = Ag[g];
          n &&
            h &&
            (-1 === tg.indexOf(g) ||
              /^e\d+$/.test(h) ||
              yg.test(h) ||
              wg.test(h)) &&
            (void 0 !== l && (n += l), d.push(n + '.' + h), e++);
        }
        1 === c.length && 'error_code' === c[0].name && (e = 0);
        b(encodeURIComponent(d.join('~')), e);
      });
    },
    Fg = function (a) {
      if (m.Promise)
        try {
          return new Promise(function (b) {
            Eg(a, function (c, d) {
              b({ Ad: c, vk: d });
            });
          });
        } catch (b) {}
    },
    tg = Object.freeze([
      'email',
      'phone_number',
      'first_name',
      'last_name',
      'street',
    ]);
  var Q = {
      g: {
        J: 'ad_storage',
        aa: 'analytics_storage',
        Te: 'region',
        sg: 'consent_updated',
        Ue: 'wait_for_update',
        yi: 'app_remove',
        zi: 'app_store_refund',
        Ai: 'app_store_subscription_cancel',
        Bi: 'app_store_subscription_convert',
        Ci: 'app_store_subscription_renew',
        zg: 'add_payment_info',
        Ag: 'add_shipping_info',
        Ec: 'add_to_cart',
        Fc: 'remove_from_cart',
        Bg: 'view_cart',
        Zb: 'begin_checkout',
        Gc: 'select_item',
        Eb: 'view_item_list',
        ac: 'select_promotion',
        Fb: 'view_promotion',
        Ja: 'purchase',
        Hc: 'refund',
        Oa: 'view_item',
        Cg: 'add_to_wishlist',
        Di: 'first_open',
        Ei: 'first_visit',
        Da: 'gtag.config',
        Ka: 'gtag.get',
        Fi: 'in_app_purchase',
        Ic: 'page_view',
        Gi: 'session_start',
        We: 'user_engagement',
        bc: 'gclid',
        na: 'ads_data_redaction',
        fa: 'allow_ad_personalization_signals',
        Xe: 'allow_custom_scripts',
        Hi: 'allow_display_features',
        Jc: 'allow_enhanced_conversions',
        Kc: 'allow_google_signals',
        Ea: 'allow_interest_groups',
        Rd: 'auid',
        Ii: 'auto_detection_enabled',
        jb: 'aw_remarketing',
        Sd: 'aw_remarketing_only',
        Lc: 'discount',
        Mc: 'aw_feed_country',
        Nc: 'aw_feed_language',
        ia: 'items',
        Oc: 'aw_merchant_id',
        Dg: 'aw_basket_type',
        Td: 'campaign_content',
        Ud: 'campaign_id',
        Vd: 'campaign_medium',
        Wd: 'campaign_name',
        Pc: 'campaign',
        Xd: 'campaign_source',
        Yd: 'campaign_term',
        wb: 'client_id',
        Ji: 'content_group',
        Ki: 'content_type',
        La: 'conversion_cookie_prefix',
        Qc: 'conversion_id',
        kb: 'conversion_label',
        ya: 'conversion_linker',
        Ye: 'conversion_api',
        lb: 'cookie_domain',
        Pa: 'cookie_expires',
        nb: 'cookie_flags',
        Rc: 'cookie_name',
        Ze: 'cookie_path',
        Za: 'cookie_prefix',
        Gb: 'cookie_update',
        cc: 'country',
        va: 'currency',
        Sc: 'customer_lifetime_value',
        Tc: 'custom_map',
        Li: 'debug_mode',
        ja: 'developer_id',
        Eg: 'disable_merchant_reported_purchases',
        Mi: 'dc_custom_params',
        Ni: 'dc_natural_search',
        af: 'dynamic_event_settings',
        Oi: 'affiliation',
        Fg: 'checkout_option',
        Gg: 'checkout_step',
        Pi: 'coupon',
        Hg: 'item_list_name',
        Ig: 'list_name',
        Qi: 'promotions',
        Uc: 'shipping',
        Jg: 'tax',
        Zd: 'engagement_time_msec',
        Vc: 'enhanced_client_id',
        Wc: 'enhanced_conversions',
        Kg: 'enhanced_conversions_automatic_settings',
        Xc: 'estimated_delivery_date',
        bf: 'euid_logged_in_state',
        fc: 'event_callback',
        hc: 'event_developer_id_string',
        Lg: 'event',
        ae: 'event_settings',
        be: 'event_timeout',
        Ri: 'experiments',
        cf: 'firebase_id',
        ce: 'first_party_collection',
        de: '_x_20',
        Hb: '_x_19',
        Mg: 'fledge',
        Ng: 'flight_error_code',
        Og: 'flight_error_message',
        Pg: 'gac_gclid',
        ee: 'gac_wbraid',
        Qg: 'gac_wbraid_multiple_conversions',
        Yc: 'ga_restrict_domain',
        df: 'ga_temp_client_id',
        Rg: 'gdpr_applies',
        Sg: 'geo_granularity',
        ob: 'value_callback',
        ab: 'value_key',
        ic: 'global_developer_id_string',
        Xk: 'google_ono',
        xb: 'google_signals',
        fe: 'google_tld',
        he: 'groups',
        Tg: 'gsa_experiment_id',
        Ug: 'iframe_state',
        ie: 'ignore_referrer',
        ef: 'internal_traffic_results',
        Vg: 'is_passthrough',
        Qa: 'language',
        ff: 'legacy_developer_id_string',
        za: 'linker',
        jc: 'accept_incoming',
        kc: 'decorate_forms',
        Z: 'domains',
        Zc: 'url_position',
        Wg: 'method',
        mc: 'new_customer',
        Xg: 'non_interaction',
        Si: 'optimize_id',
        Ra: 'page_location',
        hf: 'page_path',
        Sa: 'page_referrer',
        nc: 'page_title',
        Yg: 'passengers',
        Zg: 'phone_conversion_callback',
        Ti: 'phone_conversion_country_code',
        ah: 'phone_conversion_css_class',
        Ui: 'phone_conversion_ids',
        bh: 'phone_conversion_number',
        dh: 'phone_conversion_options',
        eh: 'quantity',
        je: 'redact_device_info',
        fh: 'redact_enhanced_user_id',
        Vi: 'redact_ga_client_id',
        Wi: 'redact_user_id',
        ke: 'referral_exclusion_definition',
        yb: 'restricted_data_processing',
        Xi: 'retoken',
        gh: 'screen_name',
        Ib: 'screen_resolution',
        Yi: 'search_term',
        Fa: 'send_page_view',
        Jb: 'send_to',
        ad: 'session_duration',
        me: 'session_engaged',
        jf: 'session_engaged_time',
        zb: 'session_id',
        ne: 'session_number',
        oc: 'delivery_postal_code',
        hh: 'tc_privacy_string',
        ih: 'temporary_client_id',
        Zi: 'tracking_id',
        kf: 'traffic_type',
        Ma: 'transaction_id',
        wa: 'transport_url',
        jh: 'trip_type',
        bd: 'update',
        pb: 'url_passthrough',
        lf: '_user_agent_architecture',
        nf: '_user_agent_bitness',
        pf: '_user_agent_full_version_list',
        kh: '_user_agent_mobile',
        qf: '_user_agent_model',
        rf: '_user_agent_platform',
        sf: '_user_agent_platform_version',
        tf: '_user_agent_wow64',
        ka: 'user_data',
        lh: 'user_data_auto_latency',
        mh: 'user_data_auto_meta',
        nh: 'user_data_auto_multi',
        oh: 'user_data_auto_selectors',
        ph: 'user_data_auto_status',
        qh: 'user_data_mode',
        uf: 'user_data_settings',
        Aa: 'user_id',
        Ta: 'user_properties',
        rh: 'us_privacy_string',
        ra: 'value',
        oe: 'wbraid',
        sh: 'wbraid_multiple_conversions',
        vh: '_host_name',
        wh: '_in_page_command',
        xh: '_is_linker_valid',
        yh: '_is_passthrough_cid',
        Ah: 'non_personalized_ads',
      },
    },
    Gg = {},
    Hg = Object.freeze(
      ((Gg[Q.g.fa] = 1),
      (Gg[Q.g.Jc] = 1),
      (Gg[Q.g.Kc] = 1),
      (Gg[Q.g.ia] = 1),
      (Gg[Q.g.lb] = 1),
      (Gg[Q.g.Pa] = 1),
      (Gg[Q.g.nb] = 1),
      (Gg[Q.g.Rc] = 1),
      (Gg[Q.g.Ze] = 1),
      (Gg[Q.g.Za] = 1),
      (Gg[Q.g.Gb] = 1),
      (Gg[Q.g.Tc] = 1),
      (Gg[Q.g.ja] = 1),
      (Gg[Q.g.af] = 1),
      (Gg[Q.g.fc] = 1),
      (Gg[Q.g.ae] = 1),
      (Gg[Q.g.be] = 1),
      (Gg[Q.g.ce] = 1),
      (Gg[Q.g.Yc] = 1),
      (Gg[Q.g.xb] = 1),
      (Gg[Q.g.fe] = 1),
      (Gg[Q.g.he] = 1),
      (Gg[Q.g.ef] = 1),
      (Gg[Q.g.za] = 1),
      (Gg[Q.g.ke] = 1),
      (Gg[Q.g.yb] = 1),
      (Gg[Q.g.Fa] = 1),
      (Gg[Q.g.Jb] = 1),
      (Gg[Q.g.ad] = 1),
      (Gg[Q.g.jf] = 1),
      (Gg[Q.g.oc] = 1),
      (Gg[Q.g.wa] = 1),
      (Gg[Q.g.bd] = 1),
      (Gg[Q.g.uf] = 1),
      (Gg[Q.g.Ta] = 1),
      Gg),
    );
  Object.freeze([
    Q.g.Ra,
    Q.g.Sa,
    Q.g.nc,
    Q.g.Qa,
    Q.g.gh,
    Q.g.Aa,
    Q.g.cf,
    Q.g.Ji,
  ]);
  var Ig = {},
    Jg = Object.freeze(
      ((Ig[Q.g.yi] = 1),
      (Ig[Q.g.zi] = 1),
      (Ig[Q.g.Ai] = 1),
      (Ig[Q.g.Bi] = 1),
      (Ig[Q.g.Ci] = 1),
      (Ig[Q.g.Di] = 1),
      (Ig[Q.g.Ei] = 1),
      (Ig[Q.g.Fi] = 1),
      (Ig[Q.g.Gi] = 1),
      (Ig[Q.g.We] = 1),
      Ig),
    ),
    Kg = {},
    Lg = Object.freeze(
      ((Kg[Q.g.zg] = 1),
      (Kg[Q.g.Ag] = 1),
      (Kg[Q.g.Ec] = 1),
      (Kg[Q.g.Fc] = 1),
      (Kg[Q.g.Bg] = 1),
      (Kg[Q.g.Zb] = 1),
      (Kg[Q.g.Gc] = 1),
      (Kg[Q.g.Eb] = 1),
      (Kg[Q.g.ac] = 1),
      (Kg[Q.g.Fb] = 1),
      (Kg[Q.g.Ja] = 1),
      (Kg[Q.g.Hc] = 1),
      (Kg[Q.g.Oa] = 1),
      (Kg[Q.g.Cg] = 1),
      Kg),
    ),
    Mg = Object.freeze([Q.g.fa, Q.g.Kc, Q.g.Gb]),
    Ng = Object.freeze([].concat(Mg)),
    Og = Object.freeze([Q.g.Pa, Q.g.be, Q.g.ad, Q.g.jf, Q.g.Zd]),
    Pg = Object.freeze([].concat(Og)),
    Qg = {},
    Rg = ((Qg[Q.g.J] = '1'), (Qg[Q.g.aa] = '2'), Qg),
    Sg = {},
    Tg = Object.freeze(
      ((Sg[Q.g.fa] = 1),
      (Sg[Q.g.Jc] = 1),
      (Sg[Q.g.Ea] = 1),
      (Sg[Q.g.jb] = 1),
      (Sg[Q.g.Sd] = 1),
      (Sg[Q.g.Lc] = 1),
      (Sg[Q.g.Mc] = 1),
      (Sg[Q.g.Nc] = 1),
      (Sg[Q.g.ia] = 1),
      (Sg[Q.g.Oc] = 1),
      (Sg[Q.g.La] = 1),
      (Sg[Q.g.ya] = 1),
      (Sg[Q.g.lb] = 1),
      (Sg[Q.g.Pa] = 1),
      (Sg[Q.g.nb] = 1),
      (Sg[Q.g.Za] = 1),
      (Sg[Q.g.va] = 1),
      (Sg[Q.g.Sc] = 1),
      (Sg[Q.g.ja] = 1),
      (Sg[Q.g.Eg] = 1),
      (Sg[Q.g.Wc] = 1),
      (Sg[Q.g.Xc] = 1),
      (Sg[Q.g.cf] = 1),
      (Sg[Q.g.ce] = 1),
      (Sg[Q.g.Qa] = 1),
      (Sg[Q.g.mc] = 1),
      (Sg[Q.g.Ra] = 1),
      (Sg[Q.g.Sa] = 1),
      (Sg[Q.g.Zg] = 1),
      (Sg[Q.g.ah] = 1),
      (Sg[Q.g.bh] = 1),
      (Sg[Q.g.dh] = 1),
      (Sg[Q.g.yb] = 1),
      (Sg[Q.g.Fa] = 1),
      (Sg[Q.g.Jb] = 1),
      (Sg[Q.g.oc] = 1),
      (Sg[Q.g.Ma] = 1),
      (Sg[Q.g.wa] = 1),
      (Sg[Q.g.bd] = 1),
      (Sg[Q.g.pb] = 1),
      (Sg[Q.g.ka] = 1),
      (Sg[Q.g.Aa] = 1),
      (Sg[Q.g.ra] = 1),
      Sg),
    );
  Object.freeze(Q.g);
  var Ug = {},
    Vg = (m.google_tag_manager = m.google_tag_manager || {}),
    Wg = Math.random();
  Ug.ue = 'aa0';
  Ug.fl = Number('') || 0;
  Ug.ma = 'dataLayer';
  Ug.xi =
    'ChAI8IWPmgYQhrbEl4yFwJ9WEiUAbg4YaGFxhyoF8/saBQhisq2Vcqc4nra/cqI/9x8wB2s3kvh2GgI/rQ\x3d\x3d';
  var Xg = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Yg = { __paused: !0, __tg: !0 },
    Zg;
  for (Zg in Xg) Xg.hasOwnProperty(Zg) && (Yg[Zg] = !0);
  var $g = Oa(''),
    ah = Oa('true'),
    bh,
    ch = !1;
  ch = !0;
  bh = ch;
  var dh,
    eh = !1;
  dh = eh;
  var fh,
    gh = !1;
  fh = gh;
  var hh,
    ih = !1;
  hh = ih;
  Ug.Qd = 'www.googletagmanager.com';
  var jh = '' + Ug.Qd + (bh ? '/gtag/js' : '/gtm.js'),
    kh = null,
    lh = null,
    mh = {},
    nh = {},
    oh = function () {
      var a = Vg.sequence || 1;
      Vg.sequence = a + 1;
      return a;
    };
  Ug.wi = 'true';
  var ph = '';
  Ug.ve = ph;
  var qh = new Ja(),
    rh = {},
    sh = {},
    vh = {
      name: Ug.ma,
      set: function (a, b) {
        J(ab(a, b), rh);
        th();
      },
      get: function (a) {
        return uh(a, 2);
      },
      reset: function () {
        qh = new Ja();
        rh = {};
        th();
      },
    },
    uh = function (a, b) {
      return 2 != b ? qh.get(a) : wh(a);
    },
    wh = function (a, b) {
      var c = a.split('.');
      b = b || [];
      for (var d = rh, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    xh = function (a, b) {
      sh.hasOwnProperty(a) || (qh.set(a, b), J(ab(a, b), rh), th());
    },
    yh = function () {
      for (
        var a = [
            'gtm.allowlist',
            'gtm.blocklist',
            'gtm.whitelist',
            'gtm.blacklist',
            'tagTypeBlacklist',
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = uh(c, 1);
        if (Da(d) || uc(d)) d = J(d);
        sh[c] = d;
      }
    },
    th = function (a) {
      La(sh, function (b, c) {
        qh.set(b, c);
        J(ab(b), rh);
        J(ab(b, c), rh);
        a && delete sh[b];
      });
    },
    Gh = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? wh(a) : qh.get(a);
      'array' === sc(d) || 'object' === sc(d) ? (c = J(d)) : (c = d);
      return c;
    };
  var Hh,
    Ih = !1;
  function Jh() {
    Ih = !0;
    Hh = Hh || {};
  }
  var Kh = function (a) {
    Ih || Jh();
    return Hh[a];
  };
  var Lh = function () {
      var a = m.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Mh = function (a) {
      if (H.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
        return !0;
      var c = m.getComputedStyle(a, null);
      if ('hidden' === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ('none' === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf('opacity(');
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(')', h))),
            '%' == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = m.getComputedStyle(d, null));
      }
      return !1;
    };
  var Vh = /:[0-9]+$/,
    Wh = function (a, b, c, d) {
      for (var e = [], f = a.split('&'), g = 0; g < f.length; g++) {
        var h = f[g].split('=');
        if (decodeURIComponent(h[0]).replace(/\+/g, ' ') === b) {
          var l = h.slice(1).join('=');
          if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, ' ');
          e.push(d ? l : decodeURIComponent(l).replace(/\+/g, ' '));
        }
      }
      return c ? e : void 0;
    },
    Zh = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ('protocol' === b || 'port' === b)
        a.protocol = Xh(a.protocol) || Xh(m.location.protocol);
      'port' === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ('http' === a.protocol ? 80 : 'https' === a.protocol ? 443 : ''),
          ))
        : 'host' === b &&
          (a.hostname = (a.hostname || m.location.hostname)
            .replace(Vh, '')
            .toLowerCase());
      return Yh(a, b, c, d, e);
    },
    Yh = function (a, b, c, d, e) {
      var f,
        g = Xh(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case 'url_no_fragment':
          f = $h(a);
          break;
        case 'protocol':
          f = g;
          break;
        case 'host':
          f = a.hostname.replace(Vh, '').toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case 'port':
          f = String(
            Number(a.port) || ('http' === g ? 80 : 'https' === g ? 443 : ''),
          );
          break;
        case 'path':
          a.pathname || a.hostname || Jb('TAGGING', 1);
          f = '/' === a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
          var l = f.split('/');
          0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = '');
          f = l.join('/');
          break;
        case 'query':
          f = a.search.replace('?', '');
          e && (f = Wh(f, e, !1));
          break;
        case 'extension':
          var n = a.pathname.split('.');
          f = 1 < n.length ? n[n.length - 1] : '';
          f = f.split('/')[0];
          break;
        case 'fragment':
          f = a.hash.replace('#', '');
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Xh = function (a) {
      return a ? a.replace(':', '').toLowerCase() : '';
    },
    $h = function (a) {
      var b = '';
      if (a && a.href) {
        var c = a.href.indexOf('#');
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    ai = function (a) {
      var b = H.createElement('a');
      a && (b.href = a);
      var c = b.pathname;
      '/' !== c[0] && (a || Jb('TAGGING', 1), (c = '/' + c));
      var d = b.hostname.replace(Vh, '');
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    bi = function (a) {
      function b(n) {
        var p = n.split('=')[0];
        return 0 > d.indexOf(p) ? n : p + '=0';
      }
      function c(n) {
        return n
          .split('&')
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join('&');
      }
      var d =
          'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(
            ' ',
          ),
        e = ai(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      '?' === g[0] && (g = g.substring(1));
      '#' === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      '' !== g && (g = '?' + g);
      '' !== h && (h = '#' + h);
      var l = '' + f + g + h;
      '/' === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var ci = {};
  var ei = function (a, b, c) {
      if (a) {
        var d = a.element,
          e = { Xa: a.Xa, tagName: d.tagName, type: 1 };
        b && (e.querySelector = di(d));
        c && (e.isVisible = !Mh(d));
        return e;
      }
    },
    hi = function (a) {
      if (0 != a.length) {
        var b;
        b = fi(a, function (c) {
          return !gi.test(c.Xa);
        });
        b = fi(b, function (c) {
          return 'INPUT' === c.element.tagName.toUpperCase();
        });
        b = fi(b, function (c) {
          return !Mh(c.element);
        });
        return b[0];
      }
    },
    fi = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    di = function (a) {
      var b;
      if (a === H.body) b = 'body';
      else {
        var c;
        if (a.id) c = '#' + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = di(a.parentElement) + '>:nth-child(' + e + ')';
          } else d = '';
          c = d;
        }
        b = c;
      }
      return b;
    },
    ii = !0,
    ji = !1;
  ci.si = 'true';
  var ki = function (a) {
      if ('false' === ci.si || !ii) return !1;
      if (ji) return !0;
      var b = Kh('AW-' + a);
      return !!b && !!b.preAutoPii;
    },
    li = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    mi = /@(gmail|googlemail)\./i,
    gi = /support|noreply/i,
    ni = 'SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA'.split(' '),
    oi = ['BR'],
    pi = {},
    qi = function (a) {
      a = a || { Pb: !0, Qb: !0 };
      a.qb = a.qb || { email: !0, phone: !0, address: !0 };
      var b,
        c = a,
        d = !!c.Pb + '.' + !!c.Qb;
      c && c.md && c.md.length && (d += '.' + c.md.join('.'));
      c &&
        c.qb &&
        (d += '.' + c.qb.email + '.' + c.qb.phone + '.' + c.qb.address);
      b = d;
      var e = pi[b];
      if (e && 200 > Sa() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = H.body;
      if (h) {
        for (
          var l = h.querySelectorAll('*'), n = 0;
          n < l.length && 1e4 > n;
          n++
        ) {
          var p = l[n];
          if (
            !(0 <= ni.indexOf(p.tagName.toUpperCase())) &&
            p.children instanceof HTMLCollection
          ) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= oi.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < l.length ? '2' : '1' };
      } else f = { elements: g, status: '4' };
      var u = f,
        t = u.status,
        v = [],
        w;
      if (a.qb && a.qb.email) {
        for (var y = u.elements, x = [], A = 0; A < y.length; A++) {
          var B = y[A],
            C = B.textContent;
          'INPUT' === B.tagName.toUpperCase() && B.value && (C = B.value);
          if (C) {
            var F = C.match(li);
            if (F) {
              var G = F[0],
                D;
              if (m.location) {
                var K = Yh(m.location, 'host', !0);
                D = 0 <= G.toLowerCase().indexOf(K);
              } else D = !1;
              D || x.push({ element: B, Xa: G });
            }
          }
        }
        var P = a && a.md;
        if (P && 0 !== P.length) {
          for (var Z = [], ma = 0; ma < x.length; ma++) {
            for (var Y = !0, O = 0; O < P.length; O++) {
              var ia = P[O];
              if (ia && dg(x[ma].element, ia)) {
                Y = !1;
                break;
              }
            }
            Y && Z.push(x[ma]);
          }
          v = Z;
        } else v = x;
        w = hi(v);
        10 < x.length && (t = '3');
      }
      var U = [];
      !a.mg && w && (v = [w]);
      for (var T = 0; T < v.length; T++) U.push(ei(v[T], a.Pb, a.Qb));
      var Ga = { elements: U.slice(0, 10), Ne: ei(w, a.Pb, a.Qb), status: t };
      pi[b] = { timestamp: Sa(), result: Ga };
      return Ga;
    },
    ri = function (a) {
      return (
        a.tagName + ':' + a.isVisible + ':' + a.Xa.length + ':' + mi.test(a.Xa)
      );
    };
  var si = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ('js_variable' === d) {
        e = e.replace(/\["?'?/g, '.').replace(/"?'?\]/g, '');
        for (var g = e.split(','), h = 0; h < g.length; h++) {
          var l = g[h].trim();
          if (l) {
            if (0 === l.indexOf('dataLayer.')) f = uh(l.substring(10));
            else {
              var n = l.split('.');
              f = m[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ('css_selector' === d && bg) {
        var q = cg(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ('email' === b || 'phone_number' === b ? 5 : 1);
            r++
          )
            f.push($b(q[r]) || Qa(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    ti = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = si(b, 'email', a.email) || c;
        c = si(b, 'phone_number', a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = si(f, 'first_name', d[e].first_name) || c;
          c = si(f, 'last_name', d[e].last_name) || c;
          c = si(f, 'street', d[e].street) || c;
          c = si(f, 'city', d[e].city) || c;
          c = si(f, 'region', d[e].region) || c;
          c = si(f, 'country', d[e].country) || c;
          c = si(f, 'postal_code', d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    ui = function (a) {
      return a.D[Q.g.uf];
    },
    vi = function (a) {
      if (!uc(a)) return !1;
      var b = a.mode;
      return (
        'auto_detect' === b ||
        'selectors' === b ||
        'code' === b ||
        !!a.enable_code
      );
    },
    wi = function (a) {
      if (a) {
        if ('selectors' === a.mode || uc(a.selectors)) return ti(a.selectors);
        if ('auto_detect' === a.mode || uc(a.auto_detect)) {
          var b;
          var c = a.auto_detect;
          if (c) {
            var d = qi({
                Pb: !1,
                Qb: !1,
                md: c.exclude_element_selectors,
                qb: {
                  email: !!c.email,
                  phone: !!c.phone,
                  address: !!c.address,
                },
              }).elements,
              e = {};
            if (0 < d.length)
              for (var f = 0; f < d.length; f++) {
                var g = d[f];
                if (1 === g.type) {
                  e.email = g.Xa;
                  break;
                }
              }
            b = e;
          } else b = void 0;
          return b;
        }
      }
    };
  var Ei = {},
    Fi = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
        return m._gtmexpgrp[a];
      void 0 === Ei[a] && (Ei[a] = Math.floor(Math.random() * b));
      return Ei[a];
    };
  var Hi = { Gf: 'TW', ei: 'TW-TNN' };
  var Ii = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Ji = function (a) {
    Ji[' '](a);
    return a;
  };
  Ji[' '] = function () {};
  var Li = function () {
    var a = Ki,
      b = 'Pf';
    if (a.Pf && a.hasOwnProperty(b)) return a.Pf;
    var c = new a();
    return (a.Pf = c);
  };
  var Ki = function () {
    var a = {};
    this.h = function () {
      var b = Ii.h,
        c = Ii.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[Ii.h] = !0;
    };
  };
  var Mi = [];
  function Ni() {
    var a = Ob('google_tag_data', {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Oi,
        update: Pi,
        addListener: Qi,
        notifyListeners: Ri,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Oi(a, b, c, d, e, f) {
    var g = Ni();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        l = h[a] || {},
        n = l.region,
        p = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = {
            region: p,
            initial: 'granted' === b,
            update: l.update,
            quiet: q,
          };
        if ('' !== d || !1 !== l.initial) h[a] = r;
        q &&
          m.setTimeout(function () {
            h[a] === r &&
              r.quiet &&
              ((r.quiet = !1), Si(a), Ri(), Jb('TAGGING', 2));
          }, f);
      }
    }
  }
  function Pi(a, b) {
    var c = Ni();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Ti(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = 'granted' === b;
      var g = Ti(c, a);
      f.quiet ? ((f.quiet = !1), Si(a)) : g !== d && Si(a);
    }
  }
  function Qi(a, b) {
    Mi.push({ Ef: a, Gj: b });
  }
  function Si(a) {
    for (var b = 0; b < Mi.length; ++b) {
      var c = Mi[b];
      Da(c.Ef) && -1 !== c.Ef.indexOf(a) && (c.bi = !0);
    }
  }
  function Ri(a, b) {
    for (var c = 0; c < Mi.length; ++c) {
      var d = Mi[c];
      if (d.bi) {
        d.bi = !1;
        try {
          d.Gj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Ti(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Ui = function (a) {
      var b = Ni();
      b.accessedAny = !0;
      return Ti(b, a);
    },
    Vi = function (a) {
      var b = Ni();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Wi = function (a) {
      var b = Ni();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Xi = function () {
      if (!Li().h()) return !1;
      var a = Ni();
      a.accessedAny = !0;
      return a.active;
    },
    Yi = function () {
      var a = Ni();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Zi = function (a, b) {
      Ni().addListener(a, b);
    },
    $i = function (a, b) {
      Ni().notifyListeners(a, b);
    },
    aj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Wi(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Zi(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    bj = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === Ui(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = k(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Zi(d, function (f) {
          var g = c();
          0 < g.length && ((f.Ef = g), a(f));
        });
    };
  function cj() {}
  function dj() {}
  function ej(a) {
    for (var b = [], c = 0; c < fj.length; c++) {
      var d = a(fj[c]);
      b[c] = !0 === d ? '1' : !1 === d ? '0' : '-';
    }
    return b.join('');
  }
  var fj = [Q.g.J, Q.g.aa],
    gj = function (a) {
      var b = a[Q.g.Te];
      b && N(40);
      var c = a[Q.g.Ue];
      c && N(41);
      for (
        var d = Da(b) ? b : [b], e = { Ac: 0 };
        e.Ac < d.length;
        e = { Ac: e.Ac }, ++e.Ac
      )
        La(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== Q.g.Te && g !== Q.g.Ue) {
                var l = d[f.Ac],
                  n = Hi.Gf,
                  p = Hi.ei;
                Ni().set(g, h, l, n, p, c);
              }
            };
          })(e),
        );
    },
    hj = 0,
    ij = function (a, b) {
      La(a, function (e, f) {
        Ni().update(e, f);
      });
      $i(b.eventId, b.priorityId);
      var c = Sa(),
        d = c - hj;
      hj && 0 <= d && 1e3 > d && N(66);
      hj = c;
    },
    jj = function (a) {
      var b = Ui(a);
      return void 0 != b ? b : !0;
    },
    kj = function () {
      return 'G1' + ej(Ui);
    },
    lj = function (a, b) {
      Zi(a, b);
    },
    mj = function (a, b) {
      bj(a, b);
    },
    nj = function (a, b) {
      aj(a, b);
    };
  var oj = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var pj = function (a, b, c) {
    for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
      var g = e[f].split('='),
        h = g[0].replace(/^\s*|\s*$/g, '');
      if (h && h == a) {
        var l = g
          .slice(1)
          .join('=')
          .replace(/^\s*|\s*$/g, '');
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  };
  var qj = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    rj = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function sj(a) {
    return 'null' !== a.origin;
  }
  var vj = function (a, b, c, d) {
      return tj(d) ? pj(a, String(b || uj()), c) : [];
    },
    yj = function (a, b, c, d, e) {
      if (tj(e)) {
        var f = wj(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = xj(
            f,
            function (g) {
              return g.De;
            },
            b,
          );
          if (1 === f.length) return f[0].id;
          f = xj(
            f,
            function (g) {
              return g.Bd;
            },
            c,
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function zj(a, b, c, d) {
    var e = uj(),
      f = window;
    sj(f) && (f.document.cookie = a);
    var g = uj();
    return e != g || (void 0 != c && 0 <= vj(b, g, !1, d).indexOf(c));
  }
  var Dj = function (a, b, c, d) {
      function e(w, y, x) {
        if (null == x) return delete h[y], w;
        h[y] = x;
        return w + '; ' + y + '=' + x;
      }
      function f(w, y) {
        if (null == y) return delete h[y], w;
        h[y] = !0;
        return w + '; ' + y;
      }
      if (!tj(c.Cb)) return 2;
      var g;
      void 0 == b
        ? (g = a + '=deleted; expires=' + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Aj(b)),
          (g = a + '=' + b));
      var h = {};
      g = e(g, 'path', c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = '' + c.expires);
      g = e(g, 'expires', l);
      g = e(g, 'max-age', c.kk);
      g = e(g, 'samesite', c.Fk);
      c.Hk && (g = f(g, 'secure'));
      var n = c.domain;
      if (n && 'auto' === n.toLowerCase()) {
        for (var p = Bj(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
          var t = 'none' !== p[u] ? p[u] : void 0,
            v = e(g, 'domain', t);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Cj(t, c.path) && zj(v, a, b, c.Cb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && 'none' !== n.toLowerCase() && (g = e(g, 'domain', n));
      g = f(g, c.flags);
      d && d(a, h);
      return Cj(n, c.path) ? 1 : zj(g, a, b, c.Cb) ? 0 : 1;
    },
    Ej = function (a, b, c) {
      null == c.path && (c.path = '/');
      c.domain || (c.domain = 'auto');
      return Dj(a, b, c);
    };
  function xj(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        l = b(h);
      l === c
        ? d.push(h)
        : void 0 === f || l < f
        ? ((e = [h]), (f = l))
        : l === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function wj(a, b, c) {
    for (var d = [], e = vj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split('.'),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var l = g.shift();
        l &&
          ((l = l.split('-')),
          d.push({ id: g.join('.'), De: 1 * l[0] || 1, Bd: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var Aj = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Fj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Gj = /(^|\.)doubleclick\.net$/i,
    Cj = function (a, b) {
      return (
        Gj.test(window.document.location.hostname) || ('/' === b && Fj.test(a))
      );
    },
    uj = function () {
      return sj(window) ? window.document.cookie : '';
    },
    Bj = function () {
      var a = [],
        b = window.document.location.hostname.split('.');
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ['none'];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'));
      var e = window.document.location.hostname;
      Gj.test(e) || Fj.test(e) || a.push('none');
      return a;
    },
    tj = function (a) {
      if (!Li().h() || !a || !Xi()) return !0;
      if (!Wi(a)) return !1;
      var b = Ui(a);
      return null == b ? !0 : !!b;
    };
  var Hj = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (oj(a) & 2147483647)) : String(b);
    },
    Ij = function (a) {
      return [Hj(a), Math.round(Sa() / 1e3)].join('.');
    },
    Lj = function (a, b, c, d, e) {
      var f = Jj(b);
      return yj(a, f, Kj(c), d, e);
    },
    Mj = function (a, b, c, d) {
      var e = '' + Jj(c),
        f = Kj(d);
      1 < f && (e += '-' + f);
      return [b, e, a].join('.');
    },
    Jj = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf('.') ? a.substr(1) : a;
      return a.split('.').length;
    },
    Kj = function (a) {
      if (!a || '/' === a) return 1;
      '/' !== a[0] && (a = '/' + a);
      '/' !== a[a.length - 1] && (a += '/');
      return a.split('/').length - 1;
    };
  var Nj = function () {
    Vg.dedupe_gclid || (Vg.dedupe_gclid = '' + Ij());
    return Vg.dedupe_gclid;
  };
  var Oj = function () {
    var a = !1;
    return a;
  };
  var Ne = { R: 'G-1LRCTFLVBH', Yb: '94797295' },
    Pj = { Zh: 'G-1LRCTFLVBH|GT-M3SS82X', ai: 'G-1LRCTFLVBH' };
  Ne.zh = Oa('');
  var Qj = function () {
      return Pj.Zh ? Pj.Zh.split('|') : [Ne.R];
    },
    Rj = function () {
      if (Pj.ai) return Pj.ai.split('|');
      N(84);
      return [];
    },
    Sj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Uj = function () {
      for (var a = Tj(), b = Qj(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || Ca(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2);
      }
      for (var e = Rj(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && N(93);
        g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 });
      }
      a.canonical[Ne.Yb] = 2;
    },
    Vj = function (a) {
      return !!Tj().container[a];
    },
    Wj = function () {
      var a = Tj().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (Ca(c)) {
            if (1 === c) return !0;
          } else if (1 === c.state) return !0;
        }
      return !1;
    },
    Xj = function () {
      var a = {};
      La(Tj().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function Tj() {
    var a = Vg.tidr;
    a || ((a = new Sj()), (Vg.tidr = a));
    return a;
  }
  var Yj = {
      '': 'n',
      UA: 'u',
      AW: 'a',
      DC: 'd',
      G: 'e',
      GF: 'f',
      GT: 't',
      HA: 'h',
      MC: 'm',
      GTM: 'g',
      OPT: 'o',
    },
    Zj = function (a) {
      var b = Ne.R.split('-'),
        c = b[0].toUpperCase(),
        d = Yj[c] || 'i',
        e = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
        f = 'w';
      bh && (f = Oj() ? 's' : 'o');
      dh
        ? ('w' === f && (f = 'x'), 'o' === f && (f = 'q'))
        : fh
        ? ('w' === f && (f = 'y'), 'o' === f && (f = 'r'))
        : hh && (f = 'z');
      return '2' + f + d + (4 === Ug.ue.length ? Ug.ue.slice(1) : Ug.ue) + e;
    };
  function ak(a, b) {
    if ('' === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var bk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, 'message', b, !1);
  };
  function ck() {
    return vb('iPhone') && !vb('iPod') && !vb('iPad');
  }
  function dk() {
    ck() || vb('iPad') || vb('iPod');
  }
  vb('Opera');
  vb('Trident') || vb('MSIE');
  vb('Edge');
  !vb('Gecko') ||
    (-1 != ub().toLowerCase().indexOf('webkit') && !vb('Edge')) ||
    vb('Trident') ||
    vb('MSIE') ||
    vb('Edge');
  -1 != ub().toLowerCase().indexOf('webkit') && !vb('Edge') && vb('Mobile');
  vb('Macintosh');
  vb('Windows');
  vb('Linux') || vb('CrOS');
  var ek = na.navigator || null;
  ek && (ek.appVersion || '').indexOf('X11');
  vb('Android');
  ck();
  vb('iPad');
  vb('iPod');
  dk();
  ub().toLowerCase().indexOf('kaios');
  var fk = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    gk = /#|$/,
    hk = function (a, b) {
      var c = a.search(gk),
        d = fk(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf('&', d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' '),
      );
    },
    ik = /[?&]($|#)/,
    jk = function (a, b, c) {
      for (
        var d, e = a.search(gk), f = 0, g, h = [];
        0 <= (g = fk(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf('&', g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join('').replace(ik, '$1');
      var l,
        n = null != c ? '=' + encodeURIComponent(String(c)) : '';
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf('#');
        0 > r && (r = d.length);
        var u = d.indexOf('?'),
          t;
        0 > u || u > r ? ((u = r), (t = '')) : (t = d.substring(u + 1, r));
        q = [d.slice(0, u), t, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + '&' + p : p) : v;
        l = q[0] + (q[1] ? '?' + q[1] : '') + q[2];
      } else l = d;
      return l;
    };
  function kk(a) {
    if (!a || !H.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement('meta');
    H.head.appendChild(b);
    b.httpEquiv = 'origin-trial';
    b.content = a;
    return b;
  }
  var lk = function () {
    if (m.top == m) return 0;
    var a = m.location.ancestorOrigins;
    if (a) return a[a.length - 1] == m.location.origin ? 1 : 2;
    var b;
    var c = m.top;
    try {
      var d;
      if ((d = !!c && null != c.location.href))
        b: {
          try {
            Ji(c.foo);
            d = !0;
            break b;
          } catch (e) {}
          d = !1;
        }
      b = d;
    } catch (e) {
      b = !1;
    }
    return b ? 1 : 2;
  };
  var mk = function () {};
  var nk = function (a) {
      void 0 !== a.addtlConsent &&
        'string' !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        'boolean' !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
        (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && 'error' !== a.cmpStatus
        ? 0
        : 3;
    },
    ok = function (a, b, c) {
      this.B = a;
      this.h = null;
      this.I = {};
      this.Ca = 0;
      this.T = void 0 === b ? 500 : b;
      this.F = void 0 === c ? !1 : c;
      this.D = null;
    };
  la(ok, mk);
  ok.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.F },
      d = rj(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = 'tcunavailable';
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = nk(c)),
          (c.internalBlockOnErrors = b.F),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = 'tcunavailable'), h || (c.internalErrorState = 3)))
        : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
      a(c);
    };
    try {
      pk(this, 'addEventListener', f);
    } catch (g) {
      (c.tcString = 'tcunavailable'),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  ok.prototype.removeEventListener = function (a) {
    a && a.listenerId && pk(this, 'removeEventListener', null, a.listenerId);
  };
  var rk = function (a, b, c) {
      var d;
      d = void 0 === d ? '755' : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? '755' : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var l;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = qk(a.vendor.consents, void 0 === d ? '755' : d);
          l =
            n && '1' === b && a.purposeOneTreatment && 'CH' === a.publisherCC
              ? !0
              : n && qk(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === h
            ? a.purpose && a.vendor
              ? qk(a.purpose.legitimateInterests, b) &&
                qk(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
              : !0
            : !0;
      return l;
    },
    qk = function (a, b) {
      return !(!a || !a[b]);
    },
    pk = function (a, b, c, d) {
      c || (c = function () {});
      if ('function' === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (sk(a)) {
        tk(a);
        var f = ++a.Ca;
        a.I[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            '*',
          );
        }
      } else c({}, !1);
    },
    sk = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.B, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    tk = function (a) {
      a.D ||
        ((a.D = function (b) {
          try {
            var c;
            c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.I[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        bk(a.B, a.D));
    };
  var uk = !0;
  uk = !1;
  var vk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    wk = ak('', 550),
    xk = ak('', 500);
  function yk() {
    var a = Vg.tcf || {};
    return (Vg.tcf = a);
  }
  var Dk = function () {
    var a = yk(),
      b = new ok(m, uk ? 3e3 : -1);
    if (
      !0 === m.gtag_enable_tcf_support &&
      !a.active &&
      ('function' === typeof m.__tcfapi ||
        'function' === typeof b.B.__tcfapi ||
        null != sk(b))
    ) {
      a.active = !0;
      a.Ed = {};
      zk();
      var c = null;
      uk
        ? (c = m.setTimeout(function () {
            Ak(a);
            Bk(a);
            c = null;
          }, xk))
        : (a.tcString = 'tcunavailable');
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Ak(a), Bk(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Ck()), b.removeEventListener(d);
            else if (
              'tcloaded' === d.eventStatus ||
              'useractioncomplete' === d.eventStatus ||
              'cmpuishown' === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in vk)
                if (vk.hasOwnProperty(g))
                  if ('1' === g) {
                    var h = d,
                      l = !0;
                    l = void 0 === l ? !1 : l;
                    var n;
                    var p = h;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = nk(p)),
                        (n =
                          'error' === p.cmpStatus || 0 !== p.internalErrorState
                            ? !p.internalBlockOnErrors
                            : 'loaded' !== p.cmpStatus ||
                              ('tcloaded' !== p.eventStatus &&
                                'useractioncomplete' !== p.eventStatus)
                            ? !1
                            : !0));
                    f['1'] = n
                      ? !1 === h.gdprApplies ||
                        'tcunavailable' === h.tcString ||
                        (void 0 === h.gdprApplies && !l) ||
                        'string' !== typeof h.tcString ||
                        !h.tcString.length
                        ? !0
                        : rk(h, '1', 0)
                      : !1;
                  } else f[g] = rk(d, g, vk[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || 'tcempty'), (a.Ed = e), Bk(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Ak(a), Bk(a);
      }
    }
  };
  function Ak(a) {
    a.type = 'e';
    a.tcString = 'tcunavailable';
    uk && (a.Ed = Ck());
  }
  function zk() {
    var a = {},
      b = ((a.ad_storage = 'denied'), (a.wait_for_update = wk), a);
    gj(b);
  }
  function Ck() {
    var a = {},
      b;
    for (b in vk) vk.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Bk(a) {
    var b = {},
      c = ((b.ad_storage = a.Ed['1'] ? 'granted' : 'denied'), b);
    ij(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Ek() },
    );
  }
  var Ek = function () {
      var a = yk();
      return a.active ? a.tcString || '' : '';
    },
    Fk = function () {
      var a = yk();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? '1'
          : '0'
        : '';
    },
    Gk = function (a) {
      if (!vk.hasOwnProperty(String(a))) return !0;
      var b = yk();
      return b.active && b.Ed ? !!b.Ed[String(a)] : !0;
    };
  function Hk(a, b, c, d) {
    var e,
      f = Number(null != a.fb ? a.fb : void 0);
    0 !== f && (e = new Date((b || Sa()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Cb: d,
    };
  }
  var Ik = ['1'],
    Jk = {},
    Kk = {},
    Mk = function (a) {
      return Jk[Lk(a)];
    },
    Pk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Lk(a.prefix);
      if (!Jk[c] && !Nk(c, a.path, a.domain) && b) {
        var d = Lk(a.prefix),
          e = Ij();
        if (0 === Ok(d, e, a)) {
          var f = Ob('google_tag_data', {});
          f._gcl_au ? Jb('GTM', 57) : (f._gcl_au = e);
        }
        Nk(c, a.path, a.domain);
      }
    };
  function Ok(a, b, c, d) {
    var e = Mj(b, '1', c.domain, c.path),
      f = Hk(c, d);
    f.Cb = 'ad_storage';
    return Ej(a, e, f);
  }
  function Nk(a, b, c) {
    var d = Lj(a, b, c, Ik, 'ad_storage');
    if (!d) return !1;
    var e = d.split('.');
    5 === e.length
      ? ((Jk[a] = e.slice(0, 2).join('.')),
        (Kk[a] = { id: e.slice(2, 4).join('.'), Xh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (Kk[a] = { id: e.slice(0, 2).join('.'), Xh: Number(e[2]) || 0 })
      : (Jk[a] = d);
    return !0;
  }
  function Lk(a) {
    return (a || '_gcl') + '_au';
  }
  function Qk() {
    for (var a = Rk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Sk() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a += a.toLowerCase() + '0123456789-_';
    return a + '.';
  }
  var Rk, Tk;
  function Uk(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Tk[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error('Unknown base64 encoding at char: ' + n);
      }
      return l;
    }
    Rk = Rk || Sk();
    Tk = Tk || Qk();
    for (var c = '', d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var Vk;
  var Zk = function () {
      var a = Wk,
        b = Xk,
        c = Yk(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Xb(H, 'mousedown', d);
        Xb(H, 'keyup', d);
        Xb(H, 'submit', e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    $k = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Yk().decorators.push(f);
    },
    al = function (a, b, c) {
      for (var d = Yk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var l = g.domains,
              n = a,
              p = !!g.sameHost;
            if (l && (p || n !== H.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Va(e, g.callback());
        }
      }
      return e;
    };
  function Yk() {
    var a = Ob('google_tag_data', {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var bl = /(.*?)\*(.*?)\*(.*)/,
    cl = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    dl = /^(?:www\.|m\.|amp\.)+/,
    el = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function fl(a) {
    return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)');
  }
  var wl = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          '[object Object]' !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            h = String(d);
          Rk = Rk || Sk();
          Tk = Tk || Qk();
          for (var l = [], n = 0; n < h.length; n += 3) {
            var p = n + 1 < h.length,
              q = n + 2 < h.length,
              r = h.charCodeAt(n),
              u = p ? h.charCodeAt(n + 1) : 0,
              t = q ? h.charCodeAt(n + 2) : 0,
              v = r >> 2,
              w = ((r & 3) << 4) | (u >> 4),
              y = ((u & 15) << 2) | (t >> 6),
              x = t & 63;
            q || ((x = 64), p || (y = 64));
            l.push(Rk[v], Rk[w], Rk[y], Rk[x]);
          }
          g = l.join('');
          f.call(e, g);
        }
      }
    var A = b.join('*');
    return ['1', vl(A), A].join('*');
  };
  function vl(a, b) {
    var c = [
        m.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Mb.userLanguage || Mb.language,
        Math.floor(Sa() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join('*'),
      d;
    if (!(d = Vk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Vk = d;
    for (var l = 4294967295, n = 0; n < c.length; n++)
      l = (l >>> 8) ^ Vk[(l ^ c.charCodeAt(n)) & 255];
    return ((l ^ -1) >>> 0).toString(36);
  }
  function xl() {
    return function (a) {
      var b = ai(m.location.href),
        c = b.search.replace('?', ''),
        d = Wh(c, '_gl', !1, !0) || '';
      a.query = yl(d) || {};
      var e = Zh(b, 'fragment').match(fl('_gl'));
      a.fragment = yl((e && e[3]) || '') || {};
    };
  }
  function zl(a, b) {
    var c = fl(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Al = function (a, b) {
      b || (b = '_gl');
      var c = el.exec(a);
      if (!c) return '';
      var d = c[1],
        e = zl(b, (c[2] || '').slice(1)),
        f = zl(b, (c[3] || '').slice(1));
      e.length && (e = '?' + e);
      f.length && (f = '#' + f);
      return '' + d + e + f;
    },
    Bl = function (a) {
      var b = xl(),
        c = Yk();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Va(d, e.query), a && Va(d, e.fragment));
      return d;
    },
    yl = function (a) {
      try {
        var b = Cl(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split('*') : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Uk(d[e + 1]);
            c[f] = g;
          }
          Jb('TAGGING', 6);
          return c;
        }
      } catch (h) {
        Jb('TAGGING', 8);
      }
    };
  function Cl(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = bl.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && '1' === g[1]) {
        var h = g[3],
          l;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === vl(h, p)) {
              l = !0;
              break a;
            }
          l = !1;
        }
        if (l) return h;
        Jb('TAGGING', 7);
      }
    }
  }
  function Dl(a, b, c, d) {
    function e(p) {
      p = zl(a, p);
      var q = p.charAt(p.length - 1);
      p && '&' !== q && (p += '&');
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = el.exec(c);
    if (!f) return '';
    var g = f[1],
      h = f[2] || '',
      l = f[3] || '',
      n = a + '=' + b;
    d ? (l = '#' + e(l.substring(1))) : (h = '?' + e(h.substring(1)));
    return '' + g + h + l;
  }
  function El(a, b) {
    var c = 'FORM' === (a.tagName || '').toUpperCase(),
      d = al(b, 1, c),
      e = al(b, 2, c),
      f = al(b, 3, c);
    if (Wa(d)) {
      var g = wl(d);
      c ? Fl('_gl', g, a) : Gl('_gl', g, a, !1);
    }
    if (!c && Wa(e)) {
      var h = wl(e);
      Gl('_gl', h, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ('a' === q.tagName.toLowerCase()) {
              Gl(n, p, q);
              break a;
            }
            if ('form' === q.tagName.toLowerCase()) {
              Fl(n, p, q);
              break a;
            }
          }
          'string' == typeof q && Dl(n, p, q);
        }
  }
  function Gl(a, b, c, d) {
    if (c.href) {
      var e = Dl(a, b, c.href, void 0 === d ? !1 : d);
      tb.test(e) && (c.href = e);
    }
  }
  function Fl(a, b, c) {
    if (c && c.action) {
      var d = (c.method || '').toLowerCase();
      if ('get' === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute('value', b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = H.createElement('input');
          l.setAttribute('type', 'hidden');
          l.setAttribute('name', a);
          l.setAttribute('value', b);
          c.appendChild(l);
        }
      } else if ('post' === d) {
        var n = Dl(a, b, c.action);
        tb.test(n) && (c.action = n);
      }
    }
  }
  function Wk(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ('http:' !== f && 'https:' !== f) || El(e, e.hostname);
      }
    } catch (g) {}
  }
  function Xk(a) {
    try {
      if (a.action) {
        var b = Zh(ai(a.action), 'host');
        El(a, b);
      }
    } catch (c) {}
  }
  var Hl = function (a, b, c, d) {
      Zk();
      $k(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
    },
    Il = function (a, b) {
      Zk();
      $k(a, [Yh(m.location, 'host', !0)], b, !0, !0);
    },
    Jl = function () {
      var a = H.location.hostname,
        b = cl.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = '';
      if (c) {
        var f = c.split('/'),
          g = f[1];
        e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf('xn--')) return !1;
        e = d.replace(/-/g, '.').replace(/\.\./g, '-');
      }
      var h = a.replace(dl, ''),
        l = e.replace(dl, ''),
        n;
      if (!(n = h === l)) {
        var p = '.' + l;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Kl = function (a, b) {
      return !1 === a ? !1 : a || b || Jl();
    };
  var Ll = {};
  var Ml = function (a) {
    for (
      var b = [],
        c = H.cookie.split(';'),
        d = new RegExp(
          '^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$',
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          og: f[1],
          value: f[2],
          timestamp: Number(f[2].split('.')[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function Nl(a, b) {
    var c = Ml(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split('.');
      if (
        !('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].og] || (d[c[e].og] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), la: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].og].push(g);
      }
    }
    return d;
  }
  var Ol = /^\w+$/,
    Pl = /^[\w-]+$/,
    Ql = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp', gb: '_gb' },
    Rl = function () {
      if (!Li().h() || !Xi()) return !0;
      var a = Ui('ad_storage');
      return null == a ? !0 : !!a;
    },
    Sl = function (a, b) {
      Wi('ad_storage')
        ? Rl()
          ? a()
          : bj(a, 'ad_storage')
        : b
        ? Jb('TAGGING', 3)
        : aj(
            function () {
              Sl(a, !0);
            },
            ['ad_storage'],
          );
    },
    Ul = function (a) {
      return Tl(a).map(function (b) {
        return b.la;
      });
    },
    Tl = function (a) {
      var b = [];
      if (!sj(m) || !H.cookie) return b;
      var c = vj(a, H.cookie, void 0, 'ad_storage');
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Ld: d.Ld }, e++) {
        var f = Vl(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.Ld = g.la;
          var l = g.timestamp,
            n = g.labels,
            p = Ea(
              b,
              (function (q) {
                return function (r) {
                  return r.la === q.Ld;
                };
              })(d),
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = Wl(p.labels, n || [])))
            : b.push({ version: h, la: d.Ld, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Xl(b);
    };
  function Wl(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Yl(a) {
    return a && 'string' == typeof a && a.match(Ol) ? a : '_gcl';
  }
  var $l = function () {
      var a = ai(m.location.href),
        b = Zh(a, 'query', !1, void 0, 'gclid'),
        c = Zh(a, 'query', !1, void 0, 'gclsrc'),
        d = Zh(a, 'query', !1, void 0, 'wbraid'),
        e = Zh(a, 'query', !1, void 0, 'dclid');
      if (!b || !c || !d) {
        var f = a.hash.replace('#', '');
        b = b || Wh(f, 'gclid', !1);
        c = c || Wh(f, 'gclsrc', !1);
        d = d || Wh(f, 'wbraid', !1);
      }
      return Zl(b, c, e, d);
    },
    Zl = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Pl.test(d) && ((e.gbraid = d), f(d, 'gb'));
      if (void 0 !== a && a.match(Pl))
        switch (b) {
          case void 0:
            f(a, 'aw');
            break;
          case 'aw.ds':
            f(a, 'aw');
            f(a, 'dc');
            break;
          case 'ds':
            f(a, 'dc');
            break;
          case '3p.ds':
            f(a, 'dc');
            break;
          case 'gf':
            f(a, 'gf');
            break;
          case 'ha':
            f(a, 'ha');
        }
      c && f(c, 'dc');
      return e;
    },
    bm = function (a) {
      var b = $l();
      Sl(function () {
        am(b, !1, a);
      });
    };
  function am(a, b, c, d, e) {
    function f(w, y) {
      var x = cm(w, g);
      x && (Ej(x, y, h), (l = !0));
    }
    c = c || {};
    e = e || [];
    var g = Yl(c.prefix);
    d = d || Sa();
    var h = Hk(c, d, !0);
    h.Cb = 'ad_storage';
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var y = ['GCL', n, w];
        0 < e.length && y.push(e.join('.'));
        return y.join('.');
      };
    a.aw && f('aw', p(a.aw[0]));
    a.dc && f('dc', p(a.dc[0]));
    a.gf && f('gf', p(a.gf[0]));
    a.ha && f('ha', p(a.ha[0]));
    a.gp && f('gp', p(a.gp[0]));
    if (
      (void 0 == Ll.enable_gbraid_cookie_write
        ? 0
        : Ll.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        r = cm('gb', g),
        u = !1;
      if (!b)
        for (var t = Tl(r), v = 0; v < t.length; v++)
          t[v].la === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f('gb', p(q));
    }
  }
  var em = function (a, b) {
      var c = Bl(!0);
      Sl(function () {
        for (var d = Yl(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Ql[f]) {
            var g = cm(f, d),
              h = c[g];
            if (h) {
              var l = Math.min(dm(h), Sa()),
                n;
              b: {
                var p = l;
                if (sj(m))
                  for (
                    var q = vj(g, H.cookie, void 0, 'ad_storage'), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (dm(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Hk(b, l, !0);
                u.Cb = 'ad_storage';
                Ej(g, h, u);
              }
            }
          }
        }
        am(Zl(c.gclid, c.gclsrc), !1, b);
      });
    },
    cm = function (a, b) {
      var c = Ql[a];
      if (void 0 !== c) return b + c;
    },
    dm = function (a) {
      return 0 !== fm(a.split('.')).length
        ? 1e3 * (Number(a.split('.')[1]) || 0)
        : 0;
    };
  function Vl(a) {
    var b = fm(a.split('.'));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          la: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function fm(a) {
    return 3 > a.length ||
      ('GCL' !== a[0] && '1' !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Pl.test(a[2])
      ? []
      : a;
  }
  var gm = function (a, b, c, d, e) {
      if (Da(b) && sj(m)) {
        var f = Yl(e),
          g = function () {
            for (var h = {}, l = 0; l < a.length; ++l) {
              var n = cm(a[l], f);
              if (n) {
                var p = vj(n, H.cookie, void 0, 'ad_storage');
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        Sl(function () {
          Hl(g, b, c, d);
        });
      }
    },
    Xl = function (a) {
      return a.filter(function (b) {
        return Pl.test(b.la);
      });
    },
    hm = function (a, b) {
      if (sj(m)) {
        for (var c = Yl(b.prefix), d = {}, e = 0; e < a.length; e++)
          Ql[a[e]] && (d[a[e]] = Ql[a[e]]);
        Sl(function () {
          La(d, function (f, g) {
            var h = vj(c + g, H.cookie, void 0, 'ad_storage');
            h.sort(function (u, t) {
              return dm(t) - dm(u);
            });
            if (h.length) {
              var l = h[0],
                n = dm(l),
                p = 0 !== fm(l.split('.')).length ? l.split('.').slice(3) : [],
                q = {},
                r;
              r = 0 !== fm(l.split('.')).length ? l.split('.')[2] : void 0;
              q[f] = [r];
              am(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function im(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var jm = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Xi()) {
        var c = $l();
        if (im(c, a)) {
          var d = {};
          b(d, 'gclid', c.gclid);
          b(d, 'dclid', c.dclid);
          b(d, 'gclsrc', c.gclsrc);
          b(d, 'wbraid', c.gbraid);
          Il(function () {
            return d;
          }, 3);
          Il(function () {
            var e = {};
            return (e._up = '1'), e;
          }, 1);
        }
      }
    },
    km = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Rl()) return e;
      var f = Tl(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          l = f[0].timestamp,
          n = [h.version, Math.round(l / 1e3), h.la]
            .concat(h.labels || [], [b])
            .join('.'),
          p = Hk(c, l, !0);
        p.Cb = 'ad_storage';
        Ej(a, n, p);
      }
      return e;
    };
  function lm(a, b) {
    var c = Yl(b),
      d = cm(a, c);
    if (!d) return 0;
    for (var e = Tl(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function mm(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var nm = function (a) {
    var b = Math.max(lm('aw', a), mm(Rl() ? Nl() : {}));
    return Math.max(lm('gb', a), mm(Rl() ? Nl('_gac_gb', !0) : {})) > b;
  };
  var sm = /[A-Z]+/,
    tm = /\s/,
    um = function (a) {
      if (k(a)) {
        a = Qa(a);
        var b = a.indexOf('-');
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (sm.test(c)) {
            for (
              var d = a.substring(b + 1).split('/'), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (tm.test(d[e]) && ('AW' !== c || 1 !== e))) return;
            return { id: a, prefix: c, V: c + '-' + d[0], M: d };
          }
        }
      }
    },
    wm = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = um(a[c]);
        d && (b[d.id] = d);
      }
      vm(b);
      var e = [];
      La(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function vm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        'AW' === d.prefix && d.M[1] && b.push(d.V);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ym = function (a, b, c, d) {
      return (2 === xm() || d || 'http:' != m.location.protocol ? a : b) + c;
    },
    xm = function () {
      var a = Ub(),
        b;
      if (1 === a)
        a: {
          var c = jh;
          c = c.toLowerCase();
          for (
            var d = 'https://' + c,
              e = 'http://' + c,
              f = 1,
              g = H.getElementsByTagName('script'),
              h = 0;
            h < g.length && 100 > h;
            h++
          ) {
            var l = g[h].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var Km = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.s = c;
      this.C = {};
      this.metadata = J(c.eventMetadata || {});
      this.K = !1;
    },
    Lm = function (a, b, c) {
      var d = R(a.s, b);
      void 0 !== d ? (a.C[b] = d) : void 0 !== c && (a.C[b] = c);
    },
    Mm = function (a, b, c) {
      var d = Kh(a.target.V);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Nm(a) {
    return {
      getDestinationId: function () {
        return a.target.V;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.C[b];
      },
      setHitData: function (b, c) {
        return void (a.C[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.C[b] && (a.C[b] = c);
      },
      copyToHitData: function (b, c) {
        Lm(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.K = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
      getFromEventContext: function (b) {
        return R(a.s, b);
      },
    };
  }
  var Pm = function (a) {
      var b = Om[a.target.V];
      if (!a.K && b)
        for (var c = Nm(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.K = !0;
          }
          if (a.K) break;
        }
    },
    Qm = function (a, b) {
      var c = Om[a];
      c || (c = Om[a] = []);
      c.push(b);
    },
    Om = {};
  var gn = ['L', 'S', 'Y'],
    hn = ['S', 'E'],
    jn = { sampleRate: '0.005000', oi: '', ni: Number('5') },
    kn =
      0 <= H.location.search.indexOf('?gtm_latency=') ||
      0 <= H.location.search.indexOf('&gtm_latency='),
    ln;
  if (!(ln = kn)) {
    var mn = Math.random(),
      nn = jn.sampleRate;
    ln = mn < nn;
  }
  var on = ln,
    pn = 'https://www.googletagmanager.com/a?id=' + Ne.R + '&cv=1',
    qn = {
      label: Ne.R + ' Container',
      children: [{ label: 'Initialization', children: [] }],
    };
  function rn() {
    return [pn, '&v=3&t=t', '&pid=' + Ha(), '&rv=' + Ug.ue].join('');
  }
  var sn = rn();
  function tn() {
    sn = rn();
  }
  var un = {},
    vn = '',
    wn = '',
    xn = '',
    yn = '',
    zn = [],
    An = '',
    Bn = {},
    Cn = !1,
    Dn = {},
    En = {},
    Fn = '',
    Gn = void 0,
    Hn = {},
    In = {},
    Jn = void 0,
    Kn = 5;
  0 < jn.ni && (Kn = jn.ni);
  var Ln = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        bk: function () {
          return c < a ? !1 : Sa() - d[c % a] < b;
        },
        Ak: function () {
          var f = c++ % a;
          d[f] = Sa();
        },
      };
    })(Kn, 1e3),
    Mn = 1e3;
  function Nn(a, b) {
    var c = Gn;
    if (void 0 === c) return '';
    var d = Lb('GTM'),
      e = Lb('TAGGING'),
      f = sn,
      g = un[c] ? '' : '&es=1',
      h = Hn[c],
      l = On(c),
      n = Pn(),
      p = vn,
      q = wn,
      r = Fn,
      u = Qn(a),
      t = xn,
      v = yn,
      w = Rn(a, b),
      y;
    return [
      f,
      g,
      h,
      l,
      d ? '&u=' + d : '',
      e ? '&ut=' + e : '',
      n,
      p,
      q,
      r,
      u,
      t,
      v,
      w,
      y,
      An ? '&dl=' + encodeURIComponent(An) : '',
      0 < zn.length ? '&tdp=' + zn.join('.') : '',
      '&z=0',
    ].join('');
  }
  function Tn(a) {
    Jn && (m.clearTimeout(Jn), (Jn = void 0));
    if (void 0 !== Gn && (!un[Gn] || vn || wn || Un(a)))
      if (void 0 === Vn[Gn] && (In[Gn] || Ln.bk() || 0 >= Mn--))
        N(1), (In[Gn] = !0);
      else {
        void 0 === Vn[Gn] && Ln.Ak();
        var b = Nn(!0, a);
        a ? cc(b) : Wb(b);
        if (yn || (An && 0 < zn.length)) {
          var c = b.replace('/a?', '/td?');
          Wb(c);
        }
        un[Gn] = !0;
        An = yn = xn = Fn = wn = vn = '';
        zn = [];
      }
  }
  function Wn() {
    Jn || (Jn = m.setTimeout(Tn, 500));
  }
  function Xn(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : '*';
  }
  function Yn() {
    2022 <= Nn().length && Tn();
  }
  function Pn() {
    return (
      '&tc=' +
      ne.filter(function (a) {
        return a;
      }).length
    );
  }
  var $n = function (a, b) {
      if (on && !In[a] && Gn !== a) {
        Tn();
        Gn = a;
        xn = vn = '';
        Hn[a] = '&e=' + Xn(b) + '&eid=' + a;
        Wn();
      }
    },
    ao = function (a, b, c, d) {
      if (on && b) {
        var e,
          f = String(b[Od.Kb] || '').replace(/_/g, '');
        0 === f.indexOf('cvt') && (f = 'cvt');
        e = f;
        var g = c + e;
        if (!In[a]) {
          a !== Gn && (Tn(), (Gn = a));
          vn = vn ? vn + '.' + g : '&tr=' + g;
          var h = b['function'];
          if (!h)
            throw Error('Error: No function name given for function call.');
          var l = (pe[h] ? '1' : '2') + e;
          xn = xn ? xn + '.' + l : '&ti=' + l;
          Wn();
          Yn();
        }
      }
    };
  function Qn(a) {}
  function On(a) {}
  var io = function (a, b, c) {
      if (on && void 0 !== a && !In[a]) {
        a !== Gn && (Tn(), (Gn = a));
        var d = c + b;
        wn = wn ? wn + '.' + d : '&epr=' + d;
        Wn();
        Yn();
      }
    },
    jo = function (a, b, c) {},
    ko = ['S', 'P', 'C', 'Z'],
    lo = {},
    mo = ((lo[1] = 5), (lo[2] = 5), (lo[3] = 5), lo),
    no = {},
    Vn = {},
    Sn = void 0,
    oo = function (a, b) {
      var c = !1;
      if (!on || Vn[a] || 0 === mo[b]) return !1;
      --mo[b];
      Vn[a] = b;
      c = !0;
      return c;
    },
    po = function (a, b, c) {
      if (!on || !Vn[a]) return;
      var d = no[a];
      d || (no[a] = d = {});
      d[b] = c;
    };
  function Rn(a, b) {
    var c;
    if (!Gn || !Un(b)) return '';
    var d = no[Gn];
    c =
      '&al=' +
      ko
        .filter(function (e) {
          return void 0 !== d[e];
        })
        .map(function (e) {
          return e + Math.floor(d[e]);
        })
        .join('.') +
      ('.Z' + Vn[Gn]);
    a && delete no[Gn];
    return c;
  }
  function Un(a) {
    var b = !1;
    if (!Gn || !no[Gn]) return !1;
    b = a || 'C' in no[Gn];
    return b;
  }
  var qo = function () {
    if (on) {
      m.setInterval(tn, 864e5);
      Xb(m, 'pagehide', function () {
        Gn && Vn[Gn] && Tn(!0);
        for (var a in no) no.hasOwnProperty(a) && ((Gn = Number(a)), Tn(!0));
      });
    }
  };
  var ro = function (a, b, c, d, e, f, g, h, l, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.I = d;
      this.B = e;
      this.F = f;
      this.T = g;
      this.D = h;
      this.eventMetadata = l;
      this.X = n;
      this.W = p;
      this.H = q;
    },
    R = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.I[b]) return a.I[b];
      if (void 0 !== a.B[b]) return a.B[b];
      on && so(a, a.F[b], a.T[b]) && (N(71), N(79));
      return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.D[b] ? a.D[b] : c;
    },
    to = function (a) {
      function b(g) {
        for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.I);
      b(a.B);
      b(a.F);
      if (on)
        for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            'event' !== f &&
            'gtm' !== f &&
            'tagTypeBlacklist' !== f &&
            !c.hasOwnProperty(f)
          ) {
            N(71);
            N(80);
            break;
          }
        }
      return Object.keys(c);
    },
    uo = function (a, b, c) {
      function d(l) {
        uc(l) &&
          La(l, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.D[b]), d(a.F[b]), d(a.B[b]), d(a.I[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (on) {
        var g = f,
          h = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.D[b]), d(a.T[b]), d(a.B[b]), d(a.I[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || so(a, e, h)) N(71), N(81);
        f = g;
        e = h;
      }
      return f ? e : void 0;
    },
    vo = function (a) {
      var b = [Q.g.Pc, Q.g.Td, Q.g.Ud, Q.g.Vd, Q.g.Wd, Q.g.Xd, Q.g.Yd],
        c = {},
        d = !1,
        e = function (h) {
          for (var l = 0; l < b.length; l++)
            void 0 !== h[b[l]] && ((c[b[l]] = h[b[l]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.I) || e(a.B)) return c;
      e(a.F);
      if (on) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.T);
        so(a, c, f) && (N(71), N(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.D);
      return c;
    },
    so = function (a, b, c) {
      if (!on) return !1;
      try {
        if (b === c) return !1;
        var d = sc(b);
        if (d !== sc(c) || !((uc(b) && uc(c)) || 'array' === d)) return !0;
        if ('array' === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (so(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || so(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        N(72);
      }
      return !1;
    },
    wo = function (a, b) {
      this.aj = a;
      this.bj = b;
      this.F = {};
      this.th = {};
      this.h = {};
      this.I = {};
      this.B = {};
      this.cd = {};
      this.D = {};
      this.Dc = function () {};
      this.Ca = function () {};
      this.T = !1;
    },
    xo = function (a, b) {
      a.F = b;
      return a;
    },
    yo = function (a, b) {
      a.th = b;
      return a;
    },
    zo = function (a, b) {
      a.h = b;
      return a;
    },
    Ao = function (a, b) {
      a.I = b;
      return a;
    },
    Bo = function (a, b) {
      a.B = b;
      return a;
    },
    Co = function (a, b) {
      a.cd = b;
      return a;
    },
    Do = function (a, b) {
      a.D = b || {};
      return a;
    },
    Eo = function (a, b) {
      a.Dc = b;
      return a;
    },
    Fo = function (a, b) {
      a.Ca = b;
      return a;
    },
    Go = function (a) {
      a.T = !0;
      return a;
    },
    Ho = function (a) {
      return new ro(
        a.aj,
        a.bj,
        a.F,
        a.th,
        a.h,
        a.I,
        a.B,
        a.cd,
        a.D,
        a.Dc,
        a.Ca,
        a.T,
      );
    };
  var Lo = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  wb();
  ck() || vb('iPod');
  vb('iPad');
  !vb('Android') || xb() || wb() || vb('Opera') || vb('Silk');
  xb();
  !vb('Safari') ||
    xb() ||
    vb('Coast') ||
    vb('Opera') ||
    vb('Edge') ||
    vb('Edg/') ||
    vb('OPR') ||
    wb() ||
    vb('Silk') ||
    vb('Android') ||
    dk();
  var Mo = {},
    No = null,
    Oo = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!No) {
        No = {};
        for (
          var g =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                '',
              ),
            h = ['+/=', '+/', '-_=', '-_.', '-_'],
            l = 0;
          5 > l;
          l++
        ) {
          var n = g.concat(h[l].split(''));
          Mo[l] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === No[q] && (No[q] = p);
          }
        }
      }
      for (
        var r = Mo[f],
          u = Array(Math.floor(b.length / 3)),
          t = r[64] || '',
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var y = b[v],
          x = b[v + 1],
          A = b[v + 2],
          B = r[y >> 2],
          C = r[((y & 3) << 4) | (x >> 4)],
          F = r[((x & 15) << 2) | (A >> 6)],
          G = r[A & 63];
        u[w++] = '' + B + C + F + G;
      }
      var D = 0,
        K = t;
      switch (b.length - v) {
        case 2:
          (D = b[v + 1]), (K = r[(D & 15) << 2] || t);
        case 1:
          var P = b[v];
          u[w] = '' + r[P >> 2] + r[((P & 3) << 4) | (D >> 4)] + K + t;
      }
      return u.join('');
    };
  var Po =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' ',
    );
  function Qo(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function Ro() {
    var a = m.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function So() {
    var a, b;
    return null !=
      (b = null == (a = m.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function To(a) {
    var b, c;
    return (
      'function' ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function Uo() {
    var a = m;
    if (!To(a)) return null;
    var b = Qo(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Po)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Vo,
    Wo = function () {
      if (To(m) && ((Vo = Sa()), !So())) {
        var a = Uo();
        a &&
          (a.then(function () {
            N(95);
          }),
          a.catch(function () {
            N(96);
          }));
      }
    },
    Yo = function (a) {
      var b = Xo.Uk,
        c = function (g, h) {
          try {
            a(g, h);
          } catch (l) {}
        },
        d = Ro();
      if (d) c(d);
      else {
        var e = So();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = m.setTimeout(function () {
            c.xd || ((c.xd = !0), N(106), c(null, Error('Timeout')));
          }, b);
          e.then(function (g) {
            c.xd || ((c.xd = !0), N(104), m.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.xd || ((c.xd = !0), N(105), m.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Zo = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      a &&
        ((b.C[Q.g.lf] = a.architecture),
        (b.C[Q.g.nf] = a.bitness),
        a.fullVersionList &&
          (b.C[Q.g.pf] = a.fullVersionList
            .map(function (d) {
              return (
                encodeURIComponent(d.brand || '') +
                ';' +
                encodeURIComponent(d.version || '')
              );
            })
            .join('|')),
        c && (b.C[Q.g.kh] = a.mobile ? '1' : '0'),
        (b.C[Q.g.qf] = a.model),
        (b.C[Q.g.rf] = a.platform),
        (b.C[Q.g.sf] = a.platformVersion),
        (b.C[Q.g.tf] = a.wow64 ? '1' : '0'));
    };
  function $o() {
    return 'attribution-reporting';
  }
  function ap(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var bp = !1;
  function cp() {
    if (ap('join-ad-interest-group') && Ba(Mb.joinAdInterestGroup)) return !0;
    bp ||
      (kk(
        'A7bG5hJ4XpMV5a3V1wwAR0PalkFSxLOZeL9D/YBYdupYUIgUgGhfVJ1zBFOqGybb7gRhswfJ+AmO7S2rNK2IOwkAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9',
      ),
      (bp = !0));
    return ap('join-ad-interest-group') && Ba(Mb.joinAdInterestGroup);
  }
  function dp(a, b) {
    var c = void 0;
    try {
      c = H.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Sa() - d) {
        Jb('TAGGING', 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          H.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]',
          ).length
        ) {
          Jb('TAGGING', 10);
          return;
        }
      } catch (e) {}
    Vb(
      a,
      void 0,
      { allow: 'join-ad-interest-group' },
      { taggingId: b, loadTime: Sa() },
      c,
    );
  }
  var ep = RegExp(
      '^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$',
    ),
    fp = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    gp = /^\d+\.fls\.doubleclick\.net$/,
    hp = /;gac=([^;?]+)/,
    ip = /;gacgb=([^;?]+)/,
    jp = /;gclaw=([^;?]+)/,
    kp = /;gclgb=([^;?]+)/;
  function lp(a, b) {
    if (gp.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && 2 == c.length && c[1].match(ep)
        ? decodeURIComponent(c[1])
        : '';
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].la);
      d.push(e + ':' + f.join(','));
    }
    return 0 < d.length ? d.join(';') : '';
  }
  var mp = function (a, b, c) {
    var d = Rl() ? Nl('_gac_gb', !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = km('_gac_gb_' + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (l) {
            return 1 === l;
          }));
      e.push(g + ':' + h.join(','));
    }
    return { Jj: f ? e.join(';') : '', Ij: lp(d, ip) };
  };
  function np(a, b, c) {
    if (gp.test(H.location.host)) {
      var d = H.location.href.match(c);
      if (d && 2 == d.length && d[1].match(fp)) return [{ la: d[1] }];
    } else return Tl((a || '_gcl') + b);
    return [];
  }
  var op = function (a) {
      return np(a, '_aw', jp)
        .map(function (b) {
          return b.la;
        })
        .join('.');
    },
    pp = function (a) {
      return np(a, '_gb', kp)
        .map(function (b) {
          return b.la;
        })
        .join('.');
    },
    qp = function (a, b) {
      var c = km(((b && b.prefix) || '_gcl') + '_gb', a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ''
        : c.join('.');
    };
  var rp = function () {
    if (Ba(m.__uspapi)) {
      var a = '';
      try {
        m.__uspapi('getUSPData', 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var aq = function (a, b) {
    var c = m,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var bq = function (a, b) {
    var c = hk(a, 'fmt');
    if (b) {
      var d = hk(a, 'random'),
        e = hk(a, 'label') || '';
      if (!d) return !1;
      var f = Oo(
        decodeURIComponent(e.replace(/\+/g, ' ')) +
          ':' +
          decodeURIComponent(d.replace(/\+/g, ' ')),
      );
      if (!aq(f, b)) return !1;
    }
    c && 4 != c && (a = jk(a, 'rfmt', c));
    var g = jk(a, 'fmt', 4);
    Tb(
      g,
      function () {
        m.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((m.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      H.getElementsByTagName('script')[0].parentElement || void 0,
    );
    return !0;
  };
  var rq = function () {
      this.h = {};
    },
    sq = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    tq = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + '=' + encodeURIComponent(a.h[b]);
        })
        .join('&');
    },
    vq = function (a, b, c, d, e) {};
  function xq(a, b) {
    if (a) {
      var c = '' + a;
      0 !== c.indexOf('http://') &&
        0 !== c.indexOf('https://') &&
        (c = 'https://' + c);
      '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return ai('' + c + b).href;
    }
  }
  function yq(a, b) {
    return dh || fh ? xq(a, b) : void 0;
  }
  function zq() {
    return !!Ug.ve && 'SGTM_TOKEN' !== Ug.ve.split('@@').join('');
  }
  var Bq = function (a, b, c, d) {
      if (!Aq() && !Vj(a)) {
        var e = c ? '/gtag/js' : '/gtm.js',
          f = '?id=' + encodeURIComponent(a) + '&l=' + Ug.ma,
          g = 0 === a.indexOf('GTM-');
        g || (f += '&cx=c');
        var h = zq();
        h && (f += '&sign=' + Ug.ve);
        var l = yq(b, e + f);
        if (!l) {
          var n = Ug.Qd + e;
          h &&
            Nb &&
            g &&
            (n = Nb.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0]);
          l = ym('https://', 'http://', n + f);
        }
        Tj().container[a] = { state: 1, context: d };
        Tb(l);
      }
    },
    Cq = function (a, b, c) {
      var d;
      if ((d = !Aq())) {
        var e = Tj().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (Wj())
          (Tj().destination[a] = { state: 0, transportUrl: b, context: c }),
            N(91);
        else {
          var f =
            '/gtag/destination?id=' +
            encodeURIComponent(a) +
            '&l=' +
            Ug.ma +
            '&cx=c';
          zq() && (f += '&sign=' + Ug.ve);
          var g = yq(b, f);
          g || (g = ym('https://', 'http://', Ug.Qd + f));
          Tj().destination[a] = { state: 1, context: c };
          Tb(g);
        }
    };
  function Aq() {
    if (Oj()) {
      return !0;
    }
    return !1;
  }
  var Dq = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/,
    ),
    Eq = {
      cl: ['ecl'],
      customPixels: ['nonGooglePixels'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: [
        'customScripts',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      customScripts: [
        'html',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels'],
    },
    Fq = {
      cl: ['ecl'],
      customPixels: ['customScripts', 'html'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: [
        'customPixels',
        'customScripts',
        'html',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
    },
    Gq =
      'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
        ' ',
      );
  var Hq = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Jq = function (a) {
      var b = uh('gtm.allowlist') || uh('gtm.whitelist');
      b && N(9);
      Hq() && (b = ['google', 'gtagfl', 'lcl', 'zone']);
      var c = b && Xa(Pa(b), Eq),
        d = uh('gtm.blocklist') || uh('gtm.blacklist');
      d || ((d = uh('tagTypeBlacklist')) && N(3));
      d ? N(8) : (d = []);
      Iq() &&
        ((d = Pa(d)),
        d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
      0 <= Pa(d).indexOf('google') && N(2);
      var e = d && Xa(Pa(d), Fq),
        f = {};
      return function (g) {
        var h = g && g[Od.Kb];
        if (!h || 'string' != typeof h) return !0;
        h = h.replace(/^_*/, '');
        if (void 0 !== f[h]) return f[h];
        var l = nh[h] || [],
          n = a(h, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > c.indexOf(l[q])) {
                      N(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= e.indexOf(h);
          if (u) r = u;
          else {
            var t = Ka(e, l || []);
            t && N(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= l.indexOf('sandboxedScripts')) ||
          (c && -1 !== c.indexOf('sandboxedScripts')) ||
          (v = Ka(e, Gq));
        return (f[h] = v);
      };
    },
    Iq = function () {
      return Dq.test(m.location && m.location.hostname);
    };
  var Kq = { initialized: 11, complete: 12, interactive: 13 },
    Lq = {},
    Mq = Object.freeze(((Lq[Q.g.Fa] = !0), Lq)),
    Nq =
      0 <= H.location.search.indexOf('?gtm_diagnostics=') ||
      0 <= H.location.search.indexOf('&gtm_diagnostics='),
    Pq = function (a, b, c) {
      if (on && 'config' === a && !(1 < um(b).M.length)) {
        var d,
          e = Ob('google_tag_data', {});
        e.td || (e.td = {});
        d = e.td;
        var f = J(c.F);
        J(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var l = Oq(d[h], f);
          l.length && (Nq && console.log(l), g.push(h));
        }
        if (g.length) {
          if (g.length) {
            var n = b + '*' + g.join('.');
            yn = yn ? yn + '!' + n : '&tdc=' + n;
          }
          Jb('TAGGING', Kq[H.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function Qq(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Oq(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? '' : d;
    if (a === b) return [];
    var e = function (q, r) {
        var u = r[q];
        return void 0 === u ? Mq[q] : u;
      },
      f;
    for (f in Qq(a, b)) {
      var g = (d ? d + '.' : '') + f,
        h = e(f, a),
        l = e(f, b),
        n = 'object' === sc(h) || 'array' === sc(h),
        p = 'object' === sc(l) || 'array' === sc(l);
      if (n && p) Oq(h, l, c, g);
      else if (n || p || h !== l) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Rq = !1,
    Sq = 0,
    Tq = [];
  function Uq(a) {
    if (!Rq) {
      var b = H.createEventObject,
        c = 'complete' == H.readyState,
        d = 'interactive' == H.readyState;
      if (!a || 'readystatechange' != a.type || c || (!b && d)) {
        Rq = !0;
        for (var e = 0; e < Tq.length; e++) I(Tq[e]);
      }
      Tq.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function Vq() {
    if (!Rq && 140 > Sq) {
      Sq++;
      try {
        H.documentElement.doScroll('left'), Uq();
      } catch (a) {
        m.setTimeout(Vq, 50);
      }
    }
  }
  var Wq = function (a) {
    Rq ? a() : Tq.push(a);
  };
  var Xq = function () {
    this.I = 0;
    this.h = {};
  };
  Xq.prototype.B = function (a, b, c) {
    var d = ++this.I;
    this.h[a] = this.h[a] || {};
    this.h[a][String(d)] = { listener: b, hb: c };
    return d;
  };
  Xq.prototype.D = function (a, b) {
    var c = this.h[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  Xq.prototype.F = function (a, b) {
    var c = [];
    La(this.h[a], function (d, e) {
      0 > c.indexOf(e.listener) &&
        (void 0 === e.hb || 0 <= b.indexOf(e.hb)) &&
        c.push(e.listener);
    });
    return c;
  };
  var Yq = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Ne.R,
    };
  };
  var $q = function (a, b) {
      this.h = !1;
      this.F = [];
      this.I = { tags: [] };
      this.T = !1;
      this.B = this.D = 0;
      Zq(this, a, b);
    },
    ar = function (a, b, c, d) {
      if (Yg.hasOwnProperty(b) || '__zone' === b) return -1;
      var e = {};
      uc(d) && (e = J(d, e));
      e.id = c;
      e.status = 'timeout';
      return a.I.tags.push(e) - 1;
    },
    br = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    cr = function (a) {
      if (!a.h) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.F.length = 0;
      }
    },
    Zq = function (a, b, c) {
      void 0 !== b && a.xe(b);
      c &&
        m.setTimeout(function () {
          return cr(a);
        }, Number(c));
    };
  $q.prototype.xe = function (a) {
    var b = this,
      c = Ua(function () {
        return I(function () {
          a(Ne.R, b.I);
        });
      });
    this.h ? c() : this.F.push(c);
  };
  var dr = function (a) {
      a.D++;
      return Ua(function () {
        a.B++;
        a.T && a.B >= a.D && cr(a);
      });
    },
    er = function (a) {
      a.T = !0;
      a.B >= a.D && cr(a);
    };
  var fr = function () {
      function a(d) {
        return !Ca(d) || 0 > d ? 0 : d;
      }
      if (!Vg._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = Ca(vh.get('gtm.start')) ? vh.get('gtm.start') : 0;
        Vg._li = { cst: a(c - b), cbt: a(lh - b) };
      }
    },
    gr = function (a) {
      m.performance && m.performance.mark(Ne.R + '_' + a + '_start');
    },
    hr = function (a) {
      if (m.performance) {
        var b = Ne.R + '_' + a + '_start',
          c = Ne.R + '_' + a + '_duration';
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = Vg._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Vg._p = e));
        return d.duration;
      }
    },
    ir = function () {
      var a = ec();
      if (void 0 !== a) {
        var b = Vg._p || {};
        b.PAGEVIEW = a;
        Vg._p = b;
      }
    };
  var jr = {},
    kr = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    lr = !1;
  function or() {
    return m.GoogleAnalyticsObject || 'ga';
  }
  var pr = function (a) {},
    qr = function (a, b) {
      return function () {
        var c = kr(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get('sendHitTask');
          d.set('sendHitTask', function (f) {
            var g = f.get('hitPayload'),
              h = f.get('hitCallback'),
              l = 0 > g.indexOf('&tid=' + b);
            l &&
              (f.set(
                'hitPayload',
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b),
                !0,
              ),
              f.set('hitCallback', void 0, !0));
            e(f);
            l &&
              (f.set('hitPayload', g, !0),
              f.set('hitCallback', h, !0),
              f.set('_x_19', void 0, !0),
              e(f));
          });
        }
      };
    };
  function vr(a, b, c, d) {
    var e = ne[a],
      f = wr(a, b, c, d);
    if (!f) return null;
    var g = ye(e[Od.Fh], c, []);
    if (g && g.length) {
      var h = g[0];
      f = vr(
        h.index,
        { X: f, W: 1 === h.Sh ? b.terminate : f, terminate: b.terminate },
        c,
        d,
      );
    }
    return f;
  }
  function wr(a, b, c, d) {
    function e() {
      if (f[Od.gj]) h();
      else {
        var w = ze(f, c, []),
          y = w[Od.vi];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!jj(y[x])) {
              h();
              return;
            }
        var A = ar(c.Ab, String(f[Od.Kb]), Number(f[Od.Gh]), w[Od.ij]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var G = Sa() - F;
            ao(c.id, ne[a], '5', G);
            br(c.Ab, A, 'success', G);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var G = Sa() - F;
            ao(c.id, ne[a], '6', G);
            br(c.Ab, A, 'failure', G);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        ao(c.id, f, '1');
        var C = function () {
          var G = Sa() - F;
          ao(c.id, f, '7', G);
          br(c.Ab, A, 'exception', G);
          B || ((B = !0), h());
        };
        var F = Sa();
        try {
          xe(w, { event: c, index: a, type: 1 });
        } catch (G) {
          C(G);
        }
      }
    }
    var f = ne[a],
      g = b.X,
      h = b.W,
      l = b.terminate;
    if (c.Rf(f)) return null;
    var n = ye(f[Od.Hh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = vr(p.index, { X: g, W: h, terminate: l }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Sh ? l : q;
    }
    if (f[Od.Bh] || f[Od.kj]) {
      var r = f[Od.Bh] ? oe : c.Ok,
        u = g,
        t = h;
      if (!r[a]) {
        e = Ua(e);
        var v = xr(a, r, e);
        g = v.X;
        h = v.W;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function xr(a, b, c) {
    var d = [],
      e = [];
    b[a] = yr(d, e, c);
    return {
      X: function () {
        b[a] = zr;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      W: function () {
        b[a] = Ar;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function yr(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function zr(a) {
    a();
  }
  function Ar(a, b) {
    b();
  }
  var Cr = function (a, b) {
      return 1 === arguments.length ? Br('set', a) : Br('set', a, b);
    },
    Dr = function (a, b) {
      return 1 === arguments.length ? Br('config', a) : Br('config', a, b);
    },
    Er = function (a, b, c) {
      c = c || {};
      c[Q.g.Jb] = a;
      return Br('event', b, c);
    };
  function Br(a) {
    return arguments;
  }
  var Fr = function () {
    this.h = [];
    this.B = [];
  };
  Fr.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a['gtm.uniqueEventId'] = b;
    a['gtm.priorityId'] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.B.length; f++)
      try {
        this.B[f](e);
      } catch (g) {}
  };
  Fr.prototype.listen = function (a) {
    this.B.push(a);
  };
  Fr.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Fr.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Hr = function (a, b, c) {
      Gr().enqueue(a, b, c);
    },
    Jr = function () {
      var a = Ir;
      Gr().listen(a);
    };
  function Gr() {
    var a = Vg.mb;
    a || ((a = new Fr()), (Vg.mb = a));
    return a;
  }
  var Rr = function (a) {
      var b = Vg.zones;
      return b
        ? b.getIsAllowedFn(Qj(), a)
        : function () {
            return !0;
          };
    },
    Sr = function (a) {
      var b = Vg.zones;
      return b ? b.isActive(Qj(), a) : !0;
    };
  var Vr = function (a, b) {
    for (var c = [], d = 0; d < ne.length; d++)
      if (a[d]) {
        var e = ne[d];
        var f = dr(b.Ab);
        try {
          var g = vr(d, { X: f, W: f, terminate: f }, b, d);
          if (g) {
            var h = c,
              l = h.push,
              n = d,
              p = e['function'];
            if (!p) throw 'Error: No function name given for function call.';
            var q = pe[p];
            l.call(h, {
              ki: n,
              ci: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else Tr(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(Ur);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  var Xr = function (a, b) {
    if (!Wr) return !1;
    var c = a['gtm.triggers'] && String(a['gtm.triggers']),
      d = Wr.F(a.event, c ? String(c).split(',') : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = dr(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function Ur(a, b) {
    var c,
      d = b.ci,
      e = a.ci;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.ki,
        h = b.ki;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Tr(a, b) {
    if (on) {
      var c = function (d) {
        var e = b.Rf(ne[d]) ? '3' : '4',
          f = ye(ne[d][Od.Fh], b, []);
        f && f.length && c(f[0].index);
        ao(b.id, ne[d], e);
        var g = ye(ne[d][Od.Hh], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Yr = !1,
    Wr;
  var Zr = function () {
    Wr || (Wr = new Xq());
    return Wr;
  };
  var ds = function (a) {
    var b = Sa(),
      c = a['gtm.uniqueEventId'],
      d = a['gtm.priorityId'],
      e = a.event;
    if ('gtm.js' === e) {
      if (Yr) return !1;
      Yr = !0;
    }
    var h,
      l = !1;
    if (Sr(c)) h = Rr(c);
    else {
      if ('gtm.js' !== e && 'gtm.init' !== e && 'gtm.init_consent' !== e)
        return !1;
      l = !0;
      h = Rr(Number.MAX_SAFE_INTEGER);
    }
    $n(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Rf: Jq(h),
        Ok: [],
        Yh: function () {
          N(6);
        },
        Lh: $r(),
        Mh: as(c),
        Ab: new $q(q, p),
      },
      u = Ie(r);
    l && (u = bs(u));
    var t = Vr(u, r),
      v = !1;
    v = Xr(a, r.Ab);
    er(r.Ab);
    ('gtm.js' !== e && 'gtm.sync' !== e) || pr(Ne.R);
    return cs(u, t) || v;
  };
  function as(a) {
    return function (b) {
      on && (yc(b) || jo(a, 'input', b));
    };
  }
  function $r() {
    var a = {};
    a.event = Gh('event', 1);
    a.ecommerce = Gh('ecommerce', 1);
    a.gtm = Gh('gtm');
    a.eventModel = Gh('eventModel');
    return a;
  }
  function bs(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(ne[c][Od.Kb]),
          e;
        if (!(e = Xg[d] || void 0 !== ne[c][Od.lj])) {
          var f = ne[c]['function'];
          if (!f) throw 'Error: No function name given for function call.';
          var g = pe[f];
          e = g ? g.isInfrastructure || !1 : !1;
        }
        if (
          e ||
          0 === d.indexOf('__ccd') ||
          0 === d.indexOf('__ogt') ||
          '__set_product_settings' === d
        )
          b[c] = !0;
      }
    return b;
  }
  function cs(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && ne[c] && !Yg[String(ne[c][Od.Kb])]) return !0;
    return !1;
  }
  var fs = function (a, b, c, d) {
      es.push('event', [b, a], c, d);
    },
    gs = function (a, b, c, d) {
      es.push('get', [a, b], c, d);
    },
    hs = function () {
      this.status = 1;
      this.I = {};
      this.h = {};
      this.B = {};
      this.T = null;
      this.F = {};
      this.D = !1;
    },
    is = function (a, b, c, d) {
      var e = Sa();
      this.type = a;
      this.B = e;
      this.da = b || '';
      this.h = c;
      this.messageContext = d;
    },
    js = function () {
      this.B = {};
      this.D = {};
      this.h = [];
    },
    ks = function (a, b) {
      var c = um(b);
      return (a.B[c.V] = a.B[c.V] || new hs());
    },
    ls = function (a, b, c, d) {
      if (d.da) {
        var e = ks(a, d.da),
          f = e.T;
        if (f) {
          var g = J(c),
            h = J(e.I[d.da]),
            l = J(e.F),
            n = J(e.h),
            p = J(a.D),
            q = {};
          if (on)
            try {
              q = J(rh);
            } catch (v) {
              N(72);
            }
          var r = um(d.da).prefix,
            u = function (v) {
              io(d.messageContext.eventId, r, v);
              var w = g[Q.g.fc];
              w && I(w);
            },
            t = Ho(
              Fo(
                Eo(
                  Do(
                    Bo(
                      Ao(
                        Co(
                          zo(
                            yo(
                              xo(
                                new wo(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId,
                                ),
                                g,
                              ),
                              h,
                            ),
                            l,
                          ),
                          n,
                        ),
                        p,
                      ),
                      q,
                    ),
                    d.messageContext.eventMetadata,
                  ),
                  function () {
                    if (u) {
                      var v = u;
                      u = void 0;
                      v('2');
                    }
                  },
                ),
                function () {
                  if (u) {
                    var v = u;
                    u = void 0;
                    v('3');
                  }
                },
              ),
            );
          try {
            io(d.messageContext.eventId, r, '1'),
              Pq(d.type, d.da, t),
              f(d.da, b, d.B, t);
          } catch (v) {
            io(d.messageContext.eventId, r, '4');
          }
        }
      }
    };
  js.prototype.register = function (a, b, c) {
    var d = ks(this, a);
    3 !== d.status &&
      ((d.T = b), (d.status = 3), c && (J(d.h, c), (d.h = c)), this.flush());
  };
  js.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!um(c)) return;
      if (c) {
        var e = um(c);
        e &&
          1 === ks(this, c).status &&
          ((ks(this, c).status = 2), this.push('require', [{}], e.V, {}));
      }
      ks(this, c).D && (d.deferrable = !1);
    }
    this.h.push(new is(a, c, b, d));
    d.deferrable || this.flush();
  };
  js.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.da || ks(this, f.da).D
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case 'require':
            g = ks(this, f.da);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case 'set':
            La(f.h[0], function (r, u) {
              J(ab(r, u), b.D);
            });
            break;
          case 'config':
            g = ks(this, f.da);
            e.tb = {};
            La(
              f.h[0],
              (function (r) {
                return function (u, t) {
                  J(ab(u, t), r.tb);
                };
              })(e),
            );
            var h = !!e.tb[Q.g.bd];
            delete e.tb[Q.g.bd];
            var l = um(f.da),
              n = l.V === l.id;
            h || (n ? (g.F = {}) : (g.I[f.da] = {}));
            (g.D && h) || ls(this, Q.g.Da, e.tb, f);
            g.D = !0;
            n ? J(e.tb, g.F) : (J(e.tb, g.I[f.da]), N(70));
            d = !0;
            break;
          case 'event':
            g = ks(this, f.da);
            e.Kd = {};
            La(
              f.h[0],
              (function (r) {
                return function (u, t) {
                  J(ab(u, t), r.Kd);
                };
              })(e),
            );
            ls(this, f.h[1], e.Kd, f);
            break;
          case 'get':
            g = ks(this, f.da);
            var p = {},
              q = ((p[Q.g.ab] = f.h[0]), (p[Q.g.ob] = f.h[1]), p);
            ls(this, Q.g.Ka, q, f);
        }
        this.h.shift();
        ms(this, f);
      }
      e = { tb: e.tb, Kd: e.Kd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var ms = function (a, b) {
      if ('require' !== b.type)
        if (b.da)
          for (var c = ks(a, b.da).B[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.B)
            if (a.B.hasOwnProperty(e)) {
              var f = a.B[e];
              if (f && f.B)
                for (var g = f.B[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    ns = function (a, b) {
      var c = es,
        d = J(b);
      J(ks(c, a).h, d);
      ks(c, a).h = d;
    },
    es = new js();
  var Re;
  var os = {},
    ps = {},
    qs = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { Pd: d.Pd, Md: d.Md }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf('-')) {
          if (((d.Pd = um(f)), d.Pd)) {
            var g = Rj();
            Ea(
              g,
              (function (q) {
                return function (r) {
                  return q.Pd.V === r;
                };
              })(d),
            )
              ? b.push(f)
              : c.push(f);
          }
        } else {
          var h = os[f] || [];
          d.Md = {};
          h.forEach(
            (function (q) {
              return function (r) {
                return (q.Md[r] = !0);
              };
            })(d),
          );
          for (var l = Qj(), n = 0; n < l.length; n++)
            if (d.Md[l[n]]) {
              b = b.concat(Rj());
              break;
            }
          var p = ps[f] || [];
          p.length && (b = b.concat(p));
        }
      }
      return { jk: b, mk: c };
    },
    rs = function (a) {
      La(os, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    ss = function (a) {
      La(ps, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var ts = 'HA GF G UA AW DC MC'.split(' '),
    us = !1,
    vs = !1;
  function ws(a, b) {
    a.hasOwnProperty('gtm.uniqueEventId') ||
      Object.defineProperty(a, 'gtm.uniqueEventId', { value: oh() });
    b.eventId = a['gtm.uniqueEventId'];
    b.priorityId = a['gtm.priorityId'];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var xs = {
      config: function (a, b) {
        var c = ws(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !uc(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = um(a[1]);
          if (e) {
            $n(c.eventId, 'gtag.config');
            var f = e.V,
              g = e.id !== f;
            if (g ? -1 === Rj().indexOf(f) : -1 === Qj().indexOf(f)) {
              var h = d[Q.g.wa] || es.D[Q.g.wa];
              g
                ? Cq(f, h, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  })
                : Bq(f, h, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
            } else {
              if (ah && !g && !d[Q.g.bd]) {
                var l = vs;
                vs = !0;
                if (l) return;
              }
              us || N(43);
              if (!b.noTargetGroup)
                if (g) {
                  ss(e.id);
                  var n = e.id,
                    p = d[Q.g.he] || 'default';
                  p = String(p).split(',');
                  for (var q = 0; q < p.length; q++) {
                    var r = ps[p[q]] || [];
                    ps[p[q]] = r;
                    0 > r.indexOf(n) && r.push(n);
                  }
                } else {
                  rs(e.id);
                  var u = e.id,
                    t = d[Q.g.he] || 'default';
                  t = t.toString().split(',');
                  for (var v = 0; v < t.length; v++) {
                    var w = os[t[v]] || [];
                    os[t[v]] = w;
                    0 > w.indexOf(u) && w.push(u);
                  }
                }
              delete d[Q.g.he];
              var y = b.eventMetadata || {};
              y.hasOwnProperty('is_external_event') ||
                (y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = y;
              delete d[Q.g.fc];
              for (var x = g ? [e.id] : Rj(), A = 0; A < x.length; A++) {
                var B = J(b);
                es.push('config', [d], x[A], B);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          N(39);
          var c = ws(a, b),
            d = a[1];
          'default' === d ? gj(a[2]) : 'update' === d && ij(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!uc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = J(e)),
            e[Q.g.fc] && (g.eventCallback = e[Q.g.fc]),
            e[Q.g.be] && (g.eventTimeout = e[Q.g.be]));
          var h = ws(a, b),
            l = h.eventId,
            n = h.priorityId;
          g['gtm.uniqueEventId'] = l;
          n && (g['gtm.priorityId'] = n);
          if ('optimize.callback' === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[Q.g.Jb];
          void 0 === r &&
            ((r = uh(Q.g.Jb, 2)), void 0 === r && (r = 'default'));
          if (k(r) || Da(r)) {
            var u = r.toString().replace(/\s+/g, '').split(','),
              t = qs(u),
              v = t.jk,
              w = t.mk;
            if (w.length)
              for (
                var y = (q && q[Q.g.wa]) || es.D[Q.g.wa], x = 0;
                x < w.length;
                x++
              ) {
                var A = um(w[x]);
                A &&
                  Cq(A.V, y, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = wm(v);
          } else p = void 0;
          var B = p;
          if (B) {
            $n(l, c);
            for (var C = [], F = 0; F < B.length; F++) {
              var G = B[F],
                D = J(b);
              if (-1 !== ts.indexOf(G.prefix)) {
                var K = J(d),
                  P = D.eventMetadata || {};
                P.hasOwnProperty('is_external_event') ||
                  (P.is_external_event = !D.fromContainerExecution);
                D.eventMetadata = P;
                delete K[Q.g.fc];
                fs(c, K, G.id, D);
              }
              C.push(G.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[Q.g.Jb] = C.join())
              : delete g.eventModel[Q.g.Jb];
            us || N(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        N(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Ba(a[3])) {
          var c = um(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            us || N(43);
            var f = es.D[Q.g.wa];
            if (
              !Ea(Rj(), function (h) {
                return c.V === h;
              })
            )
              Cq(c.V, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== ts.indexOf(c.prefix)) {
              ws(a, b);
              var g = {};
              cj(J(((g[Q.g.ab] = d), (g[Q.g.ob] = e), g)));
              gs(
                d,
                function (h) {
                  I(function () {
                    return e(h);
                  });
                },
                c.id,
                b,
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          us = !0;
          var c = ws(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = 'gtm.js'),
            (f['gtm.start'] = a[1].getTime()),
            (f['gtm.uniqueEventId'] = d),
            (f['gtm.priorityId'] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Ba(a[2])) {
          var b = a[1],
            c = a[2],
            d = Re.B;
          d.h[b] ? d.h[b].push(c) : (d.h[b] = [c]);
          if ((N(74), 'all' === a[1])) {
            N(75);
            var e = !1;
            try {
              e = a[2](Ne.R, 'unknown', {});
            } catch (f) {}
            e || N(76);
          }
        } else {
          N(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && uc(a[1])
          ? (c = J(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            uc(a[2]) || Da(a[2]) ? (c[a[1]] = J(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = ws(a, b),
            e = d.eventId,
            f = d.priorityId;
          J(c);
          var g = J(c);
          es.push('set', [g], void 0, b);
          c['gtm.uniqueEventId'] = e;
          f && (c['gtm.priorityId'] = f);
          ig(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    ys = { policy: !0 };
  var zs = function (a) {
      var b = m[Ug.ma].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    As = function (a) {
      var b = m[Ug.ma],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Bs = !1,
    Cs = [];
  function Ds() {
    if (!Bs) {
      Bs = !0;
      for (var a = 0; a < Cs.length; a++) I(Cs[a]);
    }
  }
  var Es = function (a) {
    Bs ? I(a) : Cs.push(a);
  };
  var tt = function (a) {
    if (st(a)) return a;
    this.Ya = a;
  };
  tt.prototype.getUntrustedMessageValue = function () {
    return this.Ya;
  };
  var st = function (a) {
    return !a || 'object' !== sc(a) || uc(a)
      ? !1
      : 'getUntrustedMessageValue' in a;
  };
  tt.prototype.getUntrustedMessageValue = tt.prototype.getUntrustedMessageValue;
  var ut = 0,
    vt = {},
    wt = [],
    xt = [],
    yt = !1,
    zt = !1;
  function At(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Bt = function (a) {
      return m[Ug.ma].push(a);
    },
    Ct = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Bt(a);
    },
    Dt = function (a, b) {
      var c = Vg[Ug.ma],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = m.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (m.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Et(a, b) {
    var c = a._clear || b.overwriteModelFields;
    La(a, function (e, f) {
      '_clear' !== e && (c && xh(e), xh(e, f));
    });
    kh || (kh = a['gtm.start']);
    var d = a['gtm.uniqueEventId'];
    if (!a.event) return !1;
    'number' !== typeof d &&
      ((d = oh()), (a['gtm.uniqueEventId'] = d), xh('gtm.uniqueEventId', d));
    return ds(a);
  }
  function Ft(a) {
    if (null == a || 'object' !== typeof a) return !1;
    if (a.event) return !0;
    if (Ma(a)) {
      var b = a[0];
      if ('config' === b || 'event' === b || 'js' === b || 'get' === b)
        return !0;
    }
    return !1;
  }
  function Gt() {
    var a;
    if (xt.length) a = xt.shift();
    else if (wt.length) a = wt.shift();
    else return;
    var b;
    var c = a;
    if (yt || !Ft(c.message)) b = c;
    else {
      yt = !0;
      var d = c.message['gtm.uniqueEventId'];
      'number' !== typeof d && (d = c.message['gtm.uniqueEventId'] = oh());
      var e = {},
        f = {
          message:
            ((e.event = 'gtm.init_consent'),
            (e['gtm.uniqueEventId'] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = 'gtm.init'), (g['gtm.uniqueEventId'] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      wt.unshift(h, c);
      if (on && Ne.R) {
        var l;
        if (Ne.zh) {
          var n = Ne.R,
            p = Tj().destination[n];
          l = p && p.context;
        } else {
          var q = Ne.R,
            r = Tj().container[q];
          l = r && r.context;
        }
        var u = l,
          t,
          v = ai(m.location.href);
        t = v.hostname + v.pathname;
        var w = u && u.fromContainerExecution,
          y = u && u.source,
          x = Ne.R,
          A = Ne.Yb,
          B = Ne.zh;
        An || (An = t);
        zn.push(
          x + ';' + A + ';' + (w ? 1 : 0) + ';' + (y || 0) + ';' + (B ? 1 : 0),
        );
      }
      b = f;
    }
    return b;
  }
  function Ht() {
    for (var a = !1, b; !zt && (b = Gt()); ) {
      zt = !0;
      delete rh.eventModel;
      th();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) zt = !1;
      else {
        e.fromContainerExecution && yh();
        try {
          if (Ba(d))
            try {
              d.call(vh);
            } catch (v) {}
          else if (Da(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split('.'),
                h = g.pop(),
                l = f.slice(1),
                n = uh(g.join('.'), 2);
              if (null != n)
                try {
                  n[h].apply(n, l);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (Ma(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var q = xs[d[0]];
                  if (q && (!e.fromContainerExecution || !ys[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              p && 'set' === d[0] && p.event && N(101);
            } else p = d;
            p && (a = Et(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && th(!0);
          var r = d['gtm.uniqueEventId'];
          if ('number' === typeof r) {
            for (var u = vt[String(r)] || [], t = 0; t < u.length; t++)
              xt.push(It(u[t]));
            u.length && xt.sort(At);
            delete vt[String(r)];
            r > ut && (ut = r);
          }
          zt = !1;
        }
      }
    }
    return !a;
  }
  function Jt() {
    var b = Ht();
    try {
      zs(Ne.R);
    } catch (c) {}
    return b;
  }
  function Ir(a) {
    if (ut < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      vt[b] = vt[b] || [];
      vt[b].push(a);
    } else
      xt.push(It(a)),
        xt.sort(At),
        I(function () {
          zt || Ht();
        });
  }
  function It(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Lt = function () {
      function a(f) {
        var g = {};
        if (st(f)) {
          var h = f;
          f = st(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Ob(Ug.ma, []),
        c = (Vg[Ug.ma] = Vg[Ug.ma] || {});
      !0 === c.pruned && N(83);
      vt = Gr().get();
      Jr();
      Wq(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = 'gtm.dom'), f));
        }
      });
      Es(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = 'gtm.load'), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Vg.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new tt(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        wt.push.apply(wt, h);
        var l = d.apply(b, f),
          n = Math.max(100, Number('1000') || 300);
        if (this.length > n)
          for (N(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = 'boolean' !== typeof l || l;
        return Ht() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      wt.push.apply(wt, e);
      if (Kt()) {
        I(Jt);
      }
    },
    Kt = function () {
      var a = !0;
      return a;
    };
  function Mt(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Sa();
    return b < c + 3e5 && b > c - 9e5;
  }
  var se = {};
  se.pe = new String('undefined');
  var Pt = function (a, b, c) {
      var d = {
        event: b,
        'gtm.element': a,
        'gtm.elementClasses': dc(a, 'className'),
        'gtm.elementId': a['for'] || Zb(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || dc(a, 'target') || '',
      };
      c && (d['gtm.triggers'] = c.join(','));
      d['gtm.elementUrl'] =
        (a.attributes && a.attributes.formaction ? a.formAction : '') ||
        a.action ||
        dc(a, 'href') ||
        a.src ||
        a.code ||
        a.codebase ||
        '';
      return d;
    },
    Qt = function (a) {
      Vg.hasOwnProperty('autoEventsSettings') || (Vg.autoEventsSettings = {});
      var b = Vg.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Rt = function (a, b, c) {
      Qt(a)[b] = c;
    },
    St = function (a, b, c, d) {
      var e = Qt(a),
        f = Ta(e, b, d);
      e[b] = c(f);
    },
    Tt = function (a, b, c) {
      var d = Qt(a);
      return Ta(d, b, c);
    },
    Ut = function (a) {
      return 'string' === typeof a ? a : String(oh());
    };
  var nu = m.clearTimeout,
    ou = m.setTimeout,
    S = function (a, b, c, d) {
      if (Oj()) {
        b && I(b);
      } else return Tb(a, b, c, d);
    },
    pu = function () {
      return new Date();
    },
    qu = function () {
      return m.location.href;
    },
    ru = function (a) {
      return Zh(ai(a), 'fragment');
    },
    su = function (a) {
      return $h(ai(a));
    },
    tu = function (a, b) {
      return uh(a, b || 2);
    },
    uu = function (a, b, c) {
      return b ? Ct(a, b, c) : Bt(a);
    },
    vu = function (a, b) {
      m[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    wu = function (a, b, c) {
      return vj(a, b, void 0 === c ? !0 : !!c);
    },
    xu = function (a, b, c) {
      return 0 === Ej(a, b, c);
    },
    yu = function (a, b) {
      if (Oj()) {
        b && I(b);
      } else Vb(a, b);
    },
    zu = function (a) {
      return !!Tt(a, 'init', !1);
    },
    Au = function (a) {
      Rt(a, 'init', !0);
    },
    Bu = function (a, b, c) {
      on && (yc(a) || jo(c, b, a));
    };
  var Zu = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector',
  ];
  function $u(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var av = new Ja();
  function bv(a, b, c) {
    var d = c ? 'i' : void 0;
    try {
      var e = String(b) + d,
        f = av.get(e);
      f || ((f = new RegExp(b, d)), av.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function cv(a, b) {
    function c(g) {
      var h = ai(g),
        l = Zh(h, 'protocol'),
        n = Zh(h, 'host', !0),
        p = Zh(h, 'port'),
        q = Zh(h, 'path').toLowerCase().replace(/\/$/, '');
      if (
        void 0 === l ||
        ('http' === l && '80' === p) ||
        ('https' === l && '443' === p)
      )
        (l = 'web'), (p = 'default');
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function dv(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function ev(a, b) {
    return String(a) === String(b);
  }
  function fv(a, b) {
    return Number(a) >= Number(b);
  }
  function gv(a, b) {
    return Number(a) <= Number(b);
  }
  function hv(a, b) {
    return Number(a) > Number(b);
  }
  function iv(a, b) {
    return Number(a) < Number(b);
  }
  function jv(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  function kv(a) {
    return lv(a) ? 1 : 0;
  }
  function lv(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = J(a, {});
        J({ arg1: c[d], any_of: void 0 }, e);
        if (kv(e)) return !0;
      }
      return !1;
    }
    switch (a['function']) {
      case '_cn':
        return dv(b, c);
      case '_css':
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Zu.length; g++) {
                var h = Zu[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (l) {}
          f = !1;
        }
        return f;
      case '_ew':
        return $u(b, c);
      case '_eq':
        return ev(b, c);
      case '_ge':
        return fv(b, c);
      case '_gt':
        return hv(b, c);
      case '_lc':
        return 0 <= String(b).split(',').indexOf(String(c));
      case '_le':
        return gv(b, c);
      case '_lt':
        return iv(b, c);
      case '_re':
        return bv(b, c, a.ignore_case);
      case '_sw':
        return jv(b, c);
      case '_um':
        return cv(b, c);
    }
    return !1;
  }
  function mv(a, b) {
    var c = this;
  }
  mv.P = 'addConsentListener';
  var nv;
  var ov = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (nv)
        try {
          a[b]();
        } catch (c) {
          N(77);
        }
      else a[b]();
  };
  function pv(a, b, c) {
    var d = this,
      e;
    L(
      E(this),
      ['eventName:!string', 'callback:!Fn', 'triggerId:?string'],
      arguments,
    ),
      ov([
        function () {
          return M(d, 'listen_data_layer', a);
        },
      ]),
      (e = Zr().B(a, wc(b), c));
    return e;
  }
  pv.O = 'internal.addDataLayerEventListener';
  function qv(a, b, c) {}
  qv.P = 'addDocumentEventListener';
  function rv(a, b, c, d) {}
  rv.P = 'addElementEventListener';
  function sv(a) {}
  sv.P = 'addEventCallback';
  function wv(a) {}
  wv.O = 'internal.addFormAbandonmentListener';
  var xv = {},
    yv = [],
    zv = {},
    Av = 0,
    Bv = 0;
  function Iv(a, b) {}
  Iv.O = 'internal.addFormInteractionListener';
  function Pv(a, b) {}
  Pv.O = 'internal.addFormSubmitListener';
  function Uv(a) {}
  Uv.O = 'internal.addGaSendListener';
  var Vv = {},
    Wv = [];
  var cw = function (a, b) {};
  cw.O = 'internal.addHistoryChangeListener';
  function dw(a, b, c) {}
  dw.P = 'addWindowEventListener';
  function ew(a, b) {
    return !0;
  }
  ew.P = 'aliasInWindow';
  function fw(a, b, c) {
    L(E(this), ['targetId:!string', 'name:!string', 'value:!*'], arguments);
    for (var d = b.split('.'), e = ks(es, a).h, f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};
      else if (!uc(e[d[f]]))
        throw Error(
          'apendRemoteConfigParameter failed, path contains a non-object type: ' +
            d[f],
        );
      e = e[d[f]];
    }
    if (void 0 === e[d[f]]) e[d[f]] = [];
    else if (!Da(e[d[f]]))
      throw Error(
        'appendRemoteConfigParameter failed, destination is not an array: ' +
          d[f],
      );
    e[d[f]].push(wc(c, this.h));
  }
  fw.O = 'internal.appendRemoteConfigParameter';
  function gw() {
    var a = 2;
    return a;
  }
  function hw(a, b) {
    var c;
    return c;
  }
  hw.P = 'callInWindow';
  function iw(a) {}
  iw.P = 'callLater';
  function jw(a) {}
  jw.O = 'callOnDomReady';
  function kw(a) {}
  kw.O = 'callOnWindowLoad';
  function lw(a) {
    var b;
    return b;
  }
  lw.O = 'internal.computeGtmParameter';
  function mw(a, b) {
    var c;
    var d = vc(c, this.h, gw());
    void 0 === d && void 0 !== c && N(45);
    return d;
  }
  mw.P = 'copyFromDataLayer';
  function nw(a) {
    var b;
    return b;
  }
  nw.P = 'copyFromWindow';
  function ow(a, b) {
    var c;
    L(E(this), ['preHit:!DustMap', 'omitHitData:?boolean'], arguments);
    var d = wc(a, this.h, 1).getProcessedEvent(),
      e = new Km(d.target, d.eventName, d.s);
    b || J(d.C, e.C);
    J(d.metadata, e.metadata);
    e.K = d.K;
    c = vc(Nm(e), this.h, 1);
    return c;
  }
  ow.O = 'internal.copyPreHit';
  function pw(a, b) {
    var c = null,
      d = gw();
    return vc(c, this.h, d);
  }
  pw.P = 'createArgumentsQueue';
  function qw(a) {
    var b;
    return vc(b, this.h, gw());
  }
  qw.P = 'createQueue';
  var rw = {},
    sw = [],
    tw = {},
    uw = 0,
    vw = 0;
  function Bw(a, b) {
    var c = this;
    return b;
  }
  Bw.O = 'internal.enableAutoEventOnFormInteraction';
  function Gw(a, b) {
    var c = this;
    return b;
  }
  Gw.O = 'internal.enableAutoEventOnFormSubmit';
  function Lw() {
    var a = this;
  }
  Lw.O = 'internal.enableAutoEventOnGaSend';
  var Mw = {},
    Nw = [];
  var Pw = function (a, b) {
      var c = '' + b;
      if (Mw[c]) Mw[c].push(a);
      else {
        var d = [a];
        Mw[c] = d;
        var e = Ow(),
          f = -1;
        Nw.push(function (g) {
          0 <= f && m.clearTimeout(f);
          b
            ? (f = m.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    Ow = function () {
      var a = m.location.href,
        b = {
          source: null,
          state: m.history.state || null,
          url: $h(ai(a)),
          U: Zh(ai(a), 'fragment'),
        };
      return function (c, d) {
        var e = b,
          f = {};
        f[e.source] = !0;
        f[c.source] = !0;
        if (!f.popstate || !f.hashchange || e.U != c.U) {
          var g = {},
            h =
              ((g.event = 'gtm.historyChange-v2'),
              (g['gtm.historyChangeSource'] = c.source),
              (g['gtm.oldUrlFragment'] = b.U),
              (g['gtm.newUrlFragment'] = c.U),
              (g['gtm.oldHistoryState'] = b.state),
              (g['gtm.newHistoryState'] = c.state),
              (g['gtm.oldUrl'] = b.url),
              (g['gtm.newUrl'] = c.url),
              (g['gtm.triggers'] = d.join(',')),
              g);
          b = c;
          Bt(h);
        }
      };
    },
    Qw = function (a, b) {
      var c = m.history,
        d = c[a];
      if (Ba(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var h = m.location.href;
            b({
              source: a,
              state: e,
              url: $h(ai(h)),
              U: Zh(ai(h), 'fragment'),
            });
          };
        } catch (e) {}
    },
    Sw = function (a) {
      m.addEventListener('popstate', function (b) {
        var c = Rw(b);
        a({
          source: 'popstate',
          state: b.state,
          url: $h(ai(c)),
          U: Zh(ai(c), 'fragment'),
        });
      });
    },
    Tw = function (a) {
      m.addEventListener('hashchange', function (b) {
        var c = Rw(b);
        a({
          source: 'hashchange',
          state: null,
          url: $h(ai(c)),
          U: Zh(ai(c), 'fragment'),
        });
      });
    },
    Rw = function (a) {
      return a.target && a.target.location && a.target.location.href
        ? a.target.location.href
        : m.location.href;
    };
  function Uw(a, b) {
    var c = this;
    L(E(this), ['options:?DustMap', 'triggerId:?*'], arguments);
    ov([
      function () {
        return M(c, 'process_dom_events', 'window', 'popstate');
      },
      function () {
        return M(c, 'process_dom_events', 'window', 'pushstate');
      },
    ]);
    b = Ut(b);
    var d = Number(a && a.get('interval'));
    (0 < d && isFinite(d)) || (d = 0);
    if (Tt('ehl', 'init', !1)) {
      var e = Tt('ehl', 'reg');
      e && e(b, d);
    } else {
      var f = function (g) {
        for (var h = 0; h < Nw.length; h++) Nw[h](g);
      };
      Tw(f);
      Sw(f);
      Qw('pushState', f);
      Qw('replaceState', f);
      Pw(b, d);
      Rt('ehl', 'reg', Pw);
      Rt('ehl', 'init', !0);
    }
    return b;
  }
  Uw.O = 'internal.enableAutoEventOnHistoryChange';
  var Vw = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = dc(b, 'href'),
        d = c.indexOf('#'),
        e = dc(b, 'target');
      if ((e && '_self' !== e && '_parent' !== e && '_top' !== e) || 0 === d)
        return !1;
      if (0 < d) {
        var f = $h(ai(c)),
          g = $h(ai(m.location.href));
        return f !== g;
      }
      return !0;
    },
    Ww = function (a, b) {
      for (
        var c = Zh(
            ai(
              (b.attributes && b.attributes.formaction ? b.formAction : '') ||
                b.action ||
                dc(b, 'href') ||
                b.src ||
                b.code ||
                b.codebase ||
                '',
            ),
            'host',
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    Xw = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (
            d &&
            3 !== c.which &&
            !(c.Sf || (c.timeStamp && c.timeStamp === a))
          ) {
            a = c.timeStamp;
            d = bc(d, ['a', 'area'], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || !1 === c.returnValue,
              f = Tt('aelc', e ? 'nv.mwt' : 'mwt', 0),
              g;
            g = e ? Tt('aelc', 'nv.ids', []) : Tt('aelc', 'ids', []);
            for (var h = [], l = 0; l < g.length; l++) {
              var n = g[l],
                p = Tt('aelc', 'aff.map', {})[n];
              (p && !Ww(p, d)) || h.push(n);
            }
            if (h.length) {
              var q = Vw(c, d),
                r = Pt(d, 'gtm.linkClick', h);
              r['gtm.elementText'] = $b(d);
              r['gtm.willOpenInNewWindow'] = !q;
              if (q && !e && f && d.href) {
                var u = !!Ea(
                  String(dc(d, 'rel') || '').split(' '),
                  function (y) {
                    return 'noreferrer' === y.toLowerCase();
                  },
                );
                u && N(36);
                var t = m[(dc(d, 'target') || '_self').substring(1)],
                  v = !0,
                  w = Dt(function () {
                    var y;
                    if ((y = v && t)) {
                      var x;
                      a: if (u) {
                        var A;
                        try {
                          A = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (B) {
                          if (!H.createEvent) {
                            x = !1;
                            break a;
                          }
                          A = H.createEvent('MouseEvents');
                          A.initEvent(c.type, !0, !0);
                        }
                        A.Sf = !0;
                        c.target.dispatchEvent(A);
                        x = !0;
                      } else x = !1;
                      y = !x;
                    }
                    y && (t.location.href = dc(d, 'href'));
                  }, f);
                if (Ct(r, w, f)) v = !1;
                else
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
              } else Ct(r, function () {}, f || 2e3);
              return !0;
            }
          }
        };
      Xb(H, 'click', b, !1);
      Xb(H, 'auxclick', b, !1);
    };
  function Yw(a, b) {
    var c = this;
    L(E(this), ['dustOptions:?DustMap', 'triggerId:?*'], arguments);
    ov([
      function () {
        return M(c, 'process_dom_events', 'document', 'click');
      },
      function () {
        return M(c, 'process_dom_events', 'document', 'auxclick');
      },
    ]);
    var d = wc(a),
      e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = Ut(b);
    if (e) {
      var h = Number(d.waitForTagsTimeout);
      (0 < h && isFinite(h)) || (h = 2e3);
      var l = function (p) {
        return Math.max(h, p);
      };
      St('aelc', 'mwt', l, 0);
      f || St('aelc', 'nv.mwt', l, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    St('aelc', 'ids', n, []);
    f || St('aelc', 'nv.ids', n, []);
    g &&
      St(
        'aelc',
        'aff.map',
        function (p) {
          p[b] = g;
          return p;
        },
        {},
      );
    Tt('aelc', 'init', !1) || (Xw(), Rt('aelc', 'init', !0));
    return b;
  }
  Yw.O = 'internal.enableAutoEventOnLinkClick';
  var Zw, $w;
  function ix(a, b) {
    var c = this;
    return b;
  }
  ix.O = 'internal.enableAutoEventOnScroll';
  var Gb = ca(['data-gtm-yt-inspected-']),
    jx = ['www.youtube.com', 'www.youtube-nocookie.com'],
    kx,
    lx = !1;
  function vx(a, b) {
    var c = this;
    return b;
  }
  vx.O = 'internal.enableAutoEventOnYouTubeActivity';
  function wx(a, b) {
    var c = !1;
    L(E(this), ['booleanExpression:!string', 'context:?DustMap'], arguments);
    var d = JSON.parse(a);
    if (!d) throw Error('Invalid boolean expression string was given.');
    var e = b ? wc(b) : {};
    c = xx(d, e);
    return c;
  }
  var yx = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        if (void 0 === a) return;
        a = a[b[c]];
      }
      return a;
    },
    zx = function (a, b) {
      if (1 === a.namespace_type) {
        var c = b.preHit;
        if (!c) return;
        var d = a.key_parts;
        if (!d || 0 === d.length) return;
        var e = d[0];
        switch (e) {
          case 'hitData':
            return 2 > d.length ? void 0 : yx(c.getHitData(d[1]), d.slice(2));
          case 'metadata':
            return 2 > d.length ? void 0 : yx(c.getMetadata(d[1]), d.slice(2));
          case 'eventName':
            return c.getEventName();
          case 'destinationId':
            return c.getDestinationId();
          default:
            throw Error(
              e +
                ' is not a valid field that can be accessed\n                        from PreHit data.',
            );
        }
      }
      throw Error(
        'Unknown Namespace Type used:\n                      ' +
          a.namespace_type,
      );
    },
    Ax = function (a, b) {
      if (a) {
        if (void 0 !== a.context_value) return zx(a.context_value, b);
        if (void 0 !== a.boolean_expression_value)
          return xx(a.boolean_expression_value, b);
        if (void 0 !== a.boolean_value) return !!a.boolean_value;
        if (void 0 !== a.string_value) return String(a.string_value);
        if (void 0 !== a.integer_value) return Number(a.integer_value);
        if (void 0 !== a.double_value) return Number(a.double_value);
        throw Error(
          'Unknown field used for variable of type ExpressionValue:' + a,
        );
      }
    },
    xx = function (a, b) {
      var c = a.args;
      if (!Da(c) || 0 === c.length)
        throw Error(
          'Invalid boolean expression format. Expected "args":' +
            c +
            ' property to\n         be non-empty array.',
        );
      var d = function (g) {
        return Ax(g, b);
      };
      switch (a.type) {
        case 1:
          for (var e = 0; e < c.length; e++) if (d(c[e])) return !0;
          return !1;
        case 2:
          for (var f = 0; f < c.length; f++) if (!d(c[f])) return !1;
          return 0 < c.length;
        case 3:
          return !d(c[0]);
        case 4:
          return bv(d(c[0]), d(c[1]), !1);
        case 5:
          return ev(d(c[0]), d(c[1]));
        case 6:
          return jv(d(c[0]), d(c[1]));
        case 7:
          return $u(d(c[0]), d(c[1]));
        case 8:
          return dv(d(c[0]), d(c[1]));
        case 9:
          return iv(d(c[0]), d(c[1]));
        case 10:
          return gv(d(c[0]), d(c[1]));
        case 11:
          return hv(d(c[0]), d(c[1]));
        case 12:
          return fv(d(c[0]), d(c[1]));
        default:
          throw Error(
            'Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.',
          );
      }
    };
  wx.O = 'internal.evaluateBooleanExpression';
  var Bx;
  function Cx(a) {
    var b = !1;
    return b;
  }
  Cx.O = 'internal.evaluateMatchingRules';
  var Ex = function (a, b, c) {
      if (c)
        switch (c.type) {
          case 'event_name':
            return a;
          case 'const':
            return c.const_value;
          case 'event_param':
            var d = c.event_param.param_name;
            if (d === Q.g.hf) return Dx(b);
            return b[d];
        }
    },
    Ix = function (a, b, c, d) {
      Fx = !1;
      if (c && !Gx(a, b, c)) return !1;
      if (!d || 0 === d.length) return !0;
      for (var e = 0; e < d.length; e++)
        if (Hx(a, b, d[e].predicates || [])) return !0;
      return !1;
    },
    Hx = function (a, b, c) {
      for (var d = 0; d < c.length; d++) if (!Gx(a, b, c[d])) return !1;
      return !0;
    },
    Gx = function (a, b, c) {
      var d = c.values || [],
        e = Ex(a, b, d[0]),
        f = Ex(a, b, d[1]),
        g = c.type;
      if ('eqi' === g || 'swi' === g || 'ewi' === g || 'cni' === g)
        k(e) && (e = e.toLowerCase()), k(f) && (f = f.toLowerCase());
      var h = !1;
      switch (g) {
        case 'eq':
        case 'eqi':
          h = ev(e, f);
          break;
        case 'sw':
        case 'swi':
          h = jv(e, f);
          break;
        case 'ew':
        case 'ewi':
          h = $u(e, f);
          break;
        case 'cn':
        case 'cni':
          h = dv(e, f);
          break;
        case 'lt':
          h = iv(e, f);
          break;
        case 'le':
          h = gv(e, f);
          break;
        case 'gt':
          h = hv(e, f);
          break;
        case 'ge':
          h = fv(e, f);
          break;
        case 're':
        case 'rei':
          h = bv(e, f, 'rei' === g);
      }
      return !!c.negate !== h;
    },
    Fx = !1;
  var Dx = function (a) {
    var b = a[Q.g.hf];
    if (b) return b;
    Fx = !0;
    var c = a[Q.g.Ra];
    if (k(c)) {
      if (Ba(URL))
        try {
          return new URL(c).pathname;
        } catch (e) {
          return;
        }
      var d = ai(c);
      return d.hostname ? Zh(d, 'path') : void 0;
    }
  };
  function Jx(a, b) {
    var c = !1;
    return c;
  }
  Jx.O = 'internal.evaluatePredicates';
  var Kx = function (a) {
    var b;
    return b;
  };
  function Lx(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  Lx.P = 'getCookieValues';
  function Mx() {
    return Hi.Gf;
  }
  Mx.O = 'internal.getCountryCode';
  function Nx() {
    var a = [];
    a = Rj();
    return vc(a);
  }
  Nx.O = 'internal.getDestinationIds';
  function Ox(a) {
    var b = null;
    return b;
  }
  Ox.P = 'getElementById';
  var Px = {};
  Px.disablePinterestEnhancedMatch = ig(42);
  Px.enableAdsHistoryChangeEvents = ig(36);
  Px.enableAlwaysSendFormStart = ig(38);
  Px.enableCcdEnhancedMeasurement = ig(41);
  Px.enableCcdEventBlocking = ig(40);
  Px.enableCcdEventEditingAndCreation = ig(26);
  Px.enableCcdGaConversions = ig(39);
  Px.enableCcdUserData = ig(16);
  Px.enableEesPagePath = ig(43);
  Px.enableEmFormCcd = ig(35);
  Px.enableEmFormCcdPart2 = ig(31) || ig(33);
  Px.enableEuidAutoMode = ig(37);
  Px.enableGa4OnoRemarketing = ig(34);
  Px.enableHashedFieldsInEc = ig(14);
  Px.enableSendGtagEventId = ig(44);
  function Qx() {
    return vc(Px);
  }
  Qx.O = 'internal.getFlags';
  function Rx(a, b) {
    var c;
    L(E(this), ['targetId:!string', 'name:!string'], arguments);
    var d = Kh(a) || {};
    c = vc(d[b], this.h);
    return c;
  }
  Rx.O = 'internal.getProductSettingsParameter';
  function Sx(a, b) {
    var c;
    return c;
  }
  Sx.P = 'getQueryParameters';
  function Tx(a, b) {
    var c;
    return c;
  }
  Tx.P = 'getReferrerQueryParameters';
  function Ux(a) {
    var b = '';
    return b;
  }
  Ux.P = 'getReferrerUrl';
  function Vx() {
    return Hi.ei;
  }
  Vx.O = 'internal.getRegionCode';
  function Wx(a, b) {
    var c;
    L(E(this), ['targetId:!string', 'name:!string'], arguments);
    var d = ks(es, a).h;
    c = vc(d[b], this.h);
    return c;
  }
  Wx.O = 'internal.getRemoteConfigParameter';
  function Xx(a) {
    var b = '';
    L(E(this), ['component:?string'], arguments),
      M(this, 'get_url', a),
      (b = Zh(ai(m.location.href), a));
    return b;
  }
  Xx.P = 'getUrl';
  function Yx() {
    M(this, 'get_user_agent');
    return m.navigator.userAgent;
  }
  Yx.P = 'getUserAgent';
  function Zx(a) {
    if (!a) return {};
    var b = a.Fj;
    return Yq(b.type, b.index, b.name);
  }
  function $x(a) {
    return a ? { originatingEntity: Zx(a) } : {};
  }
  function by(a, b) {}
  by.P = 'gtagSet';
  function cy(a, b) {}
  cy.P = 'injectHiddenIframe';
  var dy = {};
  function fy(a, b, c, d) {}
  var gy = Object.freeze({ dl: 1, id: 1 }),
    hy = {};
  function iy(a, b, c, d) {}
  fy.P = 'injectScript';
  iy.O = 'internal.injectScript';
  function jy(a) {
    var b = !0;
    return b;
  }
  jy.P = 'isConsentGranted';
  var ky = function () {
    var a = Pf(function (b) {
      this.h.h.log('error', b);
    });
    a.P = 'JSON';
    return a;
  };
  var ly = function () {
      return !1;
    },
    my = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var ny = ['textContent', 'value', 'tagName', 'children', 'childElementCount'];
  function oy(a) {
    var b;
    return b;
  }
  oy.O = 'internal.locateUserData';
  function qy() {}
  qy.P = 'logToConsole';
  function ry(a) {
    var b = void 0;
    if ('function' === typeof URL) {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (w) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g][0],
            l = f[g][1];
          e.hasOwnProperty(h)
            ? 'string' === typeof e[h]
              ? (e[h] = [e[h], l])
              : e[h].push(l)
            : (e[h] = l);
        }
        c = vc({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = ai(a);
    } catch (w) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace('?', '').split('&'), r = 0;
        r < q.length;
        r++
      ) {
        var u = q[r].split('='),
          t = u[0],
          v = decodeURIComponent(u.splice(1).join('='));
        p.hasOwnProperty(t)
          ? 'string' === typeof p[t]
            ? (p[t] = [p[t], v])
            : p[t].push(v)
          : (p[t] = v);
      }
    n.searchParams = p;
    n.origin = n.protocol + '//' + n.host;
    n.username = '';
    n.password = '';
    b = vc(n);
    return b;
  }
  ry.P = 'parseUrl';
  function sy(a) {
    L(E(this), ['preHit:!DustMap'], arguments);
    var b = wc(a, this.h, 1).getProcessedEvent(),
      c = J(b.C),
      d = J(b.metadata);
    d.syn_or_mod = !0;
    var e = { eventMetadata: d },
      f = b.s.eventId,
      g = Er(b.target.V, b.eventName, c);
    Hr(g, f, e);
  }
  sy.O = 'internal.processAsNewEvent';
  function ty(a, b) {
    var c = !1;
    return c;
  }
  ty.P = 'queryPermission';
  function uy() {
    var a = '';
    return a;
  }
  uy.P = 'readCharacterSet';
  function vy() {
    var a = '';
    return a;
  }
  vy.P = 'readTitle';
  function wy(a, b) {
    var c = this;
    L(E(this), ['destinationId:!string', 'callback:!Fn'], arguments),
      Qm(a, function (d) {
        b.h(c.h, vc(d, c.h, 1));
      });
  }
  wy.O = 'internal.registerCcdCallback';
  var xy = Object.freeze(['config', 'event', 'get', 'set']);
  function yy(a, b, c) {}
  yy.O = 'internal.registerGtagCommandListener';
  function zy(a, b) {
    var c = !1;
    return c;
  }
  zy.O = 'internal.removeDataLayerEventListener';
  function Ay() {}
  Ay.P = 'resetDataLayer';
  var By = function (a) {
      var b = !1;
      return b;
    },
    Cy = function (a) {
      if (a.metadata.is_merchant_center) return !1;
      var b = R(a.s, Q.g.ce);
      return !((!0 !== b && 'true' !== b) || !R(a.s, Q.g.wa));
    },
    Dy = function (a) {
      var b = a.metadata.user_data;
      if (uc(b)) return b;
    },
    Ey = function (a, b) {
      var c = Mm(a, Q.g.ae, a.s.D[Q.g.ae]);
      if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName];
    };
  var Fy = !1,
    Gy = function (a) {
      var b = a.eventName === Q.g.Ic && Xi() && Cy(a),
        c = a.metadata.batch_on_navigation,
        d = a.metadata.is_conversion,
        e = a.metadata.is_session_start,
        f = a.metadata.create_dc_join,
        g = a.metadata.create_google_join,
        h = a.metadata.euid_mode_enabled && !!Dy(a);
      return !(!Mb.sendBeacon || d || h || e || f || g || b || (!c && Fy));
    };
  var Hy = function (a) {
    Jb('GA4_EVENT', a);
  };
  var Jy = function (a) {
      return !a || Iy.test(a) || Jg.hasOwnProperty(a);
    },
    Ky = function (a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
          var g = f.edit_param.param_name,
            h = Ex(a, b, f.edit_param.param_value),
            l;
          if (h) {
            var n = Number(h);
            l = isNaN(n) ? h : n;
          } else l = h;
          b[g] = l;
        } else f.delete_param && delete b[f.delete_param.param_name];
      }
    },
    Iy = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var Ly = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Sa();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.Uf() && (d = Sa() - b);
          return d + c;
        },
      };
    },
    My = function () {
      this.h = void 0;
      this.B = 0;
      this.isActive = this.isVisible = this.D = !1;
      this.I = this.F = void 0;
    };
  aa = My.prototype;
  aa.cj = function (a) {
    var b = this;
    if (!this.h) {
      this.D = H.hasFocus();
      this.isVisible = !H.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Xb(d, e, function (g) {
          b.h.stop();
          f(g);
          b.Uf() && b.h.start();
        });
      };
      c(m, 'focus', function () {
        b.D = !0;
      });
      c(m, 'blur', function () {
        b.D = !1;
      });
      c(m, 'pageshow', function (d) {
        b.isActive = !0;
        d.persisted && N(56);
        b.I && b.I();
      });
      c(m, 'pagehide', function () {
        b.isActive = !1;
        b.F && b.F();
      });
      c(H, 'visibilitychange', function () {
        b.isVisible = !H.hidden;
      });
      Cy(a) &&
        -1 === (Mb.userAgent || '').indexOf('Firefox') &&
        -1 === (Mb.userAgent || '').indexOf('FxiOS') &&
        c(m, 'beforeunload', function () {
          Fy = !0;
        });
      this.jg();
      this.B = 0;
    }
  };
  aa.jg = function () {
    this.B += this.Je();
    this.h = Ly(this);
    this.Uf() && this.h.start();
  };
  aa.Rk = function (a) {
    var b = this.Je();
    0 < b && (a.C[Q.g.Zd] = b);
  };
  aa.Tj = function (a) {
    a.C[Q.g.Zd] = void 0;
    this.jg();
    this.B = 0;
  };
  aa.Uf = function () {
    return this.D && this.isVisible && this.isActive;
  };
  aa.Qj = function () {
    return this.B + this.Je();
  };
  aa.Je = function () {
    return (this.h && this.h.get()) || 0;
  };
  aa.Ck = function (a) {
    this.F = a;
  };
  aa.fi = function (a) {
    this.I = a;
  };
  function Ny() {
    return (m.gaGlobal = m.gaGlobal || {});
  }
  var Oy = function () {
      var a = Ny();
      a.hid = a.hid || Ha();
      return a.hid;
    },
    Py = function (a, b) {
      var c = Ny();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Qy = function (a, b, c) {
      var d = a.metadata.client_id_source;
      if (void 0 === d || c <= d)
        (a.C[Q.g.wb] = b), (a.metadata.client_id_source = c);
    },
    Ty = function (a, b) {
      var c;
      var d = b.metadata.cookie_options,
        e = d.prefix + '_ga',
        f = Hk(d, void 0, void 0, Q.g.aa);
      if (!1 === R(b.s, Q.g.Gb) && Ry(b) === a) c = !0;
      else {
        var g = Mj(a, Sy[0], d.domain, d.path);
        c = 1 !== Ej(e, g, f);
      }
      return c;
    },
    Ry = function (a) {
      var b = a.metadata.cookie_options,
        c = b.prefix + '_ga',
        d = Lj(c, b.domain, b.path, Sy, Q.g.aa);
      if (!d) {
        var e = String(R(a.s, Q.g.Rc, ''));
        e && e != c && (d = Lj(e, b.domain, b.path, Sy, Q.g.aa));
      }
      return d;
    },
    Sy = ['GA1'],
    Uy = function (a, b) {
      var c = a.C[Q.g.wb];
      if (b && c === b) return c;
      if (c) {
        c = '' + c;
        if (!Ty(c, a)) return N(31), (a.K = !0), '';
        Py(c, jj(Q.g.aa));
        return c;
      }
      N(32);
      a.K = !0;
      return '';
    };
  var Xy = function (a, b, c) {
      if (!b) return a;
      if (!a) return b;
      var d = Vy(a);
      if (!d) return b;
      var e,
        f = Na(null != (e = R(c.s, Q.g.ad)) ? e : 30);
      if (
        !(Math.floor(c.metadata.event_start_timestamp_ms / 1e3) > d.yd + 60 * f)
      )
        return a;
      var g = Vy(b);
      if (!g) return a;
      g.Tb = d.Tb + 1;
      var h;
      return null != (h = Wy(g.sessionId, g.Tb, g.xc, g.yd, g.Vf, g.Rb, g.ld))
        ? h
        : b;
    },
    $y = function (a, b) {
      var c = b.metadata.cookie_options,
        d = Yy(b, c),
        e = Mj(a, Zy[0], c.domain, c.path);
      return (
        1 !==
        Ej(d, e, {
          Cb: Q.g.aa,
          domain: c.domain,
          path: c.path,
          expires: c.fb ? new Date(Sa() + 1e3 * c.fb) : void 0,
          flags: c.flags,
        })
      );
    },
    az = function (a) {
      var b = a.metadata.cookie_options;
      return Lj(Yy(a, b), b.domain, b.path, Zy, Q.g.aa);
    },
    Wy = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var h = [a, b, Na(c), d, e];
        h.push(f ? '1' : '0');
        h.push(g || '0');
        return h.join('.');
      }
    },
    Zy = ['GS1'],
    Yy = function (a, b) {
      return b.prefix + '_ga_' + a.target.M[0];
    },
    Vy = function (a) {
      if (a) {
        var b = a.split('.');
        if (!(5 > b.length || 7 < b.length))
          return (
            7 > b.length && N(67),
            {
              sessionId: b[0],
              Tb: Number(b[1]),
              xc: !!Number(b[2]),
              yd: Number(b[3]),
              Vf: Number(b[4] || 0),
              Rb: '1' === b[5],
              ld: '0' !== b[6] ? b[6] : void 0,
            }
          );
      }
    },
    bz = function (a) {
      return Wy(
        a.C[Q.g.zb],
        a.C[Q.g.ne],
        a.C[Q.g.me],
        Math.floor(a.metadata.event_start_timestamp_ms / 1e3),
        a.metadata.join_timer_sec || 0,
        !!a.metadata[Q.g.bf],
        a.C[Q.g.Vc],
      );
    };
  var cz = function (a) {
      var b = R(a.s, Q.g.za),
        c = a.s.D[Q.g.za];
      if (c === b) return c;
      var d = J(b);
      c && c[Q.g.Z] && (d[Q.g.Z] = (d[Q.g.Z] || []).concat(c[Q.g.Z]));
      return d;
    },
    dz = function (a, b) {
      var c = Bl(!0);
      return '1' !== c._up ? {} : { clientId: c[a], ii: c[b] };
    },
    ez = function (a, b, c) {
      var d = Bl(!0),
        e = d[b];
      e && (Qy(a, e, 2), Ty(e, a));
      var f = d[c];
      f && $y(f, a);
      return !(!e || !f);
    },
    fz = !1,
    gz = function (a) {
      var b = cz(a) || {},
        c = a.metadata.cookie_options,
        d = c.prefix + '_ga',
        e = Yy(a, c);
      Kl(b[Q.g.jc], !!b[Q.g.Z]) && ez(a, d, e) && (fz = !0);
      b[Q.g.Z] &&
        Hl(
          function () {
            var f = {},
              g = Ry(a);
            g && (f[d] = g);
            var h = az(a);
            h && (f[e] = h);
            var l = vj('FPLC', void 0, void 0, Q.g.aa);
            l.length && (f._fplc = l[0]);
            return f;
          },
          b[Q.g.Z],
          b[Q.g.Zc],
          !!b[Q.g.kc],
        );
    },
    iz = function (a) {
      if (!R(a.s, Q.g.pb)) return {};
      var b = a.metadata.cookie_options,
        c = b.prefix + '_ga',
        d = Yy(a, b);
      Il(function () {
        var e;
        if (jj('analytics_storage')) e = {};
        else {
          var f = {};
          e = ((f._up = '1'), (f[c] = a.C[Q.g.wb]), (f[d] = bz(a)), f);
        }
        return e;
      }, 1);
      return !jj('analytics_storage') && hz() ? dz(c, d) : {};
    },
    hz = function () {
      var a = Yh(m.location, 'host'),
        b = Yh(ai(H.referrer), 'host');
      return a && b
        ? a === b || 0 <= a.indexOf('.' + b) || 0 <= b.indexOf('.' + a)
          ? !0
          : !1
        : !1;
    },
    jz = function (a) {
      if (!a) return a;
      var b = String(a);
      b = Al(b);
      return (b = Al(b, '_ga'));
    };
  var kz = function () {
    var a = Sa(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function () {
      var e = Sa();
      e >= b && ((b = e + 864e5), (d = 5e3));
      if (1 > d) return !1;
      c = Math.min(c + ((e - a) / 1e3) * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var lz = function () {
      var a = !0;
      (Gk(7) && Gk(9) && Gk(10)) || (a = !1);
      return a;
    },
    mz = function () {
      var a = !0;
      (Gk(3) && Gk(4)) || (a = !1);
      return a;
    };
  var nz = function (a, b) {
      if (Cy(b)) {
        var c = rp();
        c && (a.us_privacy = c);
        var d = Fk();
        d && (a.gdpr = d);
        var e = Ek();
        e && (a.gdpr_consent = e);
      }
    },
    oz = function (a, b) {
      if (Xi()) {
        a.gcs = kj();
        var c = b.metadata.is_consent_update;
        c && (a.gcu = '1');
        if (Cy(b)) {
          Yi() && (a.gcd = 'G1' + ej(Vi));
          var d = R(b.s, Q.g.na);
          a.adr = void 0 !== d && !1 !== d ? '1' : '0';
          c && (a.gcut = Rg[b.metadata.consent_update_type || '']);
        }
      }
    },
    pz = function (a, b, c) {
      void 0 === c && (c = {});
      if ('object' === typeof b) for (var d in b) pz(a + '.' + d, b[d], c);
      else c[a] = b;
      return c;
    },
    sz = function (a) {
      if (a.metadata.is_merchant_center)
        return 'https://www.merchant-center-analytics.goog/mc/collect';
      var b = xq(R(a.s, Q.g.wa), '/g/collect');
      if (b) return b;
      var c = Mm(a, Q.g.xb, R(a.s, Q.g.xb));
      var d = R(a.s, Q.g.Kc);
      return c &&
        !Mm(a, Q.g.Yc, !1) &&
        !1 !== d &&
        lz() &&
        jj(Q.g.J) &&
        jj(Q.g.aa)
        ? qz()
        : rz();
    },
    tz = '',
    uz = !1;
  uz = !0;
  var vz = {};
  vz[Q.g.Zi] = 'tid';
  vz[Q.g.wb] = 'cid';
  vz[Q.g.Qa] = 'ul';
  vz[Q.g.cf] = '_fid';
  vz[Q.g.kf] = 'tt';
  vz[Q.g.ie] = 'ir';
  vz[Q.g.Ib] = 'sr';
  vz[Q.g.ic] = 'gdid';
  vz[Q.g.je] = '_rdi';
  vz[Q.g.Sg] = '_geo';
  vz[Q.g.yh] = 'gtm_up';
  vz[Q.g.xh] = '_glv';
  (vz[Q.g.lf] = 'uaa'),
    (vz[Q.g.nf] = 'uab'),
    (vz[Q.g.pf] = 'uafvl'),
    (vz[Q.g.kh] = 'uamb'),
    (vz[Q.g.qf] = 'uam'),
    (vz[Q.g.rf] = 'uap'),
    (vz[Q.g.sf] = 'uapv'),
    (vz[Q.g.tf] = 'uaw');
  var wz = {};
  wz[Q.g.zb] = 'sid';
  wz[Q.g.ne] = 'sct';
  wz[Q.g.me] = 'seg';
  wz[Q.g.Ra] = 'dl';
  wz[Q.g.Sa] = 'dr';
  wz[Q.g.nc] = 'dt';
  wz[Q.g.va] = 'cu';
  wz[Q.g.Aa] = 'uid';
  wz[Q.g.Td] = 'cc';
  wz[Q.g.Ud] = 'ci';
  wz[Q.g.Vd] = 'cm';
  wz[Q.g.Wd] = 'cn';
  wz[Q.g.Xd] = 'cs';
  wz[Q.g.Yd] = 'ck';
  var xz = {};
  xz[Q.g.Zd] = '_et';
  xz[Q.g.hc] = 'edid';
  var yz = {};
  yz[Q.g.Td] = 'cc';
  yz[Q.g.Ud] = 'ci';
  yz[Q.g.Vd] = 'cm';
  yz[Q.g.Wd] = 'cn';
  yz[Q.g.Xd] = 'cs';
  yz[Q.g.Yd] = 'ck';
  var zz = {},
    Az = Object.freeze(((zz[Q.g.ka] = !0), zz)),
    rz = function () {
      var a = 'www';
      uz && tz && (a = tz);
      return 'https://' + a + '.google-analytics.com/g/collect';
    },
    qz = function () {
      var a;
      uz && tz && (a = tz);
      return 'https://' + (a ? a + '.' : '') + 'analytics.google.com/g/collect';
    },
    Bz = function (a, b, c) {
      var d = {},
        e = {},
        f = {};
      d.v = '2';
      d.tid = a.target.V;
      d.gtm = Zj();
      d._p = Oy();
      c && (d.em = c);
      a.metadata.create_google_join && (d._gaz = 1);
      oz(d, a);
      nz(d, a);
      var g = a.C[Q.g.ic];
      g && (d.gdid = g);
      e.en = Ye(a.eventName, 40);
      a.metadata.is_first_visit &&
        (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
      a.metadata.is_new_to_site && (e._nsi = 1);
      a.metadata.is_session_start &&
        (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
      a.metadata.is_conversion && (e._c = 1);
      a.metadata.is_external_event && (e._ee = 1);
      if (a.metadata.is_ecommerce) {
        var h = a.C[Q.g.ia] || R(a.s, Q.g.ia);
        if (Da(h))
          for (var l = 0; l < h.length && 200 > l; l++)
            e['pr' + (l + 1)] = cf(h[l]);
      }
      var n = a.C[Q.g.hc];
      n && (e.edid = n);
      var p = function (t, v) {
          if (!ig(23) || 'object' !== typeof v || !Az[t]) {
            t = Ye(t, 40);
            var w = 'ep.' + t,
              y = 'epn.' + t;
            t = Ca(v) ? y : w;
            var x = Ca(v) ? w : y;
            e.hasOwnProperty(x) && delete e[x];
            e[t] = Ye(v, 100);
          }
        },
        q = function (t, v) {
          if (ig(23)) return !1;
          var w = t.split('.');
          if (t === Q.g.ka && 'object' !== typeof v) return p(t, v), !0;
          if (w[0] === Q.g.ka) {
            if ((1 < w.length || 'object' === typeof v) && Cy(a)) {
              var y = pz(t, v);
              La(y, function (x, A) {
                return void p(x, A);
              });
            }
            return !0;
          }
          return !1;
        };
      La(a.C, function (t, v) {
        if (void 0 !== v && !Hg.hasOwnProperty(t)) {
          null === v && (v = '');
          var w;
          t !== Q.g.Vc
            ? (w = !1)
            : a.metadata.euid_mode_enabled
            ? ((d.ecid = v), (w = !0))
            : (w = void 0);
          if (!w && t !== Q.g.bf) {
            var y = v;
            !0 === v && (y = '1');
            !1 === v && (y = '0');
            var x;
            if (vz[t]) (x = vz[t]), (d[x] = Ye(y, 420));
            else if (wz[t]) (x = wz[t]), (f[x] = Ye(y, 420));
            else if (xz[t]) (x = xz[t]), (e[x] = Ye(y, 420));
            else if ('_' === t.charAt(0)) d[t] = Ye(y, 420);
            else {
              var A;
              (A = q(t, v)) ||
                (yz[t]
                  ? (A = !0)
                  : t !== Q.g.Pc
                  ? (A = !1)
                  : ('object' !== typeof v && p(t, v), (A = !0)));
              A || p(t, v);
            }
          }
        }
      });
      a.metadata.user_data && q('user_data', a.metadata.user_data);
      var r = a.C[Q.g.Ta] || {};
      (!1 !== R(a.s, Q.g.fa) && mz()) || (r._npa = '1');
      La(r, function (t, v) {
        if (void 0 !== v)
          if ((null === v && (v = ''), t === Q.g.Aa && !f.uid))
            f.uid = Ye(v, 36);
          else if (b[t] !== v) {
            var w = (Ca(v) ? 'upn.' : 'up.') + Ye(t, 24);
            e[w] = Ye(v, 36);
            b[t] = v;
          }
      });
      var u = !1;
      return ef.call(this, { Ha: d, Ub: f, Lf: e }, sz(a), Cy(a), u) || this;
    };
  la(Bz, ef);
  var Cz = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    Dz = function (a) {
      var b = a.search;
      return (
        a.protocol +
        '//' +
        a.hostname +
        a.pathname +
        (b ? b + '&richsstsse' : '?richsstsse')
      );
    },
    Ez = function (a) {
      var b = {},
        c = '',
        d = a.pathname.indexOf('/g/collect');
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + '//' + a.hostname + c;
      return b;
    },
    Fz = function (a, b) {
      var c = new m.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? 'POST' : 'GET',
        e = '',
        f = 0,
        g = ai(a),
        h = Ez(g),
        l = Dz(g);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = Cz(e, h), q = p.indexOf('\n\n'); -1 !== q; ) {
            var r;
            a: {
              var u,
                t = p.substring(0, q).split('\n'),
                v =
                  'undefined' != typeof Symbol &&
                  Symbol.iterator &&
                  t[Symbol.iterator];
              u = v ? v.call(t) : { next: ba(t) };
              var w = u.next().value,
                y = u.next().value;
              if (w.startsWith('event: message') && y.startsWith('data: '))
                try {
                  r = JSON.parse(y.substring(y.indexOf(':') + 1));
                  break a;
                } catch (B) {}
              r = void 0;
            }
            if (r) {
              var x = r.send_pixel || [];
              if (Array.isArray(x)) for (var A = 0; A < x.length; A++) Wb(x[A]);
            }
            p = p.substring(q + 2);
            q = p.indexOf('\n\n');
          }
          e = p;
        }
      };
      c.open(d, l);
      c.send(b);
    };
  var Iz = function (a, b, c, d) {
      var e = a + '?' + b;
      Gz && (d = !(0 === e.indexOf(rz()) || 0 === e.indexOf(qz())));
      d && !Fy ? Fz(e, c) : Hz(a, b, c);
    },
    Jz = function (a) {},
    Kz = function (a, b) {
      function c(u) {
        q.push(u + '=' + encodeURIComponent('' + a.Ha[u]));
      }
      var d = b.Ik,
        e = b.Jk,
        f = b.Sj,
        g = b.sj,
        h = b.rj,
        l = b.Yj,
        n = b.Kk,
        p = b.Xj;
      if (d || e || n) {
        var q = [];
        c('tid');
        c('cid');
        c('gtm');
        q.push('aip=1');
        a.Ub.uid && !p && q.push('uid=' + encodeURIComponent('' + a.Ub.uid));
        d &&
          (Hz(
            'https://stats.g.doubleclick.net/g/collect',
            'v=2&' + q.join('&'),
          ),
          dj('https://stats.g.doubleclick.net/g/collect?v=2&' + q.join('&')));
        if (e) {
          q.push('z=' + Ha());
          if (!l) {
            var r =
              f && 0 === f.indexOf('google.') && 'google.com' != f
                ? 'https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&'.replace(
                    '%',
                    f,
                  )
                : void 0;
            r && Wb(r + q.join('&'));
          }
          ig(28) &&
            g &&
            h &&
            cp() &&
            ((q = []),
            c('tid'),
            q.push('gacid=' + encodeURIComponent(String(a.Ha.cid))),
            c('gtm'),
            q.push('aip=1'),
            q.push('fledge=1'),
            q.push('z=' + Ha()),
            dp(
              'https://googleads.g.doubleclick.net/td/ga/rul?' + q.join('&'),
              a.Ha.tid,
            ));
        }
        n && Jz(a);
      }
    },
    Gz = !1;
  var Lz = function () {
    this.F = 1;
    this.I = {};
    this.h = new ff();
    this.B = -1;
  };
  Lz.prototype.D = function (a, b) {
    var c = this,
      d;
    d = new Bz(a, this.I, b);
    var e = Gy(a);
    (e && this.h.F(d)) || this.flush();
    if (e && this.h.add(d)) {
      if (0 > this.B) {
        var f = m.setTimeout,
          g;
        Cy(a) ? (Mz ? ((Mz = !1), (g = Nz)) : (g = Oz)) : (g = 5e3);
        this.B = f.call(
          m,
          function () {
            return c.flush();
          },
          g,
        );
      }
    } else {
      var h = hf(d, this.F++);
      Iz(d.h, h.eg, h.body, d.F);
      var l = a.metadata.create_dc_join,
        n = a.metadata.create_google_join,
        p = !1 !== R(a.s, Q.g.Ea),
        q = !1 !== R(a.s, Q.g.fa),
        r = { eventId: a.s.eventId, priorityId: a.s.priorityId },
        u = {
          Ik: l,
          Jk: n,
          Sj: String(Mm(a, Q.g.fe, R(a.s, Q.g.fe))),
          sj: p,
          rj: q,
          Yj: Mm(a, Q.g.Yc, !1),
          Xj: a.metadata.euid_mode_enabled,
          jl: r,
        };
      Kz(d, u);
    }
  };
  Lz.prototype.add = function (a) {
    a.metadata.euid_mode_enabled && !Fy ? this.T(a) : this.D(a);
  };
  Lz.prototype.flush = function () {
    if (this.h.events.length) {
      var a = jf(this.h, this.F++);
      Iz(this.h.h, a.eg, a.body, this.h.B);
      this.h = new ff();
      0 <= this.B && (m.clearTimeout(this.B), (this.B = -1));
    }
  };
  Lz.prototype.T = function (a) {
    var b = this,
      c = Dy(a);
    c
      ? Eg(c, function (d) {
          b.D(a, 1 === d.split('~').length ? void 0 : d);
        })
      : this.D(a);
  };
  var Hz = function (a, b, c) {
      var d = a + '?' + b;
      if (c)
        try {
          Mb.sendBeacon && Mb.sendBeacon(d, c);
        } catch (e) {
          Jb('TAGGING', 15);
        }
      else cc(d);
    },
    Nz = ak('', 500),
    Oz = ak('', 5e3),
    Mz = !0;
  var Pz = window,
    Qz = document,
    Rz = function (a) {
      var b = Pz._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Pz['ga-disable-' + a]))
        return !0;
      try {
        var c = Pz.external;
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = pj('AMP_TOKEN', String(Qz.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ('$OPT_OUT' == d[e]) return !0;
      return Qz.getElementById('__gaOptOutExtension') ? !0 : !1;
    };
  var Sz = function (a, b, c) {
      c || (c = function () {});
      void 0 !== a.C[b] && (a.C[b] = c(a.C[b]));
    },
    Tz = function (a, b) {
      var c = Q.g.J;
      jj(c) ||
        mj(function () {
          b.metadata.is_consent_update = !0;
          b.metadata.consent_update_type = c;
          a.Jh(b);
        }, c);
    },
    Uz = function (a, b, c) {
      void 0 === c && (c = {});
      if ('object' === typeof b) for (var d in b) Uz(a + '.' + d, b[d], c);
      else c[a] = b;
      return c;
    },
    Vz = !1;
  var Xo = { Dj: '', Uk: Number('') },
    Wz = {},
    Xz =
      ((Wz[Q.g.Td] = !0),
      (Wz[Q.g.Ud] = !0),
      (Wz[Q.g.Vd] = !0),
      (Wz[Q.g.Wd] = !0),
      (Wz[Q.g.Xd] = !0),
      (Wz[Q.g.Yd] = !0),
      Wz),
    Yz = function (a) {
      this.T = a;
      this.Ca = new Lz();
      this.B = void 0;
      this.F = new My();
      this.D = this.h = void 0;
      this.I = !1;
      this.cd = void 0;
      this.Dc = !1;
    };
  aa = Yz.prototype;
  aa.xk = function (a, b, c) {
    var d = this,
      e = um(this.T);
    if (e)
      if (c.eventMetadata.is_external_event && '_' === a.charAt(0)) c.W();
      else {
        a !== Q.g.Da && a !== Q.g.Ka && Jy(a) && N(58);
        Zz(c.h);
        var f = new Km(e, a, c);
        f.metadata.event_start_timestamp_ms = b;
        var g = [Q.g.aa];
        (Mm(f, Q.g.xb, R(f.s, Q.g.xb)) || Cy(f)) && g.push(Q.g.J);
        var h = function () {
          nj(function () {
            d.yk(f);
          }, g);
        };
        ig(11) && ig(25) ? Yo(h) : h();
      }
    else c.W();
  };
  aa.yk = function (a) {
    this.D = a;
    try {
      Rz(a.target.V) && (N(28), (a.K = !0));
      if (0 <= Xo.Dj.replace(/\s+/g, '').split(',').indexOf(a.eventName))
        N(33), (a.K = !0);
      else {
        var b = Ey(a);
        b && b.blacklisted && (N(34), (a.K = !0));
      }
      var c = H.location.protocol;
      'http:' != c && 'https:' != c && (N(29), (a.K = !0));
      Mb && 'preview' == Mb.loadPurpose && (N(30), (a.K = !0));
      var d = Vg.grl;
      d || ((d = kz()), (Vg.grl = d));
      d() || (N(35), (a.K = !0));
      if (a.K) {
        a.s.W();
        Kb();
        return;
      }
      var e = {
        prefix: String(R(a.s, Q.g.Za, '')),
        path: String(R(a.s, Q.g.Ze, '/')),
        flags: String(R(a.s, Q.g.nb, '')),
        domain: String(R(a.s, Q.g.lb, 'auto')),
        fb: Number(R(a.s, Q.g.Pa, 63072e3)),
      };
      a.metadata.cookie_options = e;
      $z(a);
      this.dj(a);
      this.F.Rk(a);
      a.metadata.is_merchant_center || R(a.s, Q.g.fh)
        ? (a.metadata.euid_mode_enabled = !1)
        : (a.metadata.euid_mode_enabled = vi(ui(a.s)));
      if (a.metadata.euid_mode_enabled) {
        var f = ui(a.s);
        if (vi(f)) {
          var g = R(a.s, Q.g.ka);
          if (void 0 !== g) (a.metadata.user_data = g), (a.C._udm = 'c');
          else {
            var h = wi(f);
            a.metadata.user_data = h;
            if ('selectors' === f.mode || uc(f.selectors)) a.C._udm = 's';
            else if ('auto_detect' === f.mode || uc(f.auto_detect))
              a.C._udm = 'a';
          }
        }
      }
      var l = this.di,
        n;
      R(a.s, Q.g.pb) && (jj(Q.g.aa) || R(a.s, Q.g.wb) || (a.C[Q.g.yh] = !0));
      var p;
      var q;
      q = void 0 === q ? 3 : q;
      var r = m.location.href;
      if (r) {
        var u = ai(r).search.replace('?', ''),
          t = Wh(u, '_gl', !1, !0) || '';
        p = t ? void 0 !== Cl(t, q) : !1;
      } else p = !1;
      p && Cy(a) && (a.C[Q.g.xh] = !0);
      a.eventName === Q.g.Da
        ? (R(a.s, Q.g.pb) && jm(['aw', 'dc']), gz(a), (n = iz(a)))
        : (n = {});
      l.call(this, n);
      a.eventName == Q.g.Da &&
        (R(a.s, Q.g.Fa, !0)
          ? (a.s.h[Q.g.ja] &&
              ((a.s.B[Q.g.ja] = a.s.h[Q.g.ja]),
              (a.s.h[Q.g.ja] = void 0),
              (a.C[Q.g.ja] = void 0)),
            (a.eventName = Q.g.Ic))
          : (a.K = !0));
      var v = cb(uo(a.s, Q.g.ja, 1), '.');
      v && (a.C[Q.g.ic] = v);
      var w = cb(uo(a.s, Q.g.ja, 2), '.');
      w && (a.C[Q.g.hc] = w);
      var y = this.B,
        x = this.h,
        A = this.F,
        B = !this.Dc,
        C = Math.floor(a.metadata.event_start_timestamp_ms / 1e3),
        F = az(a);
      F || (F = x);
      var G = Na(R(a.s, Q.g.ad, 30));
      G = Math.min(475, G);
      G = Math.max(5, G);
      var D = Na(R(a.s, Q.g.jf, 1e4)),
        K = Vy(F);
      a.metadata.is_first_visit = !1;
      a.metadata.is_session_start = !1;
      a.metadata.join_timer_sec = 0;
      K &&
        K.Vf &&
        (a.metadata.join_timer_sec = Math.max(0, K.Vf - Math.max(0, C - K.yd)));
      var P = !1;
      K ||
        ((P = a.metadata.is_first_visit = !0),
        (K = {
          sessionId: String(C),
          Tb: 1,
          xc: !1,
          yd: C,
          Rb: !1,
          ld: void 0,
        }));
      C > K.yd + 60 * G &&
        ((P = !0),
        (K.sessionId = String(C)),
        K.Tb++,
        (K.xc = !1),
        (K.ld = void 0));
      if (P) (a.metadata.is_session_start = !0), A.Tj(a);
      else if (A.Qj() > D || a.eventName == Q.g.Ic) K.xc = !0;
      a.metadata.euid_mode_enabled
        ? R(a.s, Q.g.Aa)
          ? (K.Rb = !0)
          : (K.Rb && (K.ld = void 0), (K.Rb = !1))
        : (K.Rb = !1);
      var Z = K.ld;
      if (a.metadata.euid_mode_enabled) {
        var ma = R(a.s, Q.g.Vc),
          Y = ma ? 1 : 8;
        ma || ((ma = Z), (Y = 4));
        ma || ((ma = Hj()), (Y = 7));
        var O = Y,
          ia = a.metadata.enhanced_client_id_source;
        if (void 0 === ia || O <= ia)
          (a.C[Q.g.Vc] = ma.toString()),
            (a.metadata.enhanced_client_id_source = O);
      }
      B
        ? (Lm(a, Q.g.zb, K.sessionId),
          Lm(a, Q.g.ne, K.Tb),
          Lm(a, Q.g.me, K.xc ? 1 : 0))
        : ((a.C[Q.g.zb] = K.sessionId),
          (a.C[Q.g.ne] = K.Tb),
          (a.C[Q.g.me] = K.xc ? 1 : 0));
      a.metadata[Q.g.bf] = K.Rb ? 1 : 0;
      var U = R(a.s, Q.g.wb),
        T = U ? 1 : 8;
      a.metadata.is_new_to_site = !1;
      U || ((U = Ry(a)), (T = 3));
      U || ((U = y), (T = 5));
      if (!U) {
        var Ga = jj(Q.g.aa),
          Za = Ny();
        U = !Za.from_cookie || Ga ? Za.vid : void 0;
        T = 6;
      }
      U
        ? (U = '' + U)
        : ((U = Ij()),
          (T = 7),
          (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0));
      Qy(a, U, T);
      aA(a);
      var Fa = '',
        Ia = H.location;
      if (Ia) {
        var $a = Ia.pathname || '';
        '/' != $a.charAt(0) && ($a = '/' + $a);
        Fa = Ia.protocol + '//' + Ia.hostname + $a + Ia.search;
      }
      Lm(a, Q.g.Ra, Fa);
      var Gd = Q.g.Sa,
        oc;
      a: {
        var ve = vj('_opt_expid', void 0, void 0, Q.g.aa)[0];
        if (ve) {
          var Us = decodeURIComponent(ve).split('$');
          if (3 === Us.length) {
            oc = Us[2];
            break a;
          }
        }
        if (void 0 !== Vg.ga4_referrer_override) oc = Vg.ga4_referrer_override;
        else {
          var Vs = uh('gtm.gtagReferrer.' + a.target.V);
          oc = Vs ? '' + Vs : H.referrer;
        }
      }
      Lm(a, Gd, oc || void 0);
      Lm(a, Q.g.nc, H.title);
      Lm(a, Q.g.Qa, (Mb.language || '').toLowerCase());
      var Ws = Lh();
      Lm(a, Q.g.Ib, Ws.width + 'x' + Ws.height);
      a.metadata.create_dc_join = !1;
      a.metadata.create_google_join = !1;
      if (
        !a.metadata.is_merchant_center &&
        !1 !== R(a.s, Q.g.Kc) &&
        lz() &&
        jj(Q.g.J)
      ) {
        var zh = Mm(a, Q.g.xb, R(a.s, Q.g.xb));
        if (a.metadata.is_session_start || R(a.s, Q.g.df)) {
          a.metadata.create_dc_join = !!zh;
        }
        var Xs;
        Xs = a.metadata.join_timer_sec;
        zh &&
          0 === (Xs || 0) &&
          ((a.metadata.join_timer_sec = 60),
          (a.metadata.create_google_join = !0));
      }
      bA(a);
      Lg.hasOwnProperty(a.eventName) &&
        ((a.metadata.is_ecommerce = !0), Lm(a, Q.g.ia), Lm(a, Q.g.va));
      Lm(a, Q.g.kf);
      for (var Ys = R(a.s, Q.g.ef) || [], gl = 0; gl < Ys.length; gl++) {
        var Zs = Ys[gl];
        if (Zs.rule_result) {
          Lm(a, Q.g.kf, Zs.traffic_type);
          Hy(3);
          break;
        }
      }
      if (!a.metadata.is_merchant_center && R(a.s, Q.g.wa)) {
        var $s = cz(a) || {},
          HC =
            (Kl($s[Q.g.jc], !!$s[Q.g.Z]) ? Bl(!0)._fplc : void 0) ||
            (0 < vj('FPLC', void 0, void 0, Q.g.aa).length ? void 0 : '0');
        a.C._fplc = HC;
      }
      if (void 0 !== R(a.s, Q.g.ie)) Lm(a, Q.g.ie);
      else {
        var at = R(a.s, Q.g.ke),
          hl,
          Ah;
        a: {
          if (fz) {
            var il = cz(a) || {};
            if (il && il[Q.g.Z])
              for (
                var bt = Zh(ai(a.C[Q.g.Sa]), 'host', !0),
                  Bh = il[Q.g.Z],
                  Bf = 0;
                Bf < Bh.length;
                Bf++
              )
                if (Bh[Bf] instanceof RegExp) {
                  if (Bh[Bf].test(bt)) {
                    Ah = !0;
                    break a;
                  }
                } else if (0 <= bt.indexOf(Bh[Bf])) {
                  Ah = !0;
                  break a;
                }
          }
          Ah = !1;
        }
        if (!(hl = Ah)) {
          var Ch;
          if ((Ch = at))
            a: {
              for (
                var ct = at.include_conditions || [],
                  IC = Zh(ai(a.C[Q.g.Sa]), 'host', !0),
                  jl = 0;
                jl < ct.length;
                jl++
              )
                if (ct[jl].test(IC)) {
                  Ch = !0;
                  break a;
                }
              Ch = !1;
            }
          hl = Ch;
        }
        hl && ((a.C[Q.g.ie] = '1'), Hy(4));
      }
      Cy(a) &&
        (ig(5) && (zq() || (a.C._uc = Hi.Gf)), Xi() && (a.C._rnd = Nj()));
      if (ig(11))
        if (!To(m)) N(87);
        else if (void 0 !== Vo) {
          N(85);
          var dt = Ro();
          dt ? R(a.s, Q.g.je) || Zo(dt, a, !0) : N(86);
        }
      if (a.eventName == Q.g.Ka) {
        var et = R(a.s, Q.g.ab),
          JC = R(a.s, Q.g.ob),
          ft = void 0;
        ft = a.C[et];
        JC(ft || R(a.s, et));
        a.K = !0;
      }
      if (!ig(26) && !a.s.eventMetadata.syn_or_mod) {
        var kl = R(a.s, Q.g.af);
        if (kl) {
          var Hd = J(a.s.h);
          J(a.C, Hd);
          for (
            var gt = kl.edit_rules || [], ht = !1, ll = 0;
            ll < gt.length;
            ll++
          ) {
            var Dh;
            a: {
              var Eh = a,
                Id = gt[ll];
              if (
                Ix(
                  Eh.eventName,
                  Hd,
                  Id.event_name_predicate,
                  Id.conditions || [],
                )
              ) {
                if (Id.new_event_name) {
                  var it = k(Id.new_event_name)
                    ? String(Id.new_event_name)
                    : Ex(Eh.eventName, Hd, Id.new_event_name);
                  if (Jy(it)) {
                    Dh = !1;
                    break a;
                  }
                  Eh.eventName = String(it);
                }
                Ky(Eh.eventName, Hd, Id);
                Hy(2);
                Dh = !0;
              } else Dh = !1;
            }
            Dh && (ht = !0);
          }
          for (
            var jt = kl.synthesis_rules || [], ml = 0;
            ml < jt.length;
            ml++
          ) {
            var nl = a,
              Cf = jt[ml];
            if (
              Ix(nl.eventName, Hd, Cf.event_name_predicate, Cf.conditions || [])
            ) {
              var ol = Cf.new_event_name;
              if (!Jy(ol)) {
                var kt = Cf.merge_source_event_params ? J(Hd) : {};
                Ky(ol, kt, Cf);
                var lt = {},
                  mt = { eventMetadata: ((lt.syn_or_mod = !0), lt) };
                Fx && (mt.eventMetadata.event_usage = [10]);
                var KC = Er(nl.target.V, ol, kt);
                Hr(KC, nl.s.eventId, mt);
                Hy(1);
              }
            }
          }
          if (ht) {
            for (
              var pl = {},
                nt = {
                  eventMetadata:
                    ((pl.syn_or_mod = !0),
                    (pl.is_external_event =
                      !!a.s.eventMetadata.is_external_event),
                    pl),
                },
                ot,
                ql = [],
                pt = Ib.GA4_EVENT || [],
                Fh = 0;
              Fh < pt.length;
              Fh++
            )
              pt[Fh] && ql.push(Fh);
            (ot = 0 < ql.length ? ql : void 0) &&
              (nt.eventMetadata.event_usage = ot);
            var LC = Er(a.target.V, a.eventName, Hd);
            Hr(LC, a.s.eventId, nt);
            a.K = !0;
          }
        }
      }
      Pm(a);
      cA(a);
      var rl = a.metadata.event_usage;
      if (Da(rl)) for (var sl = 0; sl < rl.length; sl++) Hy(rl[sl]);
      var qt = Lb('GA4_EVENT');
      qt && (a.C._eu = qt);
      Lm(a, Q.g.Aa);
      Lm(a, Q.g.Ta);
      if (a.metadata.speculative || a.K) {
        a.s.W();
        Kb();
        return;
      }
      var NC = this.di,
        rt,
        OC = this.B,
        tl;
      a: {
        var ul = bz(a);
        if (ul) {
          if ($y(ul, a)) {
            tl = ul;
            break a;
          }
          N(25);
          a.K = !0;
        }
        tl = void 0;
      }
      var PC = tl;
      rt = { clientId: Uy(a, OC), ii: PC };
      NC.call(this, rt);
      this.Dc = !0;
      this.Pk(a);
      if (Cy(a)) {
        var QC = a.metadata.is_conversion;
        ('page_view' === a.eventName || QC) && Tz(this, a);
      }
      this.F.jg();
      this.cd = dA(a, this.cd);
      R(a.s, Q.g.je) && ((a.C[Q.g.je] = !0), Sz(a, Q.g.Ib));
      Lm(a, Q.g.Sg);
      if (a.K) {
        a.s.W();
        Kb();
        return;
      }
      this.Jh(a);
      a.s.X();
    } catch (XD) {
      a.s.W();
    }
    Kb();
  };
  aa.Jh = function (a) {
    this.Ca.add(a);
  };
  aa.di = function (a) {
    var b = a.clientId,
      c = a.ii;
    b && c && ((this.B = b), (this.h = c));
  };
  aa.flush = function () {
    this.Ca.flush();
  };
  aa.Pk = function (a) {
    var b = this;
    if (!this.I) {
      var c = jj(Q.g.aa);
      lj([Q.g.aa], function () {
        var d = jj(Q.g.aa);
        if (c ^ d && b.D && b.h && b.B) {
          var e = b.B;
          if (d) {
            var f = Ry(b.D);
            if (f) {
              b.B = f;
              var g = az(b.D);
              g
                ? ig(12)
                  ? ((b.h = Xy(g, b.h, b.D)), $y(b.h, b.D))
                  : (b.h = g)
                : $y(b.h, b.D);
            } else Ty(b.B, b.D), Py(b.B, !0), $y(b.h, b.D);
            var h = {};
            h[Q.g.df] = e;
            var l = Er(b.T, Q.g.We, h);
            Hr(l, a.s.eventId, {});
          } else {
            b.h = void 0;
            b.B = void 0;
            m.gaGlobal = {};
          }
          c = d;
        }
      });
      this.I = !0;
    }
  };
  aa.dj = function (a) {
    a.eventName !== Q.g.Ka && this.F.cj(a);
  };
  var cA = function (a) {
      if (ig(23) && Cy(a)) {
        var b = function (d) {
            var e = Uz(Q.g.ka, d);
            La(e, function (f, g) {
              a.C[f] = g;
            });
          },
          c = R(a.s, Q.g.ka);
        void 0 !== c ? b(c) : b(a.metadata.user_data);
        a.metadata.user_data = void 0;
      }
    },
    $z = function (a) {
      function b(c, d) {
        Hg[c] || void 0 === d || (a.C[c] = d);
      }
      La(a.s.B, b);
      La(a.s.h, b);
    },
    aA = function (a) {
      var b = vo(a.s),
        c = function (d, e) {
          Xz[d] && (a.C[d] = e);
        };
      uc(b[Q.g.Pc])
        ? La(b[Q.g.Pc], function (d, e) {
            c((Q.g.Pc + '_' + d).toLowerCase(), e);
          })
        : La(b, c);
    },
    bA = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      a.metadata.is_conversion = b(Ey(a));
      a.metadata.is_first_visit &&
        (a.metadata.is_first_visit_conversion = b(Ey(a, 'first_visit')));
      a.metadata.is_session_start &&
        (a.metadata.is_session_start_conversion = b(Ey(a, 'session_start')));
    },
    dA = function (a, b) {
      var c = void 0;
      return c;
    };
  function Zz(a) {
    La(a, function (c) {
      '_' === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Ta] || {};
    La(b, function (c) {
      '_' === c.charAt(0) && delete b[c];
    });
  }
  var eA = function (a) {
      if ('prerender' == H.visibilityState) return !1;
      a();
      return !0;
    },
    fA = function (a) {
      if (!eA(a)) {
        var b = !1,
          c = function () {
            !b && eA(a) && ((b = !0), Yb(H, 'visibilitychange', c), N(55));
          };
        Xb(H, 'visibilitychange', c);
        N(54);
      }
    };
  var hA = function (a, b) {
    fA(function () {
      var c = um(a);
      if (c) {
        var d = gA(c, b);
        es.register(a, d);
      }
    });
  };
  function gA(a, b) {
    var c = function () {};
    var d = new Yz(a.id),
      e = 'MC' === a.prefix;
    c = function (f, g, h, l) {
      e && (l.eventMetadata.is_merchant_center = !0);
      d.xk(g, h, l);
    };
    iA(a, d, b);
    return c;
  }
  function iA(a, b, c) {
    var d = b.F,
      e = { eventId: c };
    if (ig(19)) {
      var f = {};
      e.eventMetadata = ((f.batch_on_navigation = !0), f);
    }
    d.Ck(function () {
      ig(19) && (Fy = !0);
      es.flush();
      1e3 <= d.Je() && Mb.sendBeacon && fs(Q.g.We, {}, a.id, e);
      ig(19) || (Fy = !0);
      b.flush();
      d.fi(function () {
        Fy = !1;
        d.fi();
      });
    });
  }
  var dC = gA;
  function fC(a, b, c, d) {
    L(
      E(this),
      [
        'destinationIds:!*',
        'eventName:!*',
        'eventParameters:?DustMap',
        'messageContext:?DustMap',
      ],
      arguments,
    );
    var e = c ? wc(c) : {},
      f = wc(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? wc(d) : {},
      h = this.h.h;
    g.originatingEntity = Zx(h);
    for (var l = 0; l < f.length; l++) {
      var n = f[l];
      if ('string' === typeof n) {
        var p = J(e),
          q = J(g),
          r = Er(n, b, p);
        Hr(r, g.eventId || h.eventId, q);
      }
    }
  }
  fC.O = 'internal.sendGtagEvent';
  function gC(a, b, c) {}
  gC.P = 'sendPixel';
  function hC(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  hC.P = 'setCookie';
  function iC(a) {
    L(E(this), ['consentSettings:!DustMap'], arguments);
    for (var b = a.Lb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e === Q.g.Te ||
        (ig(17) && e === Q.g.Ue) ||
        M(this, 'access_consent', e, 'write');
    }
    var f = this.h.h,
      g = f.eventId,
      h = $x(f),
      l = Br('consent', 'default', wc(a));
    Hr(l, g, h);
  }
  iC.P = 'setDefaultConsentState';
  function jC(a, b, c) {
    return !1;
  }
  jC.P = 'setInWindow';
  function kC(a, b, c) {
    L(E(this), ['targetId:!string', 'name:!string', 'value:!*'], arguments);
    var d = Kh(a) || {};
    d[b] = wc(c, this.h);
    var e = a;
    Ih || Jh();
    Hh[e] = d;
  }
  kC.O = 'internal.setProductSettingsParameter';
  function lC(a, b, c) {
    L(E(this), ['targetId:!string', 'name:!string', 'value:!*'], arguments);
    for (var d = b.split('.'), e = ks(es, a).h, f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};
      else if (!uc(e[d[f]]))
        throw Error(
          'setRemoteConfigParameter failed, path contains a non-object type: ' +
            d[f],
        );
      e = e[d[f]];
    }
    e[d[f]] = wc(c, this.h);
  }
  lC.O = 'internal.setRemoteConfigParameter';
  function mC(a, b, c, d) {
    var e = this;
  }
  mC.P = 'sha256';
  function nC(a, b, c) {
    L(
      E(this),
      ['targetId:!string', 'name:!string', 'options:!DustMap'],
      arguments,
    );
    for (var d = b.split('.'), e = ks(es, a).h, f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]])
        throw Error(
          'sortRemoteConfigParameters failed, path points to an undefined object: ' +
            d[f],
        );
      if (!uc(e[d[f]]))
        throw Error(
          'sortRemoteConfigParameters failed, path contains a non-object type: ' +
            d[f],
        );
      e = e[d[f]];
    }
    if (void 0 === e[d[f]])
      throw Error(
        'sortRemoteConfigParameters failed, destination is undefined ' + d[f],
      );
    if (!Da(e[d[f]]))
      throw Error(
        'sortRemoteConfigParameters failed, destination is not an array: ' +
          d[f],
      );
    var g = wc(c) || {},
      h = g.sortKey;
    if (!h)
      throw Error(
        'sortRemoteConfigParameters failed, option.sortKey is required',
      );
    var l = !1 !== g.ascending;
    e[d[f]].sort(function (n, p) {
      if (void 0 === n[h] || void 0 === p[h])
        throw Error(
          'sortRemoteConfigParameters failed, object does not have required property: ' +
            h,
        );
      return l ? n[h] - p[h] : p[h] - n[h];
    });
  }
  nC.O = 'internal.sortRemoteConfigParameters';
  var oC = {},
    pC = {};
  oC.P = 'templateStorage';
  oC.getItem = function (a) {
    var b = null;
    M(this, 'access_template_storage');
    var c = this.h.h;
    if (!c) throw Error('invalid program state');
    var d = c.rd();
    pC[d] && (b = pC[d].hasOwnProperty('gtm.' + a) ? pC[d]['gtm.' + a] : null);
    return b;
  };
  oC.setItem = function (a, b) {
    M(this, 'access_template_storage');
    var c = this.h.h;
    if (!c) throw Error('invalid program state');
    var d = c.rd();
    pC[d] = pC[d] || {};
    pC[d]['gtm.' + a] = b;
  };
  oC.removeItem = function (a) {
    M(this, 'access_template_storage');
    var b = this.h.h;
    if (!b) throw Error('invalid program state');
    var c = b.rd();
    if (!pC[c] || !pC[c].hasOwnProperty('gtm.' + a)) return;
    delete pC[c]['gtm.' + a];
  };
  oC.clear = function () {
    M(this, 'access_template_storage');
    var a = this.h.h;
    if (!a) throw Error('invalid program state');
    delete pC[a.rd()];
  };
  var qC = function (a) {
    var b;
    return b;
  };
  function rC(a) {
    L(E(this), ['consentSettings:!DustMap'], arguments);
    var b = wc(a),
      c;
    for (c in b) b.hasOwnProperty(c) && M(this, 'access_consent', c, 'write');
    var d = this.h.h;
    Hr(Br('consent', 'update', b), d.eventId, $x(d));
  }
  rC.P = 'updateConsentState';
  var sC = function () {
    var a = new Zf(),
      b = function (d) {
        var e = d.O;
        if (a.B.hasOwnProperty(e))
          throw (
            'Attempting to add a private function which already exists: ' +
            e +
            '.'
          );
        if (a.h.hasOwnProperty(e))
          throw (
            'Attempting to add a private function with an existing API name: ' +
            e +
            '.'
          );
        a.B[e] = Ba(d) ? xf(e, d) : yf(e, d);
      },
      c = function (d) {
        return a.add(d.P, d);
      };
    c(mv);
    c(sv);
    c(ew);
    c(hw);
    c(iw);
    c(mw);
    c(nw);
    c(pw);
    c(ky());
    c(qw);
    c(Lx);
    c(Sx);
    c(Tx);
    c(Ux);
    c(Xx);
    c(by);
    c(cy);
    c(fy);
    c(jy);
    c(qy);
    c(ry);
    c(ty);
    c(uy);
    c(vy);
    c(gC);
    c(hC);
    c(iC);
    c(jC);
    c(mC);
    c(oC);
    c(rC);
    a.add('Math', Ff());
    a.add('Object', Xf);
    a.add('TestHelper', ag());
    a.add('assertApi', zf);
    a.add('assertThat', Af);
    a.add('decodeUri', Gf);
    a.add('decodeUriComponent', Hf);
    a.add('encodeUri', If);
    a.add('encodeUriComponent', Jf);
    a.add('fail', Kf);
    a.add('generateRandom', Lf);
    a.add('getContainerVersion', Mf);
    a.add('getTimestamp', Nf);
    a.add('getTimestampMillis', Nf);
    a.add('getType', Of);
    a.add('makeInteger', Qf);
    a.add('makeNumber', Rf);
    a.add('makeString', Sf);
    a.add('makeTableMap', Tf);
    a.add('mock', Wf);
    a.add('fromBase64', Kx, !('atob' in m));
    a.add('localStorage', my, !ly());
    a.add('toBase64', qC, !('btoa' in m));
    b(pv);
    b(Iv);
    b(Pv);
    b(Uv);
    b(cw);
    b(fw);
    b(kw);
    b(Bw);
    b(Gw);
    b(Lw);
    b(Uw);
    b(Yw);
    b(ix);
    b(vx);
    b(wx);
    b(Cx);
    b(Mx);
    b(Nx);
    b(Qx);
    b(Rx);
    b(Vx);
    b(Wx);
    b(iy);
    b(oy);
    b(sy);
    b(wy);
    b(yy);
    b(zy);
    b(fC);
    b(kC);
    b(lC);
    b(nC);
    b(ow);
    return function (d) {
      var e;
      if (a.h.hasOwnProperty(d)) e = a.get(d, this);
      else {
        var f;
        if ((f = a.B.hasOwnProperty(d))) {
          var g = !1,
            h = this.h.h;
          if (h) {
            var l = h.rd();
            if (l) {
              0 !== l.indexOf('__cvt_') && (g = !0);
            }
          }
          f = g;
        }
        if (f) {
          var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
          e = n;
        } else throw Error(d + ' is not a valid API name.');
      }
      return e;
    };
  };
  var tC = function () {
      return !1;
    },
    uC = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var vC;
  function wC() {
    var a = vC;
    return function (b, c, d) {
      var e = d && d.event;
      xC(c);
      var f = new ib();
      La(c, function (q, r) {
        var u = vc(r);
        void 0 === u && void 0 !== r && N(44);
        f.set(q, u);
      });
      a.h.h.I = Fe();
      var g = {
        vj: Se(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        xe:
          void 0 !== e
            ? function (q) {
                return e.Ab.xe(q);
              }
            : void 0,
        rd: function () {
          return b;
        },
        log: function () {},
        Fj: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (tC()) {
        var h = uC(),
          l = void 0,
          n = void 0;
        g.Wa = {
          ng: [],
          fd: {},
          eb: function (q, r, u) {
            1 === r && (l = q);
            7 === r && (n = u);
            h(q, r, u);
          },
          Yf: Uf(),
        };
        g.log = function (q, r) {
          if (l) {
            var u = Array.prototype.slice.call(arguments, 1);
            h(l, 4, { level: q, source: n, message: u });
          }
        };
      }
      var p = Nd(a, g, [b, f]);
      a.h.h.I = void 0;
      p instanceof pa && 'return' === p.h && (p = p.B);
      return wc(p);
    };
  }
  function xC(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ba(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    Ba(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function yC() {
    vC.h.h.T = function (a, b, c) {
      Vg.SANDBOXED_JS_SEMAPHORE = Vg.SANDBOXED_JS_SEMAPHORE || 0;
      Vg.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Vg.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function zC(a) {
    void 0 !== a &&
      La(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, '');
          nh[e] = nh[e] || [];
          nh[e].push(b);
        }
      });
  }
  var AC = encodeURI,
    W = encodeURIComponent,
    BC = function (a, b, c) {
      Wb(a, b, c);
    },
    CC = function (a, b) {
      if (!a) return !1;
      var c = Zh(ai(a), 'host');
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    DC = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var X = { m: {} };
  (X.m.access_template_storage = ['google']),
    (function () {
      (function (a) {
        X.__access_template_storage = a;
        X.__access_template_storage.o = 'access_template_storage';
        X.__access_template_storage.isVendorTemplate = !0;
        X.__access_template_storage.priorityOverride = 0;
        X.__access_template_storage.isInfrastructure = !1;
      })(function () {
        return {
          assert: function () {},
          ca: function () {
            return {};
          },
        };
      });
    })();

  (X.m.c = ['google']),
    (function () {
      (function (a) {
        X.__c = a;
        X.__c.o = 'c';
        X.__c.isVendorTemplate = !0;
        X.__c.priorityOverride = 0;
        X.__c.isInfrastructure = !1;
      })(function (a) {
        Bu(a.vtp_value, 'c', a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (X.m.e = ['google']),
    (function () {
      (function (a) {
        X.__e = a;
        X.__e.o = 'e';
        X.__e.isVendorTemplate = !0;
        X.__e.priorityOverride = 0;
        X.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (X.m.v = ['google']),
    (function () {
      (function (a) {
        X.__v = a;
        X.__v.o = 'v';
        X.__v.isVendorTemplate = !0;
        X.__v.priorityOverride = 0;
        X.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = tu(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Bu(d, 'v', a.vtp_gtmEventId);
        return d;
      });
    })();

  (X.m.process_dom_events = ['google']),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        X.__process_dom_events = b;
        X.__process_dom_events.o = 'process_dom_events';
        X.__process_dom_events.isVendorTemplate = !0;
        X.__process_dom_events.priorityOverride = 0;
        X.__process_dom_events.isInfrastructure = !1;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (h, l, n) {
            if (!e[l]) throw d(h, {}, 'Prohibited event target ' + l + '.');
            if (-1 === e[l].indexOf(n))
              throw d(
                h,
                {},
                'Prohibited listener registration for DOM event ' + n + '.',
              );
          },
          ca: a,
        };
      });
    })();

  (X.m.read_container_data = ['google']),
    (function () {
      (function (a) {
        X.__read_container_data = a;
        X.__read_container_data.o = 'read_container_data';
        X.__read_container_data.isVendorTemplate = !0;
        X.__read_container_data.priorityOverride = 0;
        X.__read_container_data.isInfrastructure = !1;
      })(function () {
        return {
          assert: function () {},
          ca: function () {
            return {};
          },
        };
      });
    })();
  (X.m.listen_data_layer = ['google']),
    (function () {
      function a(b, c) {
        return { eventName: c };
      }
      (function (b) {
        X.__listen_data_layer = b;
        X.__listen_data_layer.o = 'listen_data_layer';
        X.__listen_data_layer.isVendorTemplate = !0;
        X.__listen_data_layer.priorityOverride = 0;
        X.__listen_data_layer.isInfrastructure = !1;
      })(function (b) {
        var c = b.vtp_accessType,
          d = b.vtp_allowedEvents || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!k(g))
              throw e(f, { eventName: g }, 'Event name must be a string.');
            if (!('any' === c || ('specific' === c && 0 <= d.indexOf(g))))
              throw e(
                f,
                { eventName: g },
                'Prohibited listen on data layer event.',
              );
          },
          ca: a,
        };
      });
    })();

  (X.m.get_url = ['google']),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        X.__get_url = b;
        X.__get_url.o = 'get_url';
        X.__get_url.isVendorTemplate = !0;
        X.__get_url.priorityOverride = 0;
        X.__get_url.isInfrastructure = !1;
      })(function (b) {
        var c = 'any' === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push('protocol'),
          b.vtp_host && c.push('host'),
          b.vtp_port && c.push('port'),
          b.vtp_path && c.push('path'),
          b.vtp_extension && c.push('extension'),
          b.vtp_query && c.push('query'),
          b.vtp_fragment && c.push('fragment'));
        var d =
            c && 'any' !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!k(g)) throw e(f, {}, 'URL component must be a string.');
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, 'Prohibited URL component: ' + g);
              if ('query' === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    'Prohibited from getting entire URL query when query keys are specified.',
                  );
                if (!k(h)) throw e(f, {}, 'Query key must be a string.');
                if (0 > d.indexOf(h))
                  throw e(f, {}, 'Prohibited query key: ' + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                'Prohibited from getting entire URL when components are specified.',
              );
          },
          ca: a,
        };
      });
    })();
  (X.m.gct = ['google']),
    (function () {
      function a(d) {
        for (var e = [], f = 0; f < d.length; f++)
          try {
            e.push(new RegExp(d[f]));
          } catch (g) {}
        return e;
      }
      function b(d) {
        return d.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
      }
      function c(d) {
        for (var e = [], f = 0; f < d.length; f++) {
          var g = d[f].matchValue,
            h;
          switch (d[f].matchType) {
            case 'BEGINS_WITH':
              h = '^' + b(g);
              break;
            case 'ENDS_WITH':
              h = b(g) + '$';
              break;
            case 'EQUALS':
              h = '^' + b(g) + '$';
              break;
            case 'REGEX':
              h = g;
              break;
            default:
              h = b(g);
          }
          e.push(h);
        }
        return e;
      }
      (function (d) {
        X.__gct = d;
        X.__gct.o = 'gct';
        X.__gct.isVendorTemplate = !0;
        X.__gct.priorityOverride = 0;
        X.__gct.isInfrastructure = !1;
      })(function (d) {
        var e = {},
          f = d.vtp_sessionDuration;
        0 < f && (e[Q.g.ad] = f);
        e[Q.g.ae] = d.vtp_eventSettings;
        e[Q.g.af] = d.vtp_dynamicEventSettings;
        e[Q.g.xb] = 1 === d.vtp_googleSignals;
        e[Q.g.fe] = d.vtp_foreignTld;
        e[Q.g.Yc] = 1 === d.vtp_restrictDomain;
        e[Q.g.ef] = d.vtp_internalTrafficResults;
        var g = Q.g.za,
          h = d.vtp_linker;
        h && h[Q.g.Z] && (h[Q.g.Z] = a(h[Q.g.Z]));
        e[g] = h;
        var l = Q.g.ke,
          n = d.vtp_referralExclusionDefinition;
        n &&
          n.include_conditions &&
          (n.include_conditions = a(n.include_conditions));
        e[l] = n;
        var p = d.vtp_trackingId,
          q = ks(es, p).h,
          r = q.referral_exclusion_conditions;
        r &&
          (r.length && 'object' === typeof r[0] && (r = c(r)),
          (e[Q.g.ke] = { include_conditions: a(r) }));
        var u = q.cross_domain_conditions;
        if (u) {
          u.length && 'object' === typeof u[0] && (u = c(u));
          var t = {};
          e[Q.g.za] =
            ((t[Q.g.Z] = a(u)),
            (t[Q.g.kc] = !0),
            (t[Q.g.jc] = !0),
            (t[Q.g.Zc] = 'query'),
            t);
        }
        ns(p, e);
        hA(p, d.vtp_gtmEventId);
        I(d.vtp_gtmOnSuccess);
      });
    })();

  (X.m.get = ['google']),
    (function () {
      (function (a) {
        X.__get = a;
        X.__get.o = 'get';
        X.__get.isVendorTemplate = !0;
        X.__get.priorityOverride = 0;
        X.__get.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = Er(String(b.streamId), d, c);
        Hr(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var VD = {};
  VD.dataLayer = vh;
  VD.callback = function (a) {
    mh.hasOwnProperty(a) && Ba(mh[a]) && mh[a]();
    delete mh[a];
  };
  VD.bootstrap = 0;
  VD._spx = !1;
  function WD() {
    Vg[Ne.R] = VD;
    Ne.Yb && (Vg['ctid_' + Ne.Yb] = VD);
    Uj();
    Wj() ||
      La(Xj(), function (a, b) {
        Cq(a, b.transportUrl, b.context);
        N(92);
      });
    Va(nh, X.m);
    ue = Je;
  }
  (function (a) {
    if (!m['__TAGGY_INSTALLED']) {
      var b = !1;
      if (H.referrer) {
        var c = ai(H.referrer);
        b = 'cct.google' === Yh(c, 'host');
      }
      if (!b) {
        var d = vj('googTaggyReferrer');
        b = d.length && d[0].length;
      }
      b &&
        ((m['__TAGGY_INSTALLED'] = !0),
        Tb('https://cct.google/taggy/agent.js'));
    }
    if (hh) a();
    else {
      var e = function (p) {
          var q = 'GTM',
            r = 'GTM';
          bh ? ((q = 'OGT'), (r = 'GTAG')) : hh && (r = q = 'OPT');
          var u = m['google.tagmanager.debugui2.queue'];
          u ||
            ((u = []),
            (m['google.tagmanager.debugui2.queue'] = u),
            Tb(
              'https://' +
                Ug.Qd +
                '/debug/bootstrap?id=' +
                Ne.R +
                '&src=' +
                r +
                '&cond=' +
                p +
                '&gtm=' +
                Zj(),
            ));
          var t = {
            messageType: 'CONTAINER_STARTING',
            data: {
              scriptSource: Nb,
              containerProduct: q,
              debug: !1,
              id: Ne.R,
              isGte: ah,
            },
          };
          t.data.resume = function () {
            a();
          };
          Ug.wi && (t.data.initialPublish = !0);
          u.push(t);
        },
        f = void 0,
        g = Zh(m.location, 'query', !1, void 0, 'gtm_debug');
      Mt(g) && (f = 2);
      if (!f && H.referrer) {
        var h = ai(H.referrer);
        'tagassistant.google.com' === Yh(h, 'host') && (f = 3);
      }
      if (!f) {
        var l = vj('__TAG_ASSISTANT');
        l.length && l[0].length && (f = 4);
      }
      if (!f) {
        var n = H.documentElement.getAttribute('data-tag-assistant-present');
        Mt(n) && (f = 5);
      }
      f && Nb ? e(f) : a();
    }
  })(function () {
    var a = !1;
    a && gr('INIT');
    Li().B();
    Dk();
    Ll.enable_gbraid_cookie_write = !0;
    var b = !!Vg[Ne.R];
    !b && Ne.Yb && (b = !!Vg['ctid_' + Ne.Yb]);
    if (b) {
      var c = Vg.zones;
      c && c.unregisterChild(Qj());
    } else {
      (ig(11) || ig(13) || ig(48)) && Wo();
      for (
        var d = data.resource || {}, e = d.macros || [], f = 0;
        f < e.length;
        f++
      )
        ke.push(e[f]);
      for (var g = d.tags || [], h = 0; h < g.length; h++) ne.push(g[h]);
      for (var l = d.predicates || [], n = 0; n < l.length; n++) me.push(l[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var r = p[q], u = {}, t = 0; t < r.length; t++)
          u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
        le.push(u);
      }
      pe = X;
      qe = kv;
      Re = new Qe();
      var v = data.sandboxed_scripts,
        w = data.security_groups,
        y = data.runtime || [],
        x = data.runtime_lines;
      vC = new Ld();
      yC();
      je = wC();
      var A = vC,
        B = sC();
      lb(A.h, 'require', B);
      for (var C = 0; C < y.length; C++) {
        var F = y[C];
        if (!Da(F) || 3 > F.length) {
          if (0 === F.length) continue;
          break;
        }
        x && x[C] && x[C].length && Ce(F, x[C]);
        vC.execute(F);
      }
      if (void 0 !== v)
        for (var G = ['sandboxedScripts'], D = 0; D < v.length; D++) {
          var K = v[D].replace(/^_*/, '');
          nh[K] = G;
        }
      zC(w);
      WD();
      Lt();
      Rq = !1;
      Sq = 0;
      if (
        ('interactive' == H.readyState && !H.createEventObject) ||
        'complete' == H.readyState
      )
        Uq();
      else {
        Xb(H, 'DOMContentLoaded', Uq);
        Xb(H, 'readystatechange', Uq);
        if (H.createEventObject && H.documentElement.doScroll) {
          var P = !0;
          try {
            P = !m.frameElement;
          } catch (ia) {}
          P && Vq();
        }
        Xb(m, 'load', Uq);
      }
      Bs = !1;
      'complete' === H.readyState ? Ds() : Xb(m, 'load', Ds);
      qo();
      ig(46) && N(111);
      ig(47) && N(112);
      lh = Sa();
      VD.bootstrap = lh;
      if (a) {
        var O = hr('INIT');
      }
    }
  });
})();
