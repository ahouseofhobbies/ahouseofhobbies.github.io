import { TItemDescriptions } from 'factions/factionTypes'
import { CHARGE_PHASE, DURING_GAME, HERO_PHASE, SHOOTING_PHASE } from 'types/phases'

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
