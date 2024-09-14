import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
} from 'types/phases'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'
import { OGOR_MAWTRIBES } from 'meta/factions'

const BattleTraits = {
  [OGOR_MAWTRIBES]: {
    effects: [
      {
        name: `Trampling Charge`,
        desc: `Declare: Pick a friendly Ogor or Rhinox unit that charged this turn to use this ability, then pick a visible enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Ravenous Brutes - Passive`,
        desc: `Effect: Add 2 to run rolls for friendly Ogor units while you have not used the Feast on Flesh ability this battle.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Feast on Flesh - Once Per Battle`,
        desc: `Declare: Pick each friendly Ogor unit that is in combat or that used a Fight ability this turn to be the targets. 
        Effect: Roll a D3 for each target. On a 2+:  
        Heal (X) the target, where X is an amount equal to the roll.  
        Pick an enemy unit in combat with the target. You cannot pick the same enemy unit more than once. Inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Great Mawpot (Faction Terrain) - Great Mawpot - Passive`,
        desc: `Effect: The Great Mawpot is either full or empty. It starts the battle full.`,
        when: [DURING_SETUP],
      },
      {
        name: `Great Mawpot (Faction Terrain) - Throw 'Em In - Passive`,
        desc: `Effect: If an enemy model is slain within 6" of the Great Mawpot when it is empty, it becomes full.`,
        when: [DURING_GAME],
      },
      {
        name: `Great Mawpot (Faction Terrain) - Vessel of the Gulping God`,
        desc: `Declare: If the Great Mawpot is full, pick a friendly Ogor Wizard within 3" of it to be the target. 
        Effect: Add 1 to the power level of the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Great Mawpot (Faction Terrain) - Battlebroth`,
        desc: `Effect: If the Great Mawpot is full, Heal (D3) each friendly unit wholly within 18" of it. After you have done so, the Great Mawpot is empty.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mawpit (Faction Terrain) - Altar of the Gulping God - Passive`,
        desc: `Effect: While this terrain feature has a Head Butcher:  
        The Head Butcher cannot use Move abilities.  
        Instead of measuring range or visibility to the Head Butcher, measure to this terrain feature instead.  
        All attacks that would target the Head Butcher target this terrain feature instead.  
        If this terrain feature is destroyed, before removing it from the battlefield, inflict D3 mortal damage on the Head Butcher. Then, set up the Head Butcher on the battlefield wholly within 3" of this terrain feature and not in combat. That unit is no longer a Head Butcher. If it is not possible to set up the Head Butcher, it is slain.`,
        when: [DURING_GAME],
      },
      {
        name: `Mawpit (Faction Terrain) - Feed the Maw`,
        desc: `Declare: If this terrain feature does not have a Head Butcher, pick a friendly Butcher or Slaughtermaster within 3" of it to be the target. 
        Effect: Place the target on this terrain feature. The target is now a Head Butcher (see Altar of the Gulping God).`,
        when: [HERO_PHASE],
      },
      {
        name: `Mawpit (Faction Terrain) - Step Away from the Maw`,
        desc: `Effect: If this terrain feature has a Head Butcher, set up the Head Butcher on the battlefield wholly within 3" of this terrain feature and not in combat. That unit is no longer a Head Butcher.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Mawpit (Faction Terrain) - Throat of Ghur`,
        desc: `Declare: Pick up to 3 enemy units within 12" of this terrain feature, or within 18" if it has a Head Butcher, to be the targets. 
        Effect: Roll a D3 for each target. Add 1 to the roll if the target is more than 3" from all other enemy units. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [HERO_PHASE],
      },
    ],
  },

 /* 'Ravenous Brutes': {
    effects: [
      {
        name: `Ravenous Brutes`,
        desc: `If an OGOR unit is more than 3" from any enemy units, it is hungry. If an OGOR unit is within 3" of any enemy units, it is eating. Add 2" to the Move characteristic of a unit that is hungry. Add 2 to the Bravery characteristic of a unit that is eating.`,
        when: [DURING_GAME],
      },
      {
        name: `Ravenous Brutes`,
        desc: `If an OGOR unit is more than 3" from any enemy units, it is hungry. Add 2" to the Move characteristic of a unit that is hungry.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Ravenous Brutes`,
        desc: `If an OGOR unit is within 3" of any enemy units, it is eating. Add 2 to the Bravery characteristic of a unit that is eating.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },

  'Gulping Bites': {
    effects: [
      {
        name: `Gulping Bites`,
        desc: `Roll a dice for each enemy unit within 3" of any friendly GUTBUSTERS OGOR units. On a 4+, that unit suffers D3 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },

  'The Roving Maw': {
    effects: [
      {
        name: `Mawpits of Ghur`,
        desc: `At the start of each battle round, after determining which player will take the first turn, you must determine the hunger status of the Mawpits on the battlefield by rolling 2D6. If you included a Mawpit in your army, add the number of models slain by its Head Butcher ability during the battle to the roll. If the Mawpit is garrisoned by a Head Butcher, add 1 to the roll. Then, pick 1 result from the Mawpit Table that has a score equal to or less than your modified dice roll to apply for that battle round.

        A unit is vulnerable to Mawpits if it is on the battlefield unless it is wholly within 1" of a terrain feature that is not a Mawpit or it can fly. This ability has no effect on ROVING MAW units.
                
        2-3: Subdued: No effect.
        4-5: Peckish: Subtract 1 from the Bravery characteristic of units that are vulnerable to Mawpits.
        6-8: Rumbling: Roll a dice for each unit that is vulnerable to Mawpits. On a 5+, that unit suffers 1 mortal wound.
        9-11: Famished: Units that are vulnerable to Mawpits and that do not have the HERO keyword cannot issue commands.
        12+: Ravenous: Roll a dice for each unit that is vulnerable to Mawpits. On a 4+, that unit suffers D3 mortal wounds. `,
        when: [START_OF_ROUND],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Driven by Starvation`,
        desc: `Friendly GORGERS units that are not wholly within 1" of a terrain feature at the start of your charge phase can attempt a charge even if they ran in the same turn.`,
        when: [START_OF_CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `The Butcher's Kitchen`,
        desc: `For each BUTCHER included in your army, you can include 1 GORGERS unit as a Battleline unit.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Gobbling Bites`,
        desc: `At the end of the combat phase, roll a dice for each enemy unit within 3" of any friendly GUTBUSTERS units. On a 2+, that enemy unit suffers D3+1 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ], */

} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
