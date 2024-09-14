import { keyPicker, tagAs } from 'factions/metatagger'
import rule_sources from 'factions/slaves_to_darkness/rule_sources'
// import { BookOfProfaneSecretsEffect, LordsOfTheSilverTowerEffect } from 'factions/slaves_to_darkness/units'
import { GenericEffects } from 'generic_rules'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_GAME,
  START_OF_HERO_PHASE,
  START_OF_TURN,
  TURN_ONE_MOVEMENT_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import Spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

/* export const TzaangorChampionEffect = {
  name: `Champion`,
  desc: `1 model in this unit can be an Aviarch. Add 1 to the Attacks characteristic of that model's Tzeentchian Spear.`,
  when: [COMBAT_PHASE],
  shared: true,
}
export const BabblingStreamOfSecretsEffect = {
  name: `Babbling Stream of Secrets`,
  desc: `In the combat phase, enemy units within 3" of any friendly units with this ability cannot receive commands.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const GuidedByThePastEffect = {
  name: `Guided by the Past`,
  desc: `You can add 1 to wound rolls for attacks made with melee weapons by friendly units with this ability if you are taking the second turn in the current battleround. This ability does not affect attacks made by a mount.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const SilveredPortalEffect = {
  name: `Silvered Portal`,
  desc: `After you have deployed this unit, when you would set up another friendly TZEENTCH unit that is not a MONSTER, you can say that it is in this Gaunt Summoner's Silver Tower as a reserve unit. Up to 2 units can be set up in reserve in this way. At the end of any of your movement phases, you can set up 1 or more of these units on the battlefield wholly within 9" of this unit and more than 9" from all enemy units. At the start of the fourth battle round, reserve units that are still in a Silver Tower are destroyed.`,
  when: [DURING_SETUP, END_OF_MOVEMENT_PHASE],
  rule_sources: [rule_sources.BATTLETOME_SLAVES_TO_DARKNESS, rule_sources.ERRATA_JANUARY_2023],
  shared: true,
}
const ArcaneTomeEffect = {
  name: `Arcane Tome`,
  desc: `Once per battle, you can reroll 1 casting roll for this unit. If you do so, add 3 to the new casting roll.`,
  when: [HERO_PHASE],
  shared: true,
}
const CapriciousWarpflameEffect = {
  name: `Capricious Warpflame`,
  desc: `Add 1 to hit rolls for attacks made by this unit's Warpflame, Billowing Warpflame or Flaming Maws weapon if the target unit has 5 or more models.`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const MagicTouchedEffect = {
  name: `Magic-touched`,
  desc: `If the first casting attempt made by this unit in your hero phase is successful and the spell is not unbound, this unit can attempt to cast 1 extra spell in that phase. If it does so and the casting roll for that extra spell is a double, the casting attempt automatically fails and this unit is slain. If this happens, you can choose for this unit to be transformed into a Spawn (pg 65) instead of being slain.`,
  when: [HERO_PHASE],
  shared: true,
}
const BeaconOfSorcery = {
  name: `Beacon of Sorcery`,
  desc: `Add 1 to casting rolls, dispelling rolls and unbinding rolls for friendly Tzeentch Wizards while they are wholly within 18" of this unit. In addition, this unit knows all of the spells from the Lore of Change.`,
  when: [HERO_PHASE],
  shared: true,
}
const MasteryOfMagicEffect = {
  name: `Mastery of Magic`,
  desc: `When you make a casting, unbinding or dispelling roll for this unit, you can change the lowest D6 to match the highest D6.`,
  when: [HERO_PHASE],
  shared: true,
}
const SpellThiefEffect = {
  name: `Spell-thief`,
  desc: `If this unit successfully dispels an endless spell, instead of dispelling it, you can say that it will steal it. If you do so, this unit gains control of that endless spell and counts as the Wizard that summoned it until its dispelled or another unit steals it.`,
  when: [HERO_PHASE],
  shared: true,
}
const WakeofFireEffect = {
  name: `Wake of Fire`,
  desc: `After this unit has made a normal move, pick 1 enemy unit and roll a dice if this unit passed across any models in that enemy unit. On a 2+, that enemy unit suffers D3 mortal wounds.`,
  when: [MOVEMENT_PHASE],
  shared: true,
} */

