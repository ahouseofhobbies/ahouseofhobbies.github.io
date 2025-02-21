// Phases
// Hero
type THeroPhaseStart = 'START_OF_HERO_PHASE'
type THeroPhase = 'DURING_HERO_PHASE'
type THeroPhaseEnd = 'END_OF_HERO_PHASE'

// Move
type TMovementPhaseStart = 'START_OF_MOVEMENT_PHASE'
type TMovementPhase = 'DURING_MOVEMENT_PHASE'
type TMovementPhaseEnd = 'END_OF_MOVEMENT_PHASE'

// Shooting
type TShootingPhaseStart = 'START_OF_SHOOTING_PHASE'
type TShootingPhase = 'DURING_SHOOTING_PHASE'
type TShootingPhaseEnd = 'END_OF_SHOOTING_PHASE'

// Charge
type TChargePhaseStart = 'START_OF_CHARGE_PHASE'
type TChargePhase = 'DURING_CHARGE_PHASE'
type TChargePhaseEnd = 'END_OF_CHARGE_PHASE'

// Combat
type TCombatPhaseStart = 'START_OF_COMBAT_PHASE'
type TCombatPhase = 'DURING_COMBAT_PHASE'
type TCombatPhaseEnd = 'END_OF_COMBAT_PHASE'

// Battleshock
type TBattleshockPhaseStart = 'START_OF_BATTLESHOCK_PHASE'
type TBattleshockPhase = 'DURING_BATTLESHOCK_PHASE'
type TBattleshockPhaseEnd = 'END_OF_BATTLESHOCK_PHASE'

// Global Saves
type TSavesPhase = 'SAVES'

// Global Wards
type TWardsPhase = 'WARDS'

// Global Wound Allocation
type TWoundAllocationPhase = 'WOUND_ALLOCATION'

// Phases Exports
export const START_OF_HERO_PHASE: THeroPhaseStart = 'START_OF_HERO_PHASE'
export const HERO_PHASE: THeroPhase = 'DURING_HERO_PHASE'
export const END_OF_HERO_PHASE: THeroPhaseEnd = 'END_OF_HERO_PHASE'
export const START_OF_MOVEMENT_PHASE: TMovementPhaseStart = 'START_OF_MOVEMENT_PHASE'
export const MOVEMENT_PHASE: TMovementPhase = 'DURING_MOVEMENT_PHASE'
export const END_OF_MOVEMENT_PHASE: TMovementPhaseEnd = 'END_OF_MOVEMENT_PHASE'
export const START_OF_SHOOTING_PHASE: TShootingPhaseStart = 'START_OF_SHOOTING_PHASE'
export const SHOOTING_PHASE: TShootingPhase = 'DURING_SHOOTING_PHASE'
export const END_OF_SHOOTING_PHASE: TShootingPhaseEnd = 'END_OF_SHOOTING_PHASE'
export const START_OF_CHARGE_PHASE: TChargePhaseStart = 'START_OF_CHARGE_PHASE'
export const CHARGE_PHASE: TChargePhase = 'DURING_CHARGE_PHASE'
export const END_OF_CHARGE_PHASE: TChargePhaseEnd = 'END_OF_CHARGE_PHASE'
export const START_OF_COMBAT_PHASE: TCombatPhaseStart = 'START_OF_COMBAT_PHASE'
export const COMBAT_PHASE: TCombatPhase = 'DURING_COMBAT_PHASE'
export const END_OF_COMBAT_PHASE: TCombatPhaseEnd = 'END_OF_COMBAT_PHASE'
export const START_OF_BATTLESHOCK_PHASE: TBattleshockPhaseStart = 'START_OF_BATTLESHOCK_PHASE'
export const BATTLESHOCK_PHASE: TBattleshockPhase = 'DURING_BATTLESHOCK_PHASE'
export const END_OF_BATTLESHOCK_PHASE: TBattleshockPhaseEnd = 'END_OF_BATTLESHOCK_PHASE'

// Artificial phases that help organize the game better
export const SAVES_PHASE: TSavesPhase = 'SAVES'
export const WARDS_PHASE: TWardsPhase = 'WARDS'
export const WOUND_ALLOCATION_PHASE: TWoundAllocationPhase = 'WOUND_ALLOCATION'

// Turn Types
type TSetupStart = 'START_OF_SETUP'
type TDuringSetup = 'DURING_SETUP'
type TSetupEnd = 'END_OF_SETUP'
type TGameStart = 'START_OF_GAME'
type TGameDuring = 'DURING_GAME'
type TTurnStart = 'START_OF_TURN'
type TRoundStart = 'START_OF_ROUND'
type TTurnDuring = 'DURING_TURN'
type TRoundDuring = 'DURING_ROUND'
type TTurnEnd = 'END_OF_TURN'
type TRoundEnd = 'END_OF_ROUND'
type TGameEnd = 'END_OF_GAME'
type TPhaseStartOfAny = 'START_OF_ANY_PHASE'
type TPhaseDuringAny = 'DURING_ANY_PHASE'
type TPhaseEndOfAny = 'END_OF_ANY_PHASE'

// Turn Exports
export const START_OF_SETUP: TSetupStart = 'START_OF_SETUP'
export const DURING_SETUP: TDuringSetup = 'DURING_SETUP'
export const END_OF_SETUP: TSetupEnd = 'END_OF_SETUP'

export const START_OF_GAME: TGameStart = 'START_OF_GAME'
export const DURING_GAME: TGameDuring = 'DURING_GAME'
export const END_OF_GAME: TGameEnd = 'END_OF_GAME'

export const START_OF_TURN: TTurnStart = 'START_OF_TURN'
export const DURING_TURN: TTurnDuring = 'DURING_TURN'
export const END_OF_TURN: TTurnEnd = 'END_OF_TURN'

export const START_OF_ANY_PHASE: TPhaseStartOfAny = 'START_OF_ANY_PHASE'
export const DURING_ANY_PHASE: TPhaseDuringAny = 'DURING_ANY_PHASE'
export const END_OF_ANY_PHASE: TPhaseEndOfAny = 'END_OF_ANY_PHASE'

export const START_OF_ROUND: TRoundStart = 'START_OF_ROUND'
export const DURING_ROUND: TRoundDuring = 'DURING_ROUND'
export const END_OF_ROUND: TRoundEnd = 'END_OF_ROUND'

