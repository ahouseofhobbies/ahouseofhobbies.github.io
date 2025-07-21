import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_TURN,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import Prayers from './prayers'
import rule_sources from './rule_sources'
import Spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'
import prayers from './prayers'

const MorathiEffect = {
  name: `One Soul, Two Bodies/ Two Bodies, One Soul`,
  desc: `If the Shadow Queen is on the battlefield, after making ward rolls for wounds or mortal wounds that would be allocated to this unit, any wounds or mortal wounds that have not been negated are instead allocated to the Shadow Queen and have no effect on this unit. Wounds and mortal wounds allocated to the Shadow Queen in this way cannot be negated.

  In addition, if the Shadow Queen is on the battlefield and the effect of an ability or spell would cause this unit to be destroyed without any wounds being allocated, then this unit is not destroyed and 3 wounds are allocated to the Shadow Queen instead. Wounds allocated to the Shadow Queen in this way cannot be negated.

  If the Shadow Queen is destroyed, after removing that unit from play, this unit is also destroyed.`,
  when: [WOUND_ALLOCATION_PHASE],
  rule_sources: [rule_sources.BATTLETOME_DAUGHTERS_OF_KHAINE, rule_sources.ERRATA_DECEMBER_2022],
  shared: true,
}

const WitchbrewEffect = {
  name: `Witchbrew`,
  desc: `At the start of your hero phase, you can pick a friendly Daughters of Khaine unit wholly within 12" of this model to drink witchbrew. A unit cannot drink witchbrew more than once in the same hero phase. If you do so, add 1 to the number of the current battle round when determining the abilities gained by that unit from the Blood Rites battle trait until the end of that turn. This ability and other similar abilities are cumulative.`,
  when: [START_OF_HERO_PHASE],
  shared: true,
}

const StandardBearerAndMusicianEffects = [
  {
    name: `Standard Bearer`,
    desc: `1 in every 5 models in this unit can be a Death Pennant Bearer. You can reroll failed battleshock tests for this unit if it includes any Death Pennant Bearers.`,
    when: [BATTLESHOCK_PHASE],
    shared: true,
  },
  {
    name: `Hornblower`,
    desc: `1 in every 5 models in this unit can be a Hornblower. This unit can run and still charge later in the turn if it includes any Hornblowers.`,
    when: [MOVEMENT_PHASE, CHARGE_PHASE],
    shared: true,
  },
]

const DescendToBattleEffects = [
  {
    name: `Descend to Battle`,
    desc: `Instead of setting up this unit on the battlefield, you can place it to one side and say that it is circling high above as a reserve unit. If you do so, at the end of your movement phase, you can set up this unit on the battlefield more than 9" from all enemy units.`,
    when: [DURING_SETUP],
    shared: true,
  },
  {
    name: `Descend to Battle`,
    desc: `If this unit is still circling high, at the end of your movement phase, you can set up this unit on the battlefield more than 9" from all enemy units.`,
    when: [END_OF_MOVEMENT_PHASE],
    shared: true,
  },
]

const FightAndFlightEffect = {
  name: `Fire and Flight`,
  desc: `After this unit shoots, this unit can make a normal move of 6".`,
  when: [SHOOTING_PHASE],
  shared: true,
}

const BladedBucklersEffects = [
  {
    name: `Shield`,
    desc: `If this unit is armed with Bladed Bucklers, it has a Save characteristic of 5+ instead of 6+.`,
    when: [SAVES_PHASE],
    shared: true,
  },
  {
    name: `Bladed Bucklers`,
    desc: `If the unmodified save roll for an attack made with a melee weapon that targets a unit armed with Bladed Bucklers is 6, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.`,
    when: [SAVES_PHASE],
    shared: true,
  },
]

const BloodshieldEffect = {
  name: `Bloodshield`,
  desc: `Add 1 to save rolls for attacks that target friendly Daughters of Khaine units wholly within range of any friendly units with this ability. The range of this unit's Bloodshield ability is shown on its damage table.`,
  when: [SAVES_PHASE],
  shared: true,
}

const BladedImpactEffect = {
  name: `Bladed Impact`,
  desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a dice. On a 2+, that enemy unit suffers D3 mortal wounds.`,
  when: [CHARGE_PHASE],
  shared: true,
}

const HeartseekersEffect = {
  name: `Heartseekers`,
  desc: `If the unmodified hit roll for an attack made with a Heartseeker Bow is 6, the target suffers 1 mortal wound and the attack sequence ends (do not make a wound roll or save roll).`,
  when: [SHOOTING_PHASE],
  shared: true,
}

const TurnedToCrystalEffect = {
  name: `Turned to Crystal`,
  desc: `At the end of the combat phase, you can pick 1 enemy unit within 1" of this unit and roll a dice. On a 2+, that enemy unit suffers 1 mortal wound.`,
  when: [END_OF_COMBAT_PHASE],
  shared: true,
}

const AltarOfKhaineEffect = {
  name: `Altar of Khaine`,
  desc: `Add 1 to chanting rolls for friendly Daughters of Khaine Priests wholly within 9" of any friendly units with this ability.`,
  when: [HERO_PHASE],
  shared: true,
}

const DanceOfDeathEffect = {
  name: `Dance of Death`,
  desc: `This unit is eligible to fight in the combat phase if it is within 6" of an enemy unit instead of 3", and it can move an extra 3" when it piles in.`,
  when: [COMBAT_PHASE],
  shared: true,
}

const baseHagQueen = {
  /* mandatory: {
    prayers: [keyPicker(Prayers, ['Touch of Death'])],
  },
  effects: [WitchbrewEffect], */
}

const baseSlaughterQueen = {
  /* mandatory: {
    prayers: [keyPicker(Prayers, ['Dance of Doom'])],
    command_abilities: [keyPicker(CommandAbilities, ['Orgy of Slaughter'])],
  }, */
}

const baseBloodwrack = {
  /*  mandatory: {
    spells: [keyPicker(Spells, ['Enfeebling Foe'])],
  }, */
  effects: [
    {
      name: `Bloodwrack Stare`,
      desc: `Do not use the attack sequence for an attack made with a Bloodwrack Stare. Instead, roll a number of dice equal to the number of models in the target unit that are within range of the attack. For each 5+, the target unit suffers 1 mortal wound.`,
      when: [SHOOTING_PHASE],
      shared: true,
    },
    {
      name: `Melusai Kin`,
      desc: `At the start of your combat phase, you can pick 1 friendly Melusai unit wholly within 12" of this unit. Add 1 to the number of the current battle round when determining the abilities gained by that unit from the Blood Rites battle trait until the end of that phase. This ability and other similar abilities are cumulative.`,
      when: [START_OF_COMBAT_PHASE],
      shared: true,
    },
    {
      name: `Wizard`,
      desc: `This unit can attempt to cast 1 spell in your hero phase and attempt to unbind 2 spells in the enemy hero phase.`,
      when: [HERO_PHASE],
      shared: true,
    },
  ],
}

const ShadowLeapEffect = {
  /* name: `Shadow Leap`,
  desc: `In your movement phase, instead of making a normal move or retreat with this unit, you can say that it will shadow leap. If you do so, remove this unit from the battlefield and set it up again anywhere on the battlefield more than 9" from all enemy units.`,
  when: [MOVEMENT_PHASE],
  shared: true, */
}

const Morathi = {
  'Morathi-Khaine': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Black Horror of Ulgu'])],
      command_abilities: [keyPicker(CommandAbilities, ['Worship Through Bloodshed'])],
    }, */
    effects: [
      {
        name: `Mirror Dance: Casting value of 7`,
        desc: `Declare: If a friendly Shadow Queen is on the battlefield, make a casting roll of 2D6. 
        Effect: Place 2 tokens on the battlefield, one directly underneath the centre of this units base and one directly underneath the centre of a friendly Shadow Queens base. Then, remove this unit and that Shadow Queen from the battlefield. Set up each unit again with its base overlapping the centre of the other token, then remove the tokens. If it is not possible to set up either of the units on the battlefield, return both units to their original positions. Each unit can only be set up in combat with units that the other unit was already in combat with.`,
        when: [HERO_PHASE],
      },
      {
        name: `Once Soul, Two Bodies - Passive`,
        desc: `Effect: Each time a damage point would be allocated to this unit, it is instead allocated to a friendly The Shadow Queen (you cannot make any further ward rolls for that damage point). If this unit would be automatically destroyed by another ability, it is not automatically destroyed. Instead, allocate 3 damage points to a friendly The Shadow Queen (ward rolls cannot be made for those damage points). If a friendly The Shadow Queen is destroyed, this unit is automatically destroyed.`,
        when: [DURING_GAME],
      },
      {
        name: `Sorceress Supreme - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit.`,
        when: [HERO_PHASE],
      },
      // MorathiEffect,
    ],
  },
  'The Shadow Queen': {
    effects: [
      {
        name: `Fury of the Shadow Queen - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If any models are slain by this ability, for the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly Khinerai and Melusai units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      // MorathiEffect,
      {
        name: `Iron Heart of Khaine - Passive`,
        desc: `Effect: You cannot allocate more than 3 damage points to this unit each turn. Once 3 points have been allocated to this unit in a turn, any further damage points that would be allocated to it are ignored. 
        Damage points allocated to this unit cannot be healed. 
        If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 3 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
        rule_sources: [rule_sources.BATTLETOME_DAUGHTERS_OF_KHAINE, rule_sources.ERRATA_JULY_2022],
      },
    ],
  },
}

