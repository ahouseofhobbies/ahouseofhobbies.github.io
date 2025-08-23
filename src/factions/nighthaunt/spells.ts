import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, DURING_ANY_PHASE, DURING_GAME, END_OF_TURN, HERO_PHASE } from 'types/phases'

const Spells = {
  'Lore of the Underworlds': {
    effects: [
      {
        name: `Fell Blades: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Nighthaunt Wizard to cast this spell, pick a visible friendly Nighthaunt unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
        Effect: Until the start of your next turn, each time the target uses a Fight ability, if all of its attacks targeted the same enemy unit, after that ability has been resolved, subtract 1 from save rolls for that enemy unit for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wrench Souls: Casting value of 6`,
        desc: `Declare: Pick a friendly Nighthaunt Wizard to cast this spell, pick a visible friendly non-Hero Nighthaunt Infantry unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
        Effect: The target can immediately use the 'Normal Move' or 'Retreat' ability as if it were your movement phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Chains of Death: Casting value of 7`,
        desc: `Declare: Pick a friendly Nighthaunt Wizard to cast this spell, pick a visible enemy Hero within 18" of them to be the target, then make a casting roll of 2D6.
        Effect: The target has Strike-Last for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Clattering Procession (AoR)': {
    effects: [
      {
        name: `Spectral Lashes: Casting value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Clattering Procession Wizard to cast this spell, pick a visible friendly Clattering Procession unit wholly within 12" of them and that has not been picked to be the target of this ability this turn to be the target, then make a casting roll of 2D6.
        Effect: Add 2" to the target's Move characteristic for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fell Riders: Casting value of 6`,
        desc: `Declare: Pick a friendly Clattering Procession Wizard to cast this spell, pick the caster and up to 1 other visible friendly Clattering Procession unit wholly within 12" of them to be the targets, then make a casting roll of 2D6.
        Effect: You can reroll run rolls and charge rolls for the targets for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Shyish Reaper: Casting value of 6`,
        desc: `Declare: If there is not a friendly Shyish Reaper on the battlefield, pick a friendly Clattering Procession Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Shyish Reaper wholly within 9" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shyish Reaper - Soul Reaper - Passive`,
        desc: `Effect: Add 2 to the Attacks characteristic of this Manifestations Almighty Reap if it charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Eternal Nightmare (AoR)': {
    effects: [
      {
        name: `Divine Terror: Casting value of 5 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Eternal Nightmare Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6.
        Effect: Subtract 3 from the target's control score for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Will of Nagash: Casting value of 8`,
        desc: `Declare: Pick a friendly Eternal Nightmare Wizard to cast this spell, pick a visible friendly Eternal Nightmare Infantry unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
        Effect: Until the start of your next turn, if the unmodified hit roll or unmodified wound roll for an attack that targets the target unit is 1-3, the attack fails and the attack sequence ends.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Mortalis Terminexus: Casting value of 6`,
        desc: `Declare: If there is not a friendly Mortalis Terminexus on the battlefield, pick a friendly Eternal Nightmare Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Mortalis Terminexus wholly within 18" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortalis Terminexus - Keeper of Mortality`,
        desc: `Declare: Pick a visible friendly Nighthaunt unit within 3" of this Manifestation to be the target. 
        Effect: Roll a dice. On a 2+, pick 1 of the following effects: 
        Add 1 to run rolls and charge rolls for target for the rest of the turn. 
        Heal (3) the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Shyish Reaper: Casting value of 6`,
        desc: `Declare: If there is not a friendly Shyish Reaper on the battlefield, pick a friendly Eternal Nightmare Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Shyish Reaper wholly within 9" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shyish Reaper - Soul Reaper - Passive`,
        desc: `Effect: Add 2 to the Attacks characteristic of this Manifestations Almighty Reap if it charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Vault of Souls: Casting value of 6`,
        desc: `Declare: If there is not a friendly Vault of Souls on the battlefield, pick a friendly Eternal Nightmare Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Vault of Souls wholly within 18" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Vault of Souls - Siphon Souls - Passive`,
        desc: `Effect: Each time a model (friendly or enemy) is slain within 12" of this Manifestation, give this Manifestation a soul point, to a maximum of 6.`,
        when: [DURING_GAME],
      },
      {
        name: `Vault of Souls - Soul Eruption`,
        desc: `Declare: If this Manifestation has 6 soul points, pick any number of enemy units within 6" of this Manifestation to be the targets. 
        Effect: Roll 6 dice for each target. On a 4+, inflict 1 mortal damage on the target. Then, reset this Manifestations soul points to 0.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'Spirit Drain': {
    effects: [
      {
        name: `Spirit Drain`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Roll a number of dice equal to the number of models in the target unit. For each 6, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Lifestealer: {
    effects: [
      {
        name: `Lifestealer`,
        desc: `Casting value of 7 and arange of 12". Pick 1 enemy unit within range and visible to the caster. The target suffers D3 mortal wounds. You can heal 1 wound allocated to the caster for each mortal wound that was allocated (and not negated) by this spell.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Seal of Shyish': {
    effects: [
      {
        name: `Seal of Shyish`,
        desc: `Casting value of 5 and a range of 12". Pick 1 friendly NIGHTHAUNT unit wholly within range and visible to the caster. That unit has a ward of 5+ until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Shademist: {
    effects: [
      {
        name: `Shademist`,
        desc: `Casting value of 6 and a range of 12". Pick 1 friendly NIGHTHAUNT unit wholly within range and visible to the caster. Subtract 1 from wound rolls for attacks that target that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Spectral Tether': {
    effects: [
      {
        name: `Spectral Tether`,
        desc: `Casting value of 4. If successfully cast, remove the caster from the battlefield and set it up again on the battlefield more than from all enemy units. The caster cannot move in the following movement phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Grief-Stricken': {
    effects: [
      {
        name: `Grief-Stricken`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Subtract 1 from hit rolls for attacks made by that unit and add 1 to hit rolls for attacks made with melee weapons by friendly Nighthaunt units that target that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Wraithstorm: {
    effects: [
      {
        name: `Wraithstorm`,
        desc: `Casting value of 7 and a range of 12". Pick 1 enemy unit within range and visible to the caster. That unit suffers D3 mortal wounds. If any models in that unit are slain as a result of this spell, that unit immediately suffers an additional D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Spectral Lure': {
    effects: [
      {
        name: `Spectral Lure`,
        desc: `Casting value of 6 and a range of 24". Pick 1 friendly Nighthaunt Summonable unit wholly within range and visible to the caster. You can heal up to D6 wounds allocated to that unit or, if no wounds are allocated to it, you can return a number of slain models to that unit that have a combined Wounds characteristic of D6 or less.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /*'Hand of Dust': {
    effects: [
      {
        name: `Hand of Dust`,
        desc: `Casting value of 8 and a range of 3". Pick 1 enemy model within range and visible to the caster. Then, take a dice and hide it in one of your hands or under one of two appropriate containers. Your opponent must pick one of your hands or containers. If they pick the one holding the dice, the spell has no effect. If they pick the empty hand or container, the enemy model is slain.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Soul Stealer': {
    effects: [
      {
        name: `Soul Stealer`,
        desc: `Casting value of 7 and a range of 24". Pick 1 enemy unit within range and visible to the caster. That unit suffers D3 mortal wounds. If the unmodified casting roll for this spell is 9+ and this spell is not unbound, that unit suffers D6 mortal wounds instead of D3. You can heal up to 1 wound that has been allocated to the caster for each mortal wound caused by this spell that is not negated.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Howling Vortex': {
    effects: [
      {
        name: `Howling Vortex`,
        desc: `Casting value of 7 and a range of 18". Pick a point on the battlefield within range and visible to the caster. Then, roll 2D6 for each enemy unit within 6" of that point. If the roll is greater than that unit's unmodified Move characteristic, or the roll is a double, that unit suffers 1 mortal wound and its Move characteristic is halved until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
