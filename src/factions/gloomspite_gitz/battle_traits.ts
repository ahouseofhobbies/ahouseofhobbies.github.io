import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { GLOOMSPITE_GITZ } from 'meta/factions'
import meta_rule_sources from 'meta/rule_sources'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  SAVES_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  TURN_ONE_START_OF_ROUND,
} from 'types/phases'

const BattleTraits = {
  /* 'The Bad Moon': {
    effects: [
      {
        name: `The Bad Moon Setup`,
        desc: `If any of the armies in a battle are Gloomspite Gitz armies, in the first battle round, after players have received their starting command points but before the start of the first turn, the player commanding the Gloomspite Gitz army picks 1 large quarter of the battlefield (core rules 28.2.8) as the Bad Moon's starting location. If more than 1 player in the battle is commanding a Gloomspite Gitz army, then those players roll off and the winner picks which large quarter is the Bad Moon's starting location.`,
        when: [TURN_ONE_START_OF_ROUND],
      },
      {
        name: `The Bad Moon Movement`,
        desc: `During the battle, the Bad Moon will move and its location will change. The Bad Moon starts in a large quarter of the battlefield. The first time it moves, it moves to the centre of the battlefield. Then it moves to the large quarter diagonally opposite the large quarter in which it started. Finally, it moves off the battlefield.

        At the start of the second and each subsequent battle round, before the priority roll, the player commanding the Gloomspite Gitz army rolls a dice. If more than 1 player in the battle is commanding a Gloomspite Gitz army, then those players roll off and the winner rolls the dice. On a 1-3, the Bad Moon does not move and instead stays at its current location. On a 4+, it moves to the next location. When the Bad Moon moves off the battlefield, it has no further effect on the battle.
        
        The location of the Bad Moon determines which GLOOMSPITE GITZ units are affected by the Light of the Bad Moon. While the Bad Moon is located in a large quarter of the battlefield, all GLOOMSPITE GITZ units wholly within the same large quarter are affected. While it is located in the centre of the battlefield, all GLOOMSPITE GITZ units on the battlefield are affected.`,
        when: [START_OF_ROUND],
      },
    ],
  }, */

  [GLOOMSPITE_GITZ]: {
    effects: [
      {
        name: `Under the Light of the Bad Moon - Passive`,
        desc: `Effect: During the battle, the effects below apply to friendly Gloomspite Gitz units based on the current face of the Bad Moon:
        Frothing Zealots: While the Bad Moon is Cacklin' or Grinnin', add 5 to the control scores of friendly non-Squig Moonclan units.
        Spiderfang Venom: While the Bad Moon is Cacklin' or Grinnin', combat attacks made by friendly Spiderfang units score critical hits on unmodified hit rolls of 5+. This also affects Companion weapons.
        Moonlit Hide: Whiile the Bad Moon is Grinnin' or Scowlin', subtract 1 from the Rend characteristic of combat attacks that target friendly Troggoth units.
        Lunar Squigs: While the Bad Moon is Scowlin' or Sulkin', instead of rolling the dice to determine the Move charactristic of a friendly Squig unit, you can use a value of 4.
        Sneaky Snarlfangs: While the Bad Moon is Sulkin' or Cacklin', friendly Gitmob units can use the Charge and Shoot abilities even if they use a Retreat ability on the same turn.`,
        when: [DURING_GAME],
      },
      {
        name: `The Faces of the Bad Moon - Once Per Battle Round`,
        desc: `Declare: You must use this ability at the start of the battle round. If multiple players are commanding a Gloomspite Gitz army, then instead, at the start of the battle round, those players roll off and only the winner declares and uses this ability this battle round.
        Effect: If it is the first battle round, pick the starting face of the Bad Moon (Grinnin', Scowlin ', Sulkin' or Cacklin'). If this is not the first battle round, the face of the bad moon moves to the next face in the sequence.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Command Ability - Bad Moon LoonShrine (Faction Terrain) - Moonclan Lairs - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero non-Monster non-War Machine Gloomspite Gitz unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this terrain feature and more than 3" from all enemy units.`,
        when: [END_OF_TURN],
      },

      // Heroic Actions
    ],
  },

  /* "Trugg's Troggherd": {
    effects: [
      {
        name: `Moonlit Hide`,
        desc: `Add 1 to save rolls for attacks that target friendly TRUGG'S TROGGHERD units while they are affected by the Light of the Bad Moon.`,
        when: [SAVES_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
      {
        name: `Aura of Haywire Magic`,
        desc: `At the start of your hero phase, if you use a friendly TRUGG'S Malfunctioning Leystone ability, the effect you pick applies to all other friendly TRUGG'S TROGGHERD units until the start of your next hero phase.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
      {
        name: `The King's Wreckerz`,
        desc: `Friendly TRUGG'S TROGGHERD units that do not have the HERO keyword gain the Battleline battlefield role.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
