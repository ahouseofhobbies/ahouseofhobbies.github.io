import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_ANY_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  WARDS_PHASE,
} from 'types/phases'
import Spells from './spells'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

/*const BannerBearerEffect = {
  name: `Banner Bearer`,
  desc: `Add 1 to run rolls and charge rolls for this unit if it includes any Banner Bearers.`,
  when: [MOVEMENT_PHASE, CHARGE_PHASE],
  shared: true,
}
const IconBearerEffect = {
  name: `Icon Bearer`,
  desc: `If this unit receives the Rally command while it includes any Icon Bearers, when you roll a dice for a slain model from this unit, you can return 1 slain model to this unit on a 5+ instead of a 6.`,
  when: [START_OF_HERO_PHASE],
  shared: true,
}
const WarmasterEffect = {
  name: `Warmaster`,
  desc: `If this unit is included in a Hedonites of Slaanesh army, it is treated as a general even if it is not the model picked to be the army's general.`,
  when: [DURING_GAME],
  shared: true,
}
const SoulscentEffect = {
  name: `Soulscent`,
  desc: `At the start of the combat phase, roll a dice for each enemy unit within 1" of this unit. On a 4+, that unit suffers D3 mortal wounds. In addition, for each 4+, add 1 to the Attacks characteristic of this unit's melee weapons until the end of that phase. If that enemy unit has 10 or more models, both of the effects of this ability trigger on a 3+ instead.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true,
}
const DarkTemptationsEffect = {
  name: `Dark Temptations`,
  desc: `Once per turn, at the start of the combat phase, if any friendly units with this ability are on the battlefield, you can pick 1 enemy unit within 3" of a friendly unit with this ability. If you do so, your opponent must choose whether that unit resists or gives in to temptation. If it resists, that unit suffers D3 mortal wounds. If it gives in, you gain D3 depravity points.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true,
}
const DelicatePrecisionEffect = {
  name: `Delicate Precision`,
  desc: `If the unmodified wound roll for an attack made by this unit is 6, that attack causes a number of mortal wounds to the target equal to the weapon's Damage characteristic and the attack sequence ends (do not make a save roll).`,
  when: [COMBAT_PHASE],
  shared: true,
}
const SinistrousHandEffect = {
  name: `Sinistrous Hand`,
  desc: `If this unit is armed with a Sinistrous Hand, at the end of the combat phase, if any enemy models were slain by wounds caused by this unit's attacks in that phase, you can heal up to 3 wounds allocated to this unit. If any enemy Heroes were slain by wounds caused by this unit's attacks in that phase, you can heal up to 6 wounds allocated to this unit instead.`,
  when: [END_OF_COMBAT_PHASE],
  shared: true,
}
const LivingWhipEffect = {
  name: `Living Whip`,
  desc: `If this unit is armed with a Living Whip, at the start of the combat phase, you can pick 1 enemy unit within 6" of this unit and roll a dice. On a 2+, subtract 1 from the Attacks characteristic of that unit's melee weapons (to a minimum of 1) until the end of that phase. The same unit cannot be affected by this ability more than once per phase.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true,
}
const ShiningAegisEffect = {
  name: `Shining Aegis`,
  desc: `If this unit is armed with a Shining Aegis, it has a ward of 5+.`,
  when: [WARDS_PHASE],
  shared: true,
}
const LitheAndSwiftEffect = {
  name: `Lithe and Swift`,
  desc: `This unit can run and still charge later in the same turn.`,
  when: [MOVEMENT_PHASE, CHARGE_PHASE],
  shared: true,
}
const HornBlowerEffect = {
  name: `Musician`,
  desc: `You can reroll failed battleshock tests for this unit if it includes any Hornblowers.`,
  when: [BATTLESHOCK_PHASE],
  shared: true,
}
const HighTempterEffect = {
  name: `High Tempter`,
  desc: `1 model in this unit can be a High Tempter. Add 1 to the Attacks characteristic of that model's Blissbarb Bow.`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const MesmerisingLepidopteraEffect = {
  name: `Mesmerising Lepidoptera`,
  desc: `Subtract 1 from hit rolls for attacks that target this unit.`,
  when: [COMBAT_PHASE, SHOOTING_PHASE],
  shared: true,
}
const ImpossiblySwiftEffect = {
  name: `Impossibly Swift`,
  desc: `This model can retreat and still charge later in the same turn.`,
  when: [MOVEMENT_PHASE, CHARGE_PHASE],
  shared: true,
}
const ExcessOfBladesEffect = {
  name: `Excess of Blades`,
  desc: `After this unit finishes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a number of dice equal to the charge roll for that charge move. For each roll that is greater than that enemy unit's Save characteristic, that unit suffers 1 mortal wound.`,
  when: [CHARGE_PHASE],
  shared: true,
} */

