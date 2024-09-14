import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { CHARGE_PHASE, COMBAT_PHASE, DURING_GAME, HERO_PHASE, SAVES_PHASE, SHOOTING_PHASE, START_OF_ROUND } from 'types/phases'

const CommandTraits = {
 /* 'Show of Superiority': {
    effects: [
      {
        name: `Show of Superiority`,
        desc: `While this general is on the battlefield, roll a dice before your opponent spends any command points to use a command ability. On a 5+, your opponent must spend 2 command points to issue the command instead of 1.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Crafted from Beast-bone': {
    effects: [
      {
        name: `Crafted from Beast-bone`,
        desc: `After this general has fought for the first time, at the start of each battle round, add 1 to the Attacks characteristic of this general's weapons for the rest of the battle. This effect is cumulative.`,
        when: [START_OF_ROUND],
      },
    ],
  },
  'Aura of Sterility': {
    effects: [
      {
        name: `Aura of Sterility`,
        desc: `Subtract 1 from hit rolls and wound rolls for attacks made with missile weapons that target friendly OSSIARCH BONEREAPERS units wholly within 12" of this general.`,
        when: [SHOOTING_PHASE],
      },
    ],
  }, */
  'Diversionary Tactics': {
    effects: [
      {
        name: `Diversionary Tactics - Passive`,
        desc: `Effect: Subtract 2 from charge rolls for enemy units while they are within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Aura of Sterility': {
    effects: [
      {
        name: `Aura of Sterility - Passive`,
        desc: `Effect: Subtract 1 from wound rolls for shooting attacks that target friendly Ossiarch Bonereapers units while they are wholly within 12" of this unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Mighty Archaeossian': {
    effects: [
      {
        name: `Mighty Archaeossian - Passive`,
        desc: `Effect: If the unmodified hit roll for an attack that targets this unit is 1-3, the attack fails and the attack sequence ends.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
