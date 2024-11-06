import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_ROUND,
  DURING_SETUP,
  END_OF_ANY_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_ROUND,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import rule_sources from './rule_sources'
import scenery from './scenery'
import spells from './spells'
import monstrous_rampages from './monstrous_rampages'
import { TItemDescriptions } from 'factions/factionTypes'

/* const BlessingsOfTheForestEffect = {
  name: `Blessings of the Forest`,
  desc: `Subtract 1 from hit rolls and wound rolls for attacks that target this unit if it is wholly within 9" of any overgrown or friendly AWAKENED WYLDWOODS.`,
  when: [SHOOTING_PHASE, COMBAT_PHASE],
  shared: true,
}

const TreeLordBaseEffects = [
  {
    name: `Spirit Paths`,
    desc: `At the start of your movement phase, if this unit is wholly within 6" of an overgrown terrain or Awakened Wyldwood in your army, it can walk the spirit paths instead of making a move in that phase. If it does so, remove this unit from the battlefield and set it up wholly within 6" of a different overgrown terrain or AWAKENED WYLDWOOD in your army and more than 9" from any enemy units.`,
    when: [START_OF_MOVEMENT_PHASE],
    shared: true,
  },
]

const BugRiderEffects = [
  {
    name: `Champion`,
    desc: `1 model in this unit can be a champion. Add 1 to the Attacks characteristic of that model's melee weapons, this has no effect on the mount.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
  {
    name: `Banner Bearer`,
    desc: `1 in every 3 models in this unit can be a Banner bearer. This unit can pile-in up to 6" instead of 3" while it includes any Standard Bearers.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
  {
    name: `Musician`,
    desc: `1 in every 3 models in this unit can be a Hornblower. When this unit receives the Rally command it can return 1 slain model for each roll of 5+ instead of only 6 while it includes any Hornblowers.`,
    when: [START_OF_HERO_PHASE],
    shared: true,
  },
  {
    name: `Thrumming with Life`,
    desc: `At the end of each phase, if any enemy models were slain by an attack made by this unit in that phase, you can heal all wounds allocated to this unit.`,
    when: [DURING_GAME, WOUND_ALLOCATION_PHASE],
    rule_sources: [rule_sources.BATTLETOME_SYLVANETH, rule_sources.ERRATA_OCTOBER_2022],
    shared: true,
  },
]
const WarmasterEffect = {
  name: `Warmaster`,
  desc: `If this unit is included in a Sylvaneth army, it is treated as a general even if it is not the model picked to be the army's general.`,
  when: [DURING_GAME],
  shared: true,
} */

