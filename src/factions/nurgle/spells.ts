import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'

const Spells = {
  /* 'Stream of Corruption': {
    effects: [
      {
        name: `Stream of Corruption`,
        desc: `Stream of Corruption is a spell with a casting value of 6 and range of 7". If successfully cast, pick 1 enemy unit within range and visible to the caster. Roll 1 dice for each model in that unit that is within range of the caster. For each 5+, that unit suffers 1 mortal wound.
        
        Before attempting to cast this spell, you can say that the caster will project the stream across a greater distance. If you do so, the spell has a range of 14" but only inflicts 1 mortal wound for each roll of 6 instead of each roll of 5+.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Deluge of Nurgle': {
    effects: [
      {
        name: `Deluge of Nurgle`,
        desc: `Casting value of 7. If successfully cast, roll 7 dice. For each 5+, you can pick 1 different enemy unit that is visible to the caster. Each of those units suffers 3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Plague Wind': {
    effects: [
      {
        name: `Plague Wind`,
        desc: `Casting value of 7 and range of 14". Pick 1 point on the battlefield within range and visible to the caster and draw a straight line between that point and the closest part on the caster's base. Roll a dice for each enemy unit passed across by that line. On a 4+, that unit suffers 1 disease point.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Eruptive Infestation': {
    effects: [
      {
        name: `Eruptive Infestation`,
        desc: `Casting value of 6. Pick 1 enemy unit that is within 3" of a friendly Plaguebearer Host that is visible to the caster. That enemy unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fleshy Abundance': {
    effects: [
      {
        name: `Fleshy Abundance`,
        desc: `Fleshy Abundance is a spell that has a casting value of 7 and range of 14". If successfully cast, pick 1 friendly MAGGOTKIN OF NURGLE DAEMON unit within range and visible to the caster. Add 1 to the Wounds characteristic of that unit until your next hero phase.

        Designer's Note: This can result in a model that is affected by this spell being slain if the wounds allocated to that model equal or exceed its Wounds characteristic once the effect of the spell ends.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Miasma of Pestilence': {
    effects: [
      {
        name: `Miasma of Pestilence`,
        desc: `Casting value of 6 and range of 14". Pick 1 enemy unit within range and visible to the caster. Until your next hero phase, roll a dice at the end of each phase in which any wounds or mortal wounds were allocated to that unit. On a 2+, that unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Blades of Putrefaction': {
    effects: [
      {
        name: `Blades of Putrefaction`,
        desc: `Casting value of 7 and range of 14". Pick 1 friendly MAGGOTKIN OF NURGLE unit within range and visible to the caster. Until your next hero phase, each attack made with a missile weapon or melee weapon by that unit inflicts 1 disease point on the target unit on an unmodified hit roll of 5 or 6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Gift of Disease': {
    effects: [
      {
        name: `Gift of Disease`,
        desc: `Casting value of 6 and range of 21". Pick 1 enemy unit within range and visible to the caster. Give that unit and each other enemy unit within 7" of that unit 1 disease point.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Rancid Visitations': {
    effects: [
      {
        name: `Rancid Visitations`,
        desc: `Casting value of 6 and range of 7". Pick 1 enemy unit within range and visible to the caster and roll 1 dice for each model in that unit that is within range. For each 2+, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Favoured Poxes': {
    effects: [
      {
        name: `Favoured Poxes`,
        desc: `Casting value of 7 and range of 14". Pick 1 enemy unit within range and visible to the caster. Until the caster moves, attacks, makes a casting, unbinding or dispelling attempt, or is slain, subtract 1 from hit and wound rolls for attacks made by that unit and subtract 1 from save rolls for attacks that target that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Magnificent Buboes': {
    effects: [
      {
        name: `Magnificent Buboes`,
        desc: `Casting value of 7 and range of 21". Pick 1 enemy hero within range and visible to the caster. Until your next hero phase, subtract 1 from hitrolls for attacks made by that HERO and subtract 1 from chanting, casting, dispelling and unbinding rolls for that HERO.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Plague Squall': {
    effects: [
      {
        name: `Plague Squall`,
        desc: `Casting value of 6. If successfully cast, roll 7 dice. For each 6, you can pick 1 different encnoy unit that is visible to the caster and give that unit 1 disease point.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Lore of Malignance': {
    effects: [
      {
        name: `Cloying Quagmire: Casting value of 7`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Halve the targets Move characteristic until the start of your next turn. If the targets Save characteristic is 3+ or better, subtract 1 from run rolls and charge rolls for that unit until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fleshy Abundance: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Wizard to cast this spell, pick a visible friendly Maggotkin of Nurgle unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Pick 1 of the following effects: 
        Heal (D3) the target. 
        Subtract 1 from wound rolls for attacks that target that unit until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Magnificent Buboes: Casting value of 7`,
        desc: `Declare: Pick a friendly Maggotkin of Nurgle Wizard to cast this spell, pick a visible enemy Hero within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from hit rolls for the targets attacks and subtract 1 from casting rolls, chanting rolls, banishment rolls and unbinding rolls for the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Fleshy Abundance': {
    effects: [
      {
        name: `Fleshy Abundance`,
        desc: `Fleshy Abundance is a spell that has a casting value of 7 and range of 14". If successfully cast, pick 1 friendly MAGGOTKIN OF NURGLE DAEMON unit within range and visible to the caster. Add 1 to the Wounds characteristic of that unit until your next hero phase.

        Designer's Note: This can result in a model that is affected by this spell being slain if the wounds allocated to that model equal or exceed its Wounds characteristic once the effect of the spell ends.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Magnificent Buboes': {
    effects: [
      {
        name: `Magnificent Buboes`,
        desc: `Casting value of 7 and range of 21". Pick 1 enemy hero within range and visible to the caster. Until your next hero phase, subtract 1 from hitrolls for attacks made by that HERO and subtract 1 from chanting, casting, dispelling and unbinding rolls for that HERO.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
