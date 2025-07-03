import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_SHOOTING_PHASE,
  START_OF_SETUP,
  WARDS_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  MOVEMENT_PHASE,
} from 'types/phases'

const Artifacts = {
  /* 'Masterwrought Armour': {
    effects: [
      {
        name: `Masterwrought Armour`,
        desc: `The bearer has a ward of 5+`,
        when: [WARDS_PHASE],
      },
    ],
  }, */
  'Celestium Burst-grenade': {
    effects: [
      {
        name: `Celestium Burst-grenade - Once Per Battle`,
        desc: `Declare: Pick an enemy unit within 12" of this unit to be the target. 
        Effect: Ward rolls cannot be made for the target for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  "Blazebeard and Sons 'Drakk-hobbler' Mag-bolas": {
    effects: [
      {
        name: `Blazebeard and Sons 'Drakk-hobbler' Mag-bolas - Once Per Battle`,
        desc: `Declare: Pick an enemy Monster within 12" of this unit to be the target. 
        Effect: Until the start of your next turn, subtract 1 from the number of dice rolled when making charge rolls for the target, to a minimum of 1.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Spell in a Bottle': {
    effects: [
      {
        name: `Spell in a Bottle - Once Per Battle`,
        desc: `Effect: This unit can use a Summon ability from the manifestation lore you picked during army composition as if it had Wizard (1). Instead of making a casting roll for that Summon ability, the casting roll is 7 and cannot be modified. That Summon ability cannot be unbound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Karst-Bana Aetherpowered Combat Rig': {
    effects: [
      {
        name: `Karst-Bana Aetherpowered Combat Rig - Passive`,
        desc: `Effect: This unit has Ward (5+). In addition, add 1 to the Attacks characteristic of this units melee weapons.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Emberstone Flare': {
    effects: [
      {
        name: `Emberstone Flare = Once Per Battle`,
        desc: `Declare: Pick a friendly Kharadron Overlords unit that has Fly and is not in combat to be the target. 
        Effect: Remove the target from the battlefield and set it up again wholly within 9" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Grundstok Expeditionary Force (AoR)': {
    effects: [
      {
        name: `Aetheric Nullifier (AoR) - Reaction: Opponent declared a Shoot or Fight ability for a Manifestation within 9" of the bearer`,
        desc: `Effect: Roll 2D6. If the roll equals or exceeds the banishment value listed on the Manifestations warscroll, it is banished and removed from play. You cannot pick the same Manifestation to be the target of this ability more than once per phase.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  /* 'Spell in a Bottle': {
    effects: [
      {
        name: `Spell in a Bottle`,
        desc: `Pick 1 endless spell that does not belong to a faction. You can include that endless spell in your army without spending any points to do so.`,
        when: [START_OF_SETUP],
      },
      {
        name: `Spell in a Bottle`,
        desc: `Once per battle, bearer can automatically cast the spell that summons the endless spell (do not make a casting roll), and it cannot be unbound. Bearer cannot control the endless spell.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Phosphorite Bomblets': {
    effects: [
      {
        name: `Phosphorite Bomblets`,
        desc: `Once per battle, you can pick 1 enemy unit within 6". Ona D6 2+, the unit suffers 1 MW and you may roll again. Repeat until you roll a 1.`,
        when: [SHOOTING_PHASE],
      },
    ],
  }, */
  'Voidstone Orb': {
    effects: [
      {
        name: `Voidstone Orb - Once Per Battle - Reaction: Opponent declared a Spell ability for a Wizard within 30" of this unit`,
        desc: `Effect: That spell is unbound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Grundstok Expeditionary Force
  /* 'Aetheric Nullifier': {
    effects: [
      {
        name: `Aetheric Nullifier`,
        desc: `Each time a friendly GRUNDSTOK EXPEDITIONARY FORCE unit wholly within 12" of the bearer is affected by a spell or the abilities of an endless spell, you can roll a dice. On a 4+, ignore the effect of that spell or the effects of that endless spell's abilities on that unit.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  },
  "'Gimlet Gaze' Scope": {
    effects: [
      {
        name: `'Gimlet Gaze' Scope`,
        desc: `Add 9" to the Range characteristic of missile weapons used by the bearer.`,
        when: [SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  },
  'Grudgefire Rounds': {
    effects: [
      {
        name: `Grudgefire Rounds`,
        desc: `Pick 1 of the bearer's missile weapons. If the unmodified hit roll for an attack made with that weapon is 6, that attack causes a number of mortal wounds to the target equal to its Damage characteristic and the attack sequence ends (do not make a wound roll or save roll).`,
        when: [SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
