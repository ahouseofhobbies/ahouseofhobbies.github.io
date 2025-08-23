import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  START_OF_COMBAT_PHASE,
} from 'types/phases'

// Add individual artifacts here, and access them in other files!
const Artifacts = {
  /*"Shadow's Edge": {
    effects: [
      {
        name: `Shadow's Edge`,
        desc: `Pick 1 of the bearer's melee weapons. If the unmodified wound roll for an attack made with that weapon is 6, that attack inflicts D3 mortal wounds on the target and the attack sequence ends (do not make a wound roll or save roll).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Reaper of Sorrows': {
    effects: [
      {
        name: `Reaper of Sorrows`,
        desc: `Pick 1 of the bearer's melee weapons. Before the bearer attacks with that weapon, pick 1 enemy unit within 1" of the bearer and roll 2D6. If the result is higher than the target's Bravery characteristic, that weapon's Rend characteristic is -3 for attacks made against that unit until the end of that phase. That weapon's Rend characteristic is -4 instead of -3 if the target is terrified.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Slitter: {
    effects: [
      {
        name: `Slitter`,
        desc: `When you pick the bearer to fight for the first time in a turn, before the bearer makes a pile-in move, you can pick 1 enemy model within 1" of the bearer and roll a dice. If the roll is greater than that model's Wounds characteristic, that model is slain.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Soulfire Ring': {
    effects: [
      {
        name: `Soulfire Ring`,
        desc: `At the end of the combat phase, you can heal up to D6 wounds allocated to the bearer if any attacks made by the bearer in that phase slay an enemy model.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'Cloak of the Waxing Moon': {
    effects: [
      {
        name: `Cloak of the Waxing Moon`,
        desc: `Subtract 1 from the Attacks characteristic of melee weapons that target the bearer (to a minimum of 1).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Pendant of the Fell Wind': {
    effects: [
      {
        name: `Pendant of the Fell Wind`,
        desc: `Subtract 1 from wound rolls for attacks made with melee weapons by enemy units while they are within 3" of the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Midnight Tome': {
    effects: [
      {
        name: `Midnight Tome`,
        desc: `WIZARD only. Once per battle, if the bearer attempts to cast a spell that would summon an endless spell, that spell is automatically cast with a casting roll of 12 that cannot be modified (do not roll 2D6), and it cannot be unbound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Covetous Familiar': {
    effects: [
      {
        name: `Covetous Familiar`,
        desc: `Enemy units that finish a pile-in move within 3" of the bearer suffer 1 mortal wound after the pile-in move is made.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Lightshard of the Harvest Moon': {
    effects: [
      {
        name: `Lightshard of the Harvest Moon - Once Per Battle`,
        desc: `Effect: If this unit is in combat, add 1 to the Attacks characteristic of melee weapons used by friendly Nighthaunt units wholly within 12" of this unit for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Brazier of Nagashizzar': {
    effects: [
      {
        name: `Brazier of Nagashizzar - Reaction: You declared the Redeploy command for a friendly Nighthaunt Infantry unit wholly within 12" of this unit`,
        desc: `Effect: If you roll a 1-3 when determining the distance that unit can move, you can use a value of 4 instead.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Mirror of Echoing Failures': {
    effects: [
      {
        name: `Mirror of Echoing Failures - Reaction: Opponent declared a Spell or Prayer ability for a Wizard or Priest within 12" of this unit`,
        desc: `Declare: Pick each enemy Wizard and Priest within 12" of this unit to be the targets.
        Effect: Roll a D3. On a 2+, for the rest of the phase:
        Subtract 1 from casting rolls and chanting rolls for the targets.
        Each time any of the targets fails to cast a spell or chant a prayer, inflict 1 mortal damage on that target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Stave of Suffering': {
    effects: [
      {
        name: `Stave of Suffering - Passive`,
        desc: `Effect: While this unit is within 12" of any damaged enemy units or enemy units that have had any models slain, add 1 to casting rolls for friendly Nighthaunt units while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Tombstone of the Penitent': {
    effects: [
      {
        name: `Tombstone of the Penitent - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units melee weapons for each non-Faction Terrain terrain feature that is being contested by friendly units, to a maximum of 8.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Amulet of Waking Nightmares': {
    effects: [
      {
        name: `Amulet of Waking Nightmares`,
        desc: `Declare: Pick a visible enemy Hero within 18" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, for the rest of the turn, the target cannot be affected by the Guarded Hero ability or the Obscuring terrain ability.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Clattering Procession (AoR)': {
    effects: [
      {
        name: `Tailsman of the Nadir (AoR) - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If a friendly Clattering Procession unit wholly within 12" of this unit was picked to be the target of that spell, this unit can use the 'Unbind' ability as if it had Wizard (1). Add 1 to the unbinding roll for that ability.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Eternal Nightmare (AoR)': {
    effects: [
      {
        name: `The Seal of Nagash (AoR) - Once Per Battle`,
        desc: `Effect: Allocate 3 damage points to this unit (ward rolls cannot be made for those damage points). Then, Heal (3) the friendly Nagash.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(Artifacts, 'artifact')
