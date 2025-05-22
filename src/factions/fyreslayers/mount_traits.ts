import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, DURING_GAME, END_OF_CHARGE_PHASE, MOVEMENT_PHASE, SHOOTING_PHASE } from 'types/phases'

const MountTraits = {
  'Incandescent Blaze': {
    effects: [
      {
        name: `Incandescent Blaze - Once Per Battle`,
        desc: `Effect: For the rest of the turn: 
        Double the Attacks characteristic of this units Roaring Fyrestream. 
        This units Roaring Fyrestream has a Damage characteristic of 3.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Thickened Scales': {
    effects: [
      {
        name: `Thickened Scales - Passive`,
        desc: `Effect: Subtract 1 from the Rend characteristic of weapons used for attacks that target this unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Peerless Lineage': {
    effects: [
      {
        name: `Peerless Lineage - Reaction: You declared a Rampage ability for this unit`,
        desc: `Effect: You can pick another eligible unit to be a second target of that Rampage ability. If the ability requires a roll, you must roll for each target.`,
        when: [DURING_GAME],
      },
    ],
  },
  /* Packdroth: {
    effects: [
      {
        name: `Packdroth`,
        desc: `In your movement phase, before this unit makes a move, you can pick 1 friendly VULKYN FLAMESEEKERS unit to hitch a lift on this MAGMADROTH (see the Skilled Drothwranglers battle trait) even if another unit has already hitched a lift on a MAGMADROTH in the same phase. The same unit cannot hitch a lift on a MAGMADROTH more than once per phase, and multiple units cannot hitch a lift on the same MAGMADROTH in the same phase.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Red-hot Fury': {
    effects: [
      {
        name: `Red-hot Fury`,
        desc: `At the end of the enemy charge phase, before carrying out monstrous rampages, if this unit is more than 3" from all enemy units, it can attempt a charge. It must finish the charge move within 1/2" of an enemy unit that is itself within 3" ofa friendly VULKYN FLAMESEEKERS Kyndledroth.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ],
  },
  'Scalding Steam-breath': {
    effects: [
      {
        name: `Scalding Steam-breath`,
        desc: `If the target is a MONSTER, the Damage characteristic of this unit's Blazing Maw is 3 instead of D3.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(MountTraits, 'mount_trait')
