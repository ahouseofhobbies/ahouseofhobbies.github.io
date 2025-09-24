import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import { MARK_KHORNE, MARK_NURGLE, MARK_SLAANESH, MARK_TZEENTCH, MARK_UNDIVIDED } from 'meta/alliances'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_ANY_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_ANY_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_GAME,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_SHOOTING_PHASE,
  START_OF_TURN,
  TURN_ONE_START_OF_ROUND,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import Prayers from './prayers'
import rule_sources from './rule_sources'
import Spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

// Common effects used on multiple warscrolls.
/* const ChaosRuneshieldSaveEffect = {
  name: `Shield`,
  desc: `If this unit has a Chaos Runeshield it has a save of 3+ instead of 4+`,
  when: [SAVES_PHASE],
  shared: true,
}
const ArcaneFuryEffect = {
  name: `Arcane Fury`,
  desc: `If the unmodified hit roll for a melee attack by this model is a 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.`,
  when: [COMBAT_PHASE],
  shared: true,
}
export const LordsOfTheSilverTowerEffect = {
  name: `Lords of the Silver Towers`,
  desc: `Once per battle, at the end of a phase, you can pick 1 enemy unit HERO that is within 9" of this unit and that made an attack that targeted this unit in that phase, or caused any mortal wounds to this unit with an ability or spell in that phase (even if the wounds or mortal wounds were negated). If you do so, roll 2D6, If the roll is greater than the Wounds characteristic of that HERO, that HERO is removed from play.
  
  Designer's Note: The HERO cannot be returned if you are allowed to bring back slain models (the model has not been slain).`,
  when: [END_OF_ANY_PHASE],
  shared: true,
}
export const BookOfProfaneSecretsEffect = {
  name: `Book of Profane Secrets`,
  desc: `Add 1 to casting, dispelling, and unbinding rolls for this unit.`,
  when: [HERO_PHASE],
  shared: true,
}
const WarmasterEffect = {
  name: `Warmaster`,
  desc: `If this unit is included in your army, it is treated as a general even if it is not the model picked to be the army's general.`,
  when: [DURING_GAME],
  shared: true,
}
const strikeFirstOnChargeEffect = {
  name: `Blade of the First Prince / The Knights of Chaos`,
  desc: `The strike-first effect applies to this unit if it has made a charge move in the same turn.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true,
}
const knightsOfChaosEffect = {
  name: `The Knights of Chaos`,
  desc: `If this unit has made a charge move in the same turn, after this unit has fought in the combat phase for the first time, you can pick 1 friendly CHAOS KNIGHT, CHAOS CHARIOT or GOREBEAST CHARIOT unit wholly within 12" of this unit and that has not yet fought in that phase. That unit can fight immediately.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const ChaosRuneshieldPlatingEffect = {
  name: `Chaos Runeshield / Rune-etched Plating`,
  desc: `Roll a D6 each time the equipped model suffers a mortal wound. On a 5+ it is negated.`,
  when: [WARDS_PHASE],
  shared: true,
}
const DarkBlessingsEffect = {
  name: `Dark Blessings / The Rewards of Chaos`,
  desc: `After deployment, you can roll once on the Eye of the Gods table for this unit.`,
  when: [START_OF_GAME],
  shared: true,
}
const OracularVisionsEffects = [
  {
    name: `Oracular Visions`,
    desc: `In your hero phase, you can pick 1 friendly MORTAL SLAVES TO DARKNESS unit wholly within 12" of this unit. That unit has gets a 6+ ward until the start of your next hero phase.`,
    when: [HERO_PHASE],
    rule_sources: [rule_sources.BATTLETOME_SLAVES_TO_DARKNESS],
    shared: true,
  },
  {
    name: `Oracular Visions`,
    desc: `If active, 6+ ward unit until your next hero phase.`,
    when: [WOUND_ALLOCATION_PHASE],
    rule_sources: [rule_sources.BATTLETOME_SLAVES_TO_DARKNESS],
    shared: true,
  },
]
const DaemonforgedWeaponEffect = {
  name: `Daemonbound / Soul Splitter`,
  desc: `If the unmodified hit roll for an attack made with the appropriate weapon is 6, that attack inflicts 1 mortal wound in addition to any normal damage.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const chaosLanceEffect = {
  name: `Chaos Lance`,
  desc: `Add 1 to the Damage characteristic and improve the Rend characteristic of this unit's Chaos Lance by 1 if it made a charge move in the same turn.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const BerserkRageEffect = {
  name: `Berserk Rage`,
  desc: `Add 1 to wound rolls for melee attacks made by this model if any wounds or mortal wounds were allocated to this model earlier in the same phase.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const TerritorialPredatorEffect = {
  name: `Territorial Predator`,
  desc: `Add 1 to the Damage of attacks made with this unit's Honed Fangs and Claws that target an enemy MONSTER.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const TribalWarleaderEffect = {
  name: `Tribal Warleader`,
  desc: `After this unit has fought in the combat phase for the first time, you can pick 1 friendly DARKOATH unit that has not yet fought in that combat phase, is within 3" of an enemy unit and is wholly within 12" of this unit, that unit can fight immediately.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const ChaosChariotEffects = [
  {
    name: `Don't Spare the Lash`,
    desc: `Once per battle, this unit can run and still charge later in the same turn.`,
    when: [MOVEMENT_PHASE, CHARGE_PHASE],
    shared: true,
  },
  {
    name: `Swift Death`,
    desc: `After finishing a charge move with this unit, pick 1 enemy unit within 1". Roll a number of dice equal to the charge roll. For each 5+ that enemy suffers 1 mortal wound.`,
    when: [CHARGE_PHASE],
    shared: true,
  },
]
const SilveredPortalEffect = {
  name: `Silvered Portal`,
  desc: `After you have deployed this unit, when you would set up another friendly TZEENTCH unit that is not a MONSTER, you can say that it is in this Gaunt Summoner's Silver Tower as a reserve unit. Up to 2 units can be set up in reserve in this way. At the end of any of your movement phases, you can set up 1 or more of these units on the battlefield wholly within 9" of this unit and more than 9" from all enemy units. At the start of the fourth battle round, reserve units that are still in a Silver Tower are destroyed.`,
  when: [DURING_SETUP, END_OF_MOVEMENT_PHASE],
  rule_sources: [rule_sources.BATTLETOME_SLAVES_TO_DARKNESS],
  shared: true,
}
// Common unit composition effects.
const UnitLeaderEffect = {
  name: `Unit Leader`,
  desc: `Add 1 to the attacks characteristic of the unit leader's melee weapons (excluding its mount if it has one).`,
  when: [COMBAT_PHASE],
  shared: true,
}
const MusiciansEffect = {
  name: `Musicians`,
  desc: `If the unit includes any musicians, add 1 charge rolls.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const StandardBearersEffect = {
  name: `Standard Bearers`,
  desc: `Add 1 to the bravery of a friendly unit containing any standard bearers.`,
  when: [DURING_GAME],
  shared: true,
}
const IconBearersEffect = {
  name: `Icon Bearers`,
  desc: `Subtract 1 from the bravery characteristic of enemy units while they are within 6" of any friendly icon bearers.`,
  when: [DURING_GAME],
  shared: true,
}

// Marauder specific effects.
const DarkwoodShieldEffect = {
  name: `Darkwood Shield`,
  desc: `This unit has a Save characteristic of 5+ instead of 6+.`,
  when: [SAVES_PHASE],
  shared: true,
}

// Chariot specific effects.
const ExaltedCharioteerEffect = {
  name: `Exalted Charioteer`,
  desc: `If this unit has 2 or more models, 1 model in this unit can be an Exalted Charioteer. Add 1 to attacks made with that model's melee weapons (excluding those of its mount)`,
  when: [COMBAT_PHASE],
  rule_sources: [rule_sources.BATTLETOME_SLAVES_TO_DARKNESS],
  shared: true,
}

// Chaos Mark Effects.
const ChaosMarkAll = {
  name: `Mark of Chaos (${MARK_KHORNE}, ${MARK_NURGLE}, ${MARK_SLAANESH}, ${MARK_TZEENTCH}, ${MARK_UNDIVIDED})`,
  desc: `This unit either has or must take any Mark of Chaos during list construction.`,
  when: [DURING_SETUP],
  shared: true,
}

const ChaosMarkSorcerer = {
  name: `Mark of Chaos (${MARK_NURGLE}, ${MARK_SLAANESH}, ${MARK_TZEENTCH}, ${MARK_UNDIVIDED})`,
  desc: `This unit must take any one of the following Mark of Chaos during list construction: Nurgle, Slaanesh, Tzeentch, or Undivided.`,
  when: [DURING_SETUP],
  shared: true,
}

const ChaosMarkKhorne = {
  name: `Mark of Chaos (${MARK_KHORNE})`,
  desc: `This unit must take the Khorne Mark of Chaos during list construction.`,
  when: [DURING_SETUP],
  shared: true,
}

const ChaosMarkTzeentch = {
  name: `Mark of Chaos (${MARK_TZEENTCH})`,
  desc: `This unit must take the Tzeentch Mark of Chaos during list construction.`,
  when: [DURING_SETUP],
  shared: true,
}*/

