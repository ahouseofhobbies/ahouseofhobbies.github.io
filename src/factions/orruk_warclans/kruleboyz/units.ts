import { DestructionUnits } from 'factions/grand_alliances'
import { keyPicker, tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_TURN,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from '../rule_sources'
import spells from './spells'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

/*const AllPartOfDaPlanEffect = {
  name: `All Part of Da Plan`,
  desc: `lf a friendly KRULEBOYZ unit fails a battleshock test within 3" of any friendly units with this ability, only 1 model from that unit will flee.`,
  when: [BATTLESHOCK_PHASE],
  shared: true,
}

const PickEmOffEffect = {
  name: `Pick 'Em Off`,
  desc: `When this unit attacks with its ranged weapon, use the Aimed Shot missile weapon characteristics if it did not make a normal move in the same turn and is more than 3" from all enemy units. Otherwise, use the Hasty Shot missile weapon characteristics.`,
  when: [SHOOTING_PHASE],
  shared: true,
} */

const KruleboyzUnits = {
  Kragnos: {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of The Dread Mace is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Shield Inviolate - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 3+, ignore the effect of that spell on this unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Avatar of Destruction - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Rampaging Destruction - Once Per Turn`,
        desc: `Effect: If this unit charged this phase, pick 1 of the following effects: 
        Roll a dice for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll. 
        Pick an enemy Monster in combat with this unit and roll 2D6. On a 7, this ability has no effect. Otherwise, inflict an amount of mortal damage on that unit equal to the results on the dice used for the 2D6 roll multiplied together. For example, a 2D6 roll of 2 and 6 would inflict 12 mortal damage (2x6).`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The End of Empires - Passive`,
        desc: `Effect: For the rest of the turn, add 1 to the number of dice rolled when making charge rolls for friendly Destruction units while they are wholly within 12" of this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Man-Skewer Boltboyz': {
    effects: [
      //  PickEmOffEffect
      {
        name: `Man-Skewer Crossbows - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, pick either the Hasty Shot or Aimed Shot weapon characteristics for all the attacks it makes with its Man-skewer Crossbows.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Pick 'Em Off`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Hobgrot Slittaz': {
    effects: [
      {
        name: `Scrap-Bang`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+: 
        Inflict 1 mortal damage on the target. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Gutrippaz: {
    effects: [
      {
        name: `Scare Taktikz`,
        desc: `Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for attacks made by non-Hero units that target this unit for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Murknob with Belcha-Banna': {
    effects: [
      {
        name: `Power of Kragnos - Passive`,
        desc: `Effect: Friendly Kruleboyz units have Ward (6+) while they are wholly within 12" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Breath of the Mire-Drakes`,
        desc: `Declare: Pick each enemy unit in combat with this unit to be the targets. 
        Effect: Roll a dice for each target. On a 1, this ability has no effect. On a 2-5, inflict 1 mortal damage on the target. On a 6, inflict D3 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Swampcalla Shaman and Pot-grot': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Summon Boggy Mist'])],
    }, */
    effects: [
      {
        name: `Pot-Grot - Passive`,
        desc: `Effect: This units Pot-grot is a token. Add 1 to casting rolls for this unit while its Pot-grot is on the battlefield. If you make an unmodified casting roll of 4 or less for this unit, remove its Pot-grot from the battlefield.`,
        when: [HERO_PHASE],
      },
      {
        name: `Foul Elixers - Once Per Turn`,
        desc: `Declare: Pick a friendly Kruleboyz Infantry unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, add 1 to save rolls for the target for the rest of the turn. On a 1, allocate D3 damage points to the target (ward rolls cannot be made for those damage points).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Killaboss on Great Gnashtoof': {
    effects: [
      // AllPartOfDaPlanEffect,
      {
        name: `That's Ours, Ya Gitz! - Passive`,
        desc: `Effect: While this unit is contesting an objective you do not control, add 1 to hit rolls for combat attacks made by friendly Kruleboyz Infantry units wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `All Part of Da Plan`,
        desc: `Declare: Pick another friendly Kruleboyz unit wholly within 9" of this unit to be the target. 
        Effect: Add 3 to the targets control score until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Killaboss on Great Gnashtoof (SoG)': {
    effects: [
      // AllPartOfDaPlanEffect,
      {
        name: `Prowling the Flanks - Once Per Turn`,
        desc: `Effect: If this unit is wholly within 6" of the battlefield edge, remove this unit from the battlefield and set it up again wholly within 6" of the battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Drag 'Em Out - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry Hero in combat with this unit to be the target. 
        Effect: Roll 2D6. This unit can move a distance in inches up to the value of the roll. Then, if possible, your opponent must remove the target from the battlefield and set it up again within 1" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Killaboss on Corpse-Rippa Vulcha': {
    effects: [
      //  AllPartOfDaPlanEffect,
      {
        name: `Commanding View - Reaction: You declared the Redeploy command for a friendly Gutrippaz unit wholly within 12" of this unit`,
        desc: `Effect: If you roll a 1-3 when determining the distance that unit can move, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Vulchas Talons and Beak is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulcha Dive - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a number of dice equal to the unmodified charge roll. For each 4+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Killaboss with Stab-grot': {
    effects: [
      //  AllPartOfDaPlanEffect,
      {
        name: `Stab-Grot - Passive`,
        desc: `Effect: This units Stab-grot is a token. If this units Stab-grot has been removed, it can no longer attack with its Stab-grots Shiv and it cannot use the Unleash the Stab-grot! ability.`,
        when: [DURING_GAME],
      },
      {
        name: `Unleash the Stab-Grot! - Once Per Battle`,
        desc: `Effect: Pick 1 of the following effects: 
        Pick an enemy unit in combat with this unit to be the target. Inflict D3 mortal damage on the target. 
        This unit has Ward (5+) for the rest of the turn. 
        After resolving either effect, remove this units Stab-Grot from the battlefield.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Keep 'Em in Line - Reaction: You declared the All Out Attack command for a friendly Kruleboyz Infantry unit`,
        desc: `Effect: If this unit is wholly within 12" of the unit using the All-out Attack command, add 1 to wound rolls for combat attacks made by that unit for the rest of the phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Beast-Skewer Killbow': {
    effects: [
      // PickEmOffEffect,
      {
        name: `Skewering Bolts - Once Per Turn`,
        desc: `Effect: For the rest of the turn, the Damage characteristic of this units Beast-Skewer Bolts is 6 if the target is a Monster.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Pick 'Em Off`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Breaka-boss on Mirebrute Troggoth': {
    effects: [
      {
        name: `Breaka-Harness`,
        desc: `Effect: Inflict D3 mortal damage on this unit. For each damage point allocated to this unit by this ability, add 2 to the Attacks characteristic of this units Mirebrutes Clubs for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Regeneration`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [START_OF_TURN],
      },
      {
        name: `Tear Limb from Limb - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit within 1" of this unit to be the target. 
        Effect: Roll a dice. If the roll exceeds the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Gobsprakk: {
    /* mandatory: {
      spells: [
        keyPicker(spells, [
          'Choking Mist',
          'Da Black Pit',
          'Nasty Hex',
          'Sneaky Miasma',
          'Summon Boggy Mist',
        ]),
      ],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Killabeaks Talons and Beak is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crush to Death - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll exceeds the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mork Sez No! - Passive`,
        desc: `Effect: Each time this unit unbinds a spell, inflict D3 mortal damage on the caster. If the unbinding roll was 10+, inflict D6 mortal damage on the caster instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Strangle Hex: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Roll a number of dice equal to the targets Health characteristic, to a maximum of 10. For each 4+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Screamin' Mandrakk - Once Per Battle - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: This unit uses the Unbind ability but the unbinding roll is 3D6 instead of 2D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Snatchaboss on Sludgeraker Beast': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Sludgerakers Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sludgeraker Venom`,
        desc: `Declare: Pick a friendly Kruleboyz unit wholly within 12" of this unit to be the target. 
        Effect: That unit has the Sludgeraker Venom keyword for ther rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Festering Wounds - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units that had any damage points allocated to them this turn by attacks made by this unit or a friendly unit with the Sludgeraker Venom keyword to be the targets. 
        Effect: Roll a D3 for each target. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. 
        Subtract 1 from wound rolls for attacks made by the target until the end of the next turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Swampboss Skumdrekk': {
    effects: [
      {
        name: `Bet-Master`,
        desc: `Declare: Pick an enemy unit on the battlefield to be the bet. 
        Effect: Add 1 to wound rolls for attacks made by this unit and friendly Hobgrot Slittaz units that target the bet.`,
        when: [DURING_SETUP],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Sloppklaws Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Kountin' Krew`,
        desc: `Declare: Pick a friendly Hobgrot Slittaz unit within this units combat range to be the target. 
        Effect: For the rest of the battle, the targets Slitta-knives have Crit (Mortal) while they are wholly within 12" of this unit.`,
        when: [DURING_SETUP],
      },
      {
        name: `Aggravate Wounds - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the number of damage points the target has. For each 5+, inflict 1 mortal damage on the target.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Swampboss Skumdrekk (SoG)': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Sloppklaws Bite and Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Rigged Odds - Passive`,
        desc: `Effect: The first time you fail a dirty trick roll each turn, give this unit 1 betting chip. 
        Each time you make a dirty trick roll for an ability that targets a unit wholly within 12" of this unit, you can spend any number of betting chips after seeing the result of the roll. For each betting chip you spend, add 1 to that dirty trick roll.`,
        when: [DURING_GAME],
      },
      {
        name: `Thrashing Tail - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is less than or equal to the number of models in the target unit, for the rest of the turn, each time this unit uses an Attack ability, if all of the attacks target that enemy unit, those attacks score critical hits on unmodified hit rolls of 5+. This ability also affects Companion weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Marshcrawla Sloggoth': {
    effects: [
      {
        name: `On Da March - Passive`,
        desc: `Effect: While they are wholly within 12" of this unit, friendly Kruleboyz Infantry units can use Charge abilities even if they used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Regeneration`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [START_OF_TURN],
      },
    ],
  },
  /*  "Mannok Da Kunnin'": {
    effects: [
      {
        name: `Kunnin' Tricks`,
        desc: `If this unit is part of a Kruleboyz army, after you have picked a Dirty Trick to employ during the battle, roll a dice. Add 1 to the roll if this unit is your general. On a 5+, you can pick a second Dirty Trick to employ during the battle. The second Dirty Trick must be different to the first one you picked.`,
        when: [DURING_GAME],
      },
      {
        name: `Spasming Wreck`,
        desc: `When you use the Venom-encrusted Weapons battle trait for this unit, mortal wounds are caused on an unmodified hit roll of 5+ instead of 6.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `You Lot Hold 'Em Off`,
        desc: `Before you allocate a wound or mortal wound to this unit, or instead of making a ward roll for a wound or mortal wound that would be allocated to this unit, if this unit is within 3" of a friendly DA KUNNIN' KREW unit, you can roll a dice.

        On a 1, that wound or mortal wound is allocated to this unit as normal. On a 2-5, that wound or mortal wound is allocated to that friendly DA KUNNIN' KREW unit instead of this unit. On a 6, that wound or mortal wound is negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, 
  "Da Kunnin' Krew": {
    effects: [
      {
        name: `Champion`,
        desc: `Torka Tuffskul is the unit champion. Add 1 to that model's Wounds characteristic.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Snatcha-krew`,
        desc: `At the end of the combat phase, you can pick 1 enemy model within 2" of this unit and roll a dice. Add 1 to the roll if this unit includes Torka Tuffskul, and add 1 to the roll if this unit includes Shank. If the roll is at least double that model's Wounds characteristic, it is slain.`,
        when: [END_OF_COMBAT_PHASE],
      },
      {
        name: `Paymaster`,
        desc: `Do not take battleshock tests for this unit if it includes Krookgrin.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  }, */
  'Kruleboyz Monsta-Killaz': {
    effects: [
      {
        name: `Klutcha-Grot - Passive`,
        desc: `Effect: This units Klutcha-grot is a token. If it is removed from the battlefield, this unit cannot use the A Tough Grot to Swallow ability.`,
        when: [DURING_GAME],
      },
      {
        name: `A Tough Grot to Swallow - Once Per Turn - Reaction: Opponent declared a Rampage ability for an enemy Monster within 6" of this unit`,
        desc: `Effect: Roll a dice. On a 2+, that Rampage ability has no effect. On a 1, remove this units Klutcha-grot from the battlefield.`,
        when: [DURING_GAME],
      },
      {
        name: `Bait and Trap`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. Add 1 to the roll if the target is damaged. On a 3+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Hobgrot Slittaboss': {
    effects: [
      {
        name: `Kompany Taktikz - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Hobgrot Slittaz unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to wound rolls for the target's attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toxic Stash - Once per Battle`,
        desc: `Declare: Pick an enemy Infantry Hero in combat with this unit to be the target.
        Effect: Roll 2D6. If the roll exceeds the target's Health characteristic, it is automatically destroyed.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Braggit`s Bottle-Snatchaz': {
    effects: [
      {
        name: `Super-Secret Tunnels`,
        desc: `Declare: Pick a unit in this Regiment of Renown that has not been deployed. 
        Effect: Set up that unit in reserve in a super-secret tunnel. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Sudden Emergence - Once Per Turn`,
        desc: `Declare: If the Rabble-Rowza in this Regiment of Renown is in a super-secret tunnel, pick it to be the target. 
        Effect: Set up the target anywhere on the battlefield more than 9" from all enemy units. Then, set up all other friendly units that are in a super-secret tunnel within 3" of the target and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Rabble-Rowza: Neh Neh Na-Neh Neh! Can't Catch me! - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Monster or Beast unit to be the target. 
        Effect: For the rest of the turn, the target can use Charge abilities even if it used a Run ability in the same turn, but each time it uses a Move ability, it must end the move closer to this unit. 
        In addition, for the rest of the turn, the first time the target ends a move within this units combat range, inflict D6 mortal damage on this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gobbapalooza: Hallucinogenic Fungus Brews - Passive`,
        desc: `Effect: In the first battle round, this unit has Ward (4+). In the second battle round, this unit has Ward (5+). In the third and subsequent battle rounds, this unit has Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Gobbapalooza: Gobbapalooza Know-Wotz`,
        desc: `Effect: Roll a dice. On a 3+, pick 1 of the following effects: 
        Glareface Dance: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to run rolls and charge rolls for that unit until the start of your next turn. 
        Nasty Poisons: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to the Rend characteristic of that units weapons until the start of your next turn. 
        Mesmerise: Pick a visible enemy unit within 12" of this unit. Until the start of your next turn, that unit cannot use commands.`,
        when: [HERO_PHASE],
      },
      {
        name: `Squig Herd: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Squig Herd: Squigs Gone Wild - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Squig Herd: Herding Squigs`,
        desc: `Effect: Roll a dice for each Squig Herder in this unit. For each 2+, you can return D3 slain Cave Squigs to this unit. For each 1, 1 Squig Herder in this unit is slain.`,
        when: [HERO_PHASE],
      },
      {
        name: `Squig Hoppers: Boing! Boing! Boing!`,
        desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
        Effect: Roll a dice for each model in this unit that passed across the target. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sneaky Distraction: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Gobbapalooza in this Regiment of Renown to cast this spell, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from hit rolls for attacks made by enemy units while they are wholly within 12" of the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Odo Godswallow': {
    effects: [
      {
        name: `Beast-Breaking Strike`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 5D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Behemoth Brawler - Passive`,
        desc: `Effect: Subtract 1 from the Attacks characteristic of enemy Monsters while they are in combat with this unit.`,
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Menhir Club is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mighty Walloper - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Big Drogg Fort-Kicka': {
    effects: [
      {
        name: `Pulverising Strike`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 4D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Smash Down - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 3" of this unit to be the target. 
        Effect: If the target is Faction Terrain, inflict D3+3 mortal damage on it. Then, roll a D3 for each non-Monster unit (friendly and enemy) within 3" of the target. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Fortcrusha Flail is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grievous Halitosis - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
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
  'ROR: Goroan Scions': {
    effects: [
      {
        name: `Ogroid Myrmidon: Pit Master - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Ogroid Theridons unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Myrmidon: Myrmidon Rage - Passive`,
        desc: `Effect: While this unit is damaged, add 2 to the Attacks characteristic of its melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Thaumaturge: Thaumaturge Rage - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units combat attacks while it is damaged.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Thaumaturge: Burning Fury - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by this units combat attacks to be the target. 
        Effect: The target has the Burning keyword.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Theridons: Unleashed Savagery - Once Per Battle`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Goroan Forgecraft - Once Per Turn`,
        desc: `Declare: Pick a friendly Destruction Hero that is wholly within the combat range of a Hero in this Regiment of Renown to be the target. 
        Effect: On a 3+, add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bellow of Gorkamorka: Casting value of 7`,
        desc: `Declare: Pick the Ogroid Thaumaturge in this Regiment of Renown to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: The target has Strike-last until the start of your next turn. In addition, while the target has the Burning keyword, subtract 1 from hit rolls for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Da Hurtlin Hogz': {
    effects: [
      {
        name: `Tuskboss on Maw-Grunta: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Maw-gruntas Tusks is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Tuskboss on Maw-Grunta: Head of the Stampede - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick up to 3 friendly Maw-grunta units wholly within 12" of this unit that charged this turn to be the targets. 
        Effect: Add 1 momentum point to each target.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Tuskboss on Maw-Grunta, Maw-Grunta Gougers: Unstoppable Momentum - Passive`,
        desc: `Effect: Each time this unit has charged as a result of using a Charge ability, it gains 1 momentum point. Each time it uses a Run ability, it gains 2 momentum points. It can have a maximum of 3 momentum points at once. 
        Add the number of momentum points this unit has to the Damage characteristic of its Maw-gruntas Tusks. At the end of each battle round, subtract 1 from its momentum points, to a minimum of 0`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Maw-Grunta Gougers: Flattened Into the Mud - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a dice and add the number of momentum points this unit has to the roll. On a 5+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grunta Waaagh! - Once Per Battle`,
        desc: `Declare: You can use this ability if this Regiment of Renown's Tuskboss on Maw-Grunta is on the battlefield. 
        Effect: For the rest of the phase, each time a friendly unit in this Regiment of Renown finsihes a charge move, roll a D3 for each enemy unit within 1" of that unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll. If that enemy unit is Infantry, add 1 to the mortal damage inflicted (if any).`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Pullin Ahead - Once Per Turn`,
        desc: `Declare: Pick a friendly unit in this Regiment of Renown that charged this turn and has not used any Rampage abilities this turn to be the target. 
        Effect: The target can move D6". It must end that move in combat. Then, add 1 to the target's momentum points. After this abilty has been resolved, the target cannot use any other Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: The Shinestealaz': {
    effects: [
      {
        name: `Snarlboss: Boss Snarlfang - Passive`,
        desc: `Effect: Add 2 to charge rolls for friendly Gitmob Cavalry units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Snarlboss: Vicious Snarls and Great Howls - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick this unit and up to 2 friendly Gitmob Cavalry units within this unit's combat range to be the targets.
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of the targets' Companion melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wolfgit Retinue: I Got Dis, Boss - Passive`,
        desc: `Effect: While a friendly Snarlboss is within this unit's combat range, both this unit and that Snarlboss have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Snarlpack Cavalry: Markin' Territory - Passive`,
        desc: `Effect: If this unit charged this turn, add 5 to its control score for the rest of the turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Snarlpack Cavalry: Frazzleburned Scrap - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, it has Strike-First for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sunsteala Wheelas: Careening Destruction - Once Per Turn`,
        desc: `Effect: This unit can move a distance up to its Move characteristic. It can pass through other models and the combat ranges of enemy units, but it cannot end that move in combat. Then, pick up to 1 enemy Infantry unit that this unit passed across during that move to be the target. Inflict D3 mortal damage on the target. Add 1 to the amount of mortal damage inflicted for each model in this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sneaky Prowlin'`,
        desc: `Declare: Pick all units in this Regiment of Renown if none of them have been deployed.
        Effect: Set up these units in reserve prowlin' around. They have been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Ambush Time! - Once Per Battle`,
        desc: `Declare: Pick all units in this Regiment of Renown if they are prowlin' around.
        Effect: Set up those units anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Skulkriks Loonladz': {
    effects: [
      {
        name: `Loonboss: Let's Get Stabbin'! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Moonclan Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Loonboss: I'm Da Boss`,
        desc: `Declare: Pick a visible friendly Moonclan Stabbas unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, pick one of the following effects: 
        Get Back Ere!: If the target is not in combat, you can return D6 slain models to it. 
        Stab Em Good!: Add 1 to wound rolls for the targets attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Moonclan Stabbas: Netters`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Loonsmasha Fanatics: Release the Fanatics!`,
        desc: `Declare: Pick this unit if it is hidden among the mobs. Then, pick a friendly Moonclan Shootas or Moonclan Stabbas unit that has 10 or more models to be the target. 
        Effect: Set up this unit anywhere on the battlefield wholly within 6" of the target and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Loonsmasha Fanatics: Hidden Loons`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve hidden among the mobs. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Loonsmasha Fanatics: Whirling Death - Passive`,
        desc: `Effect: This unit has Strike-first.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `On Da Moons Trail - Passive`,
        desc: `Effect: The melee weapons of units in this Regiment of Renown have Anti-Charge (+1 Rend) while they are contesting an objective you control.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  // ...keyPicker(DestructionUnits, ['Rogue Idol']),
} satisfies TItemDescriptions

export default tagAs(KruleboyzUnits, 'unit')
