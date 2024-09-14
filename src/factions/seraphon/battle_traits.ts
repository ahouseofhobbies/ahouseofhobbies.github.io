import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { SERAPHON } from 'meta/factions'
import {
  COMBAT_PHASE,
  DURING_SETUP,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const BattleTraits = {
  [SERAPHON]: {
    effects: [
      {
        name: `The Great Plan - Once Per Battle`,
        desc: `Declare: Pick an Asterism ability. 
        Effect: That Asterism ability can be used for the rest of the battle, but the others cannot, unless allowed by the Further the Great Plan ability.`,
        when: [DURING_SETUP],
      },
      {
        name: `Further The Great Plan - Once Per Battle, Start of the Third Battle Round`,
        desc: `Declare: You can use this ability if you meet the condition below that corresponds to the Asterism you picked in the deployment phase. 
        Itzl the Tamer: 3 or more enemy units have been destroyed. 
        Quetzl the Preserver: There are no enemy units wholly within friendly territory. 
        Sotek the Deliverer: The enemy general is in combat or has been destroyed. 
        Tepok the Seer: There are any friendly Slann units on the battlefield and no friendly Slann units are in combat or have been destroyed. 
        Effect: Pick a different Asterism ability. It can be used in addition to the one you picked in the deployment phase.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Itzl the Tamer - Passive`,
        desc: `Effect: Companion weapons used by friendly Seraphon units have Crit (2 Hits).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Quetzl the Preserver - Passive`,
        desc: `Effect: Subtract 1 from the Rend characteristic of melee weapons for attacks that target friendly Seraphon units that are wholly within friendly territory.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sotek the Deliverer - Passive`,
        desc: `Effect: Add 2 to the Move characteristic of friendly Seraphon units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Tepok the Seer - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Seraphon units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Realmshaper Engine (Faction Terrain) - Fierce Guardians - Passive`,
        desc: `Effect: Add 1 to hit rolls for combat attacks made by friendly Saurus or Kroxigor units that target an enemy unit while that enemy unit is within 9" of this terrain feature.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Realmshaper Engine (Faction Terrain) - Power Unleashed`,
        desc: `Declare: If there are any friendly Seraphon Wizards within 3" of this terrain feature, pick another terrain feature within 24" of this terrain feature, then pick up to 3 enemy units within 3" of that terrain feature to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If that terrain feature has a Health characteristic, inflict D3 mortal damage on it.`,
        when: [HERO_PHASE],
      },
    ],
  },
 
 /* STARBORNE: {
    effects: [
      {
        name: `Contemplations of the Ancient Ones (Heroic Action)`,
        desc: `At the start of your hero phase, you can carry out this heroic action with a friendly STARBORNE SLANN instead of any other heroic action you can carry out with that HERO. Pick 1 friendly STARBORNE SLANN. Replace 1 spell that they know from the Lore of Celestial Domination with another spell from that table.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Spatial Translocation (Heroic Action)`,
        desc: `At the start of your hero phase, you can carry out this heroic action with a friendly STARBORNE SLANN instead of any other heroic action you can carry out with that HERO. Pick 1 friendly STARBORNE SLANN, and then pick 1 other friendly STARBORNE unit wholly within 12" of them. Remove that other STARBORNE unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units. That unit cannot move in the following movement phase.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Cosmic Power`,
        desc: `If you have a Starborne army, the following are considered to be cosmic nodes:

        Friendly STARBORNE WIZARD units
        Friendly STARBORNE ASTROLITH BEARER units
        Friendly Starborne Realmshaper Engine faction terrain features.
        
        During the battle, you will be able to receive cosmic power points (CPP) to spend on abilities and summoning units to the battlefield.
        
        You begin the battle with 0 cosmic power points.
        
        At the start of your hero phase, you receive 1 cosmic power point for each friendly STARBORNE WIZARD or friendly STARBORNE ASTROLITH BEARER on the battlefield.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Cosmic Power`,
        desc: `You receive 1 cosmic power point each time a friendly STARBORNE WIZARD successfully casts a spell that is not unbound, successfully unbinds a spell or successfully dispels an endless spell.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Spending Cosmic Power Points`,
        desc: `In your hero phase, you can spend your cosmic power points on any of the listed abilities. You can only use the ability if you have enough cosmic power points to do so, and the same ability cannot be used more than once each phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Azure Light (Cosmic Power)`,
        desc: `You must spend 5 cosmic power points to use this ability. You can return D3 slain models to each friendly STARBORNE unit with a Wounds characteristic of 1 or 2 that is wholly within 12" of any friendly cosmic nodes. Roll separately for each unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Protection of the Old Ones (Cosmic Power)`,
        desc: `You must spend 10 cosmic power points to use this ability. Until the start of your next hero phase, friendly units affected by the Revivifying Energies ability have a ward of 5+ instead of 6+.`,
        when: [HERO_PHASE],
      },
      {
        name: `Cleanse the Realms (Cosmic Power)`,
        desc: `You must spend 15 cosmic power points to use this ability. Roll a dice for each enemy unit within 12" of any friendly cosmic nodes. On a 2+, that unit suffers a number of mortal wounds equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summoning Seraphon`,
        desc: `At the end of your movement phase, you can spend your cosmic power points to summon 1 unit from the following list and add it to your army. Each unit you summon costs the number of cosmic power points shown on the list, and you can only summon the unit if you have enough cosmic power points to do so. Units must be set up more than 9" from all enemy units and wholly within 12" of a friendly cosmic node.

        1 Dread Saurian	      50 CPP
        1 Engine of the Gods	30 CPP
        1 Stegadon	          28 CPP
        1 Bastiladon	        24 CPP
        3 Aggradon Lancers	  22 CPP
        10 Saurus Guard	      22 CPP
        10 Saurus Warriors	  20 CPP
        3 Kroxigor Warspawned	18 CPP
        3 Kroxigor	          18 CPP
        5 Raptadon Hunters	  16 CPP
        5 Raptadon Chargers	  16 CPP
        1 Spawn of Chotec	    16 CPP
        5 Hunters of Huanchi with Dartpipes	12 CPP
        3 Terradon Riders	    12 CPP
        3 Ripperdactyl Riders	10 CPP
        5 Hunters of Huanchi with Starstone Bolas	10 CPP
        3 Terrawings	        8 CPP
        10 Skinks	            8 CPP`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  },
  COALESCED: {
    effects: [
      {
        name: `Predatory Fighters`,
        desc: `Add 1 to bite rolls made for COALESCED SAURUS and COALESCED KROXIGOR units with the Mighty Saurus Jaws, Saurus Jaws or Vice-like Jaws ability.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Scaly Skin`,
        desc: `Subtract 1 from the damage inflicted (to a minimum of 1) by each successful attack that targets a friendly COALESCED unit that has the SAURUS, KROXIGOR or MONSTER keyword.`,
        when: [SAVES_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