const Units = {
  'Alarielle The Everqueen': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Metamorphosis'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Wardroths Great Antlers is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Lifebloom`,
        desc: `Effect: Pick 1 of the following effects:  
        Add 1 to casting rolls for this unit for the rest of the turn.  
        Heal (2D3) this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Metamorphosis: Casting value of 7  `,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Inflict 2D3 mortal damage on the target. If the target is destroyed by this spell, you can immediately resolve the effect of the Treesong spell as if this unit had successfully cast it.`,
        when: [HERO_PHASE],
      },
      {
        name: `Living Battering Ram - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy Infantry unit within 1" of it to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Rite of Life - Once per Turn`,
        desc: `Declare: Pick a friendly Sylvaneth unit that has been destroyed to be the target. This unit can use this ability if it has been destroyed, but if it does, this unit must be the target. 
        Effect: Roll a dice. On a 4+, set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 9" of a friendly Awakened Wyldwood and more than 9" from all enemy units. If the target was a Monster, allocate 6 damage points to the replacement unit (ward rolls cannot be made for those damage points).`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Drycha Hamadreth': {
   /* mandatory: { spells: [keyPicker(spells, ['Primal Terror'])] }, */
    effects: [
     // WarmasterEffect,
      {
        name: `Primal Terror - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+, halve the targets control score (rounding up) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mercurial Aspect - Once Per Turn`,
        desc: `Effect: Pick 1 of the following effects to apply to this unit for the rest of the turn: 
        Enraged: Add 10 to the Attacks characteristic of this units Flitterfuries. 
        Embittered: Add 10 to the Attacks characteristic of this units Swarm of Squirmlings.`,
        when: [HERO_PHASE],
      },
      {
        name: `Song of Spite: Casting value of 6`,
        desc: `Declare: Pick an enemy Infantry unit within 12" of the caster to be the target, then make a casting roll of 2D6. 
        Effect: The following effects apply for the rest of the turn: 
        Add 1 to hit rolls for combat attacks made by friendly Sylvaneth units that target that enemy unit. 
        In addition, add 1 to wound rolls for combat attacks made by friendly Spite-Revenants or The Twistweald units that target that enemy unit.`,
        when: [HERO_PHASE],
      },
    //  GenericEffects.WizardOneSpellEffect,
    ],
  },
  'Spirit of Durthu': {
  /*  mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Groundshaker'])],
    }, */
    effects: [
     // ...TreeLordBaseEffects,
      {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Guardian Sword is 3.`,
      when: [COMBAT_PHASE],
     },
      {
        name: `Titanic Duel - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wrathful Guardian - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units combat attacks while the target is within 3" of an Awakened Wyldwood.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Treelord Ancient': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Awakening the Wood'])],
      scenery: [keyPicker(scenery, ['Awakened Wyldwood'])],
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Groundshaker'])],
    }, */
    effects: [
     // ...TreeLordBaseEffects,
      {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Sweeping Blows is 3.`,
      when: [COMBAT_PHASE],
      },
      {
        name: `Groundshaker - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 4+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Awakening the Wood - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Awakened Wyldwood wholly within 18" of this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage equal to the roll on each enemy unit within the targets combat range.`,
        when: [HERO_PHASE],
      },
     // GenericEffects.WizardOneSpellEffect,
    ],
  },
  Treelord: {
    /*mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Groundshaker'])],
    },*/
    effects: [
     // ...TreeLordBaseEffects,
      {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Sweeping Blows is 3.`,
      when: [COMBAT_PHASE],
      },
      {
        name: `Lash and Tangle - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Entangling Grasp`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this units Strangleroots to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use Run or Retreat abilities until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Arch-Revenant': {
   /* mandatory: { command_abilities: [keyPicker(command_abilities, ['Call to Battle'])] }, */
    effects: [
      {
        name: `Crescent Shield`,
        desc: `Effect: Pick 1 of the following effects to apply to this unit for the rest of the turn: 
        Defensive Stance: This unit has Ward (4+). 
        Aggressive Stance: Add 1 to the Attacks characteristic of this units melee weapons, and add 1 to wound rolls for this units combat attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Champion of Kurnoth - Passive`,
        desc: `Effect: Add 1 to wound rolls for combat attacks made by friendly Kurnothi units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Lady of Vines': {
   /* mandatory: { spells: [keyPicker(spells, ['Aspect of the Everqueen'])] }, */
    effects: [
     // WarmasterEffect,
      {
        name: `Writhing Vines - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+, pick 1 of the following effects to apply for the rest of the turn: 
        Barrier: Subtract 1 from hit rolls for the targets attacks. 
        Ensnare: Add 1 to hit rolls for attacks made by friendly units that target that enemy unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Aspect of the Everqueen: Casting value of 7`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Until the start of your next turn, friendly Sylvaneth units have Ward (5+) while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Verdian Crown - Passive`,
        desc: `Effect: This unit counts as an Awakened Wyldwood for the purposes of the Endless Growth, Walk the Hidden Paths and Strike and Fade abilities.`,
        when: [DURING_GAME],
      },
     // GenericEffects.WizardTwoSpellsEffect,
    ],
  },
  Branchwych: {
    /*mandatory: { spells: [keyPicker(spells, ['Unleash Spites'])] }, */
    effects: [
      {
        name: `Fury of the Forest - Once Per Turn`,
        desc: `Declare: If this unit is wholly within 6" of any friendly Awakened Wyldwoods, pick a friendly Sylvaneth unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
     // GenericEffects.WizardOneSpellEffect,
    ],
  },
 /* Ylthari: {
   /* mandatory: { spells: [keyPicker(spells, ['The Reaping'])] }, 
    effects: [
      {
        name: `Vigour and Wrath`,
        desc: `You can reroll wound rolls of 1 for attacks made by this model.`,
        when: [COMBAT_PHASE],
      },
      GenericEffects.WizardOneSpellEffect,
    ],
  },
  "Ylthari's Guardians": {
    effects: [
      {
        name: `Martial Memories`,
        desc: `Once per turn, this unit can receive the All-out Attack or All-out Defence command without the command being issued and without a command point being spent.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Vigour and Wrath`,
        desc: `You can reroll wound rolls of 1 for attacks made by this unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },*/
  'Tree-Revenants': {
    effects: [
      {
        name: `Waypiper's Dance - Once Per Turn`,
        desc: `Effect: If this unit is not in combat, remove it from the battlefield, and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Spite-Revenants': {
    effects: [
      {
        name: `Unbridled Malice`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Kurnoth Hunter Greatswords': {
    effects: [
      {
        name: `Envoys of the Everqueen - Passive`,
        desc: `Effect: While this unit is contesting an objective, friendly Sylvaneth units contesting that objective have Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Trample Underfoot`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit that is in combat with this unit to be the target. 
        Effect: Roll a dice for each model in this unit. For each 3+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Kurnoth Hunter Scythes': {
    effects: [
      {
        name: `Envoys of the Everqueen - Passive`,
        desc: `Effect: While this unit is contesting an objective, friendly Sylvaneth units contesting that objective have Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Tanglethorn Thicket`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a dice for each model in this unit. For each 3+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Kurnoth Hunter Greatbows': {
    effects: [
      {
        name: `Envoys of the Everqueen - Passive`,
        desc: `Effect: While this unit is contesting an objective, friendly Sylvaneth units contesting that objective have Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Steady Aim`,
        desc: `Effect: This unit can ignore the Guarded Hero ability (Core Rules, 25.0) for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Dryads: {
    effects: [
      {
        name: `Blessings of the Forest - Passive`,
        desc: `Effect: Subtract 1 from hit rolls and wound rolls for attacks that target this unit while it is wholly within 6" of any friendly Awakened Wyldwoods.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
     // BlessingsOfTheForestEffect,
    ],
  },
 /* "Skaeth's Wild Hunt": {
   /* mandatory: { spells: [keyPicker(spells, ['Might of Kurnoth'])] }, 
    effects: [
      {
        name: `Fleet of Foot`,
        desc: `This unit can run and still shoot and/or charge later in the same turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Karthaen (Wizard)`,
        desc: `While Karthaen is still in the unit, this unit is considered a Wizard and can cast 1 spell in your hero phase and attempt to unbind 1 spell in the enemy hero phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Skaeth`,
        desc: `Skaeth has a Wounds characteristic of 2.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Qulathis the Exile': {
    effects: [
      {
        name: `Strike Unseen`,
        desc: `The cover modifier adds 2 to save rolls vs missile weapons for this model, instead of 1.`,
        when: [SAVES_PHASE],
      },
      {
        name: `Oaken Arrows`,
        desc: `If the unmodified hit roll for an attack made with Winter's Call is 6, inflict 1 mortal wound on the target in addition to normal damage.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Guardian of the Enga'la Weald`,
        desc: `ENGA'LA WEALD is a Glade keyword (this means that this model cannot gain another Glade keyword if it is included in a Sylvaneth army - see the Glades battle trait in Battletome: Sylvaneth).`,
        when: [DURING_GAME],
      },
    ],
  }, */
  'Warsong Revenant': {
   /* mandatory: { spells: [keyPicker(spells, ['Unleash Swarm of Spites'])] }, */
    effects: [
      {
        name: `Alarielle's Song - Passive`,
        desc: `Effect: Friendly Sylvaneth units have Ward (6+) while they are wholly within 12" of this unit. Subtract 1 from ward rolls for enemy units while they are within 12" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Unleash Swarm of Spites: Casting value of 7`,
        desc: `Declare: Pick a friendly Awakened Wyldwood wholly within 18" of this unit, pick up to 3 visible enemy units within 9" of that terrain feature to be the targets, then make a casting roll of 2D6. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wyldwood Revenants - Passive`,
        desc: `Effect: Add 1 to unbinding rolls and banishment rolls for this unit while it is wholly within 6" of any Awakened Wyldwoods.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Spiterider Lancers': {
    effects: [
     // ...BugRiderEffects,
     {
      name: `Forest Fighters - Passive`,
      desc: `Effect: This unit has a coherency range of 2".`,
      when: [DURING_GAME],
    }, 
     {
        name: `Descent of the Spiteriders`,
        desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, this unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Thrumming with Life`,
        desc: `Effect: Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Revenant Seekers': {
    effects: [
     // ...BugRiderEffects,
     {
      name: `Forest Fighters - Passive`,
      desc: `Effect: This unit has a coherency range of 2".`,
      when: [DURING_GAME],
    }, 
     {
        name: `Harvesters of the Lamentiri - Passive`,
        desc: `Effect: Each time a friendly unit wholly within 12" of any friendly Revenant Seekers units uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
      {
        name: `Thrumming with Life`,
        desc: `Effect: Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'The Twistweald': {
    effects: [
     // ...BugRiderEffects,
      {
        name: `Eruption of Thorned Vines`,
        desc: `Declare: If this unit is more than 6" from all other friendly Sylvaneth units, pick an enemy unit within 12" of this unit to be the target. 
        Effect: Subtract D3 from charge rolls for the target for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Gossamid Archers': {
    effects: [
      {
        name: `Forest Fighters - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      {
        name: `Zephyrspites - Once Per Turn`,
        desc: `Effect: If this unit used a Shoot ability this phase, this unit can move D6". It cannot move into combat during any part of that move.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Belthanos: {
   /* mandatory: { command_abilities: [keyPicker(command_abilities, ['The Unending Hunt'])] }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Carnelian Greatspites Razor-like Mandibles is 3.`,
        when: [COMBAT_PHASE],
        },
      {
        name: `Nature Aetheric - Once Per Battle`,
        desc: `Declare: Pick a terrain feature within 6" of this unit to be the target. 
        Effect: For the rest of the battle, the target gains the Place of Power terrain ability (Terrain 1.2) and counts as a friendly Awakened Wyldwood for the purposes of the Endless Growth, Walk the Hidden Paths and Strike and Fade abilities.`,
        when: [HERO_PHASE],
      },
      {
        name: `Rhythm of the Chase - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll, then you can remove this unit from the battlefield and set it up again on the battlefield within 1" of the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Kurnothi War-horn`,
        desc: `Declare: Pick up to 3 friendly Sylvaneth units to be the target. 
        Effect: Each target can use Charge abilities even if they used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
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
        Effect: You can re-roll charge rolls for the targets for the rest of the turn`,
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
    /* mandatory: {
       prayers: [keyPicker(prayers, ['Vessel of Sigmar'])],
     }, */
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
    /* mandatory: {
       prayers: [keyPicker(prayers, ['Vessel of Sigmar'])],
     }, */
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
        name: `Vanguard Palladors with Handaxes: Shocking Strikes - Passive`,
        desc: `Effect: If any damage points are allocated to an enemy unit by attacks made with this units Shock Handaxes, subtract 1 from wound rolls for that enemy units combat attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
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
        when: [COMBAT_PHASE]
      },
      {
        name: `Stormdrake Guard: Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
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
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
