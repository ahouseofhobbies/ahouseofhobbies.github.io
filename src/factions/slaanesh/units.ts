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
  START_OF_TURN,
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
        name: `Command Ability - Locus of Slaanesh`,
        desc: `Declare: Pick a friendly Hedonites of Slaanesh Daemon unit that started the battle with 3 or more models and has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this unit and more than 9" from all enemy units.`,
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
  "Syll'Esske, the Vengeful Allegiance (SoG)": {
    effects: [
      {
        name: `Champions of the Gilded Throne - Passive`,
        desc: `Effect: When players are alternating picking units to use a Fight ability, when it is your turn to pick a unit, instead of picking 1 unit, you can pick a friendly non-Hero Hedonites of Slaanesh Daemon unit wholly within 18" of this unit and a friendly non-Hero Sybarite unit wholly within 18" of this unit. Resolve the second Fight ability immediately after the first.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Violent Offerings`,
        desc: `Effect: If any damage points were allocated to an enemy Wizard or Priest by this units combat attacks this turn and that enemy unit has been destroyed, add 1 to this units power level for the rest of the battle. This unit can be affected by this ability multiple times and the effects are cumulative.`,
        when: [END_OF_TURN],
      },
      {
        name: `Wandering Minds: Casting value of 6`,
        desc: `Declare: Pick up to 1 visible friendly non-Hero Sybarite Infantry unit and up to 1 visible friendly non-Hero Hedonites of Slaanesh Daemon Infantry unit to be the targets, then make a casting roll of 2D6. 
        Effect: If you picked a Sybarite target, subtract 1 from ward rolls for damage points inflicted by its combat attacks until the start of your next turn. If you picked a Daemon target, it has Ward (5+) until the start of your next turn.`,
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
        desc: `Effect: The casting roll for that spell must be rerolled. If 2 or more dice in the rerolled casting roll have the same value or if 1 of the dice is a 6, inflict D3 mortal damage on that Wizard after the effect of that spell has been resolved.`,
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
        desc: `Effect: Add 1 to the Attacks characteristic of this units Piercing Claws for the rest of the turn if this unit charged in the same turn.`,
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
  Hellstriders: {
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
        desc: `Effect: You can reroll charge rolls for this unit.`,
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
  'Slaangor Fiendbloods (SoG)': {
    effects: [
      {
        name: `Veiled Threat`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve waiting in ambush. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Bestial Onslaught`,
        desc: `Declare: Pick this unit if it is waiting in ambush. 
        Effect: Set up this unit on the battlefield wholly within 9" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Instinctive Advance - Once Per Phase - Reaction: Opponent declared a command for a unit within 12" of this unit`,
        desc: `Effect: This unit can move up to 3" immediately after that command has been resolved, unless that command is a reaction, in which case this unit can move after the ability that it was reacting to has been resolved. That move can pass through the combat ranges of enemy units, and can end in combat.`,
        when: [DURING_GAME],
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
        desc: `Declare: Pick a visible enemy Hero within 18" of this unit to be the target, then make a casting roll of 2D6. 
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
  'ROR: Lord Skaldiors Chosen': {
    effects: [
      {
        name: `Chaos Lord on Daemonic Mount: The Knights of Chaos - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Warriors of Chaos Cavalry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Chaos Knights: Impaling Charge - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to the Rend characteristic of its Cursed Lances.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Chaos Warriors: Bringers of Desolation - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Rune-Etched Weapons while it is contesting an objective you control.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ironclad Despoilers - Passive`,
        desc: `Effect: Add 1 to save rolls for units in this Regiment of Renown while they are contesting an objective you control. 
        Add 1 to wound rolls for units in this Regiment of Renown while they are contesting an objective you do not control.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Godmarked Ascendant': {
    effects: [
      {
        name: `Daemon Prince: Airborne Horror - Passive`,
        desc: `Effect: If this unit has Wings, it has a Move characteristic of 10" and has Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Daemon Prince: The Mounted Skulls of Fallen - Passive`,
        desc: `Effect: If this unit has a Trophy Rack, its Hellforged Weapons also have Anti-Hero (+1 Rend).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Daemon Prince: Immortal Champion`,
        desc: `Effect: Roll a dice. On a 4+, this unit has Strike-First for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Godmarked Legion - Passive`,
        desc: `Effect: The unit in this Regiment of Renown gains the 'Gifts of Chaos' ability and one of the following faction keywords that matches your army's faction.`,
        when: [DURING_GAME],
      },
      {
        name: `Gifts of Chaos - Passive`,
        desc: `Effect:
        If this unit has the Blades of Khorne keyword, add 1 to the Attacks characteristic of its Hellforged Weapons.
        If this unit has the Disciples of Tzeentch keyword, it has Wizard (1).
        If this unit has the Maggotkin of Nurgle keyword, it has Ward (5+).
        If this unit has the Hedonites of Slaanesh keyword, add 1 to run rolls and charge rolls for it.`,
        when: [DURING_GAME],
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
  'ROR: The Curse-Steel Battery': {
    effects: [
      {
        name: `Daemonsmith: Molten Mending - Once Per Turn`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut War Machine unit wholly within 6" of this unit to be the target. Add 6" to the range of this ability for each daemonic power point this unit has.
        Effect: Heal (D3+X) the target, where X is the number of daemonic power points this unit has.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tormentor Bombard: Ruinous Bombardment - Once Per Turn`,
        desc: `Declare: If this unit used a Shoot ability this turn and all of its attacks targeted the same enemy unit, that enemy unit is the target.
        Then, you can pick a number of enemy units within 6" of the target equal to the number of daemonic power points this unit has to be additional targets.
        Effect: Roll a dice for each target. On a 3+, that unit cannot use commands until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Tormentor Bombard: Calculated Trajectory - Passive`,
        desc: `Effect: Add 1 to hit rolls for this unit's shooting attacks that target an enemy unit with 5 or more models that is more than 12" from this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Deathshrieker Rocket Battery: Bungering Flames - Once Per Turn`,
        desc: `Effect: For the rest of the turn, the Damage characteristic of this unit's Hashu-Zharr Rockets is 5 if the target is a Monster or a War Machine.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Deathshrieker Rocket Battery: Watch Them Burn - Reaction: You declared a Shoot ability for this unit and all of its attacks targeted the same enemy unit`,
        desc: `Effect: Roll a number of dice equal to the number of daemonic power points this unit has for each other enemy unit within the combat range of the target of this unit's shooting attacks. For each 3+, inflict 1 mortal damage on the enemy unit being rolled for.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Reinforce Daemonsteel: Casting value of 7`,
        desc: `Declare: Pick the Daemonsmith in this Regiment of Renown to cast this spell, then make a casting roll of 2D6.
        Effect: Until the start of your next turn, ignore the first damage point allocated to each friendly Helsmiths of Hashut unit in each phase while they are wholly within 12" of the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Command Ability: Display of Total Power - Once Per Turn`,
        desc: `Declare: If neither War Machine unit in this Regiment of Renown used any Shoot abilities this turn, pick an enemy unit to be the target.
        Effect: For the rest of the turn:
        While that enemy unit is on the battlefield, the War Machine units in this Regiment of Renown can only pick that enemy unit to be the target of their shooting attacks.
        Each of those War Machine units counts as if it had 3 daemonic power points.
        The first time you use this ability, you can use it without any command points being spent.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: Seeker of the Dread Dirge': {
    effects: [
      {
        name: `Ashen Elder: Extract Power`,
        desc: `Effect: If this unit is contesting an objective, a Place of Power, or a terrain feature and that objective, Place of Power or terrain feature has a friendly desolation token, give this unit 1 ritual point.`,
        when: [END_OF_TURN],
      },
      {
        name: `Ashen Elder: Stoked Fanaticism - Passive`,
        desc: `Effect: Ignore the first damage point allocated to each friendly non-Hobgrot Helsmiths of Hashut unit each phase while it is wholly within 6" of this unit. Add 6" to the range of this ability for each daemonic power point this unit has.`,
        when: [DURING_GAME],
      },
      {
        name: `Dominator Engine with Bane Maces: Engines of Domination - Once Per Turn`,
        desc: `Effect: If this unit is in combat with any enemy Heroes, it can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the phase and can only be picked to use a second Fight ability if it is still in combat with any enemy Heroes.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dominator Engine with Bane Maces: Daemonic Strength - Passive`,
        desc: `Effect: For each daemonic power point this unit has:
        Add 1" to its Move characteristic.
        Add 1 to the Attacks characteristic of its weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dirge of Desolation: Chant value of 6`,
        desc: `Declare: Pick the Ashen Elder in this Regiment of Renown to chant this prayer, pick a terrain feature on the battlefield to be the target, then make a chanting roll of D6.
        Effect: Roll a D3 for each enemy unit contesting the target. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll. If the chanting roll was 12+, you can pick another terrain feature to be a second target.`,
        when: [HERO_PHASE],
      },
      {
        name: `All-Consuming Search`,
        desc: `Declare: Pick the Ashen Elder in this Regiment of Renown to use this ability. Then, pick an objective or Place of Power that they are contesting and that has not been picked to be the target of this ability this battle to be the target, if that objective or Place of Power has a friendly desolation token and has not been picked to be the target of this ability this battle to be the target.
        Effect: Roll 6 dice. For each 5+, give this unit 1 ritual point.`,
        when: [END_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