const Units = {
  'Morathi-Khaine': {
    ...Morathi['Morathi-Khaine'],
    /*mandatory: {
      ...Morathi['Morathi-Khaine'].mandatory,
      units: [keyPicker(Morathi, ['The Shadow Queen'])],
    }, */
  },
  'The Shadow Queen': {
    ...Morathi['The Shadow Queen'],
    /* mandatory: {
      units: [keyPicker(Morathi, ['Morathi-Khaine'])],
    },*/
  },
  'Hag Queen': {
    ...baseHagQueen,
    effects: [
      {
        name: `Witchbrew - Once Per Turn`,
        desc: `Declare: Pick a friendly Daughters of Khaine unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has Ward (5+) for the rest of the turn..`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Hag Queen on Cauldron of Blood': {
    /*mandatory: {
      prayers: [...baseHagQueen.mandatory.prayers],
    }, */
    effects: [
      {
        name: `Altar of Khaine - Passive`,
        desc: `Effect: Add 1 to save rolls for friendly Daughters of Khaine Infantry units while they are wholly within 9" of this unit. 
        In addition, add 1 to chanting rolls for friendly Daughters of Khaine Priests while they are wholly within 9" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Bladed Impact`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Witchbrew - Once Per Turn`,
        desc: `Declare: Pick a friendly Daughters of Khaine unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has Ward (5+) for the rest of the turn..`,
        when: [HERO_PHASE],
      },
    ],
  },
  'High Gladiatrix': {
    effects: [
      //DanceOfDeathEffect,
      {
        name: `Killing Stroke - Once Per Battle`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Roll 2D6. If the roll exceeds the targets Health characteristic, it is automatically destroyed.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Paragon of Slaughter`,
        desc: `Declare: If this unit is in combat, pick a visible friendly Daughters of Khaine Aelf non-Hero Infantry unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, add 1 to the Rend characteristic of melee weapons used by the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Slaughter Queen': {
    /* mandatory: {
      command_abilities: [...baseSlaughterQueen.mandatory.command_abilities],
      prayers: [...baseSlaughterQueen.mandatory.prayers],
    }, */
    effects: [
      {
        name: `Orgy of Slaughter - Once Per Turn`,
        desc: `Declare: Pick a friendly Daughters of Khaine Aelf Infantry unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Avatar of Khaine': {
    effects: [
      // AltarOfKhaineEffect,
      {
        name: `Wrath of Khaine - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If the target is a Monster, double the amount of mortal damage inflicted.`,
        when: [CHARGE_PHASE],
        shared: true,
      },
    ],
  },
  'Witch Aelves with Bladed Bucklers': {
    effects: [
      //...StandardBearerAndMusicianEffects,
      //...BladedBucklersEffects,
      {
        name: `Bladed Bucklers - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Witch Aelves with Paired Sciansa': {
    effects: [
      //...StandardBearerAndMusicianEffects,
      //...BladedBucklersEffects,
      {
        name: `Frenzied Fervour - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons for the rest of the turn if this unit charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Sisters of Slaughter with Sacrificial Knives': {
    effects: [
      {
        name: `Dance of Death - Enemy Combat Phase`,
        desc: `Effect: This unit can move 3". It can pass through the combat ranges of enemy units and can end that move in combat.`,
        when: [COMBAT_PHASE],
      },
      //...StandardBearerAndMusicianEffects,
      //...BladedBucklersEffects,
      //DanceOfDeathEffect,
    ],
  },
  'Sisters of Slaughter with Bladed Bucklers': {
    effects: [
      {
        name: `Dance of Diversion - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks that target this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bladed Bucklers - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Slaughter Queen on Cauldron of Blood': {
    /* mandatory: {
      prayers: [...baseSlaughterQueen.mandatory.prayers],
      command_abilities: [...baseSlaughterQueen.mandatory.command_abilities],
    }, */
    effects: [
      /*  AltarOfKhaineEffect,
      BladedImpactEffect,
      BloodshieldEffect, */
      {
        name: `Altar of Khaine - Passive`,
        desc: `Effect: Add 1 to save rolls for friendly Daughters of Khaine Infantry units while they are wholly within 9" of this unit. 
        In addition, add 1 to chanting rolls for friendly Daughters of Khaine Priests while they are wholly within 9" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Orgy of Slaughter - Once Per Turn`,
        desc: `Declare: Pick a friendly Daughters of Khaine Aelf Infantry unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bladed Impact`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Bloodwrack Shrine': {
    /*  mandatory: {
      spells: [...baseBloodwrack.mandatory.spells],
    }, */
    effects: [
      // ...baseBloodwrack.effects,
      // BladedImpactEffect,
      {
        name: `Aura of Agony`,
        desc: `Declare: Pick up to 3 different enemy units within 9" of this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bladed Impact`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Bloodwrack Stare - Passive`,
        desc: `Effect: Each time this unit attacks with its Bloodwrack Stare, if the attack scores a hit, roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on that unit. You cannot pick the same enemy unit to be targeted by attacks made with a Bloodwrack Stare more than once per phase.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Bloodwrack Shrine (SoG)': {
    effects: [
      {
        name: `Reflected Agony: Casting value of 5`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Until the start of your next turn, enemy units and enemy Manifestations cannot be set up within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wracking Gaze - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 15" of this unit to be the target. 
        Effect: Roll a dice. If the roll is equal to or less than that enemy units Health characteristic, for the rest of the phase, you can reroll failed hit rolls for attacks made by this unit that target that enemy unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Blood Sisters': {
    effects: [
      {
        name: `Crystal Touch`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll exceeds the targets Health characteristic, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      //  TurnedToCrystalEffect,
    ],
  },
  'Blood Stalkers': {
    effects: [
      {
        name: `Heartseekers`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, this units shooting attacks score critical hits on unmodified hit rolls of 5+ for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      // HeartseekersEffect,
    ],
  },
  'Bloodwrack Medusa': {
    //   ...baseBloodwrack,
    effects: [
      {
        name: `Bloodwrack Stare - Passive`,
        desc: `Effect: Each time this unit attacks with its Bloodwrack Stare, if the attack scores a hit, roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on that unit. You cannot pick the same enemy unit to be targeted by attacks made with a Bloodwrack Stare more than once per phase.`,
        when: [SHOOTING_PHASE],
      },
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Melusai Kin - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Melusai unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately aer the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Doomfire Warlocks': {
    // mandatory: { spells: [keyPicker(Spells, ['Doomfire'])] },
    effects: [
      //  GenericEffects.WizardOneSpellEffect,
      {
        name: `Outmanoeuvre - Passive`,
        desc: `Effect: When this unit uses the Redeploy command, if you roll a 1-3 when determining the distance this unit can move, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Khinerai Heartrenders': {
    effects: [
      {
        name: `Circling in the Skies Above`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve in the skies. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Death from Above`,
        desc: `Declare: Pick this unit if it is in the skies. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Fire and Flight`,
        desc: `Effect: If this unit used a Shoot ability this phase, this unit can move D6". It cannot move into combat during any part of that move.`,
        when: [SHOOTING_PHASE],
      },
      //...DescendToBattleEffects,
      //FightAndFlightEffect,
    ],
  },
  'Khinerai Lifetakers': {
    effects: [
      {
        name: `Circling in the Skies Above`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve in the skies. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Death from Above`,
        desc: `Declare: Pick this unit if it is in the skies. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Fight and Flight - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: After resolving the effect of that Fight ability, this unit can immediately move D6". It cannot end that move in combat with any units that it was not already in combat with at the start of the move.`,
        when: [COMBAT_PHASE],
      },
      // ...DescendToBattleEffects,
      // FightAndFlightEffect,
    ],
  },
  /*'Morgwaeth the Bloodied': {
    effects: [
      //...baseHagQueen.effects
      ],
  }, */
  /*'The Blade-coven': {
    effects: [
      {
        name: `Champion`,
        desc: `Kyrae is the unit champion. That model has a Wounds characteristic of 3.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
     // HeartseekersEffect,
      {
        name: `Zealots of the First Temple`,
        desc: `Before you allocate a wound or mortal wound to a friendly Morgwaeth the Bloodied within 3" of this unit, or instead of making a ward roll for a wound or mortal wound that would be allocated to a friendly Morgwaeth the Bloodied within 3" of this unit, you can roll a dice. On a 2+, that wound or mortal wound is allocated to this unit instead of Morgwaeth the Bloodied and cannot be negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, */
  'Khainite Shadowstalkers': {
    effects: [
      {
        name: `Shadow Leap`,
        desc: `Effect: Remove this unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Melusai Ironscale': {
    // mandatory: { command_abilities: [keyPicker(CommandAbilities, ['Wrath of the Scathborn'])] },
    effects: [
      {
        name: `Wrath of the Scathborn - Passive`,
        desc: `Effect: You can reroll charge rolls for friendly Melusai units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Gory Offering - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Melusai unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      // TurnedToCrystalEffect,
    ],
  },
  /* 'Slythael Shadestalker': {
    effects: [
     // ShadowLeapEffect,
      {
        name: `Impenetrable Darkness`,
        desc: `While this unit is more than 9" from all enemy units, this unit and friendly THE SHADEBORN units wholly within 9" of this unit have a ward of 4+.`,
        when: [WARDS_PHASE],
      },
      {
        name: `Mask of Shadowed Mirrors`,
        desc: `At the end of the charge phase, you can pick 1 enemy unit within 3" of this unit and roll 2D6. If the score exceeds that enemy unit's Bravery characteristic, that enemy unit cannot issue or receive commands until the end of the turn.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ], 
  }, */
  /* 'The Shadeborn': {
    effects: [
    //  ShadowLeapEffect
    ],
  }, */
  /* "Gryselle's Arenai": {
    effects: [
      {
        name: `Champion`,
        desc: `Gryselle, the Slaughterer, is the unit champion and has a Wounds characteristic of 3. That model can issue commands to their own unit.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      DanceOfDeathEffect,
      {
        name: `Acrobatic Bloodshed`,
        desc: `If the unmodified hit rolls of 3 or more attacks made by this unit that target the same enemy unit in the same phase are 6, the strike-last effect applies to that enemy unit until the end of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Krethusa The Croneseer': {
    /* mandatory: {
      prayers: [keyPicker(prayers, ['Murder of Crows'])],
    }, */
    effects: [
      {
        name: `Burnt Offerings - Once Per Turn`,
        desc: `Declare: If this unit is within the combat range of a friendly Cauldron of Blood, pick a visible friendly Daughters of Khaine Aelf non-Hero Infantry unit wholly within 18" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, pick 1 of the following effects to apply to the target. 
        Prophecy of Silence: Until the start of your next turn, enemy units cannot use commands while they are in combat with the target. 
        Prophecy of Dark Wings: The target can use the Normal Move ability as if it were your movement phase. That unit counts as having used a Run ability this turn. 
        Prophecy of Reclamation: For the rest of the turn, while the target is contesting an objective, subtract 10 from the control scores of enemy units contesting that objective that do not have the Hero or Monster keyword.`,
        when: [HERO_PHASE],
      },
      {
        name: `Murder of Crows: Chant value of 4`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a chanting roll of D6. 
        Effect: Roll a D3. If the chanting roll was 8+, roll a D6 instead. Inflict an amount of mortal damage on the target equal to the roll. In addition, if the roll exceeds the targets Health characteristic, subtract 1 from hit rolls for the targets attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Krethusa The Croneseer (SoG)': {
    effects: [
      {
        name: `The Cronseer - Enemy Hero Phase`,
        desc: `Effect: Give this unit D3 ritual points.`,
        when: [HERO_PHASE],
      },
      {
        name: `Blood Ritual: Chant value of 3`,
        desc: `Declare: Pick a visible friendly Daughters of Khaine Aelf Infantry or Cavalry unit wholly within 12" of this unit to be the target. 
        Effect: Pick 1 of the following effects to apply until the start of your next turn: 
        Prophecy of Tyranny: Enemy units cannot use commands while they are in combat with the target. 
        Prophecy of Shelter: Other than the Companion ability, weapon abilities used by enemy units while they are in combat with the target have no effect. 
        Prophecy of Retribution: Subtract 1 from ward rolls made for damage points inflicted by the targets combat attacks. 
        If the chanting roll was 9+, all of the above effects apply.`,
        when: [HERO_PHASE],
      },
      {
        name: `Command Ability: Gift of Foresight - Once Per Battle`,
        desc: `Declare: Pick a friendly Daughters of Khaine Aelf Infantry or Cavalry unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 9" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Fjori`s Flamebearers': {
    /* mandatory: {
       prayers: [keyPicker(prayers, ['Vessel of Sigmar'])],
     }, */
    effects: [
      {
        name: `Grimhold Exile: Last of the Lodge-fire - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the targets Health characteristic. For each 4+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grimhold Exile: Honour to Grimnir! - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly Fyreslayers Infantry units wholly within 12" of this unit to be the targets. 
        Effect: You can reroll charge rolls for the targets for the rest of the turn`,
        when: [HERO_PHASE],
      },
      {
        name: `Auric Hearthguard: Molten Rockbolts - Passive`,
        desc: `Effect: Each time a shooting attack made by this unit scores a critical hit, subtract 1" from the target units Move characteristic until the start of your next turn. This ability cannot reduce the target units unmodified Move characteristic below half.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Hearthguard Berzerkers: Duty Unto Death - Passive`,
        desc: `Effect: While any friendly Fyreslayers Infantry Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Hearthguard Berzerkers with Poleaxes: Smouldering Braziers`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Hearthguard Berzerkers with Broadaxes: Fires of Vengeance - Passive`,
        desc: `Effect: While this unit is within the combat ranges of any damaged friendly Fyreslayers Heroes, add 1 to the Attacks characteristic of this unit's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulkite Berzerkers with Slingshields: Berserk Fury - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulkite Berzerkers with Handaxes: Whirlwind of Destruction - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units melee weapons if this unit charged this turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toe to Toe - Passive`,
        desc: `Effect: Subtract 10 from the control scores of enemy Monsters while they are in combat with any units in this Regiment of Renown.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grimnir's Defiance - Passive`,
        desc: `Effect: Units in this Regiment of Renown cannot be picked to be the target of Rampage abilities used by enemy units.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Saviours of Cinderfall': {
    effects: [
      {
        name: `Callis and Toll: Right Tools for the Job - Passive`,
        desc: `Effect: Double the Damage characteristic of this units weapons for attacks that target Wizards, Priests and Manifestations.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Callis and Toll: Wily to the Last - Passive`,
        desc: `Effect: If this unit has 2 models and would be automatically destroyed, it is not automatically destroyed. Instead, 1 model in this unit is slain.`,
        when: [DURING_GAME],
      },
      {
        name: `Callis and Toll: Get it Done - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Tolls Companions unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toll's Companions: Hidden Agents`,
        desc: `Declare: Pick this unit and a friendly Callis and Toll unit in the same regiment as this unit if those units have not been deployed. 
        Effect: Set up those units in reserve in the shadows. Those units have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Toll's Companions: Saviours of Cinderfall - Passive`,
        desc: `Effect: While a friendly Callis and Toll unit is wholly within this units combat range, both this unit and that Callis and Toll unit have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Toll's Companions: Emerge from the Shadows`,
        desc: `Declare: Pick this unit if it is in the shadows. 
         Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units. Then, set up the Callis and Toll unit that was set up in the shadows with this unit wholly within 6" of it and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Duty Bound - Passive`,
        desc: `Effect: While every model in the same unit in the Regiment of Renown is contesting the same objective, add 1 to save rolls and ward rolls for that unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Sigmar's Justice - Once Per Turn`,
        desc: `Declare: Pick an enemy unit to be marked for justice. You can pick a unit that is in reserve. 
         Effect: For the rest of the battle, add 1 to wound rolls for combat attacks made by units in this Regiment of Renown that target a unit that is marked for justice.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'ROR: Norgrimm`s Rune Throng': {
    effects: [
      {
        name: `Runelord: Runes of Spellbreaking - Passive`,
        desc: `Effect: This unit can use the Unbind ability as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Runelord: Forgefire: Chant value of 5`,
        desc: `Declare: Pick a friendly Cities of Sigmar Duardin unit wholly within 12" of this unit to be the target, then make a chanting roll of D6. 
        Effct: Until the start of your next turn, add 1 to the Rend characteristic of the targets melee weapons. In addition, if the chanting roll was 10+, pick another friendly Cities of Sigmar Duardin unit wholly within 12" of this unit. Add 1 to the Rend characteristic of that units melee weapons until the start of your next turn as well.`,
        when: [HERO_PHASE],
      },
      {
        name: `Irondrakes: Cinderblast Bomb - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a visible enemy unit within 6" of it to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Longbeards: I Thought Duardin Were Made of Sterner Stuff! - Passive`,
        desc: `Effect: Add 2 to the control scores of friendly Cities of Sigmar Duardin units, excluding Longbeards units, while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Rune of Restored Hearth - Once Per Battle`,
        desc: `Effect: If the Runelord in the Regiment of Renown is contesting an objective, for the rest of the battle, units in this Regiment of Renown have Ward (5+) while they are contesting that objective.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wrath and Ruin: Chant value of 4`,
        desc: `Declare: Pick the Runelord in this Regiment of Renown to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
         Effect: Roll 6 dice. If the chanting roll was 8+, roll 9 dice instead. For each 5+, inflict 1 mortal damage on the target. If 3 or more damage points are allocated to the target as a result of those dice rolls, ignore positive modifiers to save rolls for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Elthwin`s Thorns': {
    effects: [
      {
        name: `Arch-Revenant: Crescent Shield`,
        desc: `Effect: Pick 1 of the following effects to apply to this unit for the rest of the turn: 
        Defensive Stance: This unit has Ward (4+). 
        Aggressive Stance: Add 1 to the Attacks characteristic of this units melee weapons, and add 1 to wound rolls for this units combat attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gossamid Archers: Forest Fighters - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      {
        name: `Gossamid Archers: Zephyrspites - Once Per Turn`,
        desc: `Effect: If this unit used a Shoot ability this phase, this unit can move D6". It cannot move into combat during any part of that move.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Gossamid Champion`,
        desc: `Declare: Pick the Arch-Revenant in this Regiment of Renown to use this ability, the pick a visible enemy unit within 12" of them to be the target. 
        Effect: Until the start of your next turn, subtract X from charge rolls for the target, where X is the number of damage points allocated to the target this phase by shooting attacks made by the Gossamid Archers unit in the Regiment of Renown, to a maximum of 6.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Flight of the Zephyrspites - Once Per Turn`,
        desc: `Effect: If both units in this Regiment of Renown are within each others combat range and neither unit is in combat, roll a dice. On a 3+, remove both units from the battlefield, then set them up again within each others combat range, wholly within 3" of a terrain feature and more than 9" from all enemy units.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: Gotrek Gurnisson': {
    effects: [
      {
        name: `Command Ability - Unstoppable Battle Fury`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strikelast for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `I'll Get There Myself! - Passive`,
        desc: `Effect: This unit cannot be set up in reserve and cannot be targeted by abilities that would remove it from the battlefield.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Blacktalons': {
    effects: [
      {
        name: `Neave Blacktalon: Justice from Azyr`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Whirlwind Axes for attacks that target Heroes.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave Blacktalon: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Neave Blacktalon: Windrider`,
        desc: `Declare: If this unit is in combat or charged this turn, this unit can make a pile-in move. Then, if this unit is in combat, you must pick 1 or more enemy units to be the target(s) of this units attacks. 
        Effect: Resolve combat attacks against the target unit(s). Then, roll a dice. On a 3+, remove this unit from the battlefield and set it up again on the battlefield more than 3" from all enemy units and wholly within the combat range of a friendly The Blacktalons unit that is not in combat.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave's Companions: Shield of Azyr`,
        desc: `Effect: While any friendly The Blacktalons Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Lorai: Aquatic Illusions`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Lorai: Nebulous Sea-Fog: Casting value of 6`,
        desc: `Effect: Until the start of your next turn, while a friendly The Blacktalons unit is wholly within 6" of this unit, if the unmodified hit roll for a shooting attack that targets that unit is 1-5, the attack fails and the attack sequence ends.`,
        when: [HERO_PHASE],
      },
      {
        name: `Justice Will Be Served - Once Per Battle`,
        desc: `Declare: Pick the Neave Blacktalon in this Regiment of Renown to be the target if it is in combat with an enemy Hero. 
        Effect: The target can use 2 Fight abilities this phase. Each time it does so, if it is in combat with an enemy Hero, all of its attacks must target an enemy Hero. In addition, after the first Fight ability is used, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Bundo Whalebiter': {
    effects: [
      {
        name: `Get Orf Me Land! - Once Per Turn`,
        desc: `Declare: Pick an objective within 1" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, move the target 2D6" to a new position on the battlefield more than 1" from all models, terrain features and other objectives.`,
        when: [HERO_PHASE],
      },
      {
        name: `Stuff 'Em In Me Net - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 3 dice. For each roll that is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Shipwrecka Warclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dead Cunning for a Gargant - Once Per Turn`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of this units weapons. Then, roll a dice. On a 4+, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Horizon Seekers': {
    effects: [
      {
        name: `Lord-Aquilor: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Lord-Aquilor: Ride the Winds Aetheric`,
        desc: `Declare: If this unit is not in combat, you can pick up to 2 friendly Vanguard-Palladors units that are not in combat to be the targets. 
        Effect: Remove this unit and the targets (if any) from the battlefield. Set this unit up again on the battlefield more than 9" from all enemy units. Then, set up each target wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Vanguard-Hunters: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard-Hunters: Astral Compass - Once Per Battle`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: The target has the Hunted keyword for the rest of the battle.`,
        when: [DURING_SETUP],
      },
      {
        name: `Vanguard-Hunters: Star-Marked - Passive`,
        desc: `Effect: Add 2" to this units Move characteristic while a Hunted enemy unit is on the battlefield. In addition, add 1 to hit rolls for this units attacks that target a Hunted enemy unit.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard Palladors: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard Palladors with Javelins: Charging Volley`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit in combat with it to be the target. 
        Effect: This unit can immediately use a Shoot ability as if it were your shooting phase, but it must target that enemy unit. This units Starstrike Javelins have Shoot in Combat this phase.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Hunters' Cohesion - Passive`,
        desc: `Effect: Each time this Regiment of Renown's Lord-Aquilor uses its Ride the Winds Aetheric ability, you can pick all units in this Regiment of Renown that are not in combat to be the targets. 
        In addition, add 1 to hit rolls for attacks made by this Regiment of Renown's Lord-Aquilor and Vanguard-Palladors units that target a Hunted enemy unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Valnirs Stormwing': {
    effects: [
      {
        name: `Knight-Draconis: Wrath of the Draconith - Once Per Turn`,
        desc: `Declare: Pick a friendly Stormdrake Guard unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, add 1 to the Attacks characteristic of both this units and the targets Draconiths Fangs and Talons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Knight-Draconis: Arcane Heritage - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit or a friendly Stormdrake Guard unit wholly within 12" of this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit or that friendly unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Knight-Draconis: Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Stormdrake Guard: Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Hour of Retribution - Once Per Battle`,
        desc: `Effect: For the rest of the turn:
        Add 1 to wound rolls for attacks made by units in this Regiment of Renown.
        Add 1 to save rolls for units in this Regiment of Renwon.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Enforcers of the Tithe': {
    effects: [
      {
        name: `Mortisan Ossifector: Refined Creations - Once Per Turn`,
        desc: `Declare: Pick a friendly Gothizzar Harvester, Morghast Archai or Morghast Harbingers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortek Guard: Shieldwall - Passive`,
        desc: `Effect: Ignore all modiifers to save rolls for this unit (positive and negative) for the rest of the turn if this unit did not use a Move ability in the same turn.`,
        when: [DURING_GAME],
      },
      {
        name: `Gothizzar Harvester: Bone Harvest - Passive`,
        desc: `Effect: Each time an enemy model in combat with this unit is slain, give this unit 1 bone-tithe point. This unit can have a maximum of 6 bone-tithe points at once.`,
        when: [DURING_GAME],
      },
      {
        name: `Gothizzar Harvester: Gruesome Surgery - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. For each model slain by this ability, you can return 1 slain model to a friendly Mortek Guard unit wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gothizzar Harvester: Repair Construct`,
        desc: `Declare: Pick a friendly Ossiarch Bonereapers unit wholly within 12" of this unit to be the target. 
        Effect: Return a number of slain models to the target with a combined Health characteristic equal to the number of bone-tithe points this unit has. Then, reset this units bone-tithe points to 0.`,
        when: [END_OF_TURN],
      },
      {
        name: `Collect the Tithe - Once Per Turn`,
        desc: `Declare: Pick the Gothizzar Harvester in this Regiment of Renown to use this ability, then pick a non-Hero Infantry unit (friendly or enemy) to be the target. 
        Effect: Roll a dice. If the roll equals or exceeds the targets Health characteristic, 1 model in the target unit is slain, then give the unit using this ability 1 bone-tithe point.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Soul Tax: Casting value of 7`,
        desc: `Declare: Pick the Mortisan Ossifector in this Regiment of Renown to cast this spell, then: 
        Pick a friendly unit, excluding units in this Regiment of Renown, to be the target. 
        Pick a unit in this Regiment of Renown to be the recipient. 
        The target and the recipient must be wholly within 12" of and visible to the caster. Then, make a casting roll of 2D6. 
        Effect: Until the start of your next turn: 
        The target has a maximum control score of 1. 
        Add 1 to hit rolls and wound rolls for the recipients combat attacks.`,
        when: [HERO_PHASE],
      },
      {
        name: `Rebuild on the March`,
        desc: `Declare: Pick the Gothizzar Harvester in this Regiment of Renown to use this ability if it has 6 bone-tithe points. Then, pick another unit in this Regiment of Renown that has been destroyed to be the target. 
        Effect: Reset the Gothizzar Harvesters bone-tithe points to 0. Then, set up a replacement of the target unit with half the number of models (rounding up) wholly within 9" of the Gothizzar Harvester and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
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
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn. Then, pick a point on the battlefield within 6" of this unit and pick all other units (friendly and enemy) within 3" of that point to be the targets. 
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
  'ROR: Bloodthirsty Shiver': {
    effects: [
      {
        name: `Hunt of the Bloodthirsty Shiver`,
        desc: `Effect: If both units in this Regiment of Renown are within each other's combat range, pick 1 of the following effects to apply until the start of your next turn:
        Evasive Approach: While both units in this Regiment of Renown are within each other's combat range, subtract 1 from hit rolls for attacks that target them.
        Ferocious Attack: While both units in this Regiment of Renown are within each other's combat range, their Allopex's Ferocious Bites have Crit (2 Hits).`,
        when: [HERO_PHASE],
      },
      {
        name: `Akhelian Allopex: Bloodthirsty Predators - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Allopexs Ferocious Bite while it is within 6" of any damaged enemy units or while it is within 6" of any enemy units that had any models slain in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Akhelian Allopex: Ensnared`,
        desc: `Declare: Pick an enemy Monster or Cavalry unit that had any damage points allocated to it this turn by this units shooting attacks to be the target. 
        Effect: Roll a dice. On a 3+, until the start of your next turn, subtract 1 from the number of dice rolled when making charge rolls for the target, to a minimum of 1.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: Namarti Shore Raid': {
    effects: [
      {
        name: `In the Shadow of the Ethersea`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown.
        Effect: Set up the units in this Regiment of Renown in reserve in the ethersea. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Launch the Attack`,
        desc: `Declare: Pick each unit in this Regiment of Renown that is in the ethersea.
        Effect: Set up each unit on the battlefield wholly within 7" of a battlefield edge, more than 9" from all enemy units and within the combat range of another unit in this Regiment of Renown. Then, each unit can immediately move D3". The units cannot move into combat during any part of that move.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Akhelian Thrallmaster: Akhelian Insights - Passive`,
        desc: `Effect: Melee weapons used by friendly Namarti units have Crit (2 Hits) while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Akhelian Thrallmaster: Thrallmaster - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Namarti Thralls unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Namarti Reavers: Strike on the Move - Passive`,
        desc: `Effect: This unit can use Shoot abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Namarti Thralls: Sweeping Blows - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: If any damage points inflicted by attacks made as part of that Fight ability are allocated to any enemy units, subtract 1 from wound rolls for attacks made by those enemy units for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Drekkis Privateers': {
    effects: [
      {
        name: `Cruising Into Position`,
        desc: `Declare: Pick all units in this Regiment of Renown that have not been deployed.
        Effect: Set up all of those units in reserve plying the winds. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `You Call it Yours; I call it Mine - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for shooting attacks made by units in this Regiment of Renown that target an enemy unit that is within 6" of an enemy unit that has an enhancement.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Daredevil Deployment`,
        desc: `Declare: Pick the Arkanaut Frigate in this Regiment of Renown to use this ability if it is plying the winds.
        Effect: Set up the Arkanaut Frigate anywhere on the battlefield more than 9" from all enemy units. Then, set up all other units in this Regiment of Renown wholly within 6" of the Arkanaut Frigate and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `The Good Ship Aesling - Passive`,
        desc: `Effect: The AELSLING has a Health characteristic of 17 instead of 15.`,
        when: [DURING_GAME],
      },
      {
        name: `Drekki Flynt: Captain of the Aelsling`,
        desc: `Declare: Pick an Arkanaut Frigate in this unit's regiment to be the target. This unit can use this ability while in reserve, and the target can also be in reserve.
        Effect: The target has the Aelsling keyword. Add 1 to the Damage characteristic of the target's Boarding Weapons for the rest of the battle.`,
        when: [DURING_SETUP],
      },
      {
        name: `Drekki Flynt: She Can Handle It! - Passive`,
        desc: `Effect: You can reroll run rolls and charge rolls for the Aelsling while it is wholly within 12" of this unit.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Drekki Flynt: Auxiliary Skyhook`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: 
        inflict an amount of mortal damage on the target equal to the roll.
        Subtract 1 from wound rolls made for the target's attacks for the rest of the turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Arkanaut Frigate: Assault Boat`,
        desc: `Declare: This unit cannot use this ability if it is in combat or has used a RUN or Retreat ability this turn. Pick a number of units up to its Transport Capacity that are wholly within 6" of it, that are not in combat and that have not charged this turn to be the targets. Then, make a charge roll of 2D6. 
        Effect: Remove the targets from the battlefield. Then, this unit must move a distance up to the value of the charge roll and must end the move within 1/2" of a visible enemy unit. Then, set up the targets wholly within this unit's combat range. If this unit is in combat, the targets can be set up in combat and have Strike-First for the rest of the turn. This unit and the targets have charged.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Arkanaut Frigate: Transport Capacity - Passive`,
        desc: `Effect: This unit can transport up to 2 friendly Kharadron Overlords Infantry units with a combined model count of up to 12 (see Battle Traits).`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Arkanaut Frigate: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Heavy Sky Ordnance is 3.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Arkanaut Frigate: Incoming! - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Arkanaut Frigate: Medium Bomb Racks`,
        desc: `Declare: Pick an enemy unit that does not have Fly and that this unit passed across this phase to be the target. 
        Effect: Roll 6 dice. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Arkanaut Company: Grizzled Buccaneers - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target.
        Effect: Roll a dice. On a 3+:
        This unit can immediately use a Shoot ability as if it were your shooting phase but all of its attacks must target the target enemy unit.
        For the rest of the phase, this unit's Privateer Heavy Weapons have Shoot in Combat.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Sky-Port Profiteers': {
    effects: [
      {
        name: `Command Ability: Supplies Don't Come Cheap`,
        desc: `Declare: Pick a visible terrain feature within 18" of the Codewright in this Regiment of Renown. Each friendly unit wholly within 3" of that terrain feature is a target.
        Effect: Roll a D3 for each target. On a 2+, Heal (X) the target, where X is an amount equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Command Ability: No One Rides for Free`,
        desc: `Declare: Pick a friendly Infantry unit with up to 10 models that is wholly within 9" of the Codewright in this Regiment of Renown and not in combat to be the target.
        Effect: Remove the target from the battlefield, then set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Command Ability: Long-Range Support`,
        desc: `Declare: Pick an objective within 15" of the Codewright in this Regiment of Renown and that no friendly units are contesting. Each unit contesting that objective is a target.
        Effect: Roll a dice for each target. If the roll exceeds the target's Health characteristic, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Codewright: Advisory Role - Once Per Turn`,
        desc: `Declare: Pick up to 3 visible friendly Skyfarers units to be the targets. 
        Effect: Roll a dice for each target. On a 3+, pick 1 of the following effects to apply to that target for the rest of the turn: 
        Seek New Prospects: Add 5 to the targets control score. 
        Dont Argue With the Wind: Add 1 to run rolls and charge rolls for the target. 
        Theres No Trading With Some People: The target can use a Retreat ability and still use Shoot abilities later in the turn. In addition, no mortal damage is inflicted on the target by Retreat abilities.`,
        when: [HERO_PHASE],
      },
      {
        name: `Specialist Grundstok Ammunition - Once Per Turn - Reaction: You declared a Shoot ability for this unit`,
        desc: `Declare: Pick Shieldbreaker ammunition or Thunderdrakk ammunition.
        Effect: If all of the attacks made for that Shoot ability target the same enemy unit, after that Shoot ability has been resolved, roll a dice and add the number of damage points allocated to the target by that Shoot ability. If the roll is higher than the target's Control characteristic, apply the following effect to the target based on the ammunition type picked:
        Shieldbreaker: Ward rolls cannot be made for the target until the start of your next turn.
        Thunderdrakk: That target has a maximum control score of 1 until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