// Specific Turn Phases
type TTurnOne_START_OF_TURN = 'TURN_ONE_START_OF_TURN'
type TTurnOne_START_OF_ROUND = 'TURN_ONE_START_OF_ROUND'
type TTurnOne_DURING_TURN = 'TURN_ONE_DURING_TURN'
type TTurnOne_DURING_ROUND = 'TURN_ONE_DURING_ROUND'
type TTurnOne_START_OF_HERO_PHASE = 'TURN_ONE_START_OF_HERO_PHASE'
type TTurnOne_HERO_PHASE = 'TURN_ONE_DURING_HERO_PHASE'
type TTurnOne_END_OF_HERO_PHASE = 'TURN_ONE_END_OF_HERO_PHASE'
type TTurnOne_START_OF_MOVEMENT_PHASE = 'TURN_ONE_START_OF_MOVEMENT_PHASE'
type TTurnOne_MOVEMENT_PHASE = 'TURN_ONE_DURING_MOVEMENT_PHASE'
type TTurnOne_END_OF_MOVEMENT_PHASE = 'TURN_ONE_END_OF_MOVEMENT_PHASE'
type TTurnOne_START_OF_SHOOTING_PHASE = 'TURN_ONE_START_OF_SHOOTING_PHASE'
type TTurnOne_SHOOTING_PHASE = 'TURN_ONE_DURING_SHOOTING_PHASE'
type TTurnOne_END_OF_SHOOTING_PHASE = 'TURN_ONE_END_OF_SHOOTING_PHASE'
type TTurnOne_START_OF_CHARGE_PHASE = 'TURN_ONE_START_OF_CHARGE_PHASE'
type TTurnOne_CHARGE_PHASE = 'TURN_ONE_DURING_CHARGE_PHASE'
type TTurnOne_END_OF_CHARGE_PHASE = 'TURN_ONE_END_OF_CHARGE_PHASE'
type TTurnOne_START_OF_COMBAT_PHASE = 'TURN_ONE_START_OF_COMBAT_PHASE'
type TTurnOne_COMBAT_PHASE = 'TURN_ONE_DURING_COMBAT_PHASE'
type TTurnOne_END_OF_COMBAT_PHASE = 'TURN_ONE_END_OF_COMBAT_PHASE'
type TTurnOne_START_OF_BATTLESHOCK_PHASE = 'TURN_ONE_START_OF_BATTLESHOCK_PHASE'
type TTurnOne_BATTLESHOCK_PHASE = 'TURN_ONE_DURING_BATTLESHOCK_PHASE'
type TTurnOne_END_OF_BATTLESHOCK_PHASE = 'TURN_ONE_END_OF_BATTLESHOCK_PHASE'
type TTurnOne_END_OF_TURN = 'TURN_ONE_END_OF_TURN'
type TTurnOne_END_OF_ROUND = 'TURN_ONE_END_OF_ROUND'
type TTurnTwo_START_OF_TURN = 'TURN_TWO_START_OF_TURN'
type TTurnTwo_START_OF_ROUND = 'TURN_TWO_START_OF_ROUND'
type TTurnTwo_DURING_TURN = 'TURN_TWO_DURING_TURN'
type TTurnTwo_DURING_ROUND = 'TURN_TWO_DURING_ROUND'
type TTurnTwo_START_OF_HERO_PHASE = 'TURN_TWO_START_OF_HERO_PHASE'
type TTurnTwo_HERO_PHASE = 'TURN_TWO_DURING_HERO_PHASE'
type TTurnTwo_END_OF_HERO_PHASE = 'TURN_TWO_END_OF_HERO_PHASE'
type TTurnTwo_START_OF_MOVEMENT_PHASE = 'TURN_TWO_START_OF_MOVEMENT_PHASE'
type TTurnTwo_MOVEMENT_PHASE = 'TURN_TWO_DURING_MOVEMENT_PHASE'
type TTurnTwo_END_OF_MOVEMENT_PHASE = 'TURN_TWO_END_OF_MOVEMENT_PHASE'
type TTurnTwo_START_OF_SHOOTING_PHASE = 'TURN_TWO_START_OF_SHOOTING_PHASE'
type TTurnTwo_SHOOTING_PHASE = 'TURN_TWO_DURING_SHOOTING_PHASE'
type TTurnTwo_END_OF_SHOOTING_PHASE = 'TURN_TWO_END_OF_SHOOTING_PHASE'
type TTurnTwo_START_OF_CHARGE_PHASE = 'TURN_TWO_START_OF_CHARGE_PHASE'
type TTurnTwo_CHARGE_PHASE = 'TURN_TWO_DURING_CHARGE_PHASE'
type TTurnTwo_END_OF_CHARGE_PHASE = 'TURN_TWO_END_OF_CHARGE_PHASE'
type TTurnTwo_START_OF_COMBAT_PHASE = 'TURN_TWO_START_OF_COMBAT_PHASE'
type TTurnTwo_COMBAT_PHASE = 'TURN_TWO_DURING_COMBAT_PHASE'
type TTurnTwo_END_OF_COMBAT_PHASE = 'TURN_TWO_END_OF_COMBAT_PHASE'
type TTurnTwo_START_OF_BATTLESHOCK_PHASE = 'TURN_TWO_START_OF_BATTLESHOCK_PHASE'
type TTurnTwo_BATTLESHOCK_PHASE = 'TURN_TWO_DURING_BATTLESHOCK_PHASE'
type TTurnTwo_END_OF_BATTLESHOCK_PHASE = 'TURN_TWO_END_OF_BATTLESHOCK_PHASE'
type TTurnTwo_END_OF_TURN = 'TURN_TWO_END_OF_TURN'
type TTurnTwo_END_OF_ROUND = 'TURN_TWO_END_OF_ROUND'
type TTurnThree_START_OF_TURN = 'TURN_THREE_START_OF_TURN'
type TTurnThree_START_OF_ROUND = 'TURN_THREE_START_OF_ROUND'
type TTurnThree_DURING_TURN = 'TURN_THREE_DURING_TURN'
type TTurnThree_DURING_ROUND = 'TURN_THREE_DURING_ROUND'
type TTurnThree_START_OF_HERO_PHASE = 'TURN_THREE_START_OF_HERO_PHASE'
type TTurnThree_HERO_PHASE = 'TURN_THREE_DURING_HERO_PHASE'
type TTurnThree_END_OF_HERO_PHASE = 'TURN_THREE_END_OF_HERO_PHASE'
type TTurnThree_START_OF_MOVEMENT_PHASE = 'TURN_THREE_START_OF_MOVEMENT_PHASE'
type TTurnThree_MOVEMENT_PHASE = 'TURN_THREE_DURING_MOVEMENT_PHASE'
type TTurnThree_END_OF_MOVEMENT_PHASE = 'TURN_THREE_END_OF_MOVEMENT_PHASE'
type TTurnThree_START_OF_SHOOTING_PHASE = 'TURN_THREE_START_OF_SHOOTING_PHASE'
type TTurnThree_SHOOTING_PHASE = 'TURN_THREE_DURING_SHOOTING_PHASE'
type TTurnThree_END_OF_SHOOTING_PHASE = 'TURN_THREE_END_OF_SHOOTING_PHASE'
type TTurnThree_START_OF_CHARGE_PHASE = 'TURN_THREE_START_OF_CHARGE_PHASE'
type TTurnThree_CHARGE_PHASE = 'TURN_THREE_DURING_CHARGE_PHASE'
type TTurnThree_END_OF_CHARGE_PHASE = 'TURN_THREE_END_OF_CHARGE_PHASE'
type TTurnThree_START_OF_COMBAT_PHASE = 'TURN_THREE_START_OF_COMBAT_PHASE'
type TTurnThree_COMBAT_PHASE = 'TURN_THREE_DURING_COMBAT_PHASE'
type TTurnThree_END_OF_COMBAT_PHASE = 'TURN_THREE_END_OF_COMBAT_PHASE'
type TTurnThree_START_OF_BATTLESHOCK_PHASE = 'TURN_THREE_START_OF_BATTLESHOCK_PHASE'
type TTurnThree_BATTLESHOCK_PHASE = 'TURN_THREE_DURING_BATTLESHOCK_PHASE'
type TTurnThree_END_OF_BATTLESHOCK_PHASE = 'TURN_THREE_END_OF_BATTLESHOCK_PHASE'
type TTurnThree_END_OF_TURN = 'TURN_THREE_END_OF_TURN'
type TTurnThree_END_OF_ROUND = 'TURN_THREE_END_OF_ROUND'
type TTurnFour_START_OF_TURN = 'TURN_FOUR_START_OF_TURN'
type TTurnFour_START_OF_ROUND = 'TURN_FOUR_START_OF_ROUND'
type TTurnFour_DURING_TURN = 'TURN_FOUR_DURING_TURN'
type TTurnFour_DURING_ROUND = 'TURN_FOUR_DURING_ROUND'
type TTurnFour_START_OF_HERO_PHASE = 'TURN_FOUR_START_OF_HERO_PHASE'
type TTurnFour_HERO_PHASE = 'TURN_FOUR_DURING_HERO_PHASE'
type TTurnFour_END_OF_HERO_PHASE = 'TURN_FOUR_END_OF_HERO_PHASE'
type TTurnFour_START_OF_MOVEMENT_PHASE = 'TURN_FOUR_START_OF_MOVEMENT_PHASE'
type TTurnFour_MOVEMENT_PHASE = 'TURN_FOUR_DURING_MOVEMENT_PHASE'
type TTurnFour_END_OF_MOVEMENT_PHASE = 'TURN_FOUR_END_OF_MOVEMENT_PHASE'
type TTurnFour_START_OF_SHOOTING_PHASE = 'TURN_FOUR_START_OF_SHOOTING_PHASE'
type TTurnFour_SHOOTING_PHASE = 'TURN_FOUR_DURING_SHOOTING_PHASE'
type TTurnFour_END_OF_SHOOTING_PHASE = 'TURN_FOUR_END_OF_SHOOTING_PHASE'
type TTurnFour_START_OF_CHARGE_PHASE = 'TURN_FOUR_START_OF_CHARGE_PHASE'
type TTurnFour_CHARGE_PHASE = 'TURN_FOUR_DURING_CHARGE_PHASE'
type TTurnFour_END_OF_CHARGE_PHASE = 'TURN_FOUR_END_OF_CHARGE_PHASE'
type TTurnFour_START_OF_COMBAT_PHASE = 'TURN_FOUR_START_OF_COMBAT_PHASE'
type TTurnFour_COMBAT_PHASE = 'TURN_FOUR_DURING_COMBAT_PHASE'
type TTurnFour_END_OF_COMBAT_PHASE = 'TURN_FOUR_END_OF_COMBAT_PHASE'
type TTurnFour_START_OF_BATTLESHOCK_PHASE = 'TURN_FOUR_START_OF_BATTLESHOCK_PHASE'
type TTurnFour_BATTLESHOCK_PHASE = 'TURN_FOUR_DURING_BATTLESHOCK_PHASE'
type TTurnFour_END_OF_BATTLESHOCK_PHASE = 'TURN_FOUR_END_OF_BATTLESHOCK_PHASE'
type TTurnFour_END_OF_TURN = 'TURN_FOUR_END_OF_TURN'
type TTurnFour_END_OF_ROUND = 'TURN_FOUR_END_OF_ROUND'
type TTurnFive_START_OF_TURN = 'TURN_FIVE_START_OF_TURN'
type TTurnFive_START_OF_ROUND = 'TURN_FIVE_START_OF_ROUND'
type TTurnFive_DURING_TURN = 'TURN_FIVE_DURING_TURN'
type TTurnFive_DURING_ROUND = 'TURN_FIVE_DURING_ROUND'
type TTurnFive_START_OF_HERO_PHASE = 'TURN_FIVE_START_OF_HERO_PHASE'
type TTurnFive_HERO_PHASE = 'TURN_FIVE_DURING_HERO_PHASE'
type TTurnFive_END_OF_HERO_PHASE = 'TURN_FIVE_END_OF_HERO_PHASE'
type TTurnFive_START_OF_MOVEMENT_PHASE = 'TURN_FIVE_START_OF_MOVEMENT_PHASE'
type TTurnFive_MOVEMENT_PHASE = 'TURN_FIVE_DURING_MOVEMENT_PHASE'
type TTurnFive_END_OF_MOVEMENT_PHASE = 'TURN_FIVE_END_OF_MOVEMENT_PHASE'
type TTurnFive_START_OF_SHOOTING_PHASE = 'TURN_FIVE_START_OF_SHOOTING_PHASE'
type TTurnFive_SHOOTING_PHASE = 'TURN_FIVE_DURING_SHOOTING_PHASE'
type TTurnFive_END_OF_SHOOTING_PHASE = 'TURN_FIVE_END_OF_SHOOTING_PHASE'
type TTurnFive_START_OF_CHARGE_PHASE = 'TURN_FIVE_START_OF_CHARGE_PHASE'
type TTurnFive_CHARGE_PHASE = 'TURN_FIVE_DURING_CHARGE_PHASE'
type TTurnFive_END_OF_CHARGE_PHASE = 'TURN_FIVE_END_OF_CHARGE_PHASE'
type TTurnFive_START_OF_COMBAT_PHASE = 'TURN_FIVE_START_OF_COMBAT_PHASE'
type TTurnFive_COMBAT_PHASE = 'TURN_FIVE_DURING_COMBAT_PHASE'
type TTurnFive_END_OF_COMBAT_PHASE = 'TURN_FIVE_END_OF_COMBAT_PHASE'
type TTurnFive_START_OF_BATTLESHOCK_PHASE = 'TURN_FIVE_START_OF_BATTLESHOCK_PHASE'
type TTurnFive_BATTLESHOCK_PHASE = 'TURN_FIVE_DURING_BATTLESHOCK_PHASE'
type TTurnFive_END_OF_BATTLESHOCK_PHASE = 'TURN_FIVE_END_OF_BATTLESHOCK_PHASE'
type TTurnFive_END_OF_TURN = 'TURN_FIVE_END_OF_TURN'
type TTurnFive_END_OF_ROUND = 'TURN_FIVE_END_OF_ROUND'

