import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  DURING_ANY_PHASE,
  DURING_GAME,
  END_OF_ANY_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Artifacts = {
  'Sacred Tome': {
    effects: [
      {
        name: `Sacred Tome`,
        desc: `Effect: If this unit is not a Priest, it has Priest (1). If this unit is already a Priest, add 1 to chanting rolls for this unit. If this unit is a Wizard, it cannot use Spell abilities and Prayer abilities in the same phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Glimmering: {
    effects: [
      {
        name: `Glimmering`,
        desc: `Effect: Each phase, you can reroll 1 hit roll, or 1 wound roll, or 1 save roll for this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  /*  Glimmering: {
    effects: [
      {
        name: `Glimmering`,
        desc: `Once per phase, you can reroll 1 hit roll or 1 wound roll for an attack made by the bearer, or 1 save roll for an attack that targets the bearer.`,
        when: [DURING_ANY_PHASE],
      },
    ], 
  }, */
  'Brazier of Holy Flame': {
    effects: [
      {
        name: `Brazier of Holy Flame`,
        desc: `Declare: Pick a friendly non-Hero Cities of Sigmar Infantry unit that is not in combat and wholly within 12" of this unit. 
        Effect: You can return up to D3 slain models to that unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* "Shemtek's Grimoire": {
    effects: [
      {
        name: `Shemtek's Grimoire`,
        desc: `WIZARD only. Once per battle, at the start of the enemy hero phase, you can say that the bearer will conjure a storm. If you do so, roll a D3. Until the end of that phase, subtract the amount of that roll from casting rolls made for enemy WIZARDS.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Sigmarite Warhammer': {
    effects: [
      {
        name: `Sigmarite Warhammer`,
        desc: `Pick 1 of the bearer's melee weapons. Improve the Rend characteristic of that weapon by 1 and add 1 to the Damage characteristic of that weapon.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Flask of Lethisian Darkwater': {
    effects: [
      {
        name: `Flask of Lethisian Darkwater`,
        desc: `Once per battle, at the end of any phase, you can say that the bearer will sip from the flask. If you do so, you can heal up to D6 wounds allocated to the bearer.`,
        when: [END_OF_ANY_PHASE],
      },
    ],
  },
  'Book of Grudges': {
    effects: [
      {
        name: `Book of Grudges`,
        desc: `At the start of your hero phase, if the bearer is more than 3" from all enemy units, you can say they will read from the Book of Grudges. If you do so, pick 1 enemy unit that is visible to the bearer and roll a dice. On a 4+, a grudge is found. Add 1 to hit rolls for attacks made by friendly CITIES OF SIGMAR DUARDIN units that target that enemy unit until the next grudge is found.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Piledriver Gauntlets': {
    effects: [
      {
        name: `Piledriver Gauntlets`,
        desc: `At the start of the combat phase, if this unit is within 3" of any enemy units, you can say it will strike the ground. If you do so, the bearer cannot fight this phase; however, roll a dice for each enemy unit within 3" of the bearer. On a 4+, the strike-last effect applies to that enemy unit until the end of the phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  'Heavy Metal Ingot': {
    effects: [
      {
        name: `Heavy Metal Ingot`,
        desc: `Ignore negative modifiers to save rolls for attacks that target the bearer if the bearer has not made a move in the same turn.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  'Shadowshroud Ring': {
    effects: [
      {
        name: `Shadowshroud Ring`,
        desc: `Once per battle, at the start of your hero phase, you can say that the bearer will use the ring. If you do so, until the start of your next hero phase, the bearer is not visible to enemy units that are more than 12" away.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Anklet of Epiphany': {
    effects: [
      {
        name: `Anklet of Epiphany`,
        desc: `WIZARD only. Add 6" to the range of spells cast by the bearer while the bearer is wholly on a terrain feature and/or is contesting an objective.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
