import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  WARDS_PHASE,
} from 'types/phases'

const Artifacts = {
  'Terminus Clock': {
    effects: [
      {
        name: `Terminus Clock`,
        desc: `Effect: Roll a dice. On a 3+, until the start of your next turn, subtract 1 from casting rolls for enemy Wizards while they are within 18" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Shard of Night': {
    effects: [
      {
        name: `Shard of Night - Passive`,
        desc: `Effect: Ignore modifiers to save rolls for shooting attacks that target this unit (positive and negative).`,
        when: [SHOOTING_PHASE],
      },
    ],
  },

  'Amulet of Graves': {
    effects: [
      {
        name: `Amulet of Graves - Once Per Battle`,
        desc: `Effect: If there are fewer than 3 friendly Cursed Sepulchres on the battlefield, set up a Cursed Sepulchre on the battlefield more than 9" from all enemy units, more than 1" from all friendly units and more than 3" from all objectives and other terrain features.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Knights of the Crimson Keep (AoR)': {
    effects: [
      {
        name: `Chalice of the Blood Dragon (AoR) - Once Per Battle`,
        desc: `Effect: Heal (3D3) this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Barrow Legion (AoR) - Amulet of Nightmares': {
    effects: [
      {
        name: `Amulet of Nightmares (AoR) - Once Per Battle`,
        desc: `Declare: Pick an enemy unit within 9" of this unit to be the target.
        Effect: Roll a dice. On a 2+, the target has Strike-Last this phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Barrow Legion (AoR) - Crowns of Cold Command': {
    effects: [
      {
        name: `Crowns of Cold Command (AoR) - Once Per Turn`,
        desc: `Declare: Pick a friendly Barrow Legion unit wholly within 12" of this unit to be the target.
        Effect: Roll a dice. On a 3+:
        If the target is damaged, Heal (3) the target.
        If the target is not damaged, return a number of slain models to it with a combined Health characteristic of up to 3.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Barrow Legion (AoR) - Crpyt Dagger': {
    effects: [
      {
        name: `Crypt Dagger (AoR) - Once Per Battle`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target.
        Effect: Inflict D6 mortal damage on the target.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Barrow Legion (AoR) - Grave-Sand Pendant': {
    effects: [
      {
        name: `Grave-Sand Pendant (AoR) - Passive`,
        desc: `Effect: If this unit would be destroyed, before removing it from play, roll a dice. On a 3+, this unit is not destroyed and any remaining damage points inflicted on it have no effect. Then, Heal (1) this unit. This unit cannot use this ability again for the rest of the battle.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Barrow Legion (AoR) - Ring of Stricken Souls': {
    effects: [
      {
        name: `Ring of Stricken Souls (AoR) - Passive`,
        desc: `Effect: This unit has Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Scions of Nulahmia (AoR)': {
    effects: [
      {
        name: `Amulet of Leeches (AoR) - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Dire Wolves or Fell Bats unit: 
        This unit has Ward (5+). 
        Each time you make a successful ward roll for this unit, allocate 1 damage point to a friendly Dire Wolves or Fell Bats unit within this units combat range after the damage sequence for this unit has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
    ],
  },
  /* 'Shard of Night': {
    effects: [
      {
        name: `Shard of Night`,
        desc: `Ignore negative modifiers to save rolls for attacks made with missile weapons that target the bearer.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  'Chiropteran Cloak': {
    effects: [
      {
        name: `Chiropteran Cloak`,
        desc: `If the unmodified hit roll for an attack made with a melee weapon that targets the bearer is 1, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  "Morbheg's Claw": {
    effects: [
      {
        name: `Morbheg's Claw`,
        desc: `In your hero phase, if the bearer is more than 3" from all enemy units, you can say that they will carve sigils into the ground using Morbheg's claw. If you do so, add 2 to casting rolls for friendly LEGION OF NIGHT WIZARDS wholly within 12" of the bearer until your next hero phase. However, the bearer cannot make a normal move, run, retreat or attempt a charge until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Ulfenkarnian Phylactery': {
    effects: [
      {
        name: `Ulfenkarnian Phylactery`,
        desc: `Add 1 to ward rolls for friendly VYRKOS SUMMONABLE units for the purposes of the Deathless Minions battle trait while they are wholly within 9" of the bearer.`,
        when: [WARDS_PHASE],
      },
    ],
  },
  'Terminus Clock': {
    effects: [
      {
        name: `Terminus Clock`,
        desc: `At the start of the enemy hero phase, you can say that the bearer will stop the Terminus Clock. If you do so, roll a dice. On a 3+, until the end of that phase, subtract 1 from casting rolls for enemy WIZARDS.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Standard of the Ulfenwatch': {
    effects: [
      {
        name: `Standard of the Ulfenwatch`,
        desc: `If the bearer is on the battlefield, you can roll a dice each time your opponent spends a command point. On a 4+, you receive 1 extra command point.`,
        when: [DURING_GAME],
      },
    ],
  },

  'Grave-sand Shard': {
    effects: [
      {
        name: `Grave-sand Shard`,
        desc: `Once per battle round, at the end of the battleshock phase, you can return 1 slain model to each friendly KASTELAI SUMMONABLE unit wholly within 18" of the bearer.`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
    ],
  },
  'Fragment of the Keep': {
    effects: [
      {
        name: `Fragment of the Keep`,
        desc: `Subtract 1 from wound rolls for attacks made with melee weapons by enemy units within 3" of the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Red Casket': {
    effects: [
      {
        name: `The Red Casket`,
        desc: `Add 3 to run rolls and charge rolls for the bearer.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  },

  'Breath of the Void Maw': {
    effects: [
      {
        name: `Breath of the Void Maw`,
        desc: `Once per battle, at the start of the combat phase, you can pick 1 enemy unit within 6" of the bearer that is visible to them and roll a dice. On a 2+, that unit suffers a number of mortal wounds equal to the roll.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  "Ghorvar's Collar": {
    effects: [
      {
        name: `Ghorvar's Collar`,
        desc: `Once per battle, at the start of the combat phase, you can say that the bearer will don Ghorvar's collar. If you do so, the strike-first effect applies to the bearer until the end of that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  'The Furious Crown': {
    effects: [
      {
        name: `The Furious Crown`,
        desc: `Once per battle, at the start of your charge phase, you can say that the bearer will unleash the fury of the crown. If you do so, after the bearer makes a charge move in that phase, you can pick 1 enemy unit within 1" of the bearer and roll a number of dice equal to the charge roll for that charge move. For each 4+, that unit suffers 1 mortal wound.`,
        when: [START_OF_CHARGE_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