// Specific Turn Consts
export const TURN_ONE_START_OF_TURN: TTurnOne_START_OF_TURN = 'TURN_ONE_START_OF_TURN'
export const TURN_ONE_START_OF_ROUND: TTurnOne_START_OF_ROUND = 'TURN_ONE_START_OF_ROUND'
export const TURN_ONE_DURING_TURN: TTurnOne_DURING_TURN = 'TURN_ONE_DURING_TURN'
export const TURN_ONE_DURING_ROUND: TTurnOne_DURING_ROUND = 'TURN_ONE_DURING_ROUND'
export const TURN_ONE_START_OF_HERO_PHASE: TTurnOne_START_OF_HERO_PHASE = 'TURN_ONE_START_OF_HERO_PHASE'
export const TURN_ONE_HERO_PHASE: TTurnOne_HERO_PHASE = 'TURN_ONE_DURING_HERO_PHASE'
export const TURN_ONE_END_OF_HERO_PHASE: TTurnOne_END_OF_HERO_PHASE = 'TURN_ONE_END_OF_HERO_PHASE'
export const TURN_ONE_START_OF_MOVEMENT_PHASE: TTurnOne_START_OF_MOVEMENT_PHASE =
  'TURN_ONE_START_OF_MOVEMENT_PHASE'
