import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { OSSIARCH_BONEREAPERS } from 'meta/factions'
import { BATTLESHOCK_PHASE, CHARGE_PHASE, COMBAT_PHASE, DURING_GAME, HERO_PHASE, MOVEMENT_PHASE, START_OF_ROUND, WARDS_PHASE } from 'types/phases'

const BattleTraits = {
  [OSSIARCH_BONEREAPERS]: {
    effects: [
      {
        name: `Unstoppable Advance`,
        desc: `Declare: If no friendly units have used a Relentless Discipline ability this phase, pick a friendly Ossiarch Bonereapers Hero to use this ability. All friendly Ossiarch Bonereapers units wholly within 12" of that Hero are the targets. 
        Effect: Add 2" to the Move characteristic of each target for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Re-Form Ranks`,
        desc: `Declare: If no friendly units have used a Relentless Discipline ability this phase, pick a friendly Ossiarch Bonereapers Hero to use this ability. 
        Effect: For the rest of the turn, while they are wholly within 12" of that Hero, friendly Ossiarch Bonereapers units can use Charge abilities even if they used a Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Coodrinated Charge`,
        desc: `Declare: If no friendly units have used a Relentless Discipline ability this phase, pick a friendly Ossiarch Bonereapers Hero to use this ability. 
        Effect: For the rest of the turn, add 1 to charge rolls for friendly Ossiarch Bonereapers units while they are wholly within 12" of that Hero.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Counter-Strike`,
        desc: `Declare: If no friendly units have used a Relentless Discipline ability this phase, pick a friendly Ossiarch Bonereapers Hero to use this ability. 
        Effect: For the rest of the turn, friendly units melee weapons have Anti-charge (+1 Rend) while they are wholly within 12" of that Hero.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Bludgeon`,
        desc: `Declare: If no friendly units have used a Relentless Discipline ability this phase, pick a friendly Ossiarch Bonereapers Hero to use this ability. 
        Effect: For the rest of the turn, add 1 to wound rolls for combat attacks made by friendly Ossiarch Bonereapers units while they are wholly within 12" of that Hero.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Impenetrable Ranks`,
        desc: `Declare: If no friendly units have used a Relentless Discipline ability this phase, pick a friendly Ossiarch Bonereapers Hero to use this ability. 
        Effect: For the rest of the turn, friendly Ossiarch Bonereapers have Ward (5+) while they are wholly within 12" of that Hero.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Bone-Tithe Nexus (Faction Terrain) - Deadly Gaze`,
        desc: `Declare: Pick a visible enemy unit within 18" of this terrain feature to be the target. 
        Effect: Roll a dice. On a 4+, pick 1 of the following effects to apply: 
        Punishment of Agony: Subtract 1 from hit rolls for the target until the start of your next turn. 
        Punishment of Ignorance: Subtract 1 from casting rolls and/or chanting rolls for the target until the start of your next turn. 
        Punishment of Lethargy: Halve the targets Move characteristic until the start of your next turn. 
        Punishment of Death: Inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
