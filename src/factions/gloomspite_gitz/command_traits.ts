import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
  TURN_ONE_END_OF_MOVEMENT_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const CommandTraits = {
  'Fight Another Day': {
    effects: [
      {
        name: `Fight Another Day`,
        desc: `Effect: If this unit is in combat, roll a dice. On a 3+, this unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Clammy Hand': {
    effects: [
      {
        name: `The Clammy Hand - Passive`,
        desc: `Effect: Each time a friendly Gloomspite Gitz unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Loontouched: {
    effects: [
      {
        name: `Loontouched - Passive`,
        desc: `Effect: If this unit is not a Wizard, it has Wizard (1). Otherwise, add 1 to casting rolls for this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Da Kings Gitz (AoR) - Da Kings Adjutant': {
    effects: [
      {
        name: `Da Kings Adjutant - Once Per Battle`,
        desc: `Declare: You cannot use this ability and the Bad Moon Loonshrine's Moonclan Lairs ability in the same turn. If this unit is within 12" of a friendly Bad Moon Loonshrine, pick a friendly non-reinforced, non-Hero, non-Monster King's Gitz unit that has been destroyed to the target.
        Effect: Set up a replacement unit wholly within 12" of a friendly Bad Moon Loonshrine and more than 3" from all enemy units.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Da Kings Gitz (AoR) - Glarejester': {
    effects: [
      {
        name: `Glarejester (AoR)`,
        desc: `Declare: Pick a friendly Infantry unit within 3" of this unit and that is not in combat to be the target.
        Effect: Roll a D3. Add the roll to the distance the target can move when using Move abilities this phase. If the target ends a move in this phase within 3" of this Hero, inflict an amount of mortal damage on this Hero equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Droggz Gitmob (AoR) - Plucky Git': {
    effects: [
      {
        name: `Plucky Git (AoR) - Passive`,
        desc: `Effect: While this unit has no damage points, friendly Droggz's Gitmob units have Ward(6+) while they are wholly within 9" of this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Droggz Gitmob (AoR) - Stick Em and Run': {
    effects: [
      {
        name: `Stick 'Em and Run (AoR) - Passive`,
        desc: `Effect: Each time this unit uses a Retreat ability or the Frazzlegit's Flame Stream ability, before moving this unit, pick an enemy unit in combat with it and roll a D3. Inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Troggs Truggherd (AoR) - Loonstone Teef': {
    effects: [
      {
        name: `Loonstone Teef (AoR) - Once Per Battle`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*'Supa-nasty Venom': {
    effects: [
      {
        name: `Supa-nasty Venom`,
        desc: `SPIDERFANG HERO with mount only. Double the number of mortal wounds that are inflicted by this general's Spider Venom ability.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Squig Whisperer': {
    effects: [
      {
        name: `Squig Whisperer`,
        desc: `SQUIG HERO with mount only. Add 1 to hit rolls and wound rolls for attacks made by this general's mount.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Alpha Trogg': {
    effects: [
      {
        name: `Alpha Trogg`,
        desc: `Add 2 to this general's Wounds characteristic. In addition, this general gains the MONSTER keyword.`,
        when: [WOUND_ALLOCATION_PHASE, DURING_GAME],
      },
    ],
  },
  'Trogg Smash': {
    effects: [
      {
        name: `Trogg Smash`,
        desc: `Once per battle, when this general fights, after all of their attacks have been resolved, you can say they will perform a Trogg Smash. If you do so, roll a dice for each enemy unit within 3" of this general. On a 2+, that unit suffers D3 mortal wounds.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Loonskin: {
    effects: [
      {
        name: `Loonskin`,
        desc: `If your general has this command trait, you can include 1 of the following endless spells in your army without spending any points to do so: Mork's Mighty Mushroom, Scuttletide or Malevolent Moon. In addition, in your hero phase, this general can attempt to cast the spell that summons that endless spell in the same manner as a WIZARD.`,
        when: [START_OF_SETUP],
      },
      {
        name: `Loonskin`,
        desc: `In your hero phase, this general can attempt to cast the spell that summons that endless spell in the same manner as a WIZARD.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Trugg's Troggherd
  'Ceaseless Growth': {
    effects: [
      {
        name: `Ceaseless Growth`,
        desc: `When you roll the dice that determines the number of wounds you can heal with a friendly TRUGG'S TROGGHERD unit's Regeneration or Greater Regeneration ability, add 1 to the number.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  },
  'Prized Trogglet': {
    effects: [
      {
        name: `Prized Trogglet`,
        desc: `Roll a dice each time an enemy model within 12" of this general issues a command. On a 5+, that command is not received (it still counts as having been used) and the command point that was spent to issue that command is lost.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  },
  'Living Landmark': {
    effects: [
      {
        name: `Living Landmark`,
        desc: `During deployment, instead of setting up this general on the battlefield, you can place them to one side and say that they are set up in ambush as a reserve unit. At the end of your first movement phase, you can set them up on the battlefield, within 3" ofa terrain feature and more than 9" from all enemy units.`,
        when: [DURING_SETUP],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
      {
        name: `Living Landmark`,
        desc: `If you set this unit up as a reserve unit, at the end of your first movement phase, you can set them up on the battlefield, within 3" ofa terrain feature and more than 9" from all enemy units.`,
        when: [TURN_ONE_END_OF_MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