const Units = {
  // Daemons
  'Lord of Change': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Infernal Gateway'])],
    }, */
    effects: [
      //MasteryOfMagicEffect, SpellThiefEffect, BeaconOfSorcery, GenericEffects.WizardTwoSpellsEffect
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Curved Beak is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Daemons of Tzeentch - Once Per Turn`,
        desc: `Declare: Discard 1 destiny dice. Then, pick a friendly non-Hero non-Unique Disciples of Tzeentch Daemon unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 9" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Locus of Change - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks that target friendly Disciples of Tzeentch Daemon units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Tzeentch's Firestorm: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 18" of the caster to be the target, then make a casting roll of 2D6. 
        Effect: Roll 9 dice. For each 6, inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      ],
  },
  'Kairos Fateweaver': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Infernal Gateway'])],
    }, */
    effects: [
     // MasteryOfMagicEffect,
      //BeaconOfSorcery,
      //SpellThiefEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Curved Beaks is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mastery of Magic - Passive`,
        desc: `Effect: When you make a casting roll for this unit, you can change the lowest D6 to match the highest D6.`,
        when: [HERO_PHASE],
      },
      {
        name: `Beacon of Sorcery - Passive`,
        desc: `Effect: Add 1 to casting rolls and unbinding rolls for friendly Disciples of Tzeentch Wizards while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Arcane Suggestion: Casting value of 8`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Pick 1 of the following effects to apply to the target until the start of your next turn: 
        Its Hopeless: The target cannot use commands. 
        Drop Your Weapons: Subtract 1 from hit rolls and wound rolls for the targets attacks. 
        Kneel: Subtract 1 from save rolls for the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Oracle of Eternity - Once Per Battle - Reaction: You declared the "Tactical Gambit" ability`,
        desc: `Effect: Pick 1 of the following effects: 
        Read the Past: You can pick 1 battle tactic that you have already attempted. 
        Read the Future: You can pick 2 battle tactics that you have not yet attempted, but you can only complete 1 of them (even if you meet the conditions to complete both). The other does not count as having been attempted. If you do not complete either battle tactic, you can pick which does not count as having been attempted.`,
        when: [START_OF_TURN],
      },
    ],
  },
  'Gaunt Summoner': {
  /*  mandatory: {
      spells: [keyPicker(Spells, ['Infernal Flames'])],
    }, */
    effects: [
      //BookOfProfaneSecretsEffect,
      //LordsOfTheSilverTowerEffect,
     // SilveredPortalEffect,
      //GenericEffects.WizardTwoSpellsEffect,
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
    ],
  },
  'Gaunt Summoner on Disc of Tzeentch': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Infernal Flames'])],
    }, */
    effects: [
     // BookOfProfaneSecretsEffect,
     // LordsOfTheSilverTowerEffect,
    //  SilveredPortalEffect,
    //  GenericEffects.WizardTwoSpellsEffect,
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
  ],
  },
  'Fateskimmer, Herald of Tzeentch on Burning Chariot': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Red Fire of Tzeentch'])],
    }, */
    effects: [
    //  ArcaneTomeEffect, WakeofFireEffect, GenericEffects.WizardOneSpellEffect
    {
      name: `Wake of Fire`,
      desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
      Effect: Roll a dice. On a 3+, the target has the Burning keyword.`,
      when: [MOVEMENT_PHASE],
    },
    {
      name: `Fueling the Inferno`,
      desc: `Declare: Pick up to 3 Burning enemy units within 12" of this unit to be the targets. 
      Effect: Inflict 1 mortal damage on each target.`,
      when: [END_OF_TURN],
    },
  ],
  },
 /* 'Fluxmaster, Herald of Tzeentch on Disc': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Blue Fire of Tzeentch'])],
    }, 
    effects: [
    //  ArcaneTomeEffect, GenericEffects.WizardOneSpellEffect
    ],
  }, */
  'The Changeling': {
    effects: [
      {
        name: `Arch-Deceiver`,
        desc: `Effect: Remove this unit from the battlefield and set it up again on the battlefield more than 3" from all enemy units.`,
        when: [DURING_SETUP],
      },
      {
        name: `Discord and Confusion: Casting value of 6`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Subtract 1 from hit rolls for attacks that target this unit until the start of your next turn. 
        In addition, until the start of your next turn, roll a dice each time this unit is targeted by an ability that is not an Attack ability. On a 4+, another eligible unit must be targeted by that ability instead of this unit. If it is not possible to target another unit, that ability has no effect.`,
        when: [HERO_PHASE],
      },
      {
        name: `Puckish Misdirection - Enemy Hero Phase`,
        desc: `Declare: Pick an enemy unit within 9" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, halve the targets Move characteristic for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    //  GenericEffects.WizardTwoSpellsEffect,
    ],
  },
  'Changecaster, Herald of Tzeentch': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Pink Fire of Tzeentch'])],
    }, */
    effects: [
    //  ArcaneTomeEffect, GenericEffects.WizardOneSpellEffect
    {
      name: `Lurid Flames - Passive`,
      desc: `Effect: Add 1 to hit rolls for combat attacks made by friendly units that target a Burning enemy unit within 12" of this unit.`,
      when: [COMBAT_PHASE],
    },
    {
      name: `Daemonic Locus - Passive`,
      desc: `Effect: Each time a friendly Disciples of Tzeentch Daemon unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
      when: [HERO_PHASE],
    },  
  ],
  },
  /* 'The Blue Scribes': {
    mandatory: {
      spells: [keyPicker(Spells, ['Boon of Tzeentch'])],
    }, 
    effects: [
      {
        name: `Frantic Scribbling`,
        desc: `If this unit is part of a Disciples of Tzeentch army, each time an enemy Wizard within 9" of this unit successfully casts a spell, and that spell is not unbound, you can roll a dice. On a 3+, you receive 1 Fate Point.`,
        when: [HERO_PHASE],
      },
    //  GenericEffects.WizardOneSpellEffect,
      {
        name: `Scrolls of Sorcery`,
        desc: `This unit knows all of the spells from the Lore of Fate and Lore of Change. In addition, once in each of your hero phases, when this unit attempts to cast a spell, instead of making a casting roll, you can say that it will read from its scrolls of sorcery. If you do so, roll a dice. On a 2+, that spell is succesfully cast and cannot be unbound.`,
        when: [HERO_PHASE],
      },
    ], 
  }, */
  'Screamers of Tzeentch': {
    effects: [
      {
        name: `Slashing Fins`,
        desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
        Effect: Roll a dice for each model in this unit that passed across the target. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Burning Chariots of Tzeentch': {
    effects: [
     // CapriciousWarpflameEffect, WakeofFireEffect, GenericEffects.Elite
     {
      name: `Wake of Fire`,
      desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
      Effect: Roll a dice. On a 3+, the target has the Burning keyword.`,
      when: [MOVEMENT_PHASE],
    },
    ],
  },
  'Exalted Flamers of Tzeentch': {
    effects: [
    //  CapriciousWarpflameEffect, GenericEffects.Elite
    {
      name: `Capricious Wyrdflame`,
      desc: `Effect: Add 1 to wound rolls for this units shooting attacks that target a Burning enemy unit.`,
      when: [SHOOTING_PHASE],
    },  
    {
      name: `Transmogrifying Beacon - Once Per Turn`,
      desc: `Declare: Pick another friendly Exalted Flamer of Tzeentch or Flamers of Tzeentch unit within this units combat range to be the target. 
      Effect: Roll a dice. On a 3+, the targets ranged weapons have Crit (2 Hits) for the rest of the turn.`,
      when: [SHOOTING_PHASE],
    },
  ],
  },
  'Flamers of Tzeentch': {
    effects: [
      //CapriciousWarpflameEffect,
      {
        name: `Capricious Wyrdflame`,
        desc: `Effect: Add 1 to wound rolls for this units shooting attacks that target a Burning enemy unit.`,
        when: [SHOOTING_PHASE],
      }, 
    ],
  },
  'Pink Horrors': {
    effects: [
      {
        name: `Lunatic Demise - Passive`,
        desc: `Effect: Each time a model in this unit is slain, before removing the model from play, pick 1 of the following effects: 
        Split: Pick a friendly Blue Horrors and Brimstone Horrors unit within 12" of this unit. Return up to 2 slain Blue Horror models to that unit. 
        Petty Vengeance: Pick an enemy unit in combat with this unit to be the target and roll a dice. On a 4+, inflict 1 mortal damage on the target.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Blue and Brimstone Horrors': {
    effects: [
      {
        name: `Split Again - Passive`,
        desc: `Effect: Each time a Blue Horror model in this unit is slain, before removing the model from play, roll a dice. On a 3+, you can add 1 Brimstone Horrors model to this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  // Mortals
  'Magister on Disc of Tzeentch': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Bolt of Change'])],
    },*/
    effects: [
    //  MagicTouchedEffect, GenericEffects.WizardOneSpellEffect
    {
      name: `Magic-Touched`,
      desc: `Effect: If this unit successfully cast a spell this phase, for the rest of the turn:  
      Add 1 to this units power level.  
      If 2 or more dice in a casting roll for this unit have the same value, the spell fails, its effect is not resolved and D6 mortal damage is inflicted on this unit.`,
      when: [HERO_PHASE],
    },
    {
      name: `Master of the Blazing Skies - Passive`,
      desc: `Effect: While they are within this units combat range, friendly Disc of Tzeentch units can use Charge abilities even if they used a Run ability in the same turn..`,
      when: [CHARGE_PHASE],
    }, 
  ],
  },
  Magister: {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Bolt of Change'])],
    }, */
    effects: [
    //  MagicTouchedEffect, GenericEffects.WizardOneSpellEffect
    {
      name: `Magic-Touched`,
      desc: `Effect: If this unit successfully cast a spell this phase, for the rest of the turn:  
      Add 1 to this units power level.  
      If 2 or more dice in a casting roll for this unit have the same value, the spell fails, its effect is not resolved and D6 mortal damage is inflicted on this unit.`,
      when: [HERO_PHASE],
    },
    {
      name: `Web of Intrigue`,
      desc: `Declare: Pick an enemy unit within 12" of this unit to be the target. 
      Effect: Until the start of your next turn, each time your opponent declares a Move ability for the target, before reactions are used, you can pick a friendly Arcanite unit that is not in combat and is within 12" of the target. That friendly unit can move 3", but it cannot move into combat during any part of that move.`,
      when: [HERO_PHASE],
    },  
  ],
  },
  'Curseling, Eye of Tzeentch': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Glean Magic'])],
    }, */
    effects: [
      {
        name: `Infusion Arcanum: Casting value of 5`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Until the start of your next turn, add 1 to the Rend and Damage characteristics of this units Staff of Tzeentch and Blazing Sword.`,
        when: [HERO_PHASE],
      },
      {
        name: `Disrupter of the Arcane - Passive`,
        desc: `Effect: Each time this unit unbinds a spell, roll a dice. On a 4+, subtract 1 from the power level of the enemy Wizard that used that Spell ability, to a minimum of 0, until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    //  GenericEffects.WizardTwoSpellsEffect,
    ],
  },
/*  'The Eyes of the Nine': {
    effects: [
      {
        name: `Arcanite Shield`,
        desc: `Narvia and Turosh have a ward of 6+.`,
        when: [WARDS_PHASE],
      },
      {
        name: `Split`,
        desc: `If the Blue Horror model from this unit is slain, you can add 1 Brimstone Horrors model to that unit. The Brimstone Horrors model is armed with Magical Flames and Taloned Hands. Its Magical Flames have an Attacks characteristic of 1 instead of 2, and its Taloned Hands have an Attacks characteristic of 2 instead of 1.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Vortemis the All-seeing': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Sorcerous Insight'])],
    }, 
    effects: [
    //  MagicTouchedEffect, GenericEffects.WizardOneSpellEffect
    ],
  }, 
  Fatemaster: {
    effects: [
      {
        name: `Lord of Fate`,
        desc: `Add 1 to wound rolls for attacks made by friendly Disciples of Tzeentch units wholly within 9" of this unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Soulbound Shield`,
        desc: `Each time this unit is affected by a spell or the ability of an endless spell, you can roll a dice. If you do so, on a 4+, ignore the effects of that spell or that endless spell's ability on this unit.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Ogroid Thaumaturge': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Choking Tendrils'])],
    }, */
    effects: [
      {
        name: `Thaumaturge Rage - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units combat attacks while it is damaged.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Burning Fury - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by this units combat attacks to be the target. 
        Effect: The target has the Burning keyword.`,
        when: [COMBAT_PHASE],
      },
     // GenericEffects.WizardOneSpellEffect,
    ],
  },
  'Kairic Acolytes': {
  /*  mandatory: {
      spells: [keyPicker(Spells, ['Gestalt Sorcery'])],
    }, */
    effects: [
     // GenericEffects.ArcaniteShieldEffect,
      {
        name: `Vulcharc - Passive`,
        desc: `Effect: While this unit includes any models accompanied by Vulcharcs, subtract 1 from casting rolls for enemy Wizards within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gestalt Sorcery`,
        desc: `Effect: If this unit includes any models carrying a Scroll of Dark Arts, roll a dice. Add 1 to the roll for each other friendly Kairic Acolytes unit within this units combat range. On a 5+, add 1 to the Rend characteristic of this units Sorcerous Bolts for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Tzeentch Chaos Spawn': {
    effects: [
      {
        name: `A Twisted Fate`,
        desc: `Declare: This unit must be deployed using this ability. 
        Effect: Set up this unit in reserve as a potential fate. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Waves of Mutation - Passive`,
        desc: `Effect: Each friendly Chaos Spawn of Tzeentch unit can be replaced any number of times.`,
        when: [DURING_GAME],
      },
    ],
  },
  // Tzaangors
  'Tzaangor Shaman': {
  /*  mandatory: {
      spells: [keyPicker(Spells, ['Boon of Mutation'])],
    }, */
    effects: [
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Rite of Haste`,
        desc: `Declare: Pick a friendly Warflock unit that does not have Fly and is wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, for the rest of the turn, the target can use a Run ability and still use Shoot and/or Charge abilities later in the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mutagenic Sorcery`,
        desc: `Declare: Pick an enemy unit within 12" of this unit to be the enemy target. Then, pick a friendly Tzaangors unit in combat with that enemy unit to be the friendly target. 
        Effect: Roll a D3. On a 2+:  Inflict an amount of mortal damage on the enemy target equal to the roll.  Return a number of slain models to the friendly target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Tzaangor Skyfires': {
    effects: [
      {
        name: `Guided by the Future - Passive`,
        desc: `Effect: Ignore negative modifiers to hit rolls and wound rolls for this units shooting attacks.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Judgement from Afar`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it by this units attacks this phase to be the target. 
        Effect: Add 1 to hit rolls for combat attacks made by friendly Warflock units that target that enemy unit for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Tzaangor Enlightened': {
    effects: [
     // TzaangorChampionEffect, BabblingStreamOfSecretsEffect, GuidedByThePastEffect
     {
      name: `Babbling Stream of Secrets`,
      desc: `Declare: If this unit charged this phase, pick an enemy unit in combat with it to be the target. 
      Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
      when: [CHARGE_PHASE],
    },
    ],
  },
  'Tzaangor Enlightened on Discs of Tzeentch': {
    effects: [
    //  TzaangorChampionEffect, BabblingStreamOfSecretsEffect, GuidedByThePastEffect
    {
      name: `Guided by the Past - Passive`,
      desc: `Effect: This units Tzeentchian Spears and Vicious Beaks have Charge (+1 Damage) if you are the underdog or it was determined at the start of the battle round that you would take the second turn.`,
      when: [COMBAT_PHASE],
    },  
  ],
  },
  Tzaangors: {
    effects: [
      {
        name: `Screeching Raiders - Passive`,
        desc: `Effect: While this unit is wholly within enemy territory, its weapons have Crit (2 Hits).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Jade Obelisk': {
    effects: [
    //  TzaangorChampionEffect, BabblingStreamOfSecretsEffect, GuidedByThePastEffect
    {
      name: `Stone-Cursed Resolve - Passive`,
      desc: `Effect: Ignore all modifiers to save rolls for this unit (positive and negative).`,
      when: [DURING_GAME],
    },  
    {
      name: `Cast Down the Idol - Passive`,
      desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons for attacks that target Faction Terrain.`,
      when: [COMBAT_PHASE],
    }, 
  ],
  },
 /* 'Exalted Greater Demon of Tzeentch': {
    mandatory: {
      spells: [keyPicker(Spells, ['Infernal Gateway'])],
    },
    effects: [
      MasteryOfMagicEffect,
      SpellThiefEffect,
      GenericEffects.WizardTwoSpellsEffect,
      // Intentionally placed command ability here thanks to duplicate key names and different effects.
      {
        name: `Beacon of Sorcery`,
        desc: `You can use this command ability at the start of your hero phase. If you do so, pick 1 friendly model with this command ability. Until your next hero phase, you can add 1 to casting and unbinding rolls for friendly TZEENTCH DAEMON WIZARDS while they are wholly within 24" of that model. The same unit cannot benefit from this command ability more than once per turn.`,
        when: [START_OF_HERO_PHASE],
        command_ability: true,
      },
    ],
  }, */
  'ROR: Brand`s Oathbound': {
    effects: [
      {
        name: `Gunnar Brand: Carve a Path to Glory`,
        desc: `Declare: This unit can only use this ability if it is in combat with an enemy Hero. 
        Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn. This unit can only use the second Fight ability if it is in combat with an enemy Hero, and if it does so, it must pick an enemy Hero to be the target of all of its attacks.`,
        when: [COMBAT_PHASE],
      },  
      {
        name: `Gunnar Brand: Oath of Bloodshed - Once Per Battle`,
        desc: `Declare: This unit can only use this ability if any enemy Heroes were slain by this units combat attacks this turn. 
        Effect: Friendly Gunnars Oathsworn units have Ward (4+) for the rest of the battle.`,
        when: [END_OF_TURN],
      },
      {
        name: `Singri Brand: Swift as the Wind - Passive`,
        desc: `Effect: Only critical hits score successful hits for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },  
      {
        name: `Singri Brand: Uncanny Shot - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units Singris Warbow for attacks that target enemy units that are within 6" of a friendly Gunnar Brand.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Oathsworn Kin: Withering Death: Casting value of 5`,
        desc: `Declare: Pick a visible enemy Hero within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Inflict 1 mortal damage on the target and subtract 1 from the Attacks characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },  
      {
        name: `Oathsworn Kin: Broken Nadja - Passive`,
        desc: `Effect: While this units Broken Nadja is on the battlefield, it has Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Favour of the Gods - Once Per Turn`,
        desc: `Effect: If any enemy Heroes were slain this turn by the Gunnar Brand in this Regiment of Renown:  
        Heal (5) each unit in this Regiment of Renown.  
        Add 1 to the Attacks characteristic of melee weapons used by units in this Regiment of Renown for the rest of the battle.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: Hargax`s Pit-Beasts': {
    effects: [
      {
        name: `Ogroid Myrmidon: Myrmidon Rage - Passive`,
        desc: `Effect: While this unit is damaged, add 2 to the Attacks characteristic of its melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fomoroid Crusher: Cursed Destroyers - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 1" of this unit, then pick each other unit (friendly and enemy) within 3" of that terrain feature to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mindstealer Sphiranx: Dominate Mind - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 6" of this unit to be the target. 
        Effect: Roll a dice. If the roll exceeds the targets Control characteristic, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bestial Domination - Reaction: You declared a Fight ability for a unit in this Regiment of Renown`,
        desc: `Used By: The unit using that Fight ability. 
        Effect: Pick a unit in this Regiment of Renown that has not used a Fight ability this turn to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
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
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
