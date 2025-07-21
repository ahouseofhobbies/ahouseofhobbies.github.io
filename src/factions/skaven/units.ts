import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_ROUND,
  DURING_SETUP,
  END_OF_BATTLESHOCK_PHASE,
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
  START_OF_SETUP,
  START_OF_SHOOTING_PHASE,
  START_OF_TURN,
  TURN_ONE_END_OF_MOVEMENT_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import prayers from './prayers'
import rule_sources from './rule_sources'
import spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

/*const HiddenWeaponsTeamsEffects = [
  {
    name: `Hidden Weapon Team`,
    desc: `When you select this unit to be part of your army, you can pick 1 friendly Clanrats or Stormvermin unit that has 10 or more models and is already part of your army to be the unit in which this unit is hiding. Record this information on a separate piece of paper. Do not set up this unit until it is revealed as described next. You can hide up to 1 unit in a Clanrats or Stormvermin unit for every 10 models in that Clanrats or Stormvermin unit. Hidden units are destroyed if the unit in which they are hiding is destroyed before they are revealed.`,
    when: [START_OF_SETUP],
    shared: true,
  },
  {
    name: `Hidden Weapon Team`,
    desc: `At the start of your shooting phase, you can reveal this hidden unit. If you do so, set up this unit wholly within 3" of the unit in which it was hiding and more than 3" from all enemy units. This unit can shoot in the phase in which it is revealed as long as the unit in which it was hiding did not run in the same turn (it could have retreated).`,
    when: [START_OF_SHOOTING_PHASE],
    shared: true,
  },
]
const EshinToxinsEffect = {
  name: `Eshin Toxins`,
  desc: `If the unmodified hit roll for an attack made by this unit is 6, the target suffers D3 mortal wounds and the attack sequence ends (do not make a wound roll or save roll).`,
  when: [SHOOTING_PHASE, COMBAT_PHASE],
  shared: true,
}
const AltarOfTheHornedRatEffects = [
  {
    name: `Altar of the Horned Rat`,
    desc: `This unit has a ward of 5+.`,
    when: [WARDS_PHASE],
    shared: true,
  },
  {
    name: `Altar of the Horned Rat`,
    desc: `At the start of your hero phase, you can say that this unit will beseech the Horned Rat instead of attempting to cast spells in that phase. If you do so, in that phase, this unit is treated as having the Priest keyword instead of the Wizard keyword.`,
    when: [START_OF_HERO_PHASE],
    shared: true,
  },
]
const RunningDeathEffect = {
  name: `Running Death`,
  desc: `This unit can run and still shoot later in the turn.`,
  when: [MOVEMENT_PHASE, SHOOTING_PHASE],
  shared: true,
}
const RegeneratingMonstrosityEffect = {
  name: `Regenerating Monstrosity`,
  desc: `In your hero phase, you can heal up to D3 wounds allocated to this unit.`,
  when: [HERO_PHASE],
  shared: true,
}
const ProtectionOfTheHornedRatEffect = {
  name: `Protection of the Horned Rat`,
  desc: `This unit has a ward of 5+.`,
  when: [WARDS_PHASE],
  shared: true,
}
const PoisonousFumesEffect = {
  name: `Poisonous Fumes`,
  desc: `Subtract 1 from wound rolls for attacks made with melee weapons that target this unit.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const FrenziedAssaultEffect = {
  name: `Frenzied Assault`,
  desc: `Add 1 to the Attacks characteristic of this unit's melee weapons if it made a charge move in the same turn.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const CrackTheWhipEffect = {
  name: `Crack the Whip`,
  desc: `At the start of your movement phase, you can pick 1 friendly Clans Moulder Pack unit wholly within 13" of this unit. Until your next movement phase, you can add 3 to run rolls and charge rolls for that unit. In addition, until your next movement phase, add 1 to wound rolls for attacks made with melee weapons by that unit. The same unit cannot benefit from this ability more than once per turn.`,
  when: [START_OF_MOVEMENT_PHASE],
  shared: true,
} */

