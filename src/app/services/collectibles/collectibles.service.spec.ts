import { APP_INFO_PLUGIN, APP_PLUGIN, IsolatedModulesPlugin, MainProtocolStoreService, PermissionsService, ProtocolService, SubProtocolStoreService, WebIsolatedModules } from '@airgap/angular-core'
import { TestBed } from '@angular/core/testing'
import { PUSH_NOTIFICATIONS_PLUGIN } from 'src/app/capacitor-plugins/injection-tokens'

import { UnitHelper } from '../../../../test-config/unit-test-helper'

import { CollectiblesService } from './collectibles.service'

describe('CollectiblesService', () => {
  let collectiblesService: CollectiblesService
  let protocolService: ProtocolService
  let isolatedModules: IsolatedModulesPlugin
  let unitHelper: UnitHelper

  beforeAll(() => {
    isolatedModules = new WebIsolatedModules()
    protocolService = new ProtocolService(
      new MainProtocolStoreService(isolatedModules), 
      new SubProtocolStoreService(isolatedModules), 
      isolatedModules
    )
    protocolService.init()
  })

  beforeEach(() => {
    unitHelper = new UnitHelper()
    TestBed.configureTestingModule(
      unitHelper.testBed({
        providers: [
          { provide: PermissionsService, useValue: unitHelper.mockRefs.permissionsProvider },
          { provide: APP_PLUGIN, useValue: unitHelper.mockRefs.app },
          { provide: APP_INFO_PLUGIN, useValue: unitHelper.mockRefs.appInfo },
          { provide: PUSH_NOTIFICATIONS_PLUGIN, useValue: unitHelper.mockRefs.pushNotifications },
          { provide: ProtocolService, useValue: protocolService }
        ]
      })
    )
      .compileComponents()
      .catch(console.error)
    collectiblesService = TestBed.inject(CollectiblesService)
  })

  it('should be created', () => {
    expect(collectiblesService).toBeTruthy()
  })
})