export const TURN_ONE_MOVEMENT_PHASE: TTurnOne_MOVEMENT_PHASE = 'TURN_ONE_DURING_MOVEMENT_PHASE'
export const TURN_ONE_END_OF_MOVEMENT_PHASE: TTurnOne_END_OF_MOVEMENT_PHASE = 'TURN_ONE_END_OF_MOVEMENT_PHASE'
export const TURN_ONE_START_OF_SHOOTING_PHASE: TTurnOne_START_OF_SHOOTING_PHASE =
  'TURN_ONE_START_OF_SHOOTING_PHASE'
export const TURN_ONE_SHOOTING_PHASE: TTurnOne_SHOOTING_PHASE = 'TURN_ONE_DURING_SHOOTING_PHASE'
export const TURN_ONE_END_OF_SHOOTING_PHASE: TTurnOne_END_OF_SHOOTING_PHASE = 'TURN_ONE_END_OF_SHOOTING_PHASE'
export const TURN_ONE_START_OF_CHARGE_PHASE: TTurnOne_START_OF_CHARGE_PHASE = 'TURN_ONE_START_OF_CHARGE_PHASE'
export const TURN_ONE_CHARGE_PHASE: TTurnOne_CHARGE_PHASE = 'TURN_ONE_DURING_CHARGE_PHASE'
export const TURN_ONE_END_OF_CHARGE_PHASE: TTurnOne_END_OF_CHARGE_PHASE = 'TURN_ONE_END_OF_CHARGE_PHASE'
export const TURN_ONE_START_OF_COMBAT_PHASE: TTurnOne_START_OF_COMBAT_PHASE = 'TURN_ONE_START_OF_COMBAT_PHASE'
export const TURN_ONE_COMBAT_PHASE: TTurnOne_COMBAT_PHASE = 'TURN_ONE_DURING_COMBAT_PHASE'
export const TURN_ONE_END_OF_COMBAT_PHASE: TTurnOne_END_OF_COMBAT_PHASE = 'TURN_ONE_END_OF_COMBAT_PHASE'
export const TURN_ONE_START_OF_BATTLESHOCK_PHASE: TTurnOne_START_OF_BATTLESHOCK_PHASE =
  'TURN_ONE_START_OF_BATTLESHOCK_PHASE'
export const TURN_ONE_BATTLESHOCK_PHASE: TTurnOne_BATTLESHOCK_PHASE = 'TURN_ONE_DURING_BATTLESHOCK_PHASE'
export const TURN_ONE_END_OF_BATTLESHOCK_PHASE: TTurnOne_END_OF_BATTLESHOCK_PHASE =
  'TURN_ONE_END_OF_BATTLESHOCK_PHASE'
