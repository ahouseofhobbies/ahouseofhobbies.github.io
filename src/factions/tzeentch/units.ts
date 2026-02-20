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
        desc: `Effect: While this unit has 10 or more damage points, subtract 1 from its power level.`,
        when: [HERO_PHASE],
      },
      {
        name: `Command Ability: Summon Daemons of Tzeentch - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Disciples of Tzeentch daemon unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Locus of Impossibility - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit. In addition, subtract 1 from hit rolls for attacks that target friendly Disciples of Tzeentch Daemon units while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE, SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Temporal Manipulation: Casting value of 6`,
        desc: `Declare: Pick another visible friendly Disciples of Tzeentch unit that was not set up this turn and that is wholly within 18" of this unit to be the target.
        Effect: The target can use the 'Normal Move' ability as if it were your movement phase, but it must end that move closer to this unit.`,
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
        desc: `Effect: While this unit has 10 or more damage points, subtract 1 from its power level.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mastery of Magic - Passive`,
        desc: `Effect: When you make a casting roll for this unit, you can change the lowest D6 to match the highest D6.`,
        when: [HERO_PHASE],
      },
      {
        name: `Beacon of Sorcery - Passive`,
        desc: `Effect: Add 1 to casting rolls and unbinding rolls for friendly Disciples of Tzeentch wizards while they are wholly within 12" of this unit. In addition, if a friendly Disciples of Tzeentch wizard wholly within 12" of this unit unbinds a spell, no command points are spent for that wizard to use the 'Magical Intervention' command in that phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fateful Reverse: Casting value of 8`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, if the target charged in the same turn, friendly Disciples of Tzeentch units in combat with the target have Strike-First. Additionally, the target's weapons cannot be affected by the Charge (+1 Damage) weapon ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Master of Destiny - Passive`,
        desc: `Effect: If this unit has not already engineered the outcome this battle round, instead of making a casting roll, unbinding roll, banishment roll, hit roll, wound roll, or save roll for a visible friendly Disciples of Tzeentch unit wholly within 12" of this unit, this unit can engineer the outcome.
        If the roll would have been a D6 roll, you can use a value of 6 for it that cannot be modified.
        If the roll would have been a 2D6 roll, you can use a value of 9 for it that cannot be modified.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Gaunt Summoner': {
    effects: [
      {
        name: `Masters of the Silver Tower - Passive`,
        desc: `Effect: Enemy units cannot end a charge move within 1/2" of a friendly Argent Shard that is wholly within 12" of this unit and was set up on the battlefield in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `All Belongs to Tzeentch - Once Per Battle`,
        desc: `Declare: Pick an objective you do not control and that you controlled earlier in the battle to be the target. 
        Effect: You control the target objective.`,
        when: [START_OF_TURN],
      },
      {
        name: `Leaden Limbs: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6.
        Effect: Until the start of your next turn:
        Halve the target's Move characteristic.
        The effects of the 'Fly' ability do not apply to the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Gaunt Summoner on Disc of Tzeentch': {
    effects: [
      {
        name: `Masters of the Silver Tower - Passive`,
        desc: `Effect: Enemy units cannot end a charge move within 1/2" of a friendly Argent Shard that is wholly within 12" of this unit and was set up on the battlefield in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `All Belongs to Tzeentch - Once Per Battle`,
        desc: `Declare: Pick an objective you do not control and that you controlled earlier in the battle to be the target. 
        Effect: You control the target objective.`,
        when: [START_OF_TURN],
      },
      {
        name: `Arcane Imprisonment: Casting value of 7`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target, then make a casting roll of 2D6.
        Effect: If the unmodified casting roll exceeds the target's Health characteristic, it is automatically destroyed and cannot be replaced for the rest of the battle.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Fatemaster: {
    effects: [
      {
        name: `Long in the Planning - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Spend 2 fate points. Then, pick a visible friendly Arcanite unit wholly within 12" of this unit to be the target.
        Effect: For the rest of the turn, the first time an enemy unit ends a charge move within 3" of the target, you can remove the target from the battlefield and set it up in reserve masked by illusion.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bound Retinue - Once Per Turn`,
        desc: `Declare: This unit can only use this ability if it is masked by illusion. Pick up to 1 other friendly unit that is masked by illusion to be the target. 
        Effect: Set up this unit on the battlefield more than 9" from all enemy units. Then, set up the target wholly within 6" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
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
        name: `Spread the Inferno - Passive`,
        desc: `Effect: Companion weapons used by friendly Disciples of Tzeentch units have Crit (2 Hits) while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fuel for the Flames - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Disciples of Tzeentch unit wholly within 12" of this unit to be the target.
        Effect: If the target is destroyed this turn, before removing it from play, gain 1 fate point.`,
        when: [HERO_PHASE],
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
        desc: `Declare: This unit can only use this ability if it is masked by illusion. Pick a model in a friendly Disciples of Tzeentch unit to be the target.
        Effect: This unit can immediately use a spell ability. When it does so, measure the range and visibility of that spell ability from the target. The target is treated as the caster for the purpose of other abilities such as 'Unbind'.`,
        when: [HERO_PHASE],
      },
      {
        name: `Whispers of Treachery: Casting value of 7`,
        desc: `Declare: Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Puckish Misdirection - Passive`,
        desc: `Effect: While they are wholly within 12" of this unit, friendly Disciples of Tzeentch units can use the 'Redeploy' command even if they were set up in the same turn.`,
        when: [MOVEMENT_PHASE],
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
        name: `Locus of Command - Passive`,
        desc: `Effect: Each time a friendly Disciples of Tzeentch Daemon unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
      {
        name: `Weapon Curse - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Disciples of Tzeentch Daemon unit wholly within 12" of this unit to be the target.
        Effect: Roll a dice. Add 1 to the roll if the target was set up this turn. On a 3+, until the start of your next turn, other than the companion weapon ability, weapon abilities for attacks that target that unit have no effect.`,
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
        name: `Drawn to Magic - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick an enemy Manifestation to be the target. Then, make a charge roll of 3D6.
        Effect: This unit can move a distance up to the value of the charge roll. It can move through the combat ranges of enemy units and must end that move within 1/2" of the target. If it does so, this unit has charged. Then, if this unit charged this turn, inflict D3 mortal damage on each enemy Manifestation in combat with this unit.`,
        when: [CHARGE_PHASE],
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
        name: `Fiery Death from Above - Once Per Turn`,
        desc: `Declare: If this unit charget his turn, picka visible enemy unit within 1" of it to be the target.
        Effect: Roll a D3. On a 1, gain 1 fate point, on a 2+:
        Inflict an amount of mortal damage on the target equal to the roll.
        This unit can immediately use a Retreat ability as if it were your movement phase. No mortal damage is inflicted on this unit by that Retreat ability.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Exalted Flamers of Tzeentch': {
    effects: [
      //  CapriciousWarpflameEffect, GenericEffects.Elite
      {
        name: `Heart of the Inferno - Once Per Turn`,
        desc: `Declare: Pick up to 2 visible friendly Flamers of Tzeentch units wholly within 12" of this unit to be the targets.
        Effect: Add 1 to wound rolls for the targets' shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Unnatural Heat - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that was targeted by this unit's shooting attacks this phase to be the target. 
        Effect: Roll a dice. Add the number of damage points allocated to the target this phase by this unit's shooting attacks to the roll. Ona 5+, subtract 1 from the save rolls for the target for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Flamers of Tzeentch': {
    effects: [
      //CapriciousWarpflameEffect,
      {
        name: `Capricious Wyrdflame - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by this unit's shooting attacks to be the target.
        Effect: The target has the Burning keyword for the rest of the battle.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Lingering Burns - Once Per Turn`,
        desc: `Declare: This unit can use this ability even if it has been destroyed. Pick any number of Burning enemy units to be the targets.
        Effect: Roll a D3 for each target. On a 1, the target no longer has the Burning keyword. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Pink Horrors': {
    effects: [
      {
        name: `Lunatic Demise - Passive`,
        desc: `Effect: Each time a model in this unit is slain, before removing the model from play, pick 1 of the following effects:
        Split: Pick a visible friendly Blue Horrors and Brimstone Horrors unit within 12" of this unit. Return up to 2 slain Blue Horror models to that unit.
        Petty Vengeance: Pick an enemy unit in combat with this unit to be the target, then roll a dice. On a 5+, inflict 1 mortal damage on the target.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Blue and Brimstone Horrors': {
    effects: [
      {
        name: `Split Again`,
        desc: `Effect: Roll a dice for each Blue Horror model in this unit that is slain. On a 3+, you can add 1 Brimstone Horrors model to this unit.`,
        when: [END_OF_TURN],
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
        name: `Spellmaster - Once Per Turn - Reaction: You declared a Spell ability for a Wizard within 30" of this unit`,
        desc: `Effect: Make an unbinding roll of 2D6. If the roll exceeds the casting roll for the spell, the spell is unbound and its effect is not resolved.
        If the spell is unbound, add 1 to casting rolls for this unit for the rest of the phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fates Converge - Passive`,
        desc: `Effect: While you have 6 or more fate points, add 1 to the Attacks characteristic of melee weapons used by friendly Arcanite units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
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
        name: `Spellmaster - Once Per Turn - Reaction: You declared a Spell ability for a Wizard within 30" of this unit`,
        desc: `Effect: Make an unbinding roll of 2D6. If the roll exceeds the casting roll for the spell, the spell is unbound and its effect is not resolved.
        If the spell is unbound, add 1 to casting rolls for this unit for the rest of the phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Command Ability: Imbued with Arcane Fire - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Arcanite unit wholly within 12" of this unit to be the target.
        Effect: The target's melee weapons have Crit (Mortal) until the start of your next turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Curseling, Eye of Tzeentch': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Glean Magic'])],
    }, */
    effects: [
      {
        name: `Armour-Bane Curse: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target. Then, make a casting roll of 2D6.
        Effect: Subtract 1 from save rolls for combat attacks that target that unit until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `With Spell and Sword - Once Per Turn`,
        desc: `Effect: If this unit is in combat, it can use a non-Summon Spell ability as if it were your hero phase, as if that ability had the UNLIMITED keyword and as if this unit had not cast any spells this turn.`,
        when: [COMBAT_PHASE],
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
        name: `Thaumaturgic Hunger - Reaction: Opponent declared a Spell ability for a unit within 30" of this unit`,
        desc: `Effect: This unit can move 6". It can move into combat and must end that move closer to the caster. If this unit was in combat at the start of the move, it must end that move in combat.`,
        when: [HERO_PHASE],
      },
      {
        name: `Arcane Absorption`,
        desc: `Effect: If any damage points were allocated to an enemy Wizard or Priest by this unit's attacks this turn and that enemy unit has been destroyed:
        Heal (7) this unit.
        Add 1 to this unit's power level for the rest of the battle.`,
        when: [END_OF_TURN],
      },
      // GenericEffects.WizardOneSpellEffect,
    ],
  },
  'Ogroid Thaumaturge (SoG)': {
    effects: [
      {
        name: `Soul-Deep Devotion - Passive`,
        desc: `Effect: While this unit is within a friendly non-Hero Arcanite units combat range: 
        This unit has Ward (4+). 
        Each time you make a successful ward roll for this unit, allocate 1 damage point to a friendly non-Hero Arcanite unit within this units combat range after the damage sequence for this unit has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Wrath of the Thaumaturge - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a friendly Arcanite unit in combat to be the target. 
        Effect: Remove this unit from the battlefield and set it up again within 1" of the target and in combat. This unit has charged.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Kairic Acolytes': {
    /*  mandatory: {
      spells: [keyPicker(Spells, ['Gestalt Sorcery'])],
    }, */
    effects: [
      // GenericEffects.ArcaniteShieldEffect,
      {
        name: `Driven by Destiny - Once Per Turn - Enemy Movement Phase`,
        desc: `Effect: If this unit is more than 6" from all enemy units, it can move X", where X is the number of fate points you have. It cannot move into combat during any part of that move.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Kairic Acolytes (SoG)': {
    effects: [
      {
        name: `Vulcharc - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target. 
        Effect: For the rest of the turn, add 1 to the Rend characteristic of melee weapons used by friendly Kairic Acolytes units for attacks that target that enemy unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Empowered by Magic - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons while this unit is wholly within 12" of any Manifestations (friendly or enemy).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Tzeentch Chaos Spawn': {
    effects: [
      {
        name: `A Twisted Fate`,
        desc: `Declare: This unit must be deployed using this ability.
        Effect: Set up this unit in reserve masked by illusion. It has now been deployed.`,
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
        name: `Avian Swiftness`,
        desc: `Declare: Pick a visible friendly Arcanite unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, until the start of your next turn, the target can use Charge abilities even if it used a Run ability in the same turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wit of Beasts - Once Per Turn`,
        desc: `Declare: Pick a visible enemy Monster or Cavalry unit within 6" of this unit to be the target. 
        Effect: The target's melee weapons have the Companion weapon ability for the rest of the turn.`,
        when: [COMBAT_PHASE],
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
        name: `Destined Quarry`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it by this units attacks this phase to be the target. 
        Effect: Add 1 to hit rolls for combat attacks made by friendly Warflock units that target that enemy unit for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Tzaangor Enlightened': {
    effects: [
      {
        name: `All Too Predictable`,
        desc: `Effect: If this unit charged this turn, pick 1 of the following effects to apply for the rest of the turn:
        This unit's Tzeentchian Spear and Vicious Beak has Crit (2 Hits).
        Add 1 to the Rend characteristic of this unit's Tzeentchian Spear and Vicious Beak.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Tzaangors: {
    effects: [
      {
        name: `Eldritch Raiders - Passive`,
        desc: `Effect: Add 1 to wound rolls for this unit's attacks while it is wholly within enemy territory.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Jade Obelisk': {
    effects: [
      //  TzaangorChampionEffect, BabblingStreamOfSecretsEffect, GuidedByThePastEffect
      {
        name: `Idolarc - Passive`,
        desc: `Effect: This unit's Idolarc is a token. After setting up this unit on the battlefield for the first time, place its Idolarc next to it.`,
        when: [DURING_SETUP],
      },
      {
        name: `Silver Monoliths - Passive`,
        desc: `Effect: Subtract 1 from the Rend characteristic of weapons used for attacks that target this unit while it is wholly within 12" of a friendly Argent Shard.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Chosen by the Stone - Once Per Turn`,
        desc: `Declare: If this unit has any models carrying an Antithete Bow, pick a visible enemy unit within 18" of this unit to be the target.
        Effect: Roll a dice. On a 3+, place the Idolarcs of all other friendly Jade Obelisk units next to their respective units. Then, place this unit's Idolarc next to the target.
        While a friendly Idolarc is next to an enemy unit, subtract 1" from that enemy unit's Move characteristic for each fate point you have. This ability cannot reduce an enemy unit's Move characteristic below half its unmodified value.`,
        when: [SHOOTING_PHASE],
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
  'ROR: Diseased Revellers': {
    effects: [
      {
        name: `The Piper's Infectious Melodies - Passive`,
        desc: `Effect: While a Beast of Nurgle in this Regiment of Renown is within 3" of this Regiment of Renown's Sloppity Bilepiper, it can use the 'Attention Seekers' ability even if the other Beast of Nurgle in this Regiment of Renown has already used it this turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Beasts of Nurgle: Attention Seekers - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick the closest enemy unit to it to be the target. If 2 or more enemy units are tied to be the closest, you can pick which is the target. Then, make a charge roll of 2D6.
        Effect: This unit can move a distance equal to the value of the charge roll. It can move through the combat ranges of enemy units and must end that move within 1/2" of the target. Then, inflict D3 mortal damage on the target. This unit has charged.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Beasts of Nurgle: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Sloppity Bilepiper: Jolly Gutpipes - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Maggotkin of Nurgle Daemon unit wholly within 12" of this unit or a visible enemy unit within 12" of this unit to be the target.
        Effect: If you picked a friendly unit to be the target, roll a dice. If the roll equals or exceeds the target's Control characteristic, add 2 to run rolls and charge rolls for the target until the start of your next turn.
        If you picked an enemy unit to be the target, roll a dice. If the roll equals or exceeds the target's Control characteristic, until the start of your next turn, while this unit is on the battlefield, inflict D3 mortal damage on the target:
        Each time the target ends a move further from this unit than it was at the start of the move, after the ability used by the target has been resolved.
        Each time the target is removed from the battlefield and set up again on the battlefield further from this unit than it was before it was removed, after the ability used by the target has been resolved.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: The Pustules': {
    effects: [
      {
        name: `Blighted Growth`,
        desc: `Effect: Set up this Regiment of Renown's Feculent Gnarlmaw wholly within friendly territory and more than 3" from all objectives and other terrain features. After you have done so, it has been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Multitudinous Diseases - Once Per Turn`,
        desc: `Declare: If this Regiment of Renown's Plaguebearers unit is wholly within 12" of this Regiment of Renown's Feculent Gnarlmaw, pick that Plaguebearers unit to be the target.
        Effect: Heal (1) the target. If the target is contesting an objective, you can also return 1 slain model to the target unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Spoilpox Scrivener: Keep Counting, I'm Watching You - Once Per Turn`,
        desc: `Declare: Pick a friendly Plaguebearers unit wholly within 12" of this unit to be the target.
        Effect: Roll a dice. On a 2+, pick 1 of the following effects to apply until the start of your next turn: 
        Tally of Blows: Add 1 to wound rolls for the target's combat attacks.
        Recorded Stamina: Add 5 to the target's control score.`,
        when: [HERO_PHASE],
      },
      {
        name: `Spoilpox Scrivener: Stupefying Sneezes - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster that had any damage points allocated to it this phase by this unit's shooting attacks to be the target.
        Effect: The target cannot use Rampage abilities until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Plaguebearers: Cloud of Flies - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit while it is contesting an objective you control.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Feculent Gnarlmaw (Faction Terrain) -  Riddled with Disease - Passive`,
        desc: `Effect: Each time a friendly Maggotkin of Nurgle Daemon unit wholly within 12" of this terrain feature uses the 'Rally' command, you can make 1 additional rally roll of D6. If that unit is a non-Hero unit, you can make 3 additional rally rolls of D6 instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Feculent Gnarlmaw (Faction Terrain) - Tendrils of Corruption`,
        desc: `Effect: For the rest of the phase, this terrain feature has a Move characteristic of 3" and can immediately move 3". It cannot move through or end that move within the combat ranges of enemy units and it cannot end that move on an objective or another terrain feature.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
