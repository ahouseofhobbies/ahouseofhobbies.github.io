import { TItemDescriptions } from 'factions/factionTypes'
import { CHARGE_PHASE, DURING_GAME, END_OF_TURN, HERO_PHASE, SHOOTING_PHASE } from 'types/phases'

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