export const TURN_ONE_END_OF_TURN: TTurnOne_END_OF_TURN = 'TURN_ONE_END_OF_TURN'
export const TURN_ONE_END_OF_ROUND: TTurnOne_END_OF_ROUND = 'TURN_ONE_END_OF_ROUND'
export const TURN_TWO_START_OF_TURN: TTurnTwo_START_OF_TURN = 'TURN_TWO_START_OF_TURN'
export const TURN_TWO_START_OF_ROUND: TTurnTwo_START_OF_ROUND = 'TURN_TWO_START_OF_ROUND'
export const TURN_TWO_DURING_TURN: TTurnTwo_DURING_TURN = 'TURN_TWO_DURING_TURN'
export const TURN_TWO_DURING_ROUND: TTurnTwo_DURING_ROUND = 'TURN_TWO_DURING_ROUND'
export const TURN_TWO_START_OF_HERO_PHASE: TTurnTwo_START_OF_HERO_PHASE = 'TURN_TWO_START_OF_HERO_PHASE'
export const TURN_TWO_HERO_PHASE: TTurnTwo_HERO_PHASE = 'TURN_TWO_DURING_HERO_PHASE'
export const TURN_TWO_END_OF_HERO_PHASE: TTurnTwo_END_OF_HERO_PHASE = 'TURN_TWO_END_OF_HERO_PHASE'
export const TURN_TWO_START_OF_MOVEMENT_PHASE: TTurnTwo_START_OF_MOVEMENT_PHASE =
  'TURN_TWO_START_OF_MOVEMENT_PHASE'
export const TURN_TWO_MOVEMENT_PHASE: TTurnTwo_MOVEMENT_PHASE = 'TURN_TWO_DURING_MOVEMENT_PHASE'
export const TURN_TWO_END_OF_MOVEMENT_PHASE: TTurnTwo_END_OF_MOVEMENT_PHASE = 'TURN_TWO_END_OF_MOVEMENT_PHASE'
export const TURN_TWO_START_OF_SHOOTING_PHASE: TTurnTwo_START_OF_SHOOTING_PHASE =
  'TURN_TWO_START_OF_SHOOTING_PHASE'
export const TURN_TWO_SHOOTING_PHASE: TTurnTwo_SHOOTING_PHASE = 'TURN_TWO_DURING_SHOOTING_PHASE'
export const TURN_TWO_END_OF_SHOOTING_PHASE: TTurnTwo_END_OF_SHOOTING_PHASE = 'TURN_TWO_END_OF_SHOOTING_PHASE'
export const TURN_TWO_START_OF_CHARGE_PHASE: TTurnTwo_START_OF_CHARGE_PHASE = 'TURN_TWO_START_OF_CHARGE_PHASE'
export const TURN_TWO_CHARGE_PHASE: TTurnTwo_CHARGE_PHASE = 'TURN_TWO_DURING_CHARGE_PHASE'
export const TURN_TWO_END_OF_CHARGE_PHASE: TTurnTwo_END_OF_CHARGE_PHASE = 'TURN_TWO_END_OF_CHARGE_PHASE'
export const TURN_TWO_START_OF_COMBAT_PHASE: TTurnTwo_START_OF_COMBAT_PHASE = 'TURN_TWO_START_OF_COMBAT_PHASE'
export const TURN_TWO_COMBAT_PHASE: TTurnTwo_COMBAT_PHASE = 'TURN_TWO_DURING_COMBAT_PHASE'
export const TURN_TWO_END_OF_COMBAT_PHASE: TTurnTwo_END_OF_COMBAT_PHASE = 'TURN_TWO_END_OF_COMBAT_PHASE'
export const TURN_TWO_START_OF_BATTLESHOCK_PHASE: TTurnTwo_START_OF_BATTLESHOCK_PHASE =
  'TURN_TWO_START_OF_BATTLESHOCK_PHASE'
export const TURN_TWO_BATTLESHOCK_PHASE: TTurnTwo_BATTLESHOCK_PHASE = 'TURN_TWO_DURING_BATTLESHOCK_PHASE'
export const TURN_TWO_END_OF_BATTLESHOCK_PHASE: TTurnTwo_END_OF_BATTLESHOCK_PHASE =
  'TURN_TWO_END_OF_BATTLESHOCK_PHASE'
export const TURN_TWO_END_OF_TURN: TTurnTwo_END_OF_TURN = 'TURN_TWO_END_OF_TURN'
export const TURN_TWO_END_OF_ROUND: TTurnTwo_END_OF_ROUND = 'TURN_TWO_END_OF_ROUND'
export const TURN_THREE_START_OF_TURN: TTurnThree_START_OF_TURN = 'TURN_THREE_START_OF_TURN'
export const TURN_THREE_START_OF_ROUND: TTurnThree_START_OF_ROUND = 'TURN_THREE_START_OF_ROUND'
export const TURN_THREE_DURING_TURN: TTurnThree_DURING_TURN = 'TURN_THREE_DURING_TURN'
export const TURN_THREE_DURING_ROUND: TTurnThree_DURING_ROUND = 'TURN_THREE_DURING_ROUND'
export const TURN_THREE_START_OF_HERO_PHASE: TTurnThree_START_OF_HERO_PHASE = 'TURN_THREE_START_OF_HERO_PHASE'
export const TURN_THREE_HERO_PHASE: TTurnThree_HERO_PHASE = 'TURN_THREE_DURING_HERO_PHASE'
export const TURN_THREE_END_OF_HERO_PHASE: TTurnThree_END_OF_HERO_PHASE = 'TURN_THREE_END_OF_HERO_PHASE'
export const TURN_THREE_START_OF_MOVEMENT_PHASE: TTurnThree_START_OF_MOVEMENT_PHASE =
  'TURN_THREE_START_OF_MOVEMENT_PHASE'
export const TURN_THREE_MOVEMENT_PHASE: TTurnThree_MOVEMENT_PHASE = 'TURN_THREE_DURING_MOVEMENT_PHASE'
export const TURN_THREE_END_OF_MOVEMENT_PHASE: TTurnThree_END_OF_MOVEMENT_PHASE =
  'TURN_THREE_END_OF_MOVEMENT_PHASE'
export const TURN_THREE_START_OF_SHOOTING_PHASE: TTurnThree_START_OF_SHOOTING_PHASE =
  'TURN_THREE_START_OF_SHOOTING_PHASE'
export const TURN_THREE_SHOOTING_PHASE: TTurnThree_SHOOTING_PHASE = 'TURN_THREE_DURING_SHOOTING_PHASE'
export const TURN_THREE_END_OF_SHOOTING_PHASE: TTurnThree_END_OF_SHOOTING_PHASE =
  'TURN_THREE_END_OF_SHOOTING_PHASE'