const Units = {
  'Archaon the Everchosen': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['By My Will'])],
    }, */
    effects: [
      //  ChaosMarkAll,
      //  WarmasterEffect,
      // GenericEffects.WizardTwoSpellsEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Dorghars Claws and Tails is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Three-Headed Titan - Once Per Turn`,
        desc: `Effect: Pick 1 of the following effects: 
        Filth-spewer: Pick an enemy unit within 6" of this unit and roll a number of dice equal to the number of models in that unit, to a maximum of 7. For each 3+, inflict 1 mortal damage on that unit. 
        Skull-gorger: Pick an enemy unit in combat with this unit and roll a dice. If the roll exceeds that units Health characteristic, 1 model in that unit is slain and you can Heal (X) this unit, where X is that units Health characteristic. 
        Spell-eater: Pick a Manifestation within 12" of this unit and roll a dice. On a 2+, it is banished and removed from play. In addition, inflict D3 mortal damage on the unit that summoned it.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Eye of Sheerian - Once Per Battle`,
        desc: `Effect: Roll a dice. This roll replaces the priority roll of the next battle round. On a 1-3, your opponent must take the first turn of that battle round. On a 4-6, you must take the first turn of that battle round. This ability cannot be used if there is an enemy Archaon on the battlefield.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Slayer of Kings - Passive`,
        desc: `Effect: Each time this unit uses a Fight ability, if the unmodified wound roll for 2 or more attacks made with The Slayer of Kings that target the same Hero is 6, that Hero is automatically destroyed.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Daemon Prince': {
    effects: [
      // ChaosMarkAll,
      {
        name: `Airborne Horror - Passive`,
        desc: `Effect: If this unit has Wings, it has a Move characteristic of 10" and has Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `The Mounted Skulls of Fallen - Passive`,
        desc: `Effect: If this unit has a Trophy Rack, its Hellforged Weapons also have Anti-Hero (+1 Rend).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Immortal Champion`,
        desc: `Effect: Roll a dice. On a 4+, this unit has Strike-First for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Varanguard: {
    effects: [
      // GenericEffects.Elite,
      // ChaosMarkAll,
      // DaemonforgedWeaponEffect,
      {
        name: `Relentless Killers - Once Per Battle`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  "Be'Lakor": {
    // mandatory: {
    //  spells: [keyPicker(Spells, ['Enfeeble Foe'])],
    // },
    effects: [
      {
        name: `Shadow Form - Passive`,
        desc: `Effect: Ignore modifiers to save rolls for this unit (positive and negative).`,
        when: [DURING_GAME],
      },
      {
        name: `The Dark Master - Once Per Battle - Enemy Hero Phase`,
        desc: `Declare: Pick a visible enemy unit to be the target. 
        Effect: Until the start of your next turn, each time the target is picked to use an ability, roll a dice as a reaction. On a 3+, that ability has no effect.`,
        when: [HERO_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Blade of Shadows is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Deadly Trap - Once Per Turn - Enemy Combat Phase`,
        desc: `Declare: Pick this unit and up to 2 friendly Slaves to Darkness units within this units combat range to be the targets. 
        Effect: Roll a dice for each target. On a 4+, that target has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Enfeeble Foe: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn: 
        Subtract 1 from hit rolls from the targets combat attacks. 
        The targets combat attacks cannot score critical hits (treat them as regular hits instead).`,
        when: [HERO_PHASE],
      },
      //  GenericEffects.WizardTwoSpellsEffect,
    ],
  },
  Eternus: {
    effects: [
      //  strikeFirstOnChargeEffect,
      {
        name: `Network of Spies - Reaction: Opponent declared a command for a unit within 12" of this unit`,
        desc: `Effect: Roll a dice. Add 1 to the roll if the enemy unit is in combat with a friendly Chaos Legionnaires or Chaos Furies unit. On a 5+, that command has no effect. The command still counts as having been used and the command points spent to use the command are still lost.`,
        when: [DURING_GAME],
      },
      {
        name: `Veins of Black Lightning`,
        desc: `Declare: This unit can use this ability if it has been destroyed. 
        Effect: Roll 2D6. Add 1 to the roll if a friendly Belakor is on the battlefield. On an 8+, set up a replacement unit on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Gaunt Summoner on Disc of Tzeentch': {
    /*  mandatory: {
      spells: [keyPicker(Spells, ['Infernal Flames'])],
    }, */
    effects: [
      {
        name: `Minions of the Silver Tower`,
        desc: `Declare: Pick a friendly unit that has not been deployed to be the target. 
        Effect: The target is set up in reserve in a Silver Tower. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Book of Profane Secrets`,
        desc: `Declare: Pick a friendly unit in a Silver Tower to be the target. 
        Effect: Set up the target on the battlefield wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Arcane Imprisonment: Casting value of 7`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target, then make a casting roll of 2D6. 
        Effect: If the unmodified casting roll exceeds the targets Health characteristic, it is automatically destroyed. For the rest of the battle, that unit cannot be picked to be the target of an ability that allows a replacement unit to be set up.`,
        when: [HERO_PHASE],
      },
      // ChaosMarkTzeentch,
      // SilveredPortalEffect,
      //BookOfProfaneSecretsEffect,
      //LordsOfTheSilverTowerEffect,
      // GenericEffects.WizardTwoSpellsEffect,
    ],
  },
  'Gaunt Summoner': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Infernal Flames'])],
    }, */
    effects: [
      {
        name: `Minions of the Silver Tower`,
        desc: `Declare: Pick a friendly unit that has not been deployed to be the target. 
        Effect: The target is set up in reserve in a Silver Tower. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Book of Profane Secrets`,
        desc: `Declare: Pick a friendly unit in a Silver Tower to be the target. 
        Effect: Set up the target on the battlefield wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Divert Realmgate: Casting value of 7`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Units set up this turn using this units Book of Profane Secrets ability can be set up wholly within 18" of this unit and more than 7" from all enemy units instead of the distances in the ability.`,
        when: [HERO_PHASE],
      },
      //  ChaosMarkTzeentch,
      // SilveredPortalEffect,
      // BookOfProfaneSecretsEffect,
      // LordsOfTheSilverTowerEffect,
      // GenericEffects.WizardTwoSpellsEffect,
    ],
  },
  'Chaos Lord on Daemonic Mount': {
    effects: [
      {
        name: `The Knights of Chaos - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Warriors of Chaos Cavalry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      //  ChaosMarkAll,
      // ChaosRuneshieldPlatingEffect,
      //  strikeFirstOnChargeEffect,
      // knightsOfChaosEffect,
      // chaosLanceEffect,
    ],
  },
  /*'Chaos Lord on Manticore': {
    effects: [
    //  ChaosMarkAll,
    //  DaemonforgedWeaponEffect,
    //  TerritorialPredatorEffect,
    //  chaosLanceEffect,
    //  ChaosRuneshieldSaveEffect,
      {
        name: `Apex Predator - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Add 1 to hit rolls for this units combat attacks that target that Monster for the rest of the turn. This ability also aects Companion weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Iron-Willed Overlord - Passive`,
        desc: `Effect: Add 2 to the control scores of friendly Warriors of Chaos units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Chaos Sorcerer Lord on Manticore': {
  /*  mandatory: {
      spells: [keyPicker(Spells, ['Winds of Chaos'])],
    }, 
    effects: [
      {
        name: `Oracular Visions - Once Per Turn`,
        desc: `Declare: Pick a friendly Warriors of Chaos unit wholly within 12" of this unit to be the target and roll a dice. 
        Effect: On a 3+, the target has Ward (5+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Venomous Tail Strike - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      }, 
     // ChaosMarkSorcerer,
     // ...OracularVisionsEffects,
     // TerritorialPredatorEffect,
     // GenericEffects.WizardOneSpellEffect,
    ],
  }, */
  'Chaos Lord on Karkadrak': {
    effects: [
      //  ChaosMarkAll,
      //  knightsOfChaosEffect,
      // strikeFirstOnChargeEffect,
      // ChaosRuneshieldPlatingEffect,
      // DaemonforgedWeaponEffect,
      {
        name: `Brutish Rampage`,
        desc: `Declare: If this unit charged this phase, pick up to 3 enemy units within 1" of it to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Drive the Legions Forward - Once Per Battle`,
        desc: `Declare: Pick this unit and up to 2 friendly non-Hero non-Cavalary Warriors of Chaos units wholly within 12" of this unit to be the targets. 
        Effect: Add 2 to charge rolls for the targets for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Chaos Lord': {
    effects: [
      //  ChaosMarkAll,
      // DaemonforgedWeaponEffect,
      {
        name: `Glory in Battle - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Warriors of Chaos Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Chaos Sorcerer Lord': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Daemonic Power'])],
    }, */
    effects: [
      {
        name: `Oracular Visions - Once Per Turn`,
        desc: `Declare: Pick a friendly Warriors of Chaos unit wholly within 12" of this unit to be the target and roll a dice. 
        Effect: On a 3+, the target has Ward (5+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      //  ChaosMarkSorcerer, ...OracularVisionsEffects, GenericEffects.WizardOneSpellEffect
    ],
  },
  'Exalted Hero of Chaos': {
    effects: [
      //ChaosMarkAll,
      //ChaosRuneshieldPlatingEffect,
      //DarkBlessingsEffect,
      // ChaosRuneshieldSaveEffect,
      {
        name: `Glory-Seeker - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons for attacks that target Heroes or Monsters.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Ogroid Myrmidon': {
    effects: [
      {
        name: `Pit Master - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Ogroid Theridons unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Myrmidon Rage - Passive`,
        desc: `Effect: While this unit is damaged, add 2 to the Attacks characteristic of its melee weapons.`,
        when: [COMBAT_PHASE],
      },
      //  BerserkRageEffect, ArcaneFuryEffect
    ],
  },
  'Ogroid Theridons': {
    effects: [
      //UnitLeaderEffect,
      //StandardBearersEffect,
      // BerserkRageEffect,
      // MusiciansEffect,
      // ArcaneFuryEffect,
      {
        name: `Unleashed Savagery - Once Per Battle`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*'Chaos Warshrine': {
   /* mandatory: {
      prayers: [keyPicker(Prayers, ['Favour of the Ruinous Powers'])],
    }, 
    effects: [
   //   ChaosMarkAll,
      {
        name: `Protection of the Dark Gods - Passive`,
        desc: `Effect: Friendly Warriors of Chaos units have Ward (6+) while they are wholly within 12" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Flailing Fists is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Favour of Chaos: Chant value of 4`,
        desc: `Declare: Pick a visible friendly Slaves to Darkness unit wholly within 12" of this unit that shares a Mark of Chaos keyword with this unit to be the target. Then, make a chanting roll of D6. 
        Effect: Apply 1 of the following effects to the target for the rest of the turn depending on which Mark of Chaos keyword this unit has: 
        Undivided: When the target uses the Rally command, you can make 3 additional rally rolls of D6. 
        Khorne: Add 1 to hit rolls for the targets attacks. 
        Tzeentch: The target has Ward (5+). 
        Nurgle: Add 1 to wound rolls for the targets attacks. 
        Slaanesh: Add 1 to the number of dice rolled when making charge rolls for the target, to a maximum of 3. 
        If the chanting roll was 8+, you can pick up to 2 eligible units to be the targets instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Chaos Chariots': {
    effects: [
      {
        name: `Swift Death`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      //  ChaosMarkAll, ExaltedCharioteerEffect, ...ChaosChariotEffects
    ],
  },
  'Gorebeast Chariots': {
    effects: [
      //ChaosMarkAll,
      //ExaltedCharioteerEffect,
      {
        name: `Brutal Momentum - Passive`,
        desc: `Effect: When this unit uses the Power Through command, inflict an additional D3 mortal damage on the target and add 3" to the distance this unit can move as part of that ability.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'Theddra Skull-Scryer': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Enfeeblement'])],
    }, 
    effects: [
      {
        name: `Oath of Arcane Apotheosis`,
        desc: `If the unmodified casting roll made for this unit is 10+, this unit fulfils its oath. This unit can then attempt to cast 2 spells in your hero phase and attempt to unbind 2 spells in the enemy hero phase.`,
        when: [HERO_PHASE],
      },
      GenericEffects.WizardOneSpellEffect,
    ],
  },
  'Godsworn Hunt': {
    effects: [
      {
        name: `Oath of Conquest`,
        desc: `If you gain control of an objective previously controlled by your opponent while this unit is contesting it, this unit fulfils its oath. This unit has a 5+ ward for the rest of the battle.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Avowed Kinsmen`,
        desc: `Before you allocate a wound or mortal wound to a friendly THEDDRA SOUL-SCRYER, or instead of making a ward roll, if this unit is within 3" of that friendly THEDDRA SOUL-SCRYER, vou can roll a dice. On a 3+, that wound or mortal wound is allocated to this unit instead.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, */
  'Darkoath Warqueen': {
    effects: [
      //  TribalWarleaderEffect,
      {
        name: `Ruin-Blessed Conqueror - Once Per Turn`,
        desc: `Declare: Pick an objective that this unit is contesting. 
        Effect: Roll a dice. On a 3+, for the rest of the turn, other friendly Darkoath units have Ward (5+) while they are contesting that objective.`,
        when: [HERO_PHASE],
      },
      {
        name: `Oath of Supremacy - Once Per Battle`,
        desc: `Effect: If this unit is wholly within enemy territory and charged this phase, for the rest of the battle, add 1 to hit rolls for combat attacks made by friendly Darkoath units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Darkoath Chieftain': {
    effects: [
      //  TribalWarleaderEffect,
      {
        name: `Tribal Warleader - Reaction: You declared a Fight abililty for this unit`,
        desc: `Unmodified hit rolls of 6 inflict 1 mortal wound in addition to any normal damage.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Oath of Murder - Once Per Battle`,
        desc: `Effect: If this unit destroyed an enemy Hero or Monster this turn, this unit has Strike-first for the rest of the battle.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Chaos Chosen': {
    effects: [
      //   ChaosMarkAll,
      //   UnitLeaderEffect,
      //   IconBearersEffect,
      //   MusiciansEffect,
      //   DaemonforgedWeaponEffect,
      //   DarkBlessingsEffect,
      {
        name: `Heralds of Ruination - Once Per Battle`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Chaos Spawn': {
    effects: [
      //  ChaosMarkAll,
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Drawn to Power - Passive`,
        desc: `Effect: While this unit is wholly within 12" of a friendly Daemon Prince, you can reroll the random characteristic rolls for this units Move and Attacks characteristics.`,
        when: [MOVEMENT_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Chaos Warriors': {
    effects: [
      //  ChaosMarkAll,
      //  UnitLeaderEffect,
      //  StandardBearersEffect,
      //   MusiciansEffect,
      //  ChaosRuneshieldPlatingEffect,
      {
        name: `Bringers of Desolation - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Rune-Etched Weapons while it is contesting an objective you control.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SLAVES_TO_DARKNESS],
      },
    ],
  },
  'Chaos Knights': {
    effects: [
      //  ChaosMarkAll,
      //  UnitLeaderEffect,
      //  StandardBearersEffect,
      //   ChaosRuneshieldPlatingEffect,
      {
        name: `Impaling Charge - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to the Rend characteristic of its Cursed Lances.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Darkoath Fellriders': {
    effects: [
      //  ChaosMarkAll,
      // UnitLeaderEffect,
      // StandardBearersEffect,
      //   MusiciansEffect,
      //  DarkwoodShieldEffect,
      {
        name: `Swift Attackers - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Oath of the Raider - Once Per Battle`,
        desc: `Effect: If this unit charged this phase and is only in combat with 1 enemy unit, and that enemy unit is only in combat with this unit, add 1 to the Rend characteristic of this units weapons for the rest of the battle.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Darkoath Marauders': {
    effects: [
      //  ChaosMarkAll,
      //   UnitLeaderEffect,
      //  StandardBearersEffect,
      //  MusiciansEffect,
      //  DarkwoodShieldEffect,
      {
        name: `Glorious Death - Passive`,
        desc: `Effect: While this unit is wholly within 12" of any friendly Darkoath Heroes, each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Oath of the Marauder - Once Per Battle`,
        desc: `Effect: If this unit charged this phase and the unmodified charge roll was 8+, add 1 to the Rend characteristic of this units weapons for the rest of the battle.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Mutalith Vortex Beast': {
    effects: [
      //  ChaosMarkTzeentch,
      {
        name: `Mutant Regeneration`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Betentacled Maw is 8.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Aura of Mutation - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target. 
        Effect: Roll a dice and apply the corresponding effect below. If this unit is wholly within 12" of a friendly Tzeentch Wizard, you can roll 2 dice instead, pick either result, then apply the corresponding effect below. 
        1 Untouched: No effect. 
        2 Hideous Disgurement: Subtract 3 from the targets control score until the start of your next turn. 
        3 Troggbrains: The target cannot use commands for the rest of the turn. 
        4 Gift of Mutations: Subtract 1" from the targets Move characteristic for the rest of the battle. 
        5 Horrific Absorption: Inflict D6 mortal damage on the target. Then, Heal (D6) this unit. 
        6 Transmogrication: Pick any other effect.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*'Soul Grinder': {
    effects: [
    //  ChaosMarkAll,
    {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Piston-driven Legs and Daemonic Blade or Claw is 6.`,
      when: [COMBAT_PHASE],
    }, 
    {
        name: `Piston-Driven Carnage - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. Then, this unit can move 6". During that move, it can pass through models in the target unit but must end that move in combat.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Implacable Advance - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  }, */
  Abraxia: {
    effects: [
      //  ChaosMarkAll,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Thanatorg's Claws and Fangs is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Warlord of the First Circle - Passive`,
        desc: `Effect: If a friendly Varanguard unit uses the Relentless Killers ability while it is wholly within 12" of this unit, that unit does not have Strike-last as a result of that ability.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Roar of Domination - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Blood of Molten Varanite - Passive`,
        desc: `Effect: Roll a dice each time a damage point inflicted by a combat attack is allocated to this unit. On a 4+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gorbolga the Accursd`,
        desc: `Effect: If this unit is in combat, roll a dice and apply the corresponding effect: 
        1 Uncontrollable Power: Allocate 1 damage point to this unit. 
        2 The Spear Slumbers: No effect. 
        3-5 White-hot Varanite: Add 1 to the Damage characteristic of this units Gorbolga for the rest of the turn. 
        6 Rampant Mutation: The effect of White-hot Varanite applies and this units Gorbolga has Crit (Mortal) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Abraxia (SoG)': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Thanatorg's Claws and Fangs is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unstoppable Invasion - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Inflict D3 mortal damage on the target. Then, roll 2D6. This unit can move a distance up to the value of the roll. It can pass through models in the target unit but must end that move in combat.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Champion of the Undivided`,
        desc: `Declare: Pick a friendly non-Unique Slaves to Darkness unit wholly within 12" of this unit and that does not have a Pledge to Chaos keyword to be the target. 
        Effect: For the rest of the turn, add 1 to the Rend characteristic of melee weapons used by the target while they are contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unending Will to Conquer`,
        desc: `Effect: If this unit is contesting an objective you do not control. Heal (D6) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Mutative Spear`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by this units combat attacks to be the target. 
        Effect: The target has a maximum control score of 1 for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Gunnar Brand': {
    effects: [
      //  ChaosMarkAll,
      {
        name: `Carve a Path to Glory`,
        desc: `Declare: This unit can only use this ability if it is in combat with an enemy Hero. 
      Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn. This unit can only use the second Fight ability if it is in combat with an enemy Hero, and if it does so, it must pick an enemy Hero to be the target of all of its attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Oath of Bloodshed - Once Per Battle`,
        desc: `Declare: This unit can only use this ability if any enemy Heroes were slain by this units combat attacks this turn. 
        Effect: Friendly Gunnars Oathsworn units have Ward (4+) for the rest of the battle.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Singri Brand': {
    effects: [
      //  ChaosMarkAll,
      {
        name: `Swift as the Wind - Passive`,
        desc: `Effect: Only critical hits score successful hits for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Uncanny Shot - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units Singris Warbow for attacks that target enemy units that are within 6" of a friendly Gunnar Brand.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'The Oathsworn Kin': {
    effects: [
      //  ChaosMarkAll,
      {
        name: `Withering Death: Casting value of 5`,
        desc: `Declare: Pick a visible enemy Hero within 18" of this unit to be the target, then make a casting roll of 2D6. 
      Effect: Inflict 1 mortal damage on the target and subtract 1 from the Attacks characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Broken Nadja - Passive`,
        desc: `Effect: While this units Broken Nadja is on the battlefield, it has Wizard (1).`,
        when: [HERO_PHASE],
      },
    ],
  },
  Slaughterbrute: {
    effects: [
      // ChaosMarkKhorne,
      {
        name: `Sigils of Domination`,
        desc: `Declare: Pick a friendly Slaves to Darkness Hero within this units combat range to be this units master. 
        Effect: For the rest of the battle, while this unit is within its masters combat range: 
        Add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.
        This unit can ignore the effects of the Companion weapon ability on its weapons.`,
        when: [DURING_SETUP],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Razor-tipped Claws is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Rampaging Charge - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If the target unit is Infantry, double the amount of mortal damage inflicted.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Centaurion Marshal': {
    effects: [
      {
        name: `Marshal of the Legions - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Daemon or Chaos Legionaires unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Chaos Legionnaires': {
    effects: [
      {
        name: `Sow Confusion - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 6" of this unit to be the target. 
        Effect: Roll a dice. On a 4+, the target cannot use commands for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /* 'Horns of Hashut': {
    effects: [
      {
        name: `Ruinator Alpha`,
        desc: `1 in every 10 models in this unit must be a Ruinator Alpha. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Ruinator Alphas can issue commands to their own unit.`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
      {
        name: `Ruinator`,
        desc: `1 in every 10 models in this unit must be a Ruinator. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Demolisher with Flamehurler`,
        desc: `1 in every 10 models in this unit must be a Demolisher with Flamehurler. A Demolisher with Flamehurler is armed with a Flamehurler and Forge Weapons.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Torrent of Flames`,
        desc: `The Attacks characteristic of a Flamehurler is equal to the number of models in the target unit (to a maximum Attacks characteristic of 8).`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Stampede of Iron`,
        desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll 1 dice for each model in this unit. For each 6, that enemy unit suffers 1 mortal wound.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Tarantulos Brood': {
    effects: [
      {
        name: `Broodmaster`,
        desc: `1 in every 13 models in this unit must be a Broodmaster. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Broodmasters can issue commands to their own unit.`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
      {
        name: `Spider Swarms`,
        desc: `3 in every 13 models in this unit must be Spider Swarms. Spider Swarms are armed with Venomous Bites instead of Brood Weapons and Envenomed Projectiles.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Skittering Ascent`,
        desc: `When this unit makes a move, it can pass across terrain features in the same manner as a model that can fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Creeping Summons`,
        desc: `You can return D3 slain Spider Swarms to this unit for each Broodmaster in this unit.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Splintered Fang': {
    effects: [
      {
        name: `Trueblood`,
        desc: `1 in every 10 models in this unit must be a Trueblood. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Truebloods can issue commands to their own unit.`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
      {
        name: `Serpent Caller`,
        desc: `1 in every 10 models in this unit must be a Serpent Caller. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Serpents`,
        desc: `1 in every 10 models in this unit must be a Serpents model. Serpents models have a Wounds characteristic of 2.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `One Cut, One Kill`,
        desc: `If the unmodified hit roll for an attack made by this unit is 6, the attack inflicts 1 mortal wound and the attack seqeunce ends.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Snake Charmer`,
        desc: `You can return 1 slain Serpents model to this unit in your hero phase for each Serpent Caller in the unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Corvus Cabal': {
    effects: [
      {
        name: `Shadow Piercer`,
        desc: `1 in every 9 models in this unit must be a Shadow Piercer. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Shadow Piercers can issue commands to their own unit.`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
      {
        name: `Shrike Talon`,
        desc: `1 in every 9 models in this unit must be a Shrike Talon. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Death From Above`,
        desc: `This unit is not visible to enemy units while it is in cover. In addition, if this unit attempts a charge while it is wholly on a terrain feature, it can fly when making a charge move in that phase.`,
        when: [DURING_GAME, CHARGE_PHASE],
      },
      {
        name: `Denizens of Ulgu`,
        desc: `Instead of setting up this unit on the battlefield, you can place this unit to one side as a reserve unit. At the end of your movement phase, you can set up this unit anywhere on the battlefield more than 9" from all enemy units. Any reserve units not set up on the battlefield before the start of the fourth battle round are destroyed.`,
        when: [DURING_SETUP, END_OF_MOVEMENT_PHASE],
      },
    ],
  },
  'The Unmade': {
    effects: [
      {
        name: `Blissful One`,
        desc: `1 in every 9 models in this unit must be a Blissful One. A Blissful One is armed with Nightmare Sickles instead of Maiming Weapons. In addition, Blissful Ones can issue commands to their own unit.`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
      {
        name: `Joyous One`,
        desc: `1 in every 9 models in this unit must be a Joyous One. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Frozen in Fear`,
        desc: `Enemy units cannot receive the Rally command while they are within 12" of this unit.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Frozen in Fear`,
        desc: `Enemy units cannot receive the Redeploy command while they are within 12" of this unit.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Cypher Lords': {
    effects: [
      {
        name: `Thrallmaster.`,
        desc: `1 in every 8 models in this unit must be a Thrallmaster. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Thrallmasters can issue commands to their own unit.`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
      {
        name: `Luminate`,
        desc: `1 in every 8 models in this unit must be a Luminate. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shattered Gloom Globe`,
        desc: `While this unit includes any Thrallmasters, you can pick 1 enemy unit within 3" of this unit and roll a D6. On a 4+, subtract 1 from hit rolls for that unit until your next hero phase. The same unit cannot be affected by this ability more than once per turn.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Acrobatic Leaps`,
        desc: `When this unit makes a move, it can pass across other models in the same manner as a unit that can fly. In addition, after this unit moves, excluding pile-in moves, you can pick 1 enemy unit it passed across and roll a dice for each model in this unit. For each 6+, that enemy unit suffers 1 mortal wound.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  },
  'Scions of the Flame': {
    effects: [
      {
        name: `Blazing Lord`,
        desc: `1 in every 8 models in this unit must be a Blazing Lord. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Blazing Lords can issue commands to their own unit.`,
        when: [COMBAT_PHASE, DURING_GAME],
      },
      {
        name: `IMMOLATOR`,
        desc: `1 in every 8 models in this unit must be an Immolator. At the end of the combat phase, pick 1 enemy unit within 1" of this unit a roll a dice for each Immolator in this unit. For each 2+, that enemy unit suffers D3 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
      },
      {
        name: `Inferno Priest`,
        desc: `1 in every 8 models in this unit must be an Inferno Priest. An Inferno Priest is armed with Scion Weapons and Engulfing Flames instead of Scion Weapons and Flameburst Pots.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `All Shall Burn`,
        desc: `If an attack made with Flameburst Pots targets an enemy unit that has 10 or more models and scores a hit, that attack scores 3 hits on the target instead of 1. Make a wound and save roll for each hit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Spire Tyrants': {
    effects: [
      {
        name: `Pit Champion`,
        desc: `1 in every 9 models in this unit must be a Pit Champion. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Pit Champions can issue commands to their own unit.`,
        when: [COMBAT_PHASE, DURING_GAME],
      },
      {
        name: `Bestigor Destroyer`,
        desc: `1 in every 9 models in this unit must be a Bestigor Destroyer. Add 1 to the Damage characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Headclaimer`,
        desc: `1 in every 9 models in this unit must be a Headclaimer. Add 1 to the Damage characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fight for Glory`,
        desc: `Add 1 to the Attacks characteristic of this unit's melee weapons while they are wholly within 9" of any friendly MORTAL HERO.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Veterans of the Warpits`,
        desc: `Do not take battleshock tests for this unit while it is within 3" of any enemy units.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  'Iron Golems': {
    effects: [
      {
        name: `Dominar`,
        desc: `1 in every 8 models in this unit must be a Dominar. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Dominars can issue commands to their own unit.`,
        when: [COMBAT_PHASE, DURING_GAME],
      },
      {
        name: `Standard Bearer`,
        desc: `1 in every 8 models in this unit must be a Signifer. Add 1 to the Bravery characteristic of a unit that includes a Signifer.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Ogor Breacher`,
        desc: `1 in every 8 models in this unit must be an Ogor Breacher. Add 1 to the Damage characteristic of that model's melee weapons. In addition, Ogor Breachers have a Wounds characteristic of 3.`,
        when: [COMBAT_PHASE, WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Iron Resilience`,
        desc: `Add 1 to save rolls for attacks that target this unit if this unit has not made a normal move, run, retrested, or made a charge move in the same turn.`,
        when: [SAVES_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SLAVES_TO_DARKNESS, rule_sources.ERRATA_JANUARY_2023],
      },
    ],
  },
  'Untamed Beasts': {
    effects: [
      {
        name: `Heart-eater`,
        desc: `1 in every 9 models in this unit must be a Heart-eater. Add 1 to the Attacks characteristic of that model's melee weapons. In addition, Heart-eaters can issue commands to their own unit.`,
        when: [COMBAT_PHASE, DURING_GAME],
      },
      {
        name: `First Fang`,
        desc: `1 in every 9 models in this unit must be a First Fang. A First Fang is armed with a Jagged Harpoon and Hunting Weapons.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Rocktusk Prowler`,
        desc: `1 in every 9 models in this unit must be a Rocktusk Prowler. Rocktusk Prowlers have a Wounds characteristic of 2.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Rocktusk Prowler`,
        desc: `1 in every 9 models in this unit must be a Rocktusk Prowler. Add 1 to the Damage characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unleash the Beast`,
        desc: `This unit can run and still charge later in the same turn.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Unleash the Beast`,
        desc: `After armies are set up but before the first battle round begins, this unit can move up to 6" (it cannot run).`,
        when: [END_OF_SETUP],
      },
    ],
  }, */
  'Darkoath Savagers': {
    effects: [
      {
        name: `Oath of Conquest - Once Per Battle`,
        desc: `Effect: If this unit is contesting an objective you control that is wholly within enemy territory, this unit has Ward (5+) for the rest of the battle.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Furies: {
    effects: [
      {
        name: `Sneaky Little Devils`,
        desc: `Effect: If this unit is in combat, roll a dice. On a 3+, this unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Raptoryx: {
    effects: [
      {
        name: `Crazed Flock - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to the Attacks characteristic of its melee weapons. This ability also affects Companion weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Mindstealer Sphiranx': {
    effects: [
      {
        name: `Dominate Mind - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 6" of this unit to be the target. 
        Effect: Roll a dice. If the roll exceeds the targets Control characteristic, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Fomoroid Crusher': {
    effects: [
      {
        name: `Cursed Destroyers - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 1" of this unit, then pick each other unit (friendly and enemy) within 3" of that terrain feature to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Darkoath Wilderfiend': {
    effects: [
      {
        name: `Feed on Flesh - Passive`,
        desc: `Effect: Each time a model (friendly or enemy) is slain within 12" of this unit, give this unit a sacrifice point, to a maximum of 6. If there are more than 1 friendly Darkoath Wilderend units within 12" of the slain model, only 1 of them can be given a sacrifice point for that slain model.`,
        when: [DURING_GAME],
      },
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Primal Sorcery`,
        desc: `Effect: Pick 1 of the following effects: 
        Mind Shroud: Pick an enemy unit within 12" of this unit to be the target and roll a number of dice equal to the number of sacrifice points this unit has. If any of the rolls are a 5+, the target cannot use commands for the rest of the turn. 
        Warping Balefire: Pick an enemy unit within 12" of this unit to be the target and roll a number of dice equal to the number of sacrifice points this unit has. For each 3+, inflict 1 mortal damage on the target. 
        Dark Might: Heal (X) this unit, where X is the number of sacrifice points this unit has. 
        After applying the effect you picked, reset this units sacrifice points to 0.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Darkoath Chieftain on Warsteed': {
    effects: [
      {
        name: `Cavalry Warleader - Passive`,
        desc: `Effect: You can reroll charge rolls for friendly Darkoath Cavalry units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Oath of Murder - Once Per Battle`,
        desc: `Effect: If this unit destroyed an enemy Hero or Monster this turn, this unit has Strike-first for the rest of the battle.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'Zarshia Bittersoul': {
  /*  mandatory: {
      spells: [keyPicker(Spells, ['Mask of Darkness'])],
    }, 
    effects: [
    //  ...OracularVisionsEffects, GenericEffects.WizardOneSpellEffect
    ],
  },
  "Khagra's Ravagers": {
    effects: [
      //ChaosRuneshieldPlatingEffect,
      {
        name: `Fierce Conquerors`,
        desc: `Models in this unit count as 2 models for the purposes of contesting objectives.`,
        when: [END_OF_TURN],
      },
    ],
  }, */
  'ROR: The Coven of Thryx': {
    effects: [
      {
        name: `Magister: Magic-Touched`,
        desc: `Effect: If this unit successfully cast a spell this phase, for the rest of the turn: 
        Add 1 to this units power level. 
        If 2 or more dice in a casting roll for this unit have the same value, the spell fails, its effect is not resolved and D6 mortal damage is inflicted on this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Pink Horrors: Lunatic Demise - Passive`,
        desc: `Effect: Each time a model in this unit is slain, before removing the model from play, pick 1 of the following effects: 
        Split: Pick a friendly Blue Horrors and Brimstone Horrors unit within 12" of this unit. Return up to 2 slain Blue Horror models to that unit. 
        Petty Vengeance: Pick an enemy unit in combat with this unit to be the target and roll a dice. On a 4+, inflict 1 mortal damage on the target.`,
        when: [DURING_GAME],
      },
      {
        name: `Tome of Eyes: Transfixed by Countless Eyes - Reaction: You declared a Spell ability for a Wizard within this Manifestations combat range`,
        desc: `Effect: You can add 1 or 2 to the casting roll for that spell. Roll a number of dice equal to the amount added. For each 1-2, allocate 1 damage point to the caster. If the caster is destroyed by this ability, the spell has no effect.`,
        when: [HERO_PHASE],
      },
      {
        name: `Burning SIgil of Tzeentch: Radiant Transmogrification`,
        desc: `Declare: This Manifestation must use this ability in each movement phase. Pick each unit (friendly and enemy) within 9" of this Manifestation to be the targets. 
        Effect: Roll 2 dice, pick either result, then apply the corresponding eect to all targets for the rest of the turn. 
        1-2 No effect. 
        3 Subtract 2" from the targets Move characteristic. 
        4 Subtract 1 from hit rolls for the targets attacks. 
        5 Subtract 1 from wound rolls for the targets attacks. 
        6 Inflict D3 mortal damage on the target, then add 1 to the Attacks characteristic of the targets melee weapons.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sparks of Profane Potential - Once Per Battle`,
        desc: `Effect: If the Magister in the Regiment of Renown has been deployed, set up one of the following Manifestations within 1" of them: 
        1 Burning Sigil of Tzeentch  
        1 Tome of Eyes  
        1 Daemonic Simulacrum.`,
        when: [DURING_SETUP],
      },
      {
        name: `Skilled Summoner: Casting value of 6`,
        desc: `Declare: Pick the Magister in this Regiment of Renown to cast this spell, pick 1 of the Manifestations from the list below that is not on the battlefield, then make a casting roll of 2D6: 
        1 Burning Sigil of Tzeentch  
        1 Tome of Eyes  
        1 Daemonic Simulacrum 
        Effect: If there is already a friendly Manifestation from the list above on the battlefield, it is immediately banished. Then, set up the Manifestation you picked within 1" of the caster and visible to them. If that Manifestation is a Daemonic Simulacrum, it must also be set up more than 9" away from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Flickering Wyrdflame - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points inflicted on it this turn by Wyrdflame Spell abilities or attacks made with weapons that have the Wyrdflame weapon ability to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Bolt of Tzeentch: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick the Magister in this Regiment of Renown to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Phulgoth`s Shudderhood': {
    effects: [
      {
        name: `Harbinger of Decay: Knell of Doom - Once Per Battle - Enemy Hero Phase`,
        desc: `Declare: Pick up to 3 enemy units within 24" of this unit to be the targets. 
        Effect: Until the start of your next turn, subtract 1" from the Move characteristic of each target and subtract 1 from run rolls and charge rolls for each target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Harbinger of Decay: Omens of Decay: Chant value of 4`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a chanting roll of D6. 
        Effect: Subtract twice the current battle round number from the targets control score for the rest of the turn. If the chanting roll was 10+, this ability aects all enemy units within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Putrid Blightkinds: Bloated Bulk - Passive`,
        desc: `Effect: Add 3 to this units control score while each model in this unit is contesting an objective you control.`,
        when: [END_OF_TURN],
      },
      {
        name: `Pusgoyle Blightlords: Relentless Attackers - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units Flyriders Arsenal for attacks that target units contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fog of Despair - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target units in this Regiment of Renown while they are wholly within 9" of the Harbinger of Decay in this Regiment of Renown.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Nauseating Convalescence - Once Per Turn`,
        desc: `Effect: Heal (1) each unit in this Regiment of Renown.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: One-Eyed Grunnock': {
    effects: [
      {
        name: `Hurled Body`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in that unit is slain and you can pick a visible enemy unit within 12" of this unit. Inflict an amount of mortal damage on that unit equal to the targets Health characteristic.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Titanic Boulderclub - Passive`,
        desc: `Effect: If all of the attacks made with this units Titanic Boulderclub target the same enemy unit, for every 5 models in the target unit, add 2 to its Attacks characteristic for the rest of the phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Titanic Boulderclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shake the Earth - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. If the target is Infantry, double the amount of mortal damage inflicted. 
        Subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Vlot-Klaw`s Enginecoven': {
    effects: [
      {
        name: `Warlock Galvaneer: Lightning Master - Once Per Battle`,
        desc: `Declare: Pick a friendly Warpvolt Scourgers unit within this unit's combat range to be the target.
        Effect: Roll a dice. On a 2+, set the Attacks characteristic of the target's Warpvolt Scourgers to 10 for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Warlock Galvaneer: More-More Warpvolt Doom!`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this unit's Warpvolt Obliterator to be the target.
        Effect: Roll a D3 for each other enemy unit within the target's combat range. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Ratling Warpblaster: Overwhelming Fire - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units shooting attacks that target an enemy unit that has 10 or more models.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Behold my Genius! - Once Per Battle`,
        desc: `Declare: Pick all friendly Volt-Klaw's Enginecoven units to be the targets.
        Effect: Until the start of your next turn:
        Add 1 to hit rolls for the targets' shooting attacks.
        Add 3" to the Range characteristic of the targets' ranged weapons.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Hide-Shelter! - Passive`,
        desc: `Effect: While a friendly Volt-Klaw's Enginecoven Infantry unit is witin the combat range of a friendly Volt-Klaw's Enginecoven Ratling Warpblaster, it is not visible to enemy units more than 13" away.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Krittok`s Clawpack': {
    effects: [
      {
        name: `Krittok Foulblade: Doomfang`,
        desc: `Effect: This unit has Strike-first for the rest of the turn but it cannot use commands this phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Krittok Foulblade:: Command Ability - A Reputation for Cunning - Enemy Hero Phase`,
        desc: `Effect: You can pick 2 different eligible units to use the Always Three Clawsteps Ahead ability this phase instead of 1, but at least 1 of those units must have the Verminus Keyword.`,
        when: [HERO_PHASE],
      },
      {
        name: `Krittok Foulblade: Foster Competition - Passive`,
        desc: `Effect: Add 1 to wound rolls for friendly Stormvermin units while they are wholly within 13" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Stormvermin: Elite Bodyguard - Passive`,
        desc: `Effect: Friendly Skaven Infantry Heroes have Ward (5+) while they are within this units combat range.`,
        when: [DURING_GAME],
      },
      {
        name: `Doom-Flayer: Whirling Doom`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Fickle Motives - Passive`,
        desc: `Effect: Add 1 to the Attack characteristic of melee weapons used by friendly Krittok's Clawpack units while you have more victory points than your opponent.
        Subtract 3 from the control scores of friendly Krittok's Clawpack units while you have fewer victory points than your opponent.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Always Three Clawsteps Ahead - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Picke a friendly Krittok's Clawpack unit that is not in combat to use this ability.
        Effect: That unit can use the 'Normal Move' ability as if it were your Movement phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Skryre Payloads - Passive`,
        desc: `Effect: Friendly Krittok's Clawpack Doom-Flayers units have Ward (5+) while they are in combat range of a friendly Krittok's Clawpack Stormvermin unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Exile Scavengers': {
    effects: [
      {
        name: `Endrinmaster with Dirigible Suit: By Grungi, I Have My Eye On You! - Passive`,
        desc: `Effect: Add 1 to field repairs rolls for friendly Endrinriggers units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Endrinmaster with Dirigible Suit: Endrinmaster`,
        desc: `Declare: Pick a friendly Skyvessel within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, Heal (3) the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Skywardens: Timed Charges`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: Inflict an amount of mortal damage on the target equal to the roll. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grundstok Gunhauler: Light Bomb Racks`,
        desc: `Declare: Pick an enemy unit that does not have Fly and that this unit passed across this phase to be the target. 
        Effect: Roll 4 dice. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `An Eye for Loot`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown. 
        Effect: Set up the units in this Regiment of Renown in reserve studying the battlefield. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Swoop In`,
        desc: `Declare: Pick the Grundstok Gunhauler in this Regiment of Renown to use this ability if it is studying the battlefield. 
        Effect: Set up the Grundstok Gunhauler on the battlefield more than 6" from all enemy units that have an artefact of power and more than 9" from all other enemy units. Then, set up all other units in this Regiment of Renown wholly within 3" of the Grundstok Gunhauler and more than 6" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `What's Yours is Mine - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with a unit in this Regiment of Renown to be the target. Then, pick an artefact of power the target has. 
        Effect: Roll a dice. Add 1 to the roll for each unit in this Regiment of Renown that is in combat with the target. On a 6+, the target no longer has that artefact of power.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Squires of the Everchosen': {
    effects: [
      {
        name: `Varghulf Courtier: Bounding Strides - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Varghulf Courtier: Victory Feast`,
        desc: `Effect: If any models were slain by this unit this turn: 
        Heal (D6) this unit. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      {
        name: `Morbheg Knights: Shrieking Charge`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Morbheg Knights: Predator's Pounce - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `A Deluded Quest - Once Per Battle`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: The target has the Enemy of the Everchosen keyword.`,
        when: [DURING_SETUP],
      },
      {
        name: `A Quest Well Done - Once Per Battle`,
        desc: `Effect: If the enemy Enemy of the Everchosen unit is destroyed by a unit in this Regiment of Renown, add 10 to the control score of each unit in this Regiment of Renown for the rest of the battle.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: Nurgles Gift': {
    effects: [
      {
        name: `Nurglings: Endless Swarm - Passive`,
        desc: `Effect: Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Incubation Period`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown. 
        Effect: Set up the units in this Regiment of Renown in reserve festering within. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Bursting with Life - Passive`,
        desc: `Effect: If a friendly non-Nurgles Gift unit would be destroyed, before the last model is removed from play, roll a dice. Add 1 to the roll for each other friendly non-Nurgles Gift unit that has been destroyed this battle. On a 5+, pick a friendly unit that is festering within and set it up wholly within 6" of that model. It can be set up in combat.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Stumblefoot Gargant': {
    effects: [
      {
        name: `Mancrusher Gargant: Stuff 'Em in Me Bag - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Projectile Vomit - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn. Then, pick a point on the battlefield within 6" of this unit and pick each enemy unit within 3" of that point to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on that target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Bellowing Mockery - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn, then pick an enemy unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Whatre You Lookin At? - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it charged this turn and has not used a Rampage ability this turn. Then, pick an enemy unit within 9" of this unit to be the target. 
        Effect: Roll 2D6. This unit can move a number of inches equal to the roll. It can pass through enemy models and must end that move in combat with the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Snerks Trogg-Fer-Hire': {
    effects: [
      {
        name: `Dankhold Troggoth: Greater Regeneration`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [START_OF_TURN],
      },
      {
        name: `Dankhold Troggoth: Magical Resistance - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dankhold Troggoth: Wade and Smash - Once Per Turn`,
        desc: `Effect: If this unit is in combat, it can move 6" but must end that move in combat. Then, roll a D3 for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Go Dat Way!`,
        desc: `Declare: Pick the Dankhold Troggoth in this Regiment of Renown to be the target if it is within 12" of the Loonboss in this Regiment of Renown. 
        Effect: For the rest of the turn, the target can still use Charge abilities even if it used a Retreat ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Taktikal Cowering - Passive`,
        desc: `Effect: While the Loonboss in this Regiment of Renown is within the combat range of the Dankhold Troggoth in this Regiment of Renown: 
        That Loonboss has Ward (4+). 
        Each time you make a successful ward roll for that Loonboss, allocate 1 damage point to that Dankhold Troggoth after the damage sequence for that Loonboss has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Exiled One': {
    effects: [
      {
        name: `Hatred for All`,
        desc: `Declare: You must use this ability if this unit is not in combat and there are any other visible friendly units within this unit's combat range. You must pick 1 of those friendly units to be the target.
        Effect: Resolve combat attacks for this unit against the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Skarbrand: Roar of Total Rage - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll either 3 dice or a number of dice equal to the number of damage points this unit has. For each 4+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Skarbrand: Inescapable Wrath`,
        desc: `Effect: Add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: The Red Revelation': {
    effects: [
      {
        name: `Frenzied Violence: Chant value of 4`,
        desc: `Declare: Pick a friendly Slaughterpriest in this Regiment of Renown to chant this prayer, pick a visible unit in this Regiment of Renown wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, the target unit has Ward (5+) while every model in that unit is wholly within the combat range of an enemy unit. If the chanting roll was 10+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Glimpse the God - Once Per Turn`,
        desc: `Declare: Pick each unit in this Regiment of Renown that used a Fight ability this turn to be a target.
        Effect: If any damage points were allocated to an enemy unit by the target's combat attacks this turn, that enemy unit was deteoyed this turn, and no damage points were allocated to that enemy unit this turn by combat attacks made by a friendly unit that is not in this Regiment of Renown, for the rest of the battle, add 2 to the Attacks characteristic of the target's Blood-hungry weapons.`,
        when: [END_OF_TURN],
      },
      {
        name: `Slaughterpriest: Blood Sacrifice - Once Per Turn`,
        desc: `Declare: Pick a unit (friendly or enemy) within this unit's combat range to be the target.
        Effect: Roll a D3. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. 
        This unit gains 1 ritual point.`,
        when: [HERO_PHASE],
      },
      {
        name: `Slaughterpriest: Scorn of Sorcery - Passive`,
        desc: `Effect: This unit can use Unbind abilities as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Bloodreavers: Blood for the Blood God! - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons for the rest of the turn if this unit charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Skullreapers: Trial of Skulls - Passive`,
        desc: `Effect: Add 8 to this unit's control score while it is in combat.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: The Scarlet Jury': {
    effects: [
      {
        name: `Punishment Fits the Crime - Passive`,
        desc: `Effect: You believe the 'Accusations of Regicide' Delusion (see Grand Justice Gormayne's warscroll).`,
        when: [DURING_SETUP],
      },
      {
        name: `Grand Justice Gormayne: Arrest Those Miscreants`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: Roll a dice. On a 3+, until the start of your next turn, the target has Strike-Last while it is in combat with any friendly Flesh-Eater Courts Heroes and any friendly Serfs or Knights units.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Grand Justice Gormayne: Accusations of Regicide (Delusion) - Passive`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: While you believe this Delusion, add 1 to the Damage characteristic of melee weapons used by friendly Serfs and Knights units while they are wholly within 12" of any friendly Flesh-Eater Courts Heroes that had any damage points allocated to them in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Decapitator: Executioner's Entourage - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Serfs unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, the target's melee weapons have Crit (2 Hits) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Decapitator: Off with their Head! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Immediately after that Fight ability has been resolved, pick an enemy Infantry Hero in combat with this unit to be the target. Roll 2D6. If the roll exceeds the target's Health characteristic, it is automatically destroyed.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cryptguard: Elite Guardians - Once Per Turn`,
        desc: `Effect: If this unit is in combat with any enemy units that charged this turn, roll a dice. On a 3+, for the rest of the turn, this unit has Strike-First but ward rolls cannot be made for it.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cryptguard: Royal Bodyguard - Passive`,
        desc: `Effect: While any friendly non-Monster Flesh-Eater Courts Heroes are wholly within this unit's combat range, both this unit and those Heroes have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
