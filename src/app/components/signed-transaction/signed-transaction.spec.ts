import { APP_PLUGIN } from '@airgap/angular-core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UnitHelper } from '../../../../test-config/unit-test-helper'

import { SignedTransactionComponent } from './signed-transaction'

describe('SignedTransactionComponent', () => {
  let signedTransactionFixture: ComponentFixture<SignedTransactionComponent>
  let signedTransaction: SignedTransactionComponent

  let unitHelper: UnitHelper
  beforeEach(() => {
    unitHelper = new UnitHelper()
    TestBed.configureTestingModule(
      unitHelper.testBed({
        declarations: [],
        providers: [{ provide: APP_PLUGIN, useValue: unitHelper.mockRefs.app }]
      })
    )
      .compileComponents()
      .catch(console.error)
  })

  beforeEach(async () => {
    signedTransactionFixture = TestBed.createComponent(SignedTransactionComponent)
    signedTransaction = signedTransactionFixture.componentInstance
  })

  it('should be created', () => {
    expect(signedTransaction instanceof SignedTransactionComponent).toBe(true)
  })

  // // TODO: REENABLE
  // it('should load the from-to component if a valid tx is given', async(async () => {
  //   const serializer: Serializer = new Serializer()
  //   const serializedTxs = await serializer.serialize([
  //     {
  //       protocol: 'eth',
  //       type: IACMessageType.TransactionSignResponse,
  //       payload: {
  //         accountIdentifier: 'test',
  //         transaction:
  //           'f86c808504a817c800825208944a1e1d37462a422873bfccb1e705b05cc4bd922e880de0b6b3a76400008026a00678aaa8f8fd478952bf46044589f5489e809c5ae5717dfe6893490b1f98b441a06a82b82dad7c3232968ec3aa2bba32879b3ecdb877934915d7e65e095fe53d5d'
  //       }
  //     }
  //   ])

  //   expect(signedTransaction.airGapTxs).toBe(undefined)
  //   expect(signedTransaction.fallbackActivated).toBe(false)

  //   const signedTxs = await serializer.deserialize(serializedTxs)[0]
  //   signedTransaction.signedTx = signedTxs
  //   await signedTransaction.ngOnChanges()

  //   expect(signedTransaction.airGapTxs).toBeDefined()
  //   expect(signedTransaction.fallbackActivated).toBe(false)
  // }))

  /* TODO: Enable again when we fix invalid tx error
  it('should load fallback if something about the TX is wrong', async(async () => {
    const syncProtocol = new SyncProtocolUtils()
    const serializedTx = await syncProtocol.serialize({
      version: 1,
      protocol: 'eth',
      type: EncodedType.SIGNED_TRANSACTION,
      payload: {
        accountIdentifier: 'test',
        transaction:
          'asdasdasdasdsad944a1e1d37462a422873bfccb1e705b05cc4bd922e880de0b6b3a76400008026a00678aaa8f8fd478952bf46044589f5489e809c5ae5717dfe6893490b1f98b441a06a82b82dad7c3232968ec3aa2bba32879b3ecdb877934915d7e65e095fe53d5d'
      }
    })

    expect(signedTransaction.airGapTxs).toBe(undefined)
    expect(signedTransaction.fallbackActivated).toBe(false)

    const signedTx = await syncProtocol.deserialize(serializedTx)
    signedTransaction.signedTx = signedTx
    await signedTransaction.ngOnChanges()

    expect(signedTransaction.airGapTxs).toBeUndefined()
    expect(signedTransaction.fallbackActivated).toBe(true)
  }))
  */
})