export const TURN_THREE_START_OF_CHARGE_PHASE: TTurnThree_START_OF_CHARGE_PHASE =
  'TURN_THREE_START_OF_CHARGE_PHASE'
export const TURN_THREE_CHARGE_PHASE: TTurnThree_CHARGE_PHASE = 'TURN_THREE_DURING_CHARGE_PHASE'
export const TURN_THREE_END_OF_CHARGE_PHASE: TTurnThree_END_OF_CHARGE_PHASE = 'TURN_THREE_END_OF_CHARGE_PHASE'
export const TURN_THREE_START_OF_COMBAT_PHASE: TTurnThree_START_OF_COMBAT_PHASE =
  'TURN_THREE_START_OF_COMBAT_PHASE'
export const TURN_THREE_COMBAT_PHASE: TTurnThree_COMBAT_PHASE = 'TURN_THREE_DURING_COMBAT_PHASE'
export const TURN_THREE_END_OF_COMBAT_PHASE: TTurnThree_END_OF_COMBAT_PHASE = 'TURN_THREE_END_OF_COMBAT_PHASE'
export const TURN_THREE_START_OF_BATTLESHOCK_PHASE: TTurnThree_START_OF_BATTLESHOCK_PHASE =
  'TURN_THREE_START_OF_BATTLESHOCK_PHASE'
export const TURN_THREE_BATTLESHOCK_PHASE: TTurnThree_BATTLESHOCK_PHASE =
  'TURN_THREE_DURING_BATTLESHOCK_PHASE'
export const TURN_THREE_END_OF_BATTLESHOCK_PHASE: TTurnThree_END_OF_BATTLESHOCK_PHASE =
  'TURN_THREE_END_OF_BATTLESHOCK_PHASE'
export const TURN_THREE_END_OF_TURN: TTurnThree_END_OF_TURN = 'TURN_THREE_END_OF_TURN'
export const TURN_THREE_END_OF_ROUND: TTurnThree_END_OF_ROUND = 'TURN_THREE_END_OF_ROUND'
export const TURN_FOUR_START_OF_TURN: TTurnFour_START_OF_TURN = 'TURN_FOUR_START_OF_TURN'
export const TURN_FOUR_START_OF_ROUND: TTurnFour_START_OF_ROUND = 'TURN_FOUR_START_OF_ROUND'
export const TURN_FOUR_DURING_TURN: TTurnFour_DURING_TURN = 'TURN_FOUR_DURING_TURN'
export const TURN_FOUR_DURING_ROUND: TTurnFour_DURING_ROUND = 'TURN_FOUR_DURING_ROUND'
export const TURN_FOUR_START_OF_HERO_PHASE: TTurnFour_START_OF_HERO_PHASE = 'TURN_FOUR_START_OF_HERO_PHASE'
export const TURN_FOUR_HERO_PHASE: TTurnFour_HERO_PHASE = 'TURN_FOUR_DURING_HERO_PHASE'
export const TURN_FOUR_END_OF_HERO_PHASE: TTurnFour_END_OF_HERO_PHASE = 'TURN_FOUR_END_OF_HERO_PHASE'
export const TURN_FOUR_START_OF_MOVEMENT_PHASE: TTurnFour_START_OF_MOVEMENT_PHASE =
  'TURN_FOUR_START_OF_MOVEMENT_PHASE'
export const TURN_FOUR_MOVEMENT_PHASE: TTurnFour_MOVEMENT_PHASE = 'TURN_FOUR_DURING_MOVEMENT_PHASE'
export const TURN_FOUR_END_OF_MOVEMENT_PHASE: TTurnFour_END_OF_MOVEMENT_PHASE =
  'TURN_FOUR_END_OF_MOVEMENT_PHASE'
export const TURN_FOUR_START_OF_SHOOTING_PHASE: TTurnFour_START_OF_SHOOTING_PHASE =
  'TURN_FOUR_START_OF_SHOOTING_PHASE'
export const TURN_FOUR_SHOOTING_PHASE: TTurnFour_SHOOTING_PHASE = 'TURN_FOUR_DURING_SHOOTING_PHASE'
export const TURN_FOUR_END_OF_SHOOTING_PHASE: TTurnFour_END_OF_SHOOTING_PHASE =
  'TURN_FOUR_END_OF_SHOOTING_PHASE'
export const TURN_FOUR_START_OF_CHARGE_PHASE: TTurnFour_START_OF_CHARGE_PHASE =
  'TURN_FOUR_START_OF_CHARGE_PHASE'
export const TURN_FOUR_CHARGE_PHASE: TTurnFour_CHARGE_PHASE = 'TURN_FOUR_DURING_CHARGE_PHASE'
export const TURN_FOUR_END_OF_CHARGE_PHASE: TTurnFour_END_OF_CHARGE_PHASE = 'TURN_FOUR_END_OF_CHARGE_PHASE'
export const TURN_FOUR_START_OF_COMBAT_PHASE: TTurnFour_START_OF_COMBAT_PHASE =
  'TURN_FOUR_START_OF_COMBAT_PHASE'
export const TURN_FOUR_COMBAT_PHASE: TTurnFour_COMBAT_PHASE = 'TURN_FOUR_DURING_COMBAT_PHASE'
export const TURN_FOUR_END_OF_COMBAT_PHASE: TTurnFour_END_OF_COMBAT_PHASE = 'TURN_FOUR_END_OF_COMBAT_PHASE'
export const TURN_FOUR_START_OF_BATTLESHOCK_PHASE: TTurnFour_START_OF_BATTLESHOCK_PHASE =
  'TURN_FOUR_START_OF_BATTLESHOCK_PHASE'
export const TURN_FOUR_BATTLESHOCK_PHASE: TTurnFour_BATTLESHOCK_PHASE = 'TURN_FOUR_DURING_BATTLESHOCK_PHASE'
export const TURN_FOUR_END_OF_BATTLESHOCK_PHASE: TTurnFour_END_OF_BATTLESHOCK_PHASE =
  'TURN_FOUR_END_OF_BATTLESHOCK_PHASE'
