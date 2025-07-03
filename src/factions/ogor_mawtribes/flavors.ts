import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const Flavors = {
  'Prophets of the Gulping God': {
    effects: [
      {
        name: `Master Butchers - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Ogor Mawtribes Wizards.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Beast Handlers': {
    effects: [
      {
        name: `Brutal Stock - Passive`,
        desc: `Effect: Each time a friendly Beastclaw Raiders Monster uses the Trampling Charge ability, add 1 to the amount of mortal damage inflicted, if any.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Heralds of the Everwinter': {
    effects: [
      {
        name: `Eyes of the Storm - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for shooting attacks that target friendly Ogor Mawtribes Infantry units while they are wholly within 12" of any friendly Beastclaw Raiders Heroes.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Blackpowder Fanatics': {
    effects: [
      {
        name: `Feed Yer Cannons! - Passive`,
        desc: `Effect: Ranged weapons used by friendly Leadbelchers and Ironblaster units have Shoot in Combat while they are within the combat range of a friendly Ogor Mawtribes Hero.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Mawpath Menaces': {
    effects: [
      {
        name: `Fixated on Feeding - Once Per Turn`,
        desc: `Declare: Pick a friendly Ogor Infantry unit that is not in combat to be the target. 
        Effect: Roll a dice. On a 3+, the target can move a number of inches equal to the roll. It can move through the combat ranges of enemy units and can end that move in combat. If it does so, the target has charged.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Greedy Eaters': {
    effects: [
      {
        name: `Postprandial Warfare - Once Per Turn`,
        desc: `Declare: Pick up to D3 friendly Ogor Infantry units that were in combat with an enemy unit when it was destroyed this turn to be the targets. 
        Effect: Return 1 slain model to each target unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'The Roving Maw (AoR)': {
    effects: [
      {
        name: `Tasty Morsels - Passive`,
        desc: `Effect: Each time a model is slain by a friendly Mawpits Throat of Ghur ability, you gain 1 tasty morsel.`,
        when: [DURING_GAME],
      },
      {
        name: `Driven by Starvation - Passive`,
        desc: `Effect: Friendly Gorger Mawpack units can use Charge abilities even if they used a Run ability in the same turn unless they are wholly within 3" of a terrain feature.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Trampling Charge`,
        desc: `Declare: Pick a friendly Roving Maw unit that charged this turn to use this ability, then pick a visible enemy unit within 1" of it to be the target. 
          Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The Realm Hungers - Passive`,
        desc: `Effect: Units and Manifestations are vulnerable to Mawpits while they are on the battlefield unless they are wholly within 1" of a terrain feature that is not a Mawpit. This ability has no effect on Roving Maw units or units that have Fly.`,
        when: [DURING_GAME],
      },
      {
        name: `Mawpits of Ghur - Once Per Battle Round`,
        desc: `Effect: Roll 2D6 and add the number of tasty morsels you have to the roll. Apply the corresponding effect below for the rest of the battle round. Then, reset your tasty morsels to 0. 
          2-3  Subdued: No effect. 
          4-5  Peckish: Subtract 3 from the control scores of units that are vulnerable to Mawpits. 
          6-8  Rumbling: Roll a dice for each unit that is vulnerable to Mawpits. On a 3+, inflict 1 mortal damage on that unit. 
          9-11  Famished: Units that are vulnerable to Mawpits cannot use commands. 
          12+  Ravenous: Roll a D3 for each unit that is vulnerable to Mawpits. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [START_OF_ROUND],
      },
    ],
  },
  /* 'Thunderbellies (Mawtribe)': {
    effects: [
      {
        name: `Swift Outflank`,
        desc: `Friendly THUNDERBELLIES MOURNFANG PACK units can run and still charge later in the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Winterbite (Mawtribe)': {
    effects: [
      {
        name: `Ghosts in the Blizzard`,
        desc: `Subtract 1 from hit rolls for attacks made with missile weapons that target friendly WiNTERBITE units wholly within your territory.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Ghosts in the Blizzard`,
        desc: `Friendly WINTERBITE FROST SABRES, ICEBROW HUNTER and ICEFALL YHETEES units are not visible to enemy models more than 12 away.`,
        when: [SHOOTING_PHASE, HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
