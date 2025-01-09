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
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_TURN,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import Spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

/* const TerradonBaseEffects = [
  {
    name: `Deadly Cargo`,
    desc: `Once per battle, after this unit finishes a normal move or run, you can pick 1 enemy unit and roll a dice if this unit passed across any models in that enemy unit. On a 4+, that enemy unit suffers D3 mortal wounds. In addition, if any mortal wounds caused by this ability are allocated to that enemy unit, halve the Move characteristic of that enemy unit until your next hero phase.`,
    when: [MOVEMENT_PHASE],
    shared: true,
  },
  {
    name: `Attack from On High`,
    desc: `Subtract 1 from hit rolls for attacks made with missile weapons that target this unit.`,
    when: [SHOOTING_PHASE],
    shared: true,
  },
]
const RipperdactylBaseEffects = [
  {
    name: `Blot Toad`,
    desc: `You receive 1 Blot Toad marker for each RIPPERDACTYL CHIEF in your army. After the players have received their starting command points but before the start of the first turn, you can pick 1 enemy unit to have a Blot Toad for each Blot Toad marker you have. Place a Blot Toad marker next to that enemy unit.

  Designer's Note: Blot Toads are not units; they are markers that are used to keep track of which enemy units have Blot Toads.`,
    when: [END_OF_SETUP],
    shared: true,
  },
  {
    name: `Toad Rage`,
    desc: `In the combat phase, add 1 to hit rolls and wound rolls for attacks made with this unit's Tearing Jaws that target an enemy unit that has a Blot Toad.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
  {
    name: `Swooping Dive`,
    desc: `Subtract 1 from hit rolls from attacks made with missile weapons that target this unit. In addition, if this unit is targeted by attacks made by an enemy unit that received the Unleash Hell command in that phase, those attacks only score a hit on an unmodified hit roll of 6.`,
    when: [SHOOTING_PHASE, CHARGE_PHASE],
    shared: true,
  },
]
const KroxigorBaseEffects = [
  {
    name: `Skink Guidance`,
    desc: `Unit champions of SKINK units can issue commands to this unit if this unit is wholly within 12" of the SKINK unit.`,
    when: [DURING_GAME],
    shared: true,
  },
  {
    name: `Vice-like Jaws`,
    desc: `Each time this unit fights, after all of its attacks have been resolved, pick 1 enemy unit within 1" of this unit and roll 3 dice for each model in this unit within 1" of that unit. These dice rolls are referred to as bite rolls. For each bite roll of 6+, that enemy unit suffers 1 mortal wound.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
]
const MightySaurusJawsEffect = {
  name: `Mighty Saurus Jaws`,
  desc: `Each time this unit fights, after all of its attacks have been resolved, pick 1 enemy unit within 1" of this unit and roll 3 dice. These dice rolls are referred to as bite rolls. For each bite roll of 6+, that enemy unit suffers 1 mortal wound.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const SelflessProtectorsEffect = {
  name: `Selfless Protectors`,
  desc: `Before you allocate a wound or mortal wound to a friendly SERAPHON HERO that is not a MONSTER, or instead of making a ward roll for a wound or mortal wound that would be allocated to a friendly SERAPHON HERO that is not a MONSTER, if this unit is within 3" of that friendly SERAPHON HERO, you can roll a dice. On a 1-2, that wound or mortal wound is allocated to that SERAPHON HERO as normal. On a 3+, that wound or mortal wound is allocated to this unit instead.`,
  when: [WOUND_ALLOCATION_PHASE, WARDS_PHASE],
  shared: true,
}
const UnstoppableStampedeEffect = {
  name: `Unstoppable Stampede`,
  desc: `After this unit finishes a charge move, roll a dice for each enemy unit within 1" of this unit. On a 2+, that enemy unit suffers D3 mortal wounds.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const SteadfastMajestyEffect = {
  name: `Steadfast Majesty`,
  desc: `Add 3 to the Bravery characteristic of friendly SKINK units that do not have the STEGADON keyword while they are wholly within 12" of any friendly units with this ability.`,
  when: [BATTLESHOCK_PHASE],
  shared: true,
}
const ArmouredCrestEffect = {
  name: `Armoured Crest`,
  desc: `At the start of the combat phase, you can pick 1 enemy unit within 3" of this unit that has up to 5 models. If you do so, until the end of that phase, add 1 to save rolls for attacks made by that unit that target this unit.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true,
}
const CarnosaurBaseEffects = [
  {
    name: `Blood Frenzy`,
    desc: `If any enemy models are slain by wounds caused by this unit's attacks, for the rest of the battle, this unit is blood-frenzied. Add 1 to wound rolls for attacks made by this unit's mount while it is blood-frenzied.`,
    when: [WOUND_ALLOCATION_PHASE, COMBAT_PHASE],
    shared: true,
  },
  GenericEffects.Terror,
]
const ArcaneVassalEffect = {
  name: `Arcane Vassal`,
  desc: `Once per phase, when this unit attempts to cast a spell, before making the casting roll, you can pick either 1 friendly Skink Wizard within 12" of this unit or 1 friendly Oracle anywhere on the battlefield. If you do so and the spell is successfully cast and not unbound, you must measure the range and visibility for that spell from that SKINK WIZARD or ORACLE.`,
  when: [HERO_PHASE],
  shared: true,
}
const SunfireThrowersEffect = {
  name: `Sunfire Throwers`,
  desc: `Do not use the attack sequence for an attack made with Sunfire Throwers. Instead, roll a number of dice equal to the number of models in the target unit that are within range of the attack. For each 5+, the target unit suffers 1 mortal wound.`,
  when: [SHOOTING_PHASE],
  shared: true,
}

const StegadonBaseEffects = [ArmouredCrestEffect, SteadfastMajestyEffect, UnstoppableStampedeEffect]

const IconBearersEffect = {
  name: `Standard Bearer`,
  desc: `Add 1 to the Bravery characteristic of this unit if it includes any Icon Bearers.`,
  when: [BATTLESHOCK_PHASE],
  shared: true,
}
const WardrummersEffect = {
  name: `Musician`,
  desc: `Add 1 to run rolls and charge rolls for this unit if it includes any War-drummers.`,
  when: [MOVEMENT_PHASE, CHARGE_PHASE],
  shared: true,
}
const StarbucklersEffect = {
  name: `Shield`,
  desc: `If this unit is armed with Star-bucklers, it has a Save characteristic of 5+ instead of 6+.`,
  when: [SAVES_PHASE],
  shared: true,
}
const ChameleonAmbushEffects = [
  {
    name: `Chameleon Ambush`,
    desc: `During deployment, instead of setting up this unit on the battlefield, you can place it to one side and say that it is hiding as a reserve unit. If you do so, at the end of your movement phase, you can set up this unit on the battlefield more than 9" from all enemy units.`,
    when: [DURING_SETUP, END_OF_MOVEMENT_PHASE],
    shared: true,
  },
  {
    name: `Chameleon Ambush`,
    desc: `If this unit is on the battlefield at the end of your movement phase, you can remove it from the battlefield and say that it is hiding as a reserve unit. If you do so, at the end of any of your subsequent movement phases, you can set up this unit on the battlefield more than 9" from all enemy units.`,
    when: [END_OF_MOVEMENT_PHASE],
    shared: true,
  },
]
const HornblowersEffect = {
  name: `Musician`,
  desc: `Add 1 to run rolls and charge rolls for this unit if it includes any Hornblowers.`,
  when: [CHARGE_PHASE, MOVEMENT_PHASE],
  shared: true,
}
const HuntersOfHuanchiBaseEffects = [
  HornblowersEffect,
  ...ChameleonAmbushEffects,
  {
    name: `Perfect Mimicry`,
    desc: `This unit is not visible to enemy units that are more than 12" away or while it is in cover.`,
    when: [DURING_GAME],
    shared: true,
  },
]
const StarVenomEffect = {
  name: `Star-venom`,
  desc: `If the unmodified hit roll for an attack made with a Dartpipe is 6, the target suffers 1 mortal wound and the attack sequence ends (do not make a wound roll or save roll).`,
  when: [SHOOTING_PHASE],
  shared: true,
} */