export const TURN_FOUR_END_OF_TURN: TTurnFour_END_OF_TURN = 'TURN_FOUR_END_OF_TURN'
export const TURN_FOUR_END_OF_ROUND: TTurnFour_END_OF_ROUND = 'TURN_FOUR_END_OF_ROUND'
export const TURN_FIVE_START_OF_TURN: TTurnFive_START_OF_TURN = 'TURN_FIVE_START_OF_TURN'
export const TURN_FIVE_START_OF_ROUND: TTurnFive_START_OF_ROUND = 'TURN_FIVE_START_OF_ROUND'
export const TURN_FIVE_DURING_TURN: TTurnFive_DURING_TURN = 'TURN_FIVE_DURING_TURN'
export const TURN_FIVE_DURING_ROUND: TTurnFive_DURING_ROUND = 'TURN_FIVE_DURING_ROUND'
export const TURN_FIVE_START_OF_HERO_PHASE: TTurnFive_START_OF_HERO_PHASE = 'TURN_FIVE_START_OF_HERO_PHASE'
export const TURN_FIVE_HERO_PHASE: TTurnFive_HERO_PHASE = 'TURN_FIVE_DURING_HERO_PHASE'
export const TURN_FIVE_END_OF_HERO_PHASE: TTurnFive_END_OF_HERO_PHASE = 'TURN_FIVE_END_OF_HERO_PHASE'
export const TURN_FIVE_START_OF_MOVEMENT_PHASE: TTurnFive_START_OF_MOVEMENT_PHASE =
  'TURN_FIVE_START_OF_MOVEMENT_PHASE'
export const TURN_FIVE_MOVEMENT_PHASE: TTurnFive_MOVEMENT_PHASE = 'TURN_FIVE_DURING_MOVEMENT_PHASE'
export const TURN_FIVE_END_OF_MOVEMENT_PHASE: TTurnFive_END_OF_MOVEMENT_PHASE =
  'TURN_FIVE_END_OF_MOVEMENT_PHASE'
export const TURN_FIVE_START_OF_SHOOTING_PHASE: TTurnFive_START_OF_SHOOTING_PHASE =
  'TURN_FIVE_START_OF_SHOOTING_PHASE'
export const TURN_FIVE_SHOOTING_PHASE: TTurnFive_SHOOTING_PHASE = 'TURN_FIVE_DURING_SHOOTING_PHASE'
export const TURN_FIVE_END_OF_SHOOTING_PHASE: TTurnFive_END_OF_SHOOTING_PHASE =
  'TURN_FIVE_END_OF_SHOOTING_PHASE'
export const TURN_FIVE_START_OF_CHARGE_PHASE: TTurnFive_START_OF_CHARGE_PHASE =
  'TURN_FIVE_START_OF_CHARGE_PHASE'
export const TURN_FIVE_CHARGE_PHASE: TTurnFive_CHARGE_PHASE = 'TURN_FIVE_DURING_CHARGE_PHASE'
export const TURN_FIVE_END_OF_CHARGE_PHASE: TTurnFive_END_OF_CHARGE_PHASE = 'TURN_FIVE_END_OF_CHARGE_PHASE'
export const TURN_FIVE_START_OF_COMBAT_PHASE: TTurnFive_START_OF_COMBAT_PHASE =
  'TURN_FIVE_START_OF_COMBAT_PHASE'
export const TURN_FIVE_COMBAT_PHASE: TTurnFive_COMBAT_PHASE = 'TURN_FIVE_DURING_COMBAT_PHASE'
export const TURN_FIVE_END_OF_COMBAT_PHASE: TTurnFive_END_OF_COMBAT_PHASE = 'TURN_FIVE_END_OF_COMBAT_PHASE'
export const TURN_FIVE_START_OF_BATTLESHOCK_PHASE: TTurnFive_START_OF_BATTLESHOCK_PHASE =
  'TURN_FIVE_START_OF_BATTLESHOCK_PHASE'
export const TURN_FIVE_BATTLESHOCK_PHASE: TTurnFive_BATTLESHOCK_PHASE = 'TURN_FIVE_DURING_BATTLESHOCK_PHASE'
export const TURN_FIVE_END_OF_BATTLESHOCK_PHASE: TTurnFive_END_OF_BATTLESHOCK_PHASE =
  'TURN_FIVE_END_OF_BATTLESHOCK_PHASE'
export const TURN_FIVE_END_OF_TURN: TTurnFive_END_OF_TURN = 'TURN_FIVE_END_OF_TURN'
export const TURN_FIVE_END_OF_ROUND: TTurnFive_END_OF_ROUND = 'TURN_FIVE_END_OF_ROUND'