const Units = {
  'Thanquol on Boneripper': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Madness'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      //ProtectionOfTheHornedRatEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Warpre Braziers is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Staff of the Horned Rat - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Warp-Amulet`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Boneripper Rampage - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3-5, inflict D3 mortal damage on the target. On a 6, inflict 2D3 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Terrible Madness: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 13" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: The target cannot use commands until the start of your next turn. In addition, roll a number of dice equal to the number of models in the target unit. For each 6, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Lord Skreech Verminking': {
    /*  mandatory: {
      command_abilities: [keyPicker(command_abilities, ['The Rat King'])],
      spells: [keyPicker(spells, ['The Dreaded Thirteenth Spell'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      // ProtectionOfTheHornedRatEffect,
      {
        name: `The Thirteen-Headed One`,
        desc: `Effect: Pick 1 of the following effects to apply until the start of your next turn. You cannot pick the same effect more than once per battle. 
        Master of Dire Sorcery: Add 1 to casting rolls for friendly Masterclan Wizards while they are wholly within 13" of this unit. 
        Commander of Vermin: Add 1 to charge rolls for friendly Verminus units while they are wholly within 13" of this unit. 
        Knower of Warp-tech: Add 1 to hit rolls for shooting attacks made by friendly Skryre units while they are wholly within 13" of this unit. 
        Deliverer of Weeping Blades: Add 1 to the Rend characteristic of melee weapons used by friendly Eshin units while they are wholly within 13" of this unit. 
        Bringer of Plagues: Add 1 to chanting rolls for friendly Pestilens Priests while they are wholly within 13" of this unit. 
        Shaper of Fleshcra: Heal (D3) each friendly Moulder unit wholly within 13" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Dreaded Thirteenth Spell: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 13" to be the target, then make a casting roll of 2D6. 
        Effect: Roll 13 dice. For each 5+: 
        Inflict 1 mortal damage on the target. 
        You can return 1 slain model to a friendly Clanrats unit wholly within 13" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Terrifying Monstrosity - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+: 
        The target cannot use commands for the rest of the turn. 
        Subtract an amount equal to the roll from the targets control score until the start of your next turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Vizzik Skour': {
    effects: [
      {
        name: `The Death Frenzy: Chant value of 8`,
        desc: `Declare: Pick a visible enemy unit within 13" of this unit or a visible friendly Skaven Infantry unit within 13" of this unit to be the target, then make a chanting roll of D6.
        Effect: If the target is an enemy unit, subtract 1 from the attacks characteristic of the target's meelee weapons until the start of your next turn.
        If the target is a friendly unit, it can use 2 Fight abilities this turn. After the first is used, however, the target has Strike-ast for the rest of the turn. 
        If the chanting roll was 12+, you can pick 2 targets instead of 1.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fissures in Reality`,
        desc: `Declare: Pick each enemy unit in combat with this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Prophet of the Horned Rat - Once Per Battle`,
        desc: `Effect: You can reroll chanting rolls for this unit until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gaze of the Gnaw - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a dice. On a 2+, for the rest of the turn:
        If this unit is in combat with the target when the target is picked to use a Fight ability, all of the targets attacks must target this unit.
        Subtract 1 from hit rolls and wound rolls for the target's combat attacks that target this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Verminlord Warpseer': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Dreaded Warpgale'])],
    }, */
    effects: [
      //  GenericEffects.WizardTwoSpellsEffect,
      // ProtectionOfTheHornedRatEffect,
      {
        name: `Divine the Future - Passive`,
        desc: `Effect: While this unit is on the battlefield, add 2" to the distance friendly units can move when using the Always Three Clawsteps Ahead ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Arch-Manipulators - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 4+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Hurl Scry-Orb - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: This unit cannot use the Divine the Future ability for the rest of the battle. Roll a dice. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Tectonic Splintering: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 18" to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from the number of dice rolled when making charge rolls for the target, to a minimum of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Grey Seer': {
    /*  mandatory: {
      spells: [keyPicker(spells, ['Wither'])],
    }, */
    effects: [
      //  GenericEffects.WizardTwoSpellsEffect,
      {
        name: `Warpstone Shards`,
        desc: `Effect: The next time you make a casting roll for this unit this phase, roll 3D6 instead of 2D6. This roll cannot be rerolled or modified. 
        If the casting roll is 13, the spell is successfully cast and cannot be unbound. After the effect of that spell has been resolved, inflict D3 mortal damage on this unit. 
        If the casting roll is not 13, remove 1 dice of your choice from the casting roll and use the remaining 2D6 as the casting roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Arch-Warlock': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Warp Lightning Storm'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      {
        name: `Overseers of the Enginecovens - Passive`,
        desc: `Effect: If a friendly Skryre unit wholly within 13" of this unit uses the Covering Fire command, no command points are spent.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Warlock Galvaneer': {
    effects: [
      {
        name: `Lightning Master - Once Per Battle`,
        desc: `Declare: Pick a friendly Warpvolt Scourgers unit within this unit's combat range to be the target.
        Effect: Roll a dice. On a 2+, set the Attacks characteristic of the target's Warpvolt Scourgers to 10 for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `More-More Warpvolt Doom!`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this unit's Warpvolt Obliterator to be the target.
        Effect: Roll a D3 for each other enemy unit within the target's combat range. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Warlock Engineer': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Warp Lightning'])],
    }, */
    effects: [
      //  GenericEffects.WizardOneSpellEffect,
      {
        name: `More-More Warp Energy! - Reaction: You declared a Shoot ability for this unit, it was not set up this turn, and it has not used a Move ability turn`,
        desc: `Effect: Roll a dice. On a 2+, set the Damage characteristic of this units Warplock Musket to 3 for the rest of the turn. On a 1, inflict D3 mortal damage on this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Sniper-Master - Once Per Turn`,
        desc: `Declare: Pick a visible enemy Hero to be the target. 
        Effect: For the rest of the turn, this unit and friendly Warplock Jezzails units wholly within 13" of this unit can ignore the effects of the Guarded Hero ability (Core Rules, 25.0) when picking the target for their shooting attacks.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Warlock Bombardier': {
    /*  mandatory: {
      spells: [keyPicker(spells, ['Warp Lightning'])],
    }, */
    effects: [
      //  GenericEffects.WizardOneSpellEffect,
      {
        name: `More-More Doom! - Reaction: You declared a Shoot ability for this unit, it was not set up this turn, and it has not used a Move ability turn`,
        desc: `Effect: Roll a dice. On a 2+, set the Damage characteristic of its Doomrocket to D3+3 for the rest of the turn. On a 1, inflict D3 mortal damage on this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Explosive Payload - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units shooting attacks that target an enemy unit that has 10 or more models.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Stormfiends: {
    effects: [
      // GenericEffects.Elite,
      {
        name: `Grinderfist Tunnellers - Once Per Turn`,
        desc: `Declare: Pick this unit if it is in the tunnels below and includes any models armed with Grindersts. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Shock Gauntlets - Passive`,
        desc: `Effect: Each time an attack made with this units Shock Gauntlets scores a critical hit, that attack scores D6 hits on the target unit instead of 1. Make a wound roll for each hit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Warp Lightning Cannon': {
    effects: [
      {
        name: `Warp Lightning Blast - Passive`,
        desc: `Effect: Each attack made with this weapon in a single phase must target the same enemy unit. Each hit inflicts 1 mortal damage on the target and the attack sequence ends.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `More-More Warp Lightning! - Once Per Turn`,
        desc: `Effect: If this unit is within the combat range of a friendly Skryre Hero, add 6 to the Attacks characteristic of this units Warp Lightning Blast for the rest of the turn. 
        However, for each unmodified hit roll of 1 for an attack made with this units Warp Lightning Blast, inflict D3 mortal damage on this unit after the Shoot ability has been resolved.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Acolyte Globadiers': {
    effects: [
      {
        name: `Hidden Weapon Team - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Clanrats unit that has 5 or more models, and there are no other friendly Weapon Team units within that units combat range, this unit is not visible to enemy units more than 13" away.`,
        when: [DURING_GAME],
      },
      {
        name: `Gas Clouds - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Poisoned Wind Globes for attacks that target an enemy unit that has 10 or more models.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Doomwheel: {
    effects: [
      {
        name: `Rolling Doom`,
        desc: `Effect: This unit can move a distance up to its Move characteristic. This unit can pass through other models and the combat ranges of enemy units, but it cannot end that move in combat. 
        Then, pick up to 3 enemy units that this unit passed across during that move to be the targets. Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Warpvolt Scourgers': {
    effects: [
      {
        name: `Hidden Weapon Team - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Clanrats unit that has 5 or more models, and there are no other friendly Weapon Team units within that units combat range, this unit is not visible to enemy units more than 13" away.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Warplock Jezzails': {
    effects: [
      {
        name: `Warpstone Snipers`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 6" to this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Clanrats: {
    effects: [
      {
        name: `Seething Swarm`,
        desc: `Effect: You can return D3 slain models to this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Stormvermin: {
    effects: [
      {
        name: `Elite Bodyguard - Passive`,
        desc: `Effect: Friendly Skaven Infantry Heroes have Ward (5+) while they are within this units combat range.`,
        when: [DURING_GAME],
      },
    ],
  },
  /*  "Spiteclaw's Swarm": {
    effects: [
      {
        name: `Aversion to Death`,
        desc: `After the first wound or mortal wound is allocated to this unit in any phase, this unit has a ward of 5+ until the end of that phase.`,
        when: [WARDS_PHASE],
      },
      {
        name: `Champion`,
        desc: `The leader of this unit is Krrk the Almost-trusted. Do not take battleshock tests for this unit while it includes Krrk the Almost-trusted.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Champion`,
        desc: `The leader of this unit is Krrk the Almost-trusted. If Skritch Spiteclaw is slain, add 2 to the Attacks characteristic of Krrk's Rusty Spear for the rest of this battle.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, */
  'Verminlord Warbringer': {
    /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Tyrant of Battle'])],
      spells: [keyPicker(spells, ['Dreaded Death Frenzy'])],
    }, */
    effects: [
      //   GenericEffects.WizardTwoSpellsEffect,
      //  ProtectionOfTheHornedRatEffect,
      {
        name: `Tyrant of Battle - Once Per Turn`,
        desc: `Declare: Pick up to 2 friendly Verminus Infantry units wholly within 13" of this unit to be the targets. 
        Effect: The targets can each use the All-out Attack or All-out Defence command this phase even if that command has been used by a friendly unit this phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Killing Blow - Once Per Turn`,
        desc: `Declare: Pick a damaged enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is less than the number of damage points the target has, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Clawlord: {
    /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Gnash-gnaw on their Bones!'])],
    }, */
    effects: [
      {
        name: `Cornered Rat - Passive`,
        desc: `Effect: While this unit is damaged, add 3 to the Attacks characteristic of its Warpforged Blade.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gnash-Gnaw on their Bones! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Verminus Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'Skritch Spiteclaw': {
   /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Gnash-gnaw on their Bones!'])],
    }, 
    effects: [
      {
        name: `There are Always More`,
        desc: `At the start of your hero phase, if this unit is within 13" of a friendly Spiteclaw's Swarm unit, you can return D3 slain models to that unit. You cannot return Krrk the Almost-trusted.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Slynk Skittershank': {
    effects: [
      //EshinToxinsEffect,
     // RunningDeathEffect,
      {
        name: `Misdirection`,
        desc: `If this unit is within 1" of a friendly Skittershank's Clawpack unit at the start of the combat phase, the strike-first effect applies to this unit in that combat phase. In addition, after this unit has fought for the first time in the combat phase, if this unit is within 1" of a friendly Skittershank's Clawpack unit, this unit can retreat.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  "Skittershank's Clawpack": {
    effects: [
     // EshinToxinsEffect,
      {
        name: `Kinwhisper's Ratlings`,
        desc: `During deployment, instead of setting up this unit on the battlefield, you can place it to one side and say that it is infiltrating the foe as a reserve unit. If you do so, when you would set up a friendly Slynk Skittershank during deployment, you can say that it will join this unit infiltrating the foe as a reserve unit.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Kinwhisper's Ratlings`,
        desc: `At the end of your first movement phase, you must set up this unit on the battlefield, wholly within 6" of a terrain feature and more than 6" from all enemy units. Then, if Slynk Skittershankj oined this unit in reserve, set up that unit within 1" of this unit and more than 6" from all enemy units.`,
        when: [TURN_ONE_END_OF_MOVEMENT_PHASE],
      },
     // RunningDeathEffect,
    ],
  }, */
  'Doom-Flayer': {
    effects: [
      {
        name: `Whirling Doom`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Ratling Gun': {
    effects: [
      {
        name: `Hidden Weapon Team - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Clanrats unit that has 5 or more models, and there are no other friendly Weapon Team units within that units combat range, this unit is not visible to enemy units more than 13" away.`,
        when: [DURING_GAME],
      },
      // ...HiddenWeaponsTeamsEffects,
    ],
  },
  'Warpfire Thrower': {
    effects: [
      {
        name: `Hidden Weapon Team - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Clanrats unit that has 5 or more models, and there are no other friendly Weapon Team units within that units combat range, this unit is not visible to enemy units more than 13" away.`,
        when: [DURING_GAME],
      },
      // ...HiddenWeaponsTeamsEffects,
    ],
  },
  'Warp-Grinder': {
    effects: [
      {
        name: `Tunnel Skulkers - Once Per Battle`,
        desc: `Declare: Pick this unit and up to 1 friendly non-Monster Skaven unit if those units have not been deployed.
        Effect: Set up those units in reserve in the Tunnels below. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Warp-Ambush`,
        desc: `Declare: Pick this unit if it is in the tunnels below, then pick an enemy unit more than 6" from all other enemy units to be the tartget.
        Effect: Roll a dice. Ona 4+, set up this unit within 3" of the target and more than 6" from all other enmey units. Then, set up the unit that was in the tunnels below with this unit within 3" of the target and movre than 6" from all other enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Plagueclaw: {
    effects: [
      {
        name: `Bubonic Barrage - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, if all of its attacks targeted the same enemy unit, after that ability has been resolved, roll a dice. If the result is equal to or less than the number of models in that enemy unit that were slain by attacks made by this units Plagueclaw Catapult this phase, that enemy unit has Strike-last for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Plague Monks': {
    effects: [
      {
        name: `Spreaders of Filth and Disease - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 6+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'Plague Censer Bearers': {
    effects: [
    //  FrenziedAssaultEffect,
      {
        name: `Plague Disciples`,
        desc: `Add 1 to wound rolls for attacks made by this unit if it is wholly within 18" of any friendly Plague Monks units.`,
        when: [COMBAT_PHASE],
      },
    //  PoisonousFumesEffect,
    ],
  }, */
  /*'Plague Priest': {
    mandatory: {
      prayers: [keyPicker(prayers, ['Pestilence-pestilence!'])],
    }, 
    effects: [FrenziedAssaultEffect, PoisonousFumesEffect],
  }, */
  'Plague Priest on Plague Furnace': {
    /* mandatory: {
      prayers: [keyPicker(prayers, ['Pestilence-pestilence!'])],
    }, */
    effects: [
      // ...AltarOfTheHornedRatEffects,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Great Plague Censer is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Corrupting Influence - Passive`,
        desc: `Effect: Subtract 1 from ward rolls for enemy units while they are within 13" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Altar of the Great Corruptor - Passive`,
        desc: `Effect: Friendly Pestilens units have Ward (6+) while they are wholly within 13" of this unit.`,
        when: [DURING_GAME],
      },
      //  PoisonousFumesEffect,
    ],
  },
  'Verminlord Corruptor': {
    /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Lord of Pestilence'])],
      spells: [keyPicker(spells, ['Dreaded Plague'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      //  ProtectionOfTheHornedRatEffect,
      {
        name: `Lord of Great Plagues - Once Per Turn`,
        desc: `Effect: If the unmodified chanting roll for a friendly Pestilens Priest this phase was 6, pick 1 of the following effects to apply: 
        Crimsonweal Curse: Pick an enemy unit within 13" of this unit to be the target. For the rest of the battle, each time the target uses a Move ability, inflict D3 mortal damage on it after the Move ability has been resolved. 
        The Neverplague: For the rest of the battle, you can reroll chanting rolls for friendly Pestilens Priests. 
        Undulant Scourge: Pick a visible enemy unit within 13" of this unit to be the target. Inflict 2D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Plaguemaster - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. 
        Give this unit 1 ritual point.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Grey Seer on Screaming Bell': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Cracks Call'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      // ...AltarOfTheHornedRatEffects,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Crushing Bulk is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Altar of the Horned Rat - Passive`,
        desc: `Effect: Friendly Skaven Infantry units have Ward (6+) while they are wholly within 13" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Cracks Call: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit that does not have Fly and is within 13" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: If the casting roll exceeds the targets Move characteristic, inflict an amount of mortal damage on the target equal to the difference between the casting roll and its Move characteristic.`,
        when: [HERO_PHASE],
      },
      {
        name: `Peal of Doom`,
        desc: `Effect: Roll a dice and apply the corresponding effect: 
        1 Magical Backlash: Inflict D3 mortal damage on this unit. 
        2-4 Wall of Unholy Sound: Until the start of your next turn, subtract 1 from hit rolls for combat attacks made by enemy units while they are within 13" of this unit. 
        5-6 Apocalyptic Doom: Roll a D3 for each enemy unit within 13" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Grey Seer on Screaming Bell (SoG)': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Cracks Call'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      // ...AltarOfTheHornedRatEffects,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Crushing Bulk is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Bell Tolls - Passive`,
        desc: `Effect: If the current battle round number is odd, add 2" to the Move characteristic of friendly Skaven units while they are wholly within 13" of this unit. If the current battle round number is even, subtract 1 from hit rolls for attacks made by enemy units that target a friendly Skaven unit while it is wholly within 13" of this unit.`,
        when: [DURING_GAME, MOVEMENT_PHASE, SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Gnaw Through Reality: Casting value of 6`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Until the start of your next turn, this unit counts as a friendly Gnawhole for the purposes of the Gnawhole Ambush, Tunnels Through Reality and The Endless Vermintide abilities.`,
        when: [HERO_PHASE],
      },
      {
        name: `Echoes of the Vermindoom - Once Per Turn`,
        desc: `Declare: Pick each friendly Skaven unit wholly within 13" of this unit to be the targets. 
        Effect: Heal (D3) each target.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Hell Pit Abomination': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Gnashing Teeth and Flailing Fists is 8.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Avalanche of Flesh - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      // RegeneratingMonstrosityEffect,
      {
        name: `Regenerating Monstrosity`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Too Horrible to Die - Passive`,
        desc: `Effect: The first time this unit would be destroyed, before removing it from the battlefield, roll a dice and apply the corresponding effect: 
        1 Dead: This unit is destroyed. 
        2-4 The Rats Emerge: Roll a D3 for each enemy unit in combat with this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll. Then, this unit is destroyed. 
        5-6 Its Alive!: This unit is not destroyed and any remaining damage points inicted on it have no effect. Then, Heal (D6) this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Brood Terror': {
    effects: [
      {
        name: `Regenerating Terror`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Warpstone Fumes - Once Per Turn`,
        desc: `Effect: Roll a dice. On a 2+, for the rest of the turn, subtract 1 from hit rolls for attacks made by enemy units while they are within 6" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Brood Terror (SoG)': {
    effects: [
      {
        name: `Regenerating Terror`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Lend A Claw - Once Per Turn`,
        desc: `Declare: Pick up to 4 other friendly non-Skryre Moulder units wholly within 12" of this unit to be the targets. 
        Effect: Subtract 1 from the Attacks characteristic of this units Loosely Attached Bladed Limbs for the rest of the phase for each target picked. Add 1 to hit rolls for the targets attacks for the rest of the phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Master Moulder': {
    /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Unleash More-more Beasts!'])],
    }, */
    effects: [
      // CrackTheWhipEffect,
      {
        name: `Lord of Flesh-Grafting`,
        desc: `Declare: Pick another friendly Moulder unit wholly within 13" of this unit to be the target. 
        Effect: Heal (3) the target.`,
        when: [END_OF_TURN],
      },
      {
        name: `Tyrannical Packmaster`,
        desc: `Declare: Pick another friendly Moulder unit within this units combat range to be the target. 
        Effect: Add 1 to charge rolls for the target for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  /*  'Giant Rats': {
    effects: [
      {
        name: `Wave of Rats`,
        desc: `Improve the Rend characteristic of this unit's Vicious Teeth by 1 if it has 3-5 models. Improve the Rend characteristic of this unit's Vicious Teeth by 2 instead of 1 if it has 6 or more models.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Rat Swarms': {
    effects: [
      {
        name: `Endless Tide of Rats`,
        desc: `At the end of the battleshock phase, you can return 1 slain model to this unit.`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
    ],
  }, */
  'Rat Ogors': {
    effects: [
      {
        name: `Unleashed Warp-Fury`,
        desc: `Effect: Inflict D3 mortal damage on this unit. Then, add 1 to the Attacks characteristic of this units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* Packmasters: {
    effects: [CrackTheWhipEffect],
  }, */
  'Verminlord Deceiver': {
    /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Lord of Assassins'])],
      spells: [keyPicker(spells, ['Dreaded Skitterleap'])],
    }, */
    effects: [
      //  GenericEffects.WizardTwoSpellsEffect,
      // ProtectionOfTheHornedRatEffect,
      {
        name: `Lord of Assassins - Reaction: You declared the Redeploy command for a friendly Eshin Infantry unit wholly within 13" of this unit`,
        desc: `Effect: If you roll a 1-3 when determining the distance that unit can move, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Burst from the Shadows - Once Per Turn`,
        desc: `Effect: If this unit is in combat, roll a dice. On a 4+, you can pick a point on the battlefield within 13" of this unit and within 1" of any enemy units. Remove this unit from the battlefield and set it up again within 1" of that point.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Deathmaster: {
    effects: [
      {
        name: `Shadowy Killers - Passive`,
        desc: `Effect: If the unmodified hit roll for an attack that targets this unit is 1-4, the attack fails and the attack sequence ends.`,
        when: [DURING_GAME],
      },
      {
        name: `Running Death - Passive`,
        desc: `Effect: While friendly Eshin units are wholly within 13" of this unit, they can use Shoot and/or Charge abilities even if they used a Run ability in the same turn.`,
        when: [MOVEMENT_PHASE],
      },
      // EshinToxinsEffect,
      // RunningDeathEffect,
    ],
  },
  'Night Runners': {
    effects: [
      {
        name: `Sneaky Infiltrators - Passive`,
        desc: `Effect: While each model in this unit is within 1" of any terrain features, this unit cannot be targeted by shooting attacks unless the attacking model is within 9" of it.`,
        when: [DURING_GAME],
      },
      // RunningDeathEffect,
      {
        name: `Slinking Advance`,
        desc: `Effect: This unit can use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
      //EshinToxinsEffect,
    ],
  },
  'Ratling Warpblaster': {
    effects: [
      {
        name: `Overwhelming Fire - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units shooting attacks that target an enemy unit that has 10 or more models.`,
        when: [SHOOTING_PHASE],
      },
      // RunningDeathEffect,
      {
        name: `More-More Warpstone Bullets - Once Per Turn`,
        desc: `Effect: If this unit is within the combat range of a friendly Skryre Hero, this units Hail of Warpstone Bullets has an Attacks characteristic of 6D6+3 instead of 3D6+3 for the rest of the turn. However, for each unmodified hit roll of 1 for an attack made with this units Hail of Warpstone Bullets, inflict 1 mortal damage on this unit after the Shoot ability has been resolved.`,
        when: [SHOOTING_PHASE],
      },
      //EshinToxinsEffect,
    ],
  },
  'Clawlord on Gnaw-Beast': {
    effects: [
      {
        name: `Cornered Rat - Passive`,
        desc: `Effect: While each model in this unit is within 1" of any terrain features, this unit cannot be targeted by shooting attacks unless the attacking model is within 9" of it.`,
        when: [COMBAT_PHASE],
      },
      // RunningDeathEffect,
      {
        name: `Cruel Commander`,
        desc: `Declare: Pick a friendly non-Hero Verminus Infantry unit wholly within 13" of this unit to be the target. 
        Effect: Inflict 1 mortal damage on the target. Then, add 5 to the targets control score until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      //EshinToxinsEffect,
    ],
  },
  /* 'Gutter Runners': {
    effects: [
    //  GenericEffects.Elite,
    // RunningDeathEffect,
      {
        name: `Sneaky Infiltrators`,
        desc: `During deployment, instead of setting up this unit on the battlefield, you can place it to one side and say that it is infiltrating the foe as a reserve unit. If you do so, at the end of your first movement phase, you must set up this unit wholly within 6" of a terrain feature and more than 9" from all enemy units.`,
        when: [START_OF_SETUP, TURN_ONE_END_OF_MOVEMENT_PHASE],
      },
     // EshinToxinsEffect,
    ],
  }, */
  /* 'Skabbik Plagueseeker': {
    mandatory: {
      prayers: [keyPicker(prayers, ['Befoul-befoul!'])],
    },
    effects: [FrenziedAssaultEffect, PoisonousFumesEffect],
  }, */
  Plaguepack: {
    effects: [
      {
        name: `Enshrouding Fumes - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for shooting attacks that target this unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Plague Rat - Passive`,
        desc: `Effect: This unit's Plague Rat is a token. If you make an unmodified chanting roll of 1 for this unit while its Plague Rat is on the battlefield, you can remove its Plague Rat from the battlefield and then reroll that chanting roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Krittok Foulblade': {
    effects: [
      {
        name: `Doomfang`,
        desc: `Effect: This unit has Strike-first for the rest of the turn but it cannot use commands this phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Command Ability - A Reputation for Cunning - Enemy Hero Phase`,
        desc: `Effect: You can pick 2 different eligible units to use the Always Three Clawsteps Ahead ability this phase instead of 1, but at least 1 of those units must have the Verminus Keyword.`,
        when: [HERO_PHASE],
      },
      {
        name: `Foster Competition - Passive`,
        desc: `Effect: Add 1 to wound rolls for friendly Stormvermin units while they are wholly within 13" of this unit.`,
        when: [DURING_GAME],
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
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