const Units = {
  'Lord Kroak': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Celestial Deliverance'])],
    }, */
    effects: [
      //ArcaneVassalEffect,
      {
        name: `Supreme Master of Order - Passive`,
        desc: `Effect: Add 2 to casting rolls, and add 1 to unbinding rolls and banishment rolls for this unit. In addition, this unit can use an Unbind ability if an enemy Wizard anywhere on the battlefield uses a Spell ability instead of an enemy Wizard within 30" of this unit, and when using the Banish Manifestation ability, this unit can pick a manifestation anywhere on the battlefield instead of within 30" of it.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dead for Innumerable Ages`,
        desc: `Effect: This unit must use this ability each turn while it is damaged. Roll 3D6 and add the number of damage points this unit has to the roll. On a 20+, this unit is destroyed. Otherwise, Heal (18) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Arcane Vassal - Once Per Turn`,
        desc: `Declare: Pick a friendly Skink Wizard wholly within 18" of this unit to be the target. 
        Effect: Measure the range and visibility of the next Spell ability used by this unit this phase from the target instead of from this unit. The target is treated as the caster for the purpose of other abilities or spell effects, such as Unbind or The Earth Trembles.`,
        when: [HERO_PHASE],
      },
      {
        name: `Celestial Deliverance: Casting value of 7 (MULTIPLE)`,
        desc: `Declare: This unit can cast this spell more than once per phase. Pick up to 3 dierent visible enemy units within 18" of this unit to be the targets, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on each target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Slann Starmaster': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Celestial Equilibrium', 'Shield of the Old Ones'])],
      command_abilities: [keyPicker(CommandAbilities, ['Gift from the Heavens'])],
    }, */
    effects: [
      {
        name: `Masters of Order - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit. In addition, this unit can use an Unbind ability if an enemy Wizard anywhere on the battlefield uses a Spell ability instead of an enemy Wizard within 30" of this unit, and when using the Banish Manifestation ability, this unit can pick a manifestation anywhere on the battlefield instead of within 30" of it.`,
        when: [HERO_PHASE],
      },
      // ArcaneVassalEffect,
      {
        name: `Celestial Equilibrium: Casting value of 6`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: For the rest of the turn, add 1 to casting rolls made for other friendly Seraphon Wizards while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Arcane Vassal - Once Per Turn`,
        desc: `Declare: Pick a friendly Skink Wizard wholly within 18" of this unit to be the target. 
        Effect: Measure the range and visibility of the next Spell ability used by this unit this phase from the target instead of from this unit. The target is treated as the caster for the purpose of other abilities or spell effects, such as Unbind or The Earth Trembles.`,
        when: [HERO_PHASE],
      },
      {
        name: `Celestial Reinforcements - Once Per Turn`,
        desc: `Declare: Pick a friendly Seraphon unit that started the battle with 3 or more models and that has been destroyed to be the target. 
        Effect: Roll a dice. On a 4+, set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Saurus Oldblood on Carnosaur': {
    effects: [
      //  ...CarnosaurBaseEffects,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Carnosaurs Massive Jaws is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Spearhead of the Charge - Passive`,
        desc: `Effect: If this unit charged this turn, add 1 to charge rolls for friendly Saurus units while they are wholly within 18" of this unit for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Terror - Passive`,
        desc: `Effect: Subtract 2 from the control scores of enemy units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Blood Frenzy - Once Per Turn`,
        desc: `Effect: If this unit is in combat with any damaged enemy Monsters, roll a dice. On a 3+, this unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Saurus Oldblood': {
    effects: [
      {
        name: `Predatory Exemplar - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Saurus Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wrath of the Seraphon - Once Per Battle`,
        desc: `Effect: For the rest of the turn, add 1 to wound rolls for combat attacks made by friendly Saurus Infantry units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      // MightySaurusJawsEffect,
    ],
  },
  'Saurus Scar-Veteran on Aggradon': {
    effects: [
      {
        name: `Primal Rage`,
        desc: `Effect: This unit must use this ability each turn. 
        If this unit used any Fight abilities this turn, place a rage token next to it, to a maximum of 3. If this unit did not use any Fight abilities this turn, remove all rage tokens it has. 
        Add 1 to the Attacks characteristic of this units Companion weapons for each rage token it has until the end of the next turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Alpha Roar - Once Per Battle`,
        desc: `Effect: Place a rage token next to this unit and each friendly Aggradon Lancers unit wholly within 12" of this unit, to a maximum of 3 per unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  // 'Saurus Eternity Warden': {
  //   mandatory: {
  //     command_abilities: [keyPicker(CommandAbilities, ['Prime Guardian'])],
  //   },
  //   effects: [ColdFerocityEffect, SelflessProtectorsEffect],
  // },
  // 'Saurus Sunblood': {
  //   mandatory: {
  //     command_abilities: [keyPicker(CommandAbilities, ['Scent of Weakness'])],
  //   },
  //   effects: [
  //     {
  //       name: `Primal Rage`,
  //       desc: `If the unmodified hit roll for an attack made by this model is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit. In addition, if the unmodified wound roll for an attack made by this model is 6, that attack inflicts 1 mortal wound on the target in addition to any normal damage.`,
  //       when: [COMBAT_PHASE],
  //     },
  //   ],
  // },
  'Saurus Scar-Veteran on Carnosaur': {
    effects: [
      // ...CarnosaurBaseEffects,
      {
        name: `Terror - Passive`,
        desc: `Effect: Subtract 2 from the control scores of enemy units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Maim and Tear - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the number of damage points the target has. For each 5+, inflict 1 mortal damage on the target.`,
        when: [END_OF_TURN],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Carnosaurs Massive Jaws is 2.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Saurus Astrolith Bearer': {
    effects: [
      {
        name: `Celestial Conduit - Reaction: You declared a Spell ability for a friendly Seraphon Wizard wholly within 12" of this unit`,
        desc: `Effect: If that spell is successfully cast, for the rest of the turn, add 3 to the control scores of friendly Seraphon units wholly within 12" of this unit for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Revivifying Energies - Passive`,
        desc: `Effect: Friendly Seraphon Infantry units have Ward (6+) while they are wholly within 12" of this unit. If a unit already has Ward (6+), it has Ward (5+) instead.`,
        when: [DURING_GAME],
      },
      // MightySaurusJawsEffect,
    ],
  },
  // 'Skink Priest': {
  //   mandatory: {
  //     command_abilities: [keyPicker(CommandAbilities, ['Herald of the Old Ones'])],
  //   },
  //   effects: [
  //     {
  //       name: `Star-stone Staff`,
  //       desc: `In your hero phase, you can pick 1 friendly SKINK unit wholly within 12" of this model and roll a D6. On a 3+, until your next hero phase, that unit can run and still shoot and/or charge in the same turn, and you can add 1 to save rolls for attacks that target that unit. A unit cannot benefit from this ability more than once per phase.`,
  //       when: [HERO_PHASE],
  //     },
  //     {
  //       name: `Star-stone Staff`,
  //       desc: `If active, until your next hero phase, that unit can run and still shoot and/or charge in the same turn.`,
  //       when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
  //     },
  //     {
  //       name: `Star-stone Staff`,
  //       desc: `If active, until your next hero phase, you can add 1 to save rolls for attacks that target that unit.`,
  //       when: [SAVES_PHASE],
  //     },
  //   ],
  // },
  'Skink Starseer': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Celestial Doom'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Scry the Stars - Once Per Battle`,
        desc: `Effect: Roll a number of dice equal to the current battle round number. For each 3+, pick a friendly Seraphon unit wholly within 18" of this unit. That unit has Ward (5+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Celestial Doom: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 18" to be the target, then make a casting roll of 2D6. 
        Effect: Ward rolls cannot be made for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Skink Starpriest': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Blazing Starlight'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Serpent Staff`,
        desc: `Declare: Pick a visible friendly Seraphon unit wholly within 18" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, the targets melee weapons have Crit (Auto-wound) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Engine of the Gods': {
    effects: [
      //  ...StegadonBaseEffects,
      {
        name: `Cosmic Engine`,
        desc: `Declare: Pick if this unit will harness or reserve the power of its cosmic engine. 
        Effect: If it will reserve the power, place a cosmic power token next to this unit. 
        If it will harness the power, roll a dice and add the number of cosmic power tokens this unit has to the roll. Then, remove all cosmic power tokens this unit has and pick 1 of the following effects (if possible). 
        Healing Light: On a 3+, you can Heal (D3) all friendly Seraphon units wholly within 12" of this unit. 
        Starlight Summons: On a 5+, you can pick up to 3 friendly Seraphon units wholly within 12" of this unit. Return 1 slain model to each unit. 
        Time Slows: On a 6+, you can pick up to 3 friendly Seraphon units wholly within 12" of this unit. Those units have Strike-first for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stegadon's Horns and Jaws is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crest of Horns - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: Inflict an amount of mortal damage on the target equal to the roll. Add 1 to save rolls for attacks made by that enemy unit that target this unit for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Saurus Warriors': {
    effects: [
      {
        name: `Ordered Cohort - Passive`,
        desc: `Effect: Add 1 to save rolls for this unit while each model in this unit is contesting an objective you control.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      //  IconBearersEffect,
      // WardrummersEffect,
    ],
  },
  'Saurus Guard': {
    effects: [
      {
        name: `Selfless Protectors - Passive`,
        desc: `Effect: While any friendly Slann units are within this units combat range, both this unit and those Slann units have Ward (5+).`,
        when: [DURING_GAME],
      },
      // IconBearersEffect,
      // WardrummersEffect,
      // SelflessProtectorsEffect,
    ],
  },
  // 'Saurus Knights': {
  //   effects: [
  //     {
  //       name: `Saurus Knight Alpha`,
  //       desc: `1 model in this unit can be a Saurus Knight Alpha. Add 1 to the Attacks characteristic of that model's Celestite Blade or Celestite Warspear.`,
  //       when: [COMBAT_PHASE],
  //     },
  //     CelestiteWarspearEffect,
  //     IconBearersEffect,
  //     WardrummersEffect,
  //   ],
  // },
  Skinks: {
    effects: [
      {
        name: `Swift and Nimble - Passive`,
        desc: `Effect: When this unit uses the Redeploy command, when determining the distance this unit can move, you can roll 2 dice instead of 1 and pick either result.`,
        when: [MOVEMENT_PHASE],
      },
      // StarbucklersEffect,
    ],
  },
  // 'Chameleon Skinks': {
  //   effects: [
  //     ...ChameleonAmbushEffects,
  //     {
  //       name: `Perfect Mimicry`,
  //       desc: `Models in this unit that are within 1" of a terrain feature have a ward of 4+`,
  //       when: [WARDS_PHASE],
  //     },
  //     StarVenomEffect,
  //   ],
  // },
  'Terradon Chief': {
    effects: [
      // ...TerradonBaseEffects,
      {
        name: `Chief's Deadly Cargo`,
        desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
        Effect: Roll a dice and add 2 to the roll if this unit is within the combat ranges of any friendly Terradon Riders units. On a 5+: 
        Inflict D3 mortal damage on the target. 
        If any damage points are allocated by this ability and the target does not have Fly, the target cannot use Run abilities until the start of your next turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Attack From on High - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Terradon Riders': {
    effects: [
      {
        name: `Attack From on High - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Deadly Cargo`,
        desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
        Effect: Roll a dice and add 2 to the roll if this unit is within the combat ranges of any friendly Terradon Chief units. On a 5+: 
        Inflict 1 mortal damage on the target. 
        If any damage points are allocated by this ability and the target does not have Fly, the target cannot use Run abilities until the start of your next turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Dispersed Formation - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      //  ...TerradonBaseEffects,
    ],
  },
  'Ripperdactyl Chief': {
    effects: [
      //  ...RipperdactylBaseEffects,
      {
        name: `Ripperdactyl Assault - Once Per Battle`,
        desc: `Effect: Add 1 to the Attacks characteristic of Moonstone Warspears used by friendly Ripperdactyl Riders units wholly within 12" of this unit for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Blot Toad - Once Per Battle`,
        desc: `Declare: You receive 1 Blot Toad token for each Ripperdactyl Chief or Ripperdactyl Riders unit in your army, to a maximum of 3 tokens. Pick a number of enemy units equal to the number of Blot Toads you have to be the targets. 
        Effect: Place a Blot Toad next to each target.`,
        when: [DURING_SETUP],
      },
      {
        name: `Toad Rage - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Ripperdactyls Tearing Jaws while it is in combat with any units that have a Blot Toad.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Ripperdactyl Riders': {
    effects: [
      {
        name: `Blot Toad - Once Per Battle`,
        desc: `Declare: You receive 1 Blot Toad token for each Ripperdactyl Chief or Ripperdactyl Riders unit in your army, to a maximum of 3 tokens. Pick a number of enemy units equal to the number of Blot Toads you have to be the targets. 
        Effect: Place a Blot Toad next to each target.`,
        when: [DURING_SETUP],
      },
      {
        name: `Toad Rage - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units Ripperdactyls Tearing Jaws while it is in combat with any units that have a Blot Toad.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dispersed Formation - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      // ...RipperdactylBaseEffects,
    ],
  },
  // 'Salamander Hunting Pack': {
  //   effects: [
  //     {
  //       name: `It Burns!`,
  //       desc: `If the unmodified hit roll for an attack made with a Stream of Fire or Burning Jaws is 6, that attack inflicts mortal wounds on the target unit and the attack sequence ends (do not make a wound or save roll).`,
  //       when: [SHOOTING_PHASE, COMBAT_PHASE],
  //     },
  //   ],
  // },
  // 'Razordon Hunting Pack': {
  //   effects: [
  //     {
  //       name: `Instinctive Defence`,
  //       desc: `If there are any enemy units within 3" of this unit at the end of the charge phase, and no enemy units were within 3" of this unit at the start of that phase, each Razordon in this unit can make a shooting attack with its Volley of Spikes but the Attacks characteristic for that attack is D6 instead of 2D6.`,
  //       when: [END_OF_CHARGE_PHASE],
  //     },
  //     {
  //       name: `Piercing Barbs`,
  //       desc: `Improve the Rend characteristic by 1 for an attack made with a Volley of Spikes if the distance to the target is 6" or less.`,
  //       when: [SHOOTING_PHASE],
  //     },
  //   ],
  // },
  Kroxigor: {
    effects: [
      // ...KroxigorBaseEffects,
      {
        name: `Brutal Blows`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons for attacks that target an enemy unit that has 10 or more models.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Kroxigor Warspawned': {
    effects: [
      // ...KroxigorBaseEffects,
      {
        name: `Heavy-scaled Skin - Passive`,
        desc: `Effect: Subtract 1 from the Rend characteristic of ranged weapons used for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Spawn of Sotek - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons while this unit is wholly within 12" of any friendly Skink Infantry or Skink Cavalry units in combat.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Stegadon Chief': {
    effects: [
      //...StegadonBaseEffects,
      // SunfireThrowersEffect,
      {
        name: `Crushing Stomps - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. Add 2 to the amount of mortal damage inflicted, if any, if this unit charged this turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stegadons Horns and Jaws is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Skink Coordination - Passive`,
        desc: `Effect: If a friendly non-Monster Skink unit uses the Redeploy command while it is wholly within 18" of this unit, no command points are spent.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Stegadon: {
    effects: [
      // ...StegadonBaseEffects,
      //  SunfireThrowersEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Stegadons Horns and Jaws is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unstoppable Stampede - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy Infantry unit in combat with it to be the target. 
      Effect: Inflict D3 mortal damage on the target. Then, this unit can move 2D6". This unit can pass through models in the target unit but must end that move in combat.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Bastiladon Ark of Sotek': {
    effects: [
      //...StegadonBaseEffects,
      // SunfireThrowersEffect,
      {
        name: `Ark of Sotek - Once Per Turn`,
        desc: `Declare: Pick up to 3 dierent enemy units within 9" of this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Bastiladon Solar Engine': {
    effects: [
      //...StegadonBaseEffects,
      // SunfireThrowersEffect,
      {
        name: `Tail Swipe - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice for each model in the target unit, to a maximum of 8. For each 5+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* Bastiladon: {
    effects: [
      {
        name: `Tide of Snakes`,
        desc: `If the unmodified hit roll for an attack made with an Ark of Sotek is 6, the target suffers 1 mortal wound and the attack sequence ends (do not make a wound roll or save roll).`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Skink Oracle on Troglodon': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Primordial Mire'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Troglodons Jaws is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Noxious Roar - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
        Effect: Roll a dice for each target. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Terror - Passive`,
        desc: `Effect: Subtract 2 from the control scores of enemy units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Troglodon Regeneration`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [END_OF_TURN],
      },
      //  GenericEffects.Terror,
    ],
  },
  /* 'Dread Saurian': {
    effects: [
      {
        name: `Arcane Glyphs`,
        desc: `Each time this model is affected by a spell or the ability of an endless spell, you can roll a dice. If you do so, on a 6+, ignore the effects of that spell or the ability of that endless spell on this model. Add 2 to the roll if this model is within 12" of a friendly SLANN.`,
        when: [HERO_PHASE],
      },
      {
        name: `Obliterating Charge`,
        desc: `After this model makes a charge move, roll a dice for each enemy unit within 1" of this model. On a 2+, that unit suffers D3 mortal wounds if it is a MONSTER or D6 mortal wounds if it is not a MONSTER.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Death Throes`,
        desc: `If this model is slain, before removing it from play, roll a dice for each enemy unit within 3" of it that is not a MONSTER. On a 4+, that unit suffers D3 mortal wounds.`,
        when: [WOUND_ALLOCATION_PHASE],
      }, 
    //  GenericEffects.Terror,
    ],
  }, */
  // 'Celestial Swarm': {
  //   effects: [
  //     {
  //       name: `Swarming Tide`,
  //       desc: `You may heal D3 wounds allocated to this unit.`,
  //       when: [HERO_PHASE],
  //     },
  //     DeadlyVenomEffect,
  //   ],
  // },
  // 'Chameleon Skink Stalker': {
  //   effects: [
  //     ...ChameleonAmbushEffects,
  //     {
  //       name: `Disappear from Sight`,
  //       desc: `Remove the model from the battlefield and follow the Chameleon Ambush rules for this or future turns.`,
  //       when: [HERO_PHASE],
  //     },
  //     {
  //       name: `Flawless Mimicry`,
  //       desc: `If this model is within or on terrain, its Save characteristic is 3+ instead of 6+. This counts as the cover bonus.`,
  //       when: [SAVES_PHASE],
  //     },
  //     {
  //       name: `Master Hunter`,
  //       desc: `Add 2 to wound rolls for the Stalker Blowpipes if this model did not move and was not set up this turn.`,
  //       when: [SHOOTING_PHASE],
  //     },
  //   ],
  // },
  // 'Skink Prophet': {
  //   effects: [
  //     DeadlyVenomEffect,
  //     {
  //       name: `Priestly Rites`,
  //       desc: `Roll a D6. On a 4+, you can reroll run, charge, and save rolls for this model until your next hero phase.`,
  //       when: [HERO_PHASE],
  //     },
  //     {
  //       name: `Priestly Rites`,
  //       desc: `If active you can reroll run rolls.`,
  //       when: [MOVEMENT_PHASE],
  //     },
  //     {
  //       name: `Priestly Rites`,
  //       desc: `If active you can reroll charge rolls.`,
  //       when: [CHARGE_PHASE],
  //     },
  //     {
  //       name: `Priestly Rites`,
  //       desc: `If active you can reroll save rolls.`,
  //       when: [SAVES_PHASE],
  //     },
  //   ],
  // },
  'Hunters of Huanchi with Dartpipes': {
    effects: [
      // ...HuntersOfHuanchiBaseEffects,
      {
        name: `Hidden Hunters`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve in ambush. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Star-Vendom`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this units Dartpipe to be the target. 
        Effect: Roll a dice. On a 2+, subtract 1 from wound rolls for the targets combat attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Chameleon Ambush`,
        desc: `Declare: Pick this unit if it is in ambush. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      // StarVenomEffect,
    ],
  },
  'Hunters of Huanchi with Starstone Bolas': {
    effects: [
      // ...HuntersOfHuanchiBaseEffects,
      {
        name: `Hidden Hunters`,
        desc: `Declare: Pick this unit if it has not been deployed. 
      Effect: Set up this unit in reserve in ambush. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Chameleon Ambush`,
        desc: `Declare: Pick this unit if it is in ambush. 
      Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Starstone Bolas`,
        desc: `Declare: Pick an enemy unit that was targeted by this units Starstone Bolas this turn to be the target. 
        Effect: Roll a dice. On a 3+, until the start of your next turn, subtract 1 from the number of dice rolled when making charge rolls for the target, to a minimum of 1.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Terrawings: {
    effects: [
      {
        name: `Nerve-shredding Screeches`,
        desc: `Declare: Pick an enemy unit within 10" of this unit to be the target. 
        Effect: Roll a D3. If the roll exceeds the targets Control characteristic, the target cannot use commands for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Beast`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'The Starblood Stalkers': {
    effects: [
      {
        name: `Sacred Duty`,
        desc: `Before you allocate a wound or mortal wound to a friendly KIXI-TAKA, or instead of making a ward roll for a wound or mortal wound that would be allocated to a friendly KIXI-TAKA, if this unit is within 3" of that friendly KIXI-TAKA, you can roll a dice. On a 1-2, that wound or mortal wound is allocated to that KIXI-TAKA as normal. On a 3+, that wound or mortal wound is allocated to this unit instead.`,
        when: [WOUND_ALLOCATION_PHASE, WARDS_PHASE],
      }, 
   //   StarVenomEffect,
    ],
  }, */
  /* 'Kixi-Taka, the Diviner': {
    effects: [
      {
        name: `Servant of the Starmasters`,
        desc: `Once per battle, in your hero phase, you can pick 1 enemy unit within 6" of this unit and roll a dice. On a 2+, models in that unit cannot contest objectives until the start of the next turn.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Aggradon Lancers': {
    effects: [
      //  IconBearersEffect,
      // WardrummersEffect,
      {
        name: `Primal Rage`,
        desc: `Effect: This unit must use this ability each turn. 
        If this unit used any Fight abilities this turn, place a rage token next to it, to a maximum of 3. If this unit did not use any Fight abilities this turn, remove all rage tokens it has. 
        Add 1 to the Attacks characteristic of this units Companion weapons for each rage token it has until the end of the next turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /*  'Klaq-Trok': {
    effects: [
      {
        name: `Savage Protector`,
        desc: `You can reroll hit rolls and wound rolls for attacks made by this unit while it is within 3" of a friendly KIXI-TAKA.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bolstering Presence`,
        desc: `Add 3 to the Bravery characteristic of friendly THE STARBLOOD STALKERS units while they are wholly within 9" of this unit.`,
        when: [BATTLESHOCK_PHASE],
      },
    //  MightySaurusJawsEffect,
    ],
  }, */
  'Raptadon Chargers': {
    effects: [
      {
        name: `Cold-Blooded Unity - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units combat attacks if they target an enemy unit that was targeted by shooting attacks made by a friendly Raptadon Hunters unit in the same turn.`,
        when: [COMBAT_PHASE],
      },
      // IconBearersEffect,
      //  HornblowersEffect,
    ],
  },
  'Raptadon Hunters': {
    effects: [
      // IconBearersEffect,
      // HornblowersEffect,
      {
        name: `Deadly Cohesion`,
        desc: `Declare: If this unit is not in combat, pick a friendly Raptadon Chargers unit that charged this turn and is within 12" of this unit to be the target. 
      Effect: This unit can use a Shoot ability as if it were your shooting phase. It must target a visible enemy unit in combat with the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Spawn of Chotec': {
    effects: [
      {
        name: `Sun Acolytes - Passive`,
        desc: `Effect: This unit has a crew of 3 Sun Acolytes that are tokens. 
        Add 1 to this units control score for each Sun Acolyte it has. If this unit has no Sun Acolytes, it has a maximum control score of 1 for the rest of the battle. 
        Each time you make an unmodified save roll of 1 for this unit, remove 1 of its Sun Acolytes from the battlefield after the Attack ability has been resolved (the damage point is still inflicted).`,
        when: [DURING_GAME, END_OF_TURN],
      },
      {
        name: `Acid-Fuelled Flame - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, you must pick either its Glob of Flame Acid or its Stream of Fire ranged weapon. 
        In addition, after resolving shooting attacks made with this units Glob of Flame Acid, if any damage points were allocated to an enemy unit by those attacks, subtract 1 from save rolls for that enemy unit for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: Fjori`s Flamebearers': {
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
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