// Unit Names
const Units = {
  'Keeper of Secrets': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Cacophonic Choir'])],
    }, */
    effects: [
     /* DarkTemptationsEffect,
      DelicatePrecisionEffect,
      LivingWhipEffect,
      ShiningAegisEffect,
      SinistrousHandEffect,
      GenericEffects.WizardTwoSpellsEffect, */
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Elegant Greatblade is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Supernatural Grace - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks that target this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Locus of Slaanesh`,
        desc: `Declare: Pick a friendly Hedonites of Slaanesh Daemon unit that started the battle with 3 or more models and has been destroyed to be the target. 
        Effect: Roll a dice. On a 4+, set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dark Temptations - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Pick 1 of the following effects:  
        Add 1 to hit rolls for the targets attacks for the rest of the turn.  
        Add 1 to save rolls for the target for the rest of the turn.  
        If the target is damaged, Heal (D3) the target. 
        Then, add 1 to the Damage characteristic of this units Elegant Greatblade for attacks that target that enemy unit for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cacophonic Choir: Casting value of 6`,
        desc: `Declare: Pick up to 3 visible enemy units within 6" of this unit to be the targets, then make a casting roll of 2D6. 
        Effect: Roll a dice for each target. If the roll exceeds the targets Control characteristic, inflict D3 mortal damage on it.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Syll'Esske, the Vengeful Allegiance": {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Subvert'])],
    }, */
    effects: [
     // GenericEffects.WizardOneSpellEffect,
     // WarmasterEffect,
      {
        name: `Deadly Symbiosis`,
        desc: `Declare: Pick a friendly non-Hero Sybarite unit and a friendly non-Hero Hedonites of Slaanesh Daemon unit to be the targets. Both units must be wholly within 12" of this unit. 
        Effect: For the rest of the turn, if either target uses the All-out Attack or All-out Defence command, the other target can also use the same command in the same phase and no command points are spent to use the command a second time.`,
        when: [COMBAT_PHASE],
      },
     // LitheAndSwiftEffect,
      {
        name: `The Vengeful Allegiance - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Subvert: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: The target cannot use commands for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Shalaxi Helbane': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Refine Senses'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Soulpiercer is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Supernatural Grace - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks that target this unit.`,
        when: [COMBAT_PHASE],
      },
    //  DelicatePrecisionEffect,
      {
        name: `Refine Senses: Casting value of 4`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: For the rest of the turn:  
        Add 1 to wound rolls for this units attacks that target enemy Heroes.  
        Add 1 to save rolls for attacks made by enemy Heroes that target this unit.`,
        when: [HERO_PHASE],
      },
     // LivingWhipEffect,
     // ShiningAegisEffect,
      {
        name: `Paramount Hunter - Once Per Turn - Reaction: Opponent declared a Charge ability for a Hero within 9" of this unit`,
        desc: `Effect: If this unit is not in combat, it can immediately move 2D6". It can pass through the combat ranges of enemy units but it must end that move within 1/2" of that Hero. If it does so, this unit has charged, and that Heros Charge ability has no effect.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Excess of Violence - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Hero Hedonites of Slaanesh unit wholly within 12" of this unit to be the target. 
        Effect: The target can use 2 Fight abilities this turn. After the first is used, however, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
     // GenericEffects.WizardTwoSpellsEffect,
    ],
  },
  'The Contorted Epitome': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Overwhelming Acquiescence'])],
    }, */
    effects: [
      {
        name: `Swallow Energy - Passive`,
        desc: `Effect: If you make a successful ward roll for this unit, add 1 to this units power level until the end of your next turn.`,
        when: [DURING_GAME],
      },
      {
        name: `Horrible Fascination - Reaction: Opponent declared a command or Retreat ability for a unit in combat with this unit`,
        desc: `Effect: Inflict D3 mortal damage on that enemy unit.`,
        when: [DURING_GAME],
      },
     // GenericEffects.WizardTwoSpellsEffect,
    ],
  },
  'Infernal Enrapturess, Herald of Slaanesh': {
    effects: [
      {
        name: `Discordant Disruption - Once Per Turn - Reaction: Opponent declared a Spell ability for a Wizard within 18" of this unit`,
        desc: `Effect: The casting roll for that spell must be re-rolled. If 2 or more dice in the re-rolled casting roll have the same value or if 1 of the dice is a 6, inflict D3 mortal damage on that Wizard after the effect of that spell has been resolved.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Masque': {
    effects: [
      {
        name: `Staff of Masks`,
        desc: `Effect: Pick 1 of the following effects:  
        Add 3 to the Attacks characteristic of this units Razor-edged Claws for the rest of the turn.  
        Heal (3) this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Endless Dance`,
        desc: `Effect: Remove this unit from the battlefield and set it up again on the battlefield more than 3" from all enemy units.`,
        when: [DURING_SETUP],
      },
     // LitheAndSwiftEffect,
    ],
  },
 /* 'Viceleader, Herald of Slaanesh': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Acquiescence'])],
    }, 
    effects: [
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Lightning Reflexes`,
        desc: `This unit has a ward of 5+.`,
        when: [WARDS_PHASE],
      },
     // LitheAndSwiftEffect,
      {
        name: `Lust for Violence`,
        desc: `In the combat phase, when you pick this unit to fight for the first time in that phase, you can pick 1 friendly Daemonette Host unit wholly within 12" of this unit that has not yet fought in that phase. This unit and that Daemonette Host unit can fight one after the other in the order of your choice.`,
        when: [COMBAT_PHASE],
      },
    ], 
  }, */
 /* 'Bladebringer, Herald on Hellflayer': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Acquiescence'])],
    }, 
    effects: [
      //SoulscentEffect,
      {
        name: `Slavering for Sensation`,
        desc: `While friendly Hellflayer units are wholly within 12" of any friendly units with this ability, their Soulscent ability causes D3 mortal wounds on a 3+ instead of 4+.`,
        when: [START_OF_COMBAT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SLAANESH, rule_sources.ERRATA_APRIL_2023],
      },
     // GenericEffects.WizardOneSpellEffect,
    ],
  }, */
 /* 'Bladebringer, Herald on Seeker Chariot': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Acquiescence'])],
    }, 
    effects: [
      //ImpossiblySwiftEffect,
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Mutilating Blades`,
        desc: `After this unit finishes a charge move, roll a dice for each enemy unit within 1" of this unit. On a 2+, that enemy unit suffers D3 mortal wounds.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Thrillseeker`,
        desc: `While friendly Seeker Chariot units are wholly within 12" of any friendly units with this ability, add 1 to the number of mortal wounds caused by their Mutilating Blades ability.`,
        when: [CHARGE_PHASE],
      },
    ],
  }, */
  Hellflayer: {
    effects: [
    //  SoulscentEffect
    {
      name: `Soulscent`,
      desc: `Declare: Pick up to 3 enemy units that this unit passed across this phase to be the targets. 
      Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If any models are slain by this ability, this unit has Ward (5+) for the rest of the turn.`,
      when: [MOVEMENT_PHASE],
    },
    {
      name: `Threshing Doom - Passive`,
      desc: `Effect: When this unit moves, it can pass through models in enemy Infantry units and can pass through the combat ranges of enemy Infantry units, but it cannot end a move in combat unless specified in the ability used.`,
      when: [MOVEMENT_PHASE],
    },
    
    ],
  },
  'Seeker Chariots': {
    effects: [
     // ImpossiblySwiftEffect,
      {
        name: `Mutilating Blades`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Bladebringer, Herald on Exalted Chariot': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Acquiescence'])],
    },*/
    effects: [
    //  ExcessOfBladesEffect,
      {
        name: `Soulgorgers - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly non-Unique Hedonites of Slaanesh War Machines wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn. This ability also affects Companion weapons.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Mutilating Blades`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
     // GenericEffects.WizardOneSpellEffect,
    ],
  },
  /*'Exalted Chariot': {
    effects: [
     // ExcessOfBladesEffect,
      {
        name: `Bitter Frenzy`,
        desc: `Roll a dice each time this unit receives a command from a friendly Bladebringer Exalted Chariot unit. On a 4+, add 1 to the Damage characteristic of this unit's Flensing Whips until the end of that turn.`,
        when: [DURING_GAME],
      },
    ],
  }, */
  Fiends: {
    effects: [
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Disruptive Song - Passive`,
        desc: `Effect: Subtract 1 from casting rolls and unbinding rolls for enemy Wizards while they are within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Soporific Musk - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 4+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Daemonettes: {
    effects: [
      {
        name: `Lithe and Swift - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Piercing Claws for the rest of the turn if this unit charged in the same turn`,
        when: [COMBAT_PHASE],
      },
    //  BannerBearerEffect,
    //  IconBearerEffect,
    //  HornBlowerEffect,
    //  LitheAndSwiftEffect,
    ],
  },
  Seekers: {
    effects: [
      {
        name: `Quicksilver Speed - Passive`,
        desc: `Effect: When making run rolls for this unit, if you roll a 1-3, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Hellstriders': {
    effects: [
     // BannerBearerEffect,
     // IconBearerEffect,
    //  HornBlowerEffect,
      {
        name: `Maiming Charge - Passive`,
        desc: `Effect: If this unit charged this turn, subtract 3 from the control scores of enemy Infantry units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Lord of Pain': {
    effects: [
      {
        name: `Share the Pain - Passive`,
        desc: `Effect: Each time you make a successful ward roll for this unit for a damage point inflicted by a combat attack, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Diciples in Torment - Passive`,
        desc: `Effect: While this unit is contesting an objective, add 1 to wound rolls for combat attacks made by friendly Sybarite units wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lord of Hubris': {
    effects: [
      {
        name: `Only the Best Will Suffice`,
        desc: `Declare: Pick a friendly Myrmidesh Painbringers or Symbaresh Twinsouls unit that is in combat and is wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, for the rest of the turn, each time a model in the target unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. For each 4+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `'You First, I Insist...'`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Your opponent must decide whether the target will accept or decline this units challenge. 
        Accept: The target has Strike-first for the rest of the turn. If this unit is in combat with the target when the target is picked to use a Fight ability, all of the targets attacks must target this unit. 
        Decline: The target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SLAANESH, rule_sources.ERRATA_APRIL_2023],
      },
    ],
  },
 /* 'The Dread Pageant': {
    effects: [
      {
        name: `Art of the Myrmidesh`,
        desc: `Vasillac the Gifted has a ward of 4+.`,
        when: [WARDS_PHASE],
      },
      {
        name: `Deadliest Procession`,
        desc: `Once per battle, at the end of the charge phase, you can say that this unit will draw on their combined experience. If you do so, the strike-first effect applies to this unit in the following combat phase.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ],
  }, */
  'Glutos Orscollion, Lord of Gluttony': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Crippling Famishment'])],
    }, */
    effects: [
      {
        name: `The Grand Gourmand - Passive`,
        desc: `Effect: A different effect applies to friendly Sybarite units each battle round while they are wholly within 12" of this unit, as shown below. The effects of all previous battle rounds also apply to those units while they are wholly within 12" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `The Grand Gourmand: Starter (Battle Round 1)`,
        desc: `Add 1 to run rolls and charge rolls for those units.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `The Grand Gourmand: Main (Battle Round 2)`,
        desc: `Add 3 to those units control scores.`,
        when: [END_OF_TURN],
      },
      {
        name: `The Grand Gourmand: Dessert (Battle Round 3)`,
        desc: `Add 1 to hit rolls for those units attacks.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `The Grand Gourmand: Digestif (Battle Round 4+)`,
        desc: `Add 1 to the Rend characteristic of those units melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crippling Punishment: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn:  
        Halve the targets Move characteristic.  
        Halve run rolls and charge rolls for the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Greatblade and Claws is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gorge on Excess`,
        desc: `Declare: Pick a friendly Sybarite unit wholly within 12" of this unit to be the target. 
        Effect: Heal (6) the target.`,
        when: [END_OF_TURN],
      },
     // GenericEffects.WizardTwoSpellsEffect,

      // Companion abilities
      // {
      //   name: `Painbringer Kyazu`,
      //   desc: `If the unmodified wound roll for an attack made with this model's Wailing Greatblade is 6, that attack inflicts 2 mortal wounds on the target and the attack sequence ends (do not make a save roll).`,
      //   when: [COMBAT_PHASE],
      // },
      // {
      //   name: `Lashmaster Vhyssk`,
      //   desc: `You can reroll charge rolls for this model.`,
      //   when: [CHARGE_PHASE],
      // },
      // {
      //   name: `Priestess Dolece`,
      //   desc: `In your hero phase, you can say that Dolece will call to Slaanesh to protect her master. If you do so, roll a dice. On a 1, nothing happens. On a 2+, until your next hero phase, you can roll a dice each time you allocate a wound or mortal wound to this model. On a 5+, that wound or mortal wound is negated.`,
      //   when: [HERO_PHASE],
      // },
    ],
  },
  'Sigvald, Prince of Slaanesh': {
    effects: [
      {
        name: `The Glorious Reborn - Passive`,
        desc: `Effect: This unit has Strike-first if it charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Powered by Vainglory - Passive`,
        desc: `Effect: If this unit charged this turn and the unmodified charge roll was 6+, the Attacks characteristic of this units Shardslash is equal to the unmodified charge roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shardslash - Passive`,
        desc: `Effect: Ward rolls cannot be made for damage points inflicted by this units combat attacks.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Shardspeaker of Slaanesh': {
  /*  mandatory: {
      spells: [keyPicker(Spells, ['Reflection Eternal'])],
    }, */
    effects: [
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Mist Lurkers - Passive`,
        desc: `Effect: If this unit successfully casts a spell, until the start of your next turn, it can attack with its Shadow- cloaked Claws.`,
        when: [HERO_PHASE],
      },
      {
        name: `Twisted Mirror - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 8" of this unit to be the target. 
        Effect: Roll a dice. On a 4+, subtract 1 from save rolls for the target until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Blissbarb Archers': {
    effects: [
     // HighTempterEffect,
      {
        name: `Blissbarb Homonculus - Passive`,
        desc: `Effect: This units Blissbrew Homonculus is a token. There is 1 Blissbrew Homonculus for every 10 models in this unit. 
        Subtract 1 from hit rolls for shooting attacks that target this unit while it has a Blissbrew Homonculus. If you make an unmodified save roll of 1 for this unit, remove the Blissbrew Homonculus from the battlefield after the Attack ability has been resolved (the damage point is still inflicted).`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Blissbarb Seekers': {
    effects: [
    //  HighTempterEffect,
      {
        name: `Glory Shots - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units ranged weapons for attacks that target units contesting an objective you do not control.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Slickblade Seekers': {
    effects: [
      {
        name: `Unrivalled Velocity - Passive`,
        desc: `Effect: You can re-roll charge rolls for this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Myrmidesh Painbringers': {
    effects: [
      {
        name: `Paragons of Battle - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons while it is contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Symbaresh Twinsouls': {
    effects: [
      {
        name: `Ego-driven Excess - Passive`,
        desc: `Effect: If this unit did not charge this turn, subtract 1 from the Attacks characteristic of melee weapons used by enemy units while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fiendish Reflexes - Passive`,
        desc: `Effect: If this unit did not charge this turn, it has Ward (5+) while it is in combat.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  'Slaangor Fiendbloods': {
    effects: [
      {
        name: `Slaughter At Any Cost - Enemy Shooting Phase`,
        desc: `Effect: If any damage points were allocated to this unit this turn, this unit can use the Normal Move ability as if it were your movement phase.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Dexcessa: {
    effects: [
      {
        name: `Fleeting Dance of Death - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Joyous Battle Fury`,
        desc: `Effect: If any enemy models were slain by this units combat attacks this turn, Heal (D3) this unit, then place a battle fury token next to it. 
        Add 1 to the Attacks characteristic of this units Impaling Talons for each battle fury token it has until the end of the next turn.`,
        when: [END_OF_TURN],
      },
     // MesmerisingLepidopteraEffect,
      {
        name: `Scion of Slaanesh - Passive`,
        desc: `Effect: While a friendly Synessa is on the battlefield, subtract 1 from hit rolls for attacks that target this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Redolence of Violence - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick up to D3 other friendly non-Hero Hedonites of Slaanesh Daemon units wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Synessa, The Voice of Slaanesh': {
   /* mandatory: {
      spells: [keyPicker(Spells, ['Whispers of Doubt'])],
    }, */
    effects: [
    /*  GenericEffects.WizardOneSpellEffect,
      WarmasterEffect,
      MesmerisingLepidopteraEffect, */
      {
        name: `Enthralling Splendour - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Voice of Slaanesh`,
        desc: `Declare: Pick a visible unit within 18" of this unit to be the target. 
        Effect: If the target is a friendly unit, add 5 to the targets control score for the rest of the turn. If the target is an enemy unit, subtract 5 from the targets control score for the rest of the turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Progeny of Slaanesh - Passive`,
        desc: `Effect: While a friendly Dexcessa is on the battlefield, add 1 to this units power level.`,
        when: [HERO_PHASE],
      },
      {
        name: `Whispers of Doubt: Casting value of 7`,
        desc: `Declare: Pick a visible enemy Hero within 18" of this unit to be the target. 
        Effect: Add 1 to hit rolls and wound rolls for combat attacks that target that enemy unit for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
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
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')