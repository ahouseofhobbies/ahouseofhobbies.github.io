import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { KHARADRON_OVERLORDS } from 'meta/factions'
import meta_rule_sources from 'meta/rule_sources'
import {
  COMBAT_PHASE,
  DURING_ANY_PHASE,
  DURING_GAME,
  DURING_SETUP,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

const BattleTraits = {
  [KHARADRON_OVERLORDS]: {
    effects: [
      {
        name: `Flying High - Once Per Battle`,
        desc: `Declare: Pick a friendly Skyvessel that is part of a regiment from which no units have been deployed, then pick a number of units up to its Transport Capacity (see its warscroll) that are in its regiment. 
        Effect: Set up all of those units in reserve in the clouds. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Descend from the Clouds`,
        desc: `Declare: Pick a friendly Skyvessel in the clouds to use this ability. 
        Effect: Set up that Skyvessel anywhere on the battlefield more than 9" from all enemy units. Then, set up all other units that were set up in the clouds with that Skyvessel wholly within 6" of it and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Transport Skyfarers - Reaction: You declared a non-Charge Move ability for a friendly Skyvessel`,
        desc: `Effect: Pick a number of units up to that Skyvessels Transport Capacity (see its warscroll) that are wholly within 6" of it to be the targets. Units that have been transported this turn cannot be targets. 
        Remove the targets from the battlefield. After the Skyvessel ends its move, you must set up each target unit on the battlefield, wholly within 6" of that Skyvessel and not in combat. Those units have been transported. A unit cannot use Charge abilities if it was transported in the same turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Skyvessel Cover - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target friendly Kharadron Overlords Infantry units that have not charged in the same turn while they are wholly within 6" of a friendly Arkanaut Ironclad or Arkanaut Frigate that has not charged in the same turn.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `The Flagship - Once Per Battle`,
        desc: `Declare: Pick a friendly Skyvessel to be the target. The target can be in reserve.
        Effect: The target has the Flagship keyword for the rest of the battle. Give the target 1 Great Endrinwork.`,
        when: [DURING_SETUP],
      },
      {
        name: `Zontari Endrin Dock (Faction Terrain) - Release the Auto Endrins`,
        desc: `Effect: Set up a friendly Nullifier Auto-Endrin, Stuncloud Auto-Endrin and Grudgeblast Auto-Endrin (see the Auto-Endrin warscroll) on the battlefield within friendly territory, wholly within 6" of this terrain feature and more than 9" from all enemy units.`,
        when: [DURING_SETUP],
      },
      {
        name: `Zontari Endrin Dock (Faction Terrain) - Repair Routines`,
        desc: `Declare: Pick a friendly Skyvessel within 3" of this terrain feature to be the target.
        Effect: Make a repair roll of D6. Add 1 to the roll if there is a friendly Endrinmaster with Dirigible Suit or Endrinmaster with Endrinharness within 3" of this terrain feature. On a 4+, Heal (3) the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Zontari Endrin Dock (Faction Terrain) - Endrinworks Outpost`,
        desc: `Declare: Pick a friendly Auto-Endrin that has been removed from the battlefield to be the target.
        Effect: Make a manufacturing roll of D6. Add 1 to the roll if there is a friendly Endrinmaster with Dirigible Suit or Endrinmaster with Endrinharness within 3" of this terrain feature. On a 4+, set up a replacement Auto-Endrin on the battlefield, wholly within 6" of this terrain feature and more than 3" from all enemy units. Each friendly Auto-Endrin can be replaced any number of times.`,
        when: [HERO_PHASE],
      },
      {
        name: `Auto-Endrin - Expendable Munitions - Passive`,
        desc: `Effect: The following apply to this unit:
        This unit has a maximum control score of '-'
        When this unit is destroyed or removed from the battlefield, it does not count as being destroyed for the purposes of other rules (such as scoring battle tactics).
        This unit cannot be picked to be the target of or be affected by any non-Core abilities used by other friendly units unless the ability specifies Auto-Endrin.
        Ignore this unit for the purposes of friendly and enemy battle tactics.`,
        when: [DURING_GAME],
      },
      {
        name: `Nullifier Auto-Endrin - Once Per Turn`,
        desc: `Declare: If this unit is a Nullifier Auto-Endrin and is in combat with any enemy Manifestations, pick each enemy Manifestation in combat with it to be the targets.
        Effect: Make a banishment roll of 3D6 for each target. If the banishment roll equals or exceeds the banishment value on the Manifestation's warscroll, it is banished and removed from play. Then, remove this unit from the battlefield.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Stuncloud Auto-Endrin - Once Per Turn`,
        desc: `Declare: If this unit is a Stuncloud Auto-Endrin and is in combat, pick each enemy unit in combat with it to be the targets.
        Effect: Roll a dice for each target. If the roll is equal to or lower than that target's Health characteristic, subtract 10 from the control score of that target for the rest of the turn. Then, remove this unit from the battlefield.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grudgeblast Auto-Endrin - Once Per Turn`,
        desc: `Declare: If this unit is a Grudgeblast Auto-Endrin and is in combat, pick each enemy unit in combat with it to be the targets.
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll. Then, remove this unit from the battlefield.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'Grundstok Expeditionary Force': {
    effects: [
      {
        name: `Only The Best`,
        desc: `Friendly GRUNDSTOK EXPEDITIONARY FORCE units that do not have the Leader battlefield role gain the Battleline battlefield role.`,
        when: [DURING_GAME],
        rule_sources: [
          meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2,
          meta_rule_sources.ERRATA_DAWNBRINGERS_BOOK_2,
        ],
      },
      {
        name: `Grudgesettler Protocols`,
        desc: `In any phase, after a friendly Grundstok Expeditionary Force unit has shot or fought for the first time in that phase, you can roll a dice. On a 4+, that unit immediately shoots or fights for a second time in that phase. However, you must subtract 1 from hit rolls for attacks made in this way.

        Designer's Note: This ability can be used in your opponent's turn after a Grundstok Expeditionary Force unit shoots with the Unleash Hell command. The second time it shoots, those attacks are part of that Unleash Hell command and must target the same enemy unit. `,
        when: [DURING_ANY_PHASE],
        rule_sources: [
          meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2,
          meta_rule_sources.ERRATA_DAWNBRINGERS_BOOK_2,
        ],
      },
      {
        name: `Rapid Redeployment`,
        desc: `Each time a friendly Grundstok Gunhauler makes a normal move or runs, you can say that it will transport a friendly unit. If you do so, before the move is made, you can pick up to 2 other friendly Grundstok Expeditionary Force units with a combined model count of 6 or less. Each unit must have a Wounds characteristic of 6 or less and must be within 3" of the Grundstok Gunhauler and more than 3" from all enemy units (you can pick a unit that has already moved in that phase). Remove that unit from the battlefield. Then, when the Grundstok Gunhauler finishes its move, set up the transported unit on the battlefield again, wholly within 3" of the Grundstok Gunhauler and more than 3" from all enemy units. Units transported in this manner cannot make a charge move in the same turn.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [
          meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2,
          meta_rule_sources.ERRATA_DAWNBRINGERS_BOOK_2,
        ],
      },
    ],
  },*/
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
