import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  SHOOTING_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  START_OF_COMBAT_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

// Store Command Abilities here. You can add them to units, abilities, flavors, and subfactions later.
const CommandAbilities = {
 /* 'Redoubled Force': {
    effects: [
      {
        name: `Redoubled Force`,
        desc: `Pick 1 YMETRICA ALARITH unit that has forced an enemy unit to move using the Tectonic Force battle trait for the first time in that phase and that is wholly within 18" of a friendly YMETRICA HERO. You can use Tectonic Force a second time by picking 1 other enemy unit within 1" of that friendly unit.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'Deplete Reserves': {
    effects: [
      {
        name: `Deplete Reserves`,
        desc: `You can use this command ability when a friendly SYAR unit could use an aetherquartz reserve ability, even if any friendly SYAR units have already done so in that phase. Pick 1 friendly SYAR unit that has any aetherquartz reserves and is wholly within 18" of a friendly SYAR HERO. That unit can use one of its aetherquartz reserves.`,
        when: [DURING_GAME],
        rule_sources: [rule_sources.BATTLETOME_LUMINETH, rule_sources.ERRATA_MAY_2021],
      },
    ],
  },
  'Unflinching Valour': {
    effects: [
      {
        name: `Unflinching Valour`,
        desc: `You can use this command ability at the start of the battleshock phase. If you do so, pick 1 friendly model with this command ability. Until the end of that phase, all friendly LUMINETH REALM-LORDS units wholly within 24" of that model are treated as having a Bravery characteristic of 10.`,
        when: [START_OF_BATTLESHOCK_PHASE],
      },
    ],
  },
  'Faith of the Mountains': {
    effects: [
      {
        name: `Faith of the Mountains`,
        desc: `You can use this command ability at the start of your combat phase. The unit that receives this command must be a friendly Alarith Aelf unit. Add 1 to the attacks characteristic of that unit's melee weapons until the end of that phase. This unit can issue this command up to D3 times in the same phase. If it does so, no command points are spent the second and third times this unit issues this command in that phase. The same unit cannot benefit from this ability and the Unshakeable Faith of the Mountains ability in the same phase.`,
        when: [START_OF_COMBAT_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Unshakeable Faith of the Mountains': {
    effects: [
      {
        name: `Unshakeable Faith of the Mountains`,
        desc: `You can use this command ability at the start of your combat phase. the unit that receives the command must be a friendly Alarith Aelf unit. Add 1 to the Attacks characteristic of that unit's melee weapons until the end of that phase. THis unit can issue this command up to 3 times in the same phase. If it does so, no command points are spent the second and third times this unit issues this command in that phase. The same unit cannot benefit from this ability and the Faith of the Mountains ability in the same phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  'Gone Like the Wind': {
    effects: [
      {
        name: `Gone like the Wind`,
        desc: `Pick 1 friendly HELON unit that fought in this phase and is wholly within 12" of a friendly HELON HERO. That unit can make a normal move or retreat (it cannot run).`,
        when: [END_OF_COMBAT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_LUMINETH, rule_sources.ERRATA_JULY_2021],
      },
    ],
  },
  'Sieze the Moment': {
    effects: [
      {
        name: `Sieze the Moment`,
        desc: `Pick 1 friendly ALUMNIA unit that ran. It can charge in that charge phase.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Strike in Unison': {
    effects: [
      {
        name: `Strike in Unison`,
        desc: `You can use this command ability in your shooting phase or in the combat phase. If you do so, pick 1 friendly ILIATHA VANARI unit with 2 or more models. You can reroll hit rolls of 1 for that unit until the end of that phase.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
        rule_sources: [rule_sources.BATTLETOME_LUMINETH, rule_sources.ERRATA_MAY_2021],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(CommandAbilities, 'command_ability')
