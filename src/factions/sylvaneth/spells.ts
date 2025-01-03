import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, HERO_PHASE, SAVES_PHASE } from 'types/phases'

const Spells = {
  // Lore of the Deepwood
 /* 'Throne of Vines': {
    effects: [
      {
        name: `Throne of Vines`,
        desc: `At the end of each phase until the start of your next hero phase, you can heal 1 wound allocated to the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Regrowth: {
    effects: [
      {
        name: `Regrowth`,
        desc: `Casting value of 5. Pick 1 friendly SYLVANETH unit wholly within 18" of the caster and visible to them. You can heal up to D6 wounds allocated to that unit.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Lore of the Deepwood': {
    effects: [
      {
        name: `Treesong: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Sylvaneth Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: If there are fewer than 3 friendly Awakened Wyldwoods on the battlefield, you can set up an Awakened Wyldwood wholly within 24" of the caster, more than 3" from all objectives and more than 1" from all enemy units and other terrain features. If there are already 3 friendly Awakened Wyldwoods on the battlefield, Heal (3) each friendly Awakened Wyldwood.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wrathful Spirits: Casting value of 6`,
        desc: `Declare: Pick a friendly Sylvaneth Wizard to cast this spell, pick a friendly Awakened Wyldwood wholly within 18" of the caster to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, add 1 to the Rend characteristic of melee weapons used by friendly Sylvaneth units while they are wholly within 6" of the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Dwellers Below: Casting value of 7`,
        desc: `Declare: Pick a friendly Sylvaneth Wizard to cast this spell, pick a visible enemy unit that is either within 12" of this unit or within 6" of an Awakened Wyldwood to be the target, then make a casting roll of 2D6. 
        Effect: Roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on the target unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'Deadly Harvest': {
    effects: [
      {
        name: `Deadly Harvest`,
        desc: `Casting value of 6. Each enemy unit within 3" of the caster suffers D3 mortal wounds (roll separately for each unit).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Verdurous Harmony': {
    effects: [
      {
        name: `Verdurous Harmony`,
        desc: `Casting value of 7. Pick 1 friendly SYLVANETH unit wholly within 18" of the caster and visible to them. You can return 1 slain model to that unit. If you picked a unit of DRYADS, TREE-REVENANTS or SPITE-REVENANTS, you can return up to D3 slain models to that unit instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Treesong: {
    effects: [
      {
        name: `Treesong`,
        desc: `Casting value of 7. Pick 1 Awakened Wyldwood within 16" of the caster. Until the start of your next hero phase, improve the Rend characteristic of melee weapons used by friendly SYLVANETH units by 1 while they are wholly within 9" of that Awakened Wyldwood.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //BATLE TRAIT SPELLS
  'Verdant Blessing': {
    effects: [
      {
        name: `Verdant Blessing`,
        desc: `Casting value of 6 and a range of 18". If successfully cast, setup an Awakened Wyldwood terrain feature wholly within range and visible to the caster, and more than 3" from all other models, endless spells, invocations, terrain features, and objectives, and add it to your army.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Alarielle Spells
  Metamorphosis: {
    effects: [
      {
        name: `Metamorphosis`,
        desc: `Casting value of 7 and a range of 16". Pick 1 enemy unit within range and visible to the caster, and roll a number of dice equal to the unmodified casting roll. For each 3+, there suffers 1 mortal wound.
        
        If a unit is destroyed by a mortal wound caused by this spell: before removing the last model from play you can set up 1 Awakened Wyldwood terrain feature consisting of 1 piece wholly within 12" of that model and more than 3" from all other models, terrain features and objectives and add it to your army.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Branchwych Spells
  'Unleash Spites': {
    effects: [
      {
        name: `Unleash Spites`,
        desc: `Casting value of 5 and a range of 9". Roll a number of dice equal to the unmodified casting roll for each enemy unit within range of the caster. For each 5+, That enemy unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Lady of Vines Spells
  'Aspect of the Everqueen': {
    effects: [
      {
        name: `Aspect of the Everqueen`,
        desc: `Casting value of 7 and a range of 12". Until your next hero phase, friendly Sylvaneth units have a ward of 5+ while they are wholly within range of the caster.`,
        when: [HERO_PHASE, SAVES_PHASE],
      },
    ],
  },
  //Drycha Spells
  'Primal Terror': {
    effects: [
      {
        name: `Primal Terror`,
        desc: `Casting value of 6 and a range of 12". Roll 2D6, each enemy unit within range that has a Bravery characteristic lower than the roll suffers D3 mortal wounds (roll separatly each unit).`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Warsong Revenant Spells
  'Unleash Swarm of Spites': {
    effects: [
      {
        name: `Unleash Swarm of Spites`,
        desc: `Casting value of 7 and a range of 9". Roll a number of dice equal to the unmodified casting roll for each enemy unit within range of the caster. For each 5+, that enemy unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Treelord ancient Spells
  'Awakening the Wood': {
    effects: [
      {
        name: `Awakening the Wood`,
        desc: `Casting value of 6. Pick 1 friendly Awakened Wyldwood on the battlefield. Each enemy unit within 3" of it suffers D3 mortal wounds (roll separately for each unit).`,
        when: [HERO_PHASE],
      },
    ],
  },
  //SKAETH'S WILD HUNT Spells
  'Might of Kurnoth': {
    effects: [
      {
        name: `Might of Kurnoth`,
        desc: `Casting value of 7 and a range of 12". Pick 1 friendly SYLVANETH unit within range and visible to the caster. Add 1 to wound rolls for attacks made with melee weapons by that unit until the start of your next hero phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Might of Kurnoth`,
        desc: `If active, add 1 to wound rolls for attacks made with melee weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  //YLTHARI ancient Spells
  'The Reaping': {
    effects: [
      {
        name: `The Reaping`,
        desc: `Casting value of 6 and a range of 12". Pick 1 enemy unit within range and visible to the caster, roll 6 dice. For each 5+, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