// When
export type TTurnWhen =
  | TSetupStart
  | TDuringSetup
  | TSetupEnd
  | TGameStart
  | TGameDuring
  | TTurnStart
  | TRoundStart
  | TTurnEnd
  | TRoundEnd
  | TGameEnd
  | THeroPhaseStart
  | THeroPhase
  | THeroPhaseEnd
  | TMovementPhaseStart
  | TMovementPhase
  | TMovementPhaseEnd
  | TShootingPhaseStart
  | TShootingPhase
  | TShootingPhaseEnd
  | TChargePhaseStart
  | TChargePhase
  | TChargePhaseEnd
  | TCombatPhaseStart
  | TCombatPhase
  | TCombatPhaseEnd
  | TBattleshockPhaseStart
  | TBattleshockPhase
  | TBattleshockPhaseEnd
  | TTurnOne_START_OF_TURN
  | TTurnOne_START_OF_ROUND
  | TTurnOne_DURING_TURN
  | TTurnOne_DURING_ROUND
  | TTurnOne_START_OF_HERO_PHASE
  | TTurnOne_HERO_PHASE
  | TTurnOne_END_OF_HERO_PHASE
  | TTurnOne_START_OF_MOVEMENT_PHASE
  | TTurnOne_MOVEMENT_PHASE
  | TTurnOne_END_OF_MOVEMENT_PHASE
  | TTurnOne_START_OF_SHOOTING_PHASE
  | TTurnOne_SHOOTING_PHASE
  | TTurnOne_END_OF_SHOOTING_PHASE
  | TTurnOne_START_OF_CHARGE_PHASE
  | TTurnOne_CHARGE_PHASE
  | TTurnOne_END_OF_CHARGE_PHASE
  | TTurnOne_START_OF_COMBAT_PHASE
  | TTurnOne_COMBAT_PHASE
  | TTurnOne_END_OF_COMBAT_PHASE
  | TTurnOne_START_OF_BATTLESHOCK_PHASE
  | TTurnOne_BATTLESHOCK_PHASE
  | TTurnOne_END_OF_BATTLESHOCK_PHASE
  | TTurnOne_END_OF_TURN
  | TTurnOne_END_OF_ROUND
  | TTurnTwo_START_OF_TURN
  | TTurnTwo_START_OF_ROUND
  | TTurnTwo_DURING_TURN
  | TTurnTwo_DURING_ROUND
  | TTurnTwo_START_OF_HERO_PHASE
  | TTurnTwo_HERO_PHASE
  | TTurnTwo_END_OF_HERO_PHASE
  | TTurnTwo_START_OF_MOVEMENT_PHASE
  | TTurnTwo_MOVEMENT_PHASE
  | TTurnTwo_END_OF_MOVEMENT_PHASE
  | TTurnTwo_START_OF_SHOOTING_PHASE
  | TTurnTwo_SHOOTING_PHASE
  | TTurnTwo_END_OF_SHOOTING_PHASE
  | TTurnTwo_START_OF_CHARGE_PHASE
  | TTurnTwo_CHARGE_PHASE
  | TTurnTwo_END_OF_CHARGE_PHASE
  | TTurnTwo_START_OF_COMBAT_PHASE
  | TTurnTwo_COMBAT_PHASE
  | TTurnTwo_END_OF_COMBAT_PHASE
  | TTurnTwo_START_OF_BATTLESHOCK_PHASE
  | TTurnTwo_BATTLESHOCK_PHASE
  | TTurnTwo_END_OF_BATTLESHOCK_PHASE
  | TTurnTwo_END_OF_TURN
  | TTurnTwo_END_OF_ROUND
  | TTurnThree_START_OF_TURN
  | TTurnThree_START_OF_ROUND
  | TTurnThree_DURING_TURN
  | TTurnThree_DURING_ROUND
  | TTurnThree_START_OF_HERO_PHASE
  | TTurnThree_HERO_PHASE
  | TTurnThree_END_OF_HERO_PHASE
  | TTurnThree_START_OF_MOVEMENT_PHASE
  | TTurnThree_MOVEMENT_PHASE
  | TTurnThree_END_OF_MOVEMENT_PHASE
  | TTurnThree_START_OF_SHOOTING_PHASE
  | TTurnThree_SHOOTING_PHASE
  | TTurnThree_END_OF_SHOOTING_PHASE
  | TTurnThree_START_OF_CHARGE_PHASE
  | TTurnThree_CHARGE_PHASE
  | TTurnThree_END_OF_CHARGE_PHASE
  | TTurnThree_START_OF_COMBAT_PHASE
  | TTurnThree_COMBAT_PHASE
  | TTurnThree_END_OF_COMBAT_PHASE
  | TTurnThree_START_OF_BATTLESHOCK_PHASE
  | TTurnThree_BATTLESHOCK_PHASE
  | TTurnThree_END_OF_BATTLESHOCK_PHASE
  | TTurnThree_END_OF_TURN
  | TTurnThree_END_OF_ROUND
  | TTurnFour_START_OF_TURN
  | TTurnFour_START_OF_ROUND
  | TTurnFour_DURING_TURN
  | TTurnFour_DURING_ROUND
  | TTurnFour_START_OF_HERO_PHASE
  | TTurnFour_HERO_PHASE
  | TTurnFour_END_OF_HERO_PHASE
  | TTurnFour_START_OF_MOVEMENT_PHASE
  | TTurnFour_MOVEMENT_PHASE
  | TTurnFour_END_OF_MOVEMENT_PHASE
  | TTurnFour_START_OF_SHOOTING_PHASE
  | TTurnFour_SHOOTING_PHASE
  | TTurnFour_END_OF_SHOOTING_PHASE
  | TTurnFour_START_OF_CHARGE_PHASE
  | TTurnFour_CHARGE_PHASE
  | TTurnFour_END_OF_CHARGE_PHASE
  | TTurnFour_START_OF_COMBAT_PHASE
  | TTurnFour_COMBAT_PHASE
  | TTurnFour_END_OF_COMBAT_PHASE
  | TTurnFour_START_OF_BATTLESHOCK_PHASE
  | TTurnFour_BATTLESHOCK_PHASE
  | TTurnFour_END_OF_BATTLESHOCK_PHASE
  | TTurnFour_END_OF_TURN
  | TTurnFour_END_OF_ROUND
  | TTurnFive_START_OF_TURN
  | TTurnFive_START_OF_ROUND
  | TTurnFive_DURING_TURN
  | TTurnFive_DURING_ROUND
  | TTurnFive_START_OF_HERO_PHASE
  | TTurnFive_HERO_PHASE
  | TTurnFive_END_OF_HERO_PHASE
  | TTurnFive_START_OF_MOVEMENT_PHASE
  | TTurnFive_MOVEMENT_PHASE
  | TTurnFive_END_OF_MOVEMENT_PHASE
  | TTurnFive_START_OF_SHOOTING_PHASE
  | TTurnFive_SHOOTING_PHASE
  | TTurnFive_END_OF_SHOOTING_PHASE
  | TTurnFive_START_OF_CHARGE_PHASE
  | TTurnFive_CHARGE_PHASE
  | TTurnFive_END_OF_CHARGE_PHASE
  | TTurnFive_START_OF_COMBAT_PHASE
  | TTurnFive_COMBAT_PHASE
  | TTurnFive_END_OF_COMBAT_PHASE
  | TTurnFive_START_OF_BATTLESHOCK_PHASE
  | TTurnFive_BATTLESHOCK_PHASE
  | TTurnFive_END_OF_BATTLESHOCK_PHASE
  | TTurnFive_END_OF_TURN
  | TTurnFive_END_OF_ROUND
  | TTurnDuring
  | TRoundDuring
  | TSavesPhase
  | TWardsPhase
  | TWoundAllocationPhase
  | TPhaseStartOfAny
  | TPhaseDuringAny
  | TPhaseEndOfAny
