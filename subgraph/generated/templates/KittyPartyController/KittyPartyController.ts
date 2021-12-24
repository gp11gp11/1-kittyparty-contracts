// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Completed extends ethereum.Event {
  get params(): Completed__Params {
    return new Completed__Params(this);
  }
}

export class Completed__Params {
  _event: Completed;

  constructor(event: Completed) {
    this._event = event;
  }
}

export class StageTransition extends ethereum.Event {
  get params(): StageTransition__Params {
    return new StageTransition__Params(this);
  }
}

export class StageTransition__Params {
  _event: StageTransition;

  constructor(event: StageTransition) {
    this._event = event;
  }

  get prevStage(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nextStage(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class KittyPartyController extends ethereum.SmartContract {
  static bind(address: Address): KittyPartyController {
    return new KittyPartyController("KittyPartyController", address);
  }

  addRoundDeposits(): boolean {
    let result = super.call(
      "addRoundDeposits",
      "addRoundDeposits():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_addRoundDeposits(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addRoundDeposits",
      "addRoundDeposits():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  amountInDAIPerRound(): BigInt {
    let result = super.call(
      "amountInDAIPerRound",
      "amountInDAIPerRound():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_amountInDAIPerRound(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "amountInDAIPerRound",
      "amountInDAIPerRound():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  changeState(): boolean {
    let result = super.call("changeState", "changeState():(bool)", []);

    return result[0].toBoolean();
  }

  try_changeState(): ethereum.CallResult<boolean> {
    let result = super.tryCall("changeState", "changeState():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  currentRound(): i32 {
    let result = super.call("currentRound", "currentRound():(uint8)", []);

    return result[0].toI32();
  }

  try_currentRound(): ethereum.CallResult<i32> {
    let result = super.tryCall("currentRound", "currentRound():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  dai(): Address {
    let result = super.call("dai", "dai():(address)", []);

    return result[0].toAddress();
  }

  try_dai(): ethereum.CallResult<Address> {
    let result = super.tryCall("dai", "dai():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  daoFeesInBasisPoints(): BigInt {
    let result = super.call(
      "daoFeesInBasisPoints",
      "daoFeesInBasisPoints():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_daoFeesInBasisPoints(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "daoFeesInBasisPoints",
      "daoFeesInBasisPoints():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  depositAndAddKittenToParty(_inviteHash: Bytes): boolean {
    let result = super.call(
      "depositAndAddKittenToParty",
      "depositAndAddKittenToParty(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(_inviteHash)]
    );

    return result[0].toBoolean();
  }

  try_depositAndAddKittenToParty(
    _inviteHash: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "depositAndAddKittenToParty",
      "depositAndAddKittenToParty(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(_inviteHash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  durationInDays(): i32 {
    let result = super.call("durationInDays", "durationInDays():(uint16)", []);

    return result[0].toI32();
  }

  try_durationInDays(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "durationInDays",
      "durationInDays():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getStage(): BigInt {
    let result = super.call("getStage", "getStage():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getStage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getStage", "getStage():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  internalState(): i32 {
    let result = super.call("internalState", "internalState():(uint8)", []);

    return result[0].toI32();
  }

  try_internalState(): ethereum.CallResult<i32> {
    let result = super.tryCall("internalState", "internalState():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  kreator(): Address {
    let result = super.call("kreator", "kreator():(address)", []);

    return result[0].toAddress();
  }

  try_kreator(): ethereum.CallResult<Address> {
    let result = super.tryCall("kreator", "kreator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  kreatorFeesInBasisPoints(): BigInt {
    let result = super.call(
      "kreatorFeesInBasisPoints",
      "kreatorFeesInBasisPoints():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_kreatorFeesInBasisPoints(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "kreatorFeesInBasisPoints",
      "kreatorFeesInBasisPoints():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastStageTime(): BigInt {
    let result = super.call("lastStageTime", "lastStageTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastStageTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastStageTime",
      "lastStageTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  localKittens(): i32 {
    let result = super.call("localKittens", "localKittens():(uint16)", []);

    return result[0].toI32();
  }

  try_localKittens(): ethereum.CallResult<i32> {
    let result = super.tryCall("localKittens", "localKittens():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  numberOfRounds(): i32 {
    let result = super.call("numberOfRounds", "numberOfRounds():(uint16)", []);

    return result[0].toI32();
  }

  try_numberOfRounds(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "numberOfRounds",
      "numberOfRounds():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  partyName(): Bytes {
    let result = super.call("partyName", "partyName():(bytes32)", []);

    return result[0].toBytes();
  }

  try_partyName(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("partyName", "partyName():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  stage(): i32 {
    let result = super.call("stage", "stage():(uint8)", []);

    return result[0].toI32();
  }

  try_stage(): ethereum.CallResult<i32> {
    let result = super.tryCall("stage", "stage():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  timeSinceChange(): BigInt {
    let result = super.call(
      "timeSinceChange",
      "timeSinceChange():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_timeSinceChange(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "timeSinceChange",
      "timeSinceChange():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  timeToCollection(): i32 {
    let result = super.call(
      "timeToCollection",
      "timeToCollection():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_timeToCollection(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "timeToCollection",
      "timeToCollection():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }
}

export class AddRoundDepositsCall extends ethereum.Call {
  get inputs(): AddRoundDepositsCall__Inputs {
    return new AddRoundDepositsCall__Inputs(this);
  }

  get outputs(): AddRoundDepositsCall__Outputs {
    return new AddRoundDepositsCall__Outputs(this);
  }
}

export class AddRoundDepositsCall__Inputs {
  _call: AddRoundDepositsCall;

  constructor(call: AddRoundDepositsCall) {
    this._call = call;
  }
}

export class AddRoundDepositsCall__Outputs {
  _call: AddRoundDepositsCall;

  constructor(call: AddRoundDepositsCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApplyCompletePartyCall extends ethereum.Call {
  get inputs(): ApplyCompletePartyCall__Inputs {
    return new ApplyCompletePartyCall__Inputs(this);
  }

  get outputs(): ApplyCompletePartyCall__Outputs {
    return new ApplyCompletePartyCall__Outputs(this);
  }
}

export class ApplyCompletePartyCall__Inputs {
  _call: ApplyCompletePartyCall;

  constructor(call: ApplyCompletePartyCall) {
    this._call = call;
  }
}

export class ApplyCompletePartyCall__Outputs {
  _call: ApplyCompletePartyCall;

  constructor(call: ApplyCompletePartyCall) {
    this._call = call;
  }
}

export class ApplyInitialVerificationCall extends ethereum.Call {
  get inputs(): ApplyInitialVerificationCall__Inputs {
    return new ApplyInitialVerificationCall__Inputs(this);
  }

  get outputs(): ApplyInitialVerificationCall__Outputs {
    return new ApplyInitialVerificationCall__Outputs(this);
  }
}

export class ApplyInitialVerificationCall__Inputs {
  _call: ApplyInitialVerificationCall;

  constructor(call: ApplyInitialVerificationCall) {
    this._call = call;
  }
}

export class ApplyInitialVerificationCall__Outputs {
  _call: ApplyInitialVerificationCall;

  constructor(call: ApplyInitialVerificationCall) {
    this._call = call;
  }
}

export class ApplyWinnerStrategyCall extends ethereum.Call {
  get inputs(): ApplyWinnerStrategyCall__Inputs {
    return new ApplyWinnerStrategyCall__Inputs(this);
  }

  get outputs(): ApplyWinnerStrategyCall__Outputs {
    return new ApplyWinnerStrategyCall__Outputs(this);
  }
}

export class ApplyWinnerStrategyCall__Inputs {
  _call: ApplyWinnerStrategyCall;

  constructor(call: ApplyWinnerStrategyCall) {
    this._call = call;
  }
}

export class ApplyWinnerStrategyCall__Outputs {
  _call: ApplyWinnerStrategyCall;

  constructor(call: ApplyWinnerStrategyCall) {
    this._call = call;
  }
}

export class ChangeStateCall extends ethereum.Call {
  get inputs(): ChangeStateCall__Inputs {
    return new ChangeStateCall__Inputs(this);
  }

  get outputs(): ChangeStateCall__Outputs {
    return new ChangeStateCall__Outputs(this);
  }
}

export class ChangeStateCall__Inputs {
  _call: ChangeStateCall;

  constructor(call: ChangeStateCall) {
    this._call = call;
  }
}

export class ChangeStateCall__Outputs {
  _call: ChangeStateCall;

  constructor(call: ChangeStateCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DepositAndAddKittenToPartyCall extends ethereum.Call {
  get inputs(): DepositAndAddKittenToPartyCall__Inputs {
    return new DepositAndAddKittenToPartyCall__Inputs(this);
  }

  get outputs(): DepositAndAddKittenToPartyCall__Outputs {
    return new DepositAndAddKittenToPartyCall__Outputs(this);
  }
}

export class DepositAndAddKittenToPartyCall__Inputs {
  _call: DepositAndAddKittenToPartyCall;

  constructor(call: DepositAndAddKittenToPartyCall) {
    this._call = call;
  }

  get _inviteHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DepositAndAddKittenToPartyCall__Outputs {
  _call: DepositAndAddKittenToPartyCall;

  constructor(call: DepositAndAddKittenToPartyCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _kittyInitiator(): InitializeCall_kittyInitiatorStruct {
    return this._call.inputValues[0].value.toTuple() as InitializeCall_kittyInitiatorStruct;
  }

  get _accountantContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _kittyPartyDAOTreasury(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _kreator(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _oracleAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _litterAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _kreatorStake(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall_kittyInitiatorStruct extends ethereum.Tuple {
  get daiAddress(): Address {
    return this[0].toAddress();
  }

  get winningStrategy(): i32 {
    return this[1].toI32();
  }

  get vrfEnabled(): boolean {
    return this[2].toBoolean();
  }

  get yieldContract(): Address {
    return this[3].toAddress();
  }

  get maxKittens(): i32 {
    return this[4].toI32();
  }

  get durationInDays(): i32 {
    return this[5].toI32();
  }

  get timeToCollection(): i32 {
    return this[6].toI32();
  }

  get amountInDAIPerRound(): BigInt {
    return this[7].toBigInt();
  }

  get partyName(): Bytes {
    return this[8].toBytes();
  }
}

export class SetActivityIntervalCall extends ethereum.Call {
  get inputs(): SetActivityIntervalCall__Inputs {
    return new SetActivityIntervalCall__Inputs(this);
  }

  get outputs(): SetActivityIntervalCall__Outputs {
    return new SetActivityIntervalCall__Outputs(this);
  }
}

export class SetActivityIntervalCall__Inputs {
  _call: SetActivityIntervalCall;

  constructor(call: SetActivityIntervalCall) {
    this._call = call;
  }

  get _timeToCollection(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetActivityIntervalCall__Outputs {
  _call: SetActivityIntervalCall;

  constructor(call: SetActivityIntervalCall) {
    this._call = call;
  }
}

export class SetDAOFeesCall extends ethereum.Call {
  get inputs(): SetDAOFeesCall__Inputs {
    return new SetDAOFeesCall__Inputs(this);
  }

  get outputs(): SetDAOFeesCall__Outputs {
    return new SetDAOFeesCall__Outputs(this);
  }
}

export class SetDAOFeesCall__Inputs {
  _call: SetDAOFeesCall;

  constructor(call: SetDAOFeesCall) {
    this._call = call;
  }

  get _daoFeesInBasisPoints(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetDAOFeesCall__Outputs {
  _call: SetDAOFeesCall;

  constructor(call: SetDAOFeesCall) {
    this._call = call;
  }
}

export class SetInviteHashCall extends ethereum.Call {
  get inputs(): SetInviteHashCall__Inputs {
    return new SetInviteHashCall__Inputs(this);
  }

  get outputs(): SetInviteHashCall__Outputs {
    return new SetInviteHashCall__Outputs(this);
  }
}

export class SetInviteHashCall__Inputs {
  _call: SetInviteHashCall;

  constructor(call: SetInviteHashCall) {
    this._call = call;
  }

  get _inviteHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetInviteHashCall__Outputs {
  _call: SetInviteHashCall;

  constructor(call: SetInviteHashCall) {
    this._call = call;
  }
}

export class SetKreatorFeesCall extends ethereum.Call {
  get inputs(): SetKreatorFeesCall__Inputs {
    return new SetKreatorFeesCall__Inputs(this);
  }

  get outputs(): SetKreatorFeesCall__Outputs {
    return new SetKreatorFeesCall__Outputs(this);
  }
}

export class SetKreatorFeesCall__Inputs {
  _call: SetKreatorFeesCall;

  constructor(call: SetKreatorFeesCall) {
    this._call = call;
  }

  get _kreatorFeesInBasisPoints(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetKreatorFeesCall__Outputs {
  _call: SetKreatorFeesCall;

  constructor(call: SetKreatorFeesCall) {
    this._call = call;
  }
}
