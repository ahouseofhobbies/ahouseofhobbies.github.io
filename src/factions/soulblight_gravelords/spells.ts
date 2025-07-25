import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import { COMBAT_PHASE, HERO_PHASE } from 'types/phases'

const Spells = {
  'Lore of Undeath': {
    effects: [
      {
        name: `Vile Transference: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Soulblight Gravelords Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Roll a number of dice equal to the number of models in the target unit. For each 6, inflict 1 mortal damage on that unit. If any enemy models were slain by this spell, Heal (D3) the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Prison of Grief: Casting value of 7`,
        desc: `Declare: Pick a friendly Soulblight Gravelords Wizard to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: The target has Strike-last until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Waste Away: Casting value of 7`,
        desc: `Declare: Pick a friendly Soulblight Gravelords Wizard to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: For the rest of the turn, subtract 1 from the Damage characteristic of the targets melee weapons.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Knights of the Crimson Keep (AoR)': {
    effects: [
      {
        name: `Siphon Strength: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Crimson Keep Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target. For the rest of the turn, add 1 to hit rolls for attacks made by the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Awakened Fury: Casting value of 7`,
        desc: `Declare: Pick a friendly Crimson Keep Wizard to cast this spell, pick a visible friendly Crimson Keep unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Add 1 to the Damage characteristic of the target's Companion melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Deathly Gale: Casting value of 7`,
        desc: `Declare: Pick a friendly Crimson Keep Wizard to cast this spell, pick a visible friendly Crimson Keep unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
        Effect: For the rest of the turn, add 1 to the number of dice rolled when making charge rolls for the target to a maximum of 3.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Unholy Reliquary: Casting value of 6`,
        desc: `Declare: If there is not a friendly Unholy Reliquary on the battlefield, pick a friendly Soulblight Gravelords Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up an Unholy Reliquary wholly within 18" of the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Unholy Reliquary - Draw on Power`,
        desc: `Declare: Pick a friendly Soulblight Gravelords Hero wholly within 12" of this Manifestation to be the target.
        Effect: Pick one of the following:
        Heal D3 the target.
        Add 1 to the Attacks characteristic of the target's melee weapons for the rest of the turn and banish this Manifestation.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Scions of Nulahmiia (AoR)': {
    effects: [
      {
        name: `Invocation of Nulahmia: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Scions of Nulahmia Wizard to cast this spell, pick a visible friendly Dire Wolves or Fell Bats unit wholly within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: You can return 1 slain model to that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Thrall Drain: Casting value of 7`,
        desc: `Declare: Pick a friendly Scions of Nulahmia Wizard to cast this spell, pick a friendly unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: D3 models in the target are slain. Then, remove all damage points from the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scarlet Thrist: Casting value of 7`,
        desc: `Declare: Pick a friendly Scions of Nulahmia Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly Scions of Nulahmia Vampire units while they are wholly within 12" of the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* Soulpike: {
    effects: [
      {
        name: `Soulpike`,
        desc: `Casting value of 6 and a range of 24". Pick 1 enemy unit within range and visible to the caster. Until your next hero phase, if that unit makes a charge move, roll a number of dice equal to the charge roll for that charge move. For each 4+, that unit suffers 1 mortal wound. If the unmodified casting roll for this spell is 9+ and this spell is not unbound, you can pick 2 different enemy units within range instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Vile Transference': {
    effects: [
      {
        name: `Vile Transference`,
        desc: `Casting value of 6 and a range of 9". Pick 1 enemy unit within range and visible to the caster. Roll a number of dice equal to that unit's Wounds characteristic. For each 5+, that unit suffers 1 mortal wound and you can heal 1 wound allocated to the caster. If the unmodified casting roll for this spell is 9+ and this spell is not unbound, the target suffers 1 mortal wound and you can heal 1 wound allocated to the caster for each 4+ instead of each 5+.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fading Vigour': {
    effects: [
      {
        name: `Fading Vigour`,
        desc: `Casting value of 6 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Subtract 1 from the Attacks characteristic of that unit's melee weapons (to a minimum of 1) until your next hero phase. If the unmodified casting roll for this spell is 9+ and this spell is not unbound, subtract 2 from the Attacks characteristic instead of 1 (to a minimum of 1).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Prison of Grief': {
    effects: [
      {
        name: `Prison of Grief`,
        desc: `Casting value of 6 and a range of 12". Pick 1 enemy unit within range and visible to the caster. Until your next hero phase, the strike-last effect applies to that unit. If the unmodified casting roll for this spell is 9+ and this spell is not unbound, the range of this spell is 24" instead of 12".`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Wind of Death': {
    effects: [
      {
        name: `Wind of Death`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Roll a dice for that unit and each other enemy unit within 6" of that unit. On a 3+, the unit being rolled for suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Dark Mist': {
    effects: [
      {
        name: `Dark Mist`,
        desc: `Casting value of 6 and a range of 12". Pick 1 friendly LEGION OF BLOOD unit wholly within range and visible to the caster. Ignore negative modifiers to save rolls for attacks that target that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Quickblood: {
    effects: [
      {
        name: `Quickblood`,
        desc: `Casting value of 7. If successfully cast, the strike-first effect applies to the caster until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fiendish Lure': {
    effects: [
      {
        name: `Fiendish Lure`,
        desc: `Casting value of 5 and a range of 6". Pick 1 enemy unit within range and visible to the caster. Add 1 to hit rolls and wound rolls for attacks that target that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Under a Killing Moon': {
    effects: [
      {
        name: `Under a Killing Moon`,
        desc: `Casting value of 6 and a range of 24". If successfully cast, until your next hero phase, if the unmodified hit roll for an attack made with a melee weapon by a friendly VYRKOS unit wholly within range of the caster is 6, that attack scores 2 hits on the target instead of 1. Make a wound roll and save roll for each hit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Lycancurse: {
    effects: [
      {
        name: `Lycancurse`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. That unit suffers D3 mortal wounds. If any models in that unit were slain by this spell, before removing the last slain model, you can add 1 unit of Dire Wolves to your army. The number of models in the new unit must be equal to the number of models in the enemy unit that were slain by this spell. Set up the new unit within 3" of the slain model's unit, and then remove the slain model from play.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Curse of Exsanguination': {
    effects: [
      {
        name: `Curse of Exsanguination`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. That unit suffers 1 mortal wound. If that mortal wound is allocated to a model in that unit and the model is not slain by that mortal wound, roll a dice. On a 3+, that model suffers 1 mortal wound, and you can roll another dice if that mortal wound is allocated and the model is not slain. Keep rolling dice in this way until no mortal wound is caused, the mortal wound is negated or the model is slain.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Blood Siphon': {
    effects: [
      {
        name: `Blood Siphon`,
        desc: `Casting value of 6 and a range of 12". Pick 1 enemy HERO within range and visible to the caster, and roll a dice. On a 1-2, the target suffers 1 mortal wound. On a 3-4, the target suffers D3 mortal wounds. On a 5-6, the target suffers D6 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Vanhel's Danse Macabre": {
    effects: [
      {
        name: `Vanhel's Danse Macabre`,
        desc: `Casting value of 6 and a range of 18". Pick 1 friendly SOULBLIGHT GRAVELORDS SUMMONABLE unit wholly within range, visible to the caster and within 3" of any enemy units. That unit can immediately fight.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Retribution or Salvation': {
    effects: [
      {
        name: `Retribution or Salvation`,
        desc: `Casting value of 6 and a range of 18". Pick 1 unit within range and visible to the caster. If that unit is an enemy unit, it suffers D3 mortal wounds. If that enemy unit has the CHAOS keyword, it suffers 3 mortal wounds instead of D3. If that unit is a friendly SOULBLIGHT GRAVELORDS SUMMONABLE unit, you can heal up to D3 wounds allocated to that unit or, if no wounds are allocated to that unit, you can return a number of slain models to it that have a combined Wounds characteristic of D3 or less.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Waste Away': {
    effects: [
      {
        name: `Waste Away`,
        desc: `Casting value of 6 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Until your next hero phase, subtract 1 from wound rolls for attacks made with melee weapons by that unit and subtract 1 from the Damage characteristic of that unit's melee weapons (to a minimum of 1). If the unmodified casting roll for this spell is 9+ and this spell is not unbound, you can pick 2 different enemy units within range instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Undying Servitude': {
    effects: [
      {
        name: `Undying Servitude`,
        desc: `Casting value of 7 and a range of 12". Pick 1 enemy HERO with a Wounds characteristic of 6 or less within range and visible to the caster. That unit suffers D3 mortal wounds. If that HERO is slain by this spell, before removing that HERO from play, you can add 1 Vampire Lord to your army. Set up that unit within 3" of the slain HERO, and then remove the slain HERO from play.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Channelled Dynamism': {
    effects: [
      {
        name: `Channelled Dynamism`,
        desc: `Casting value of 3 and a range of 6". Pick 1 friendly THE EXILED DEAD unit wholly within range and visible to the caster. Until your next hero phase, that unit can run and still charge later in the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "The Queen's Dictat": {
    effects: [
      {
        name: `The Queen's Dictat`,
        desc: `Casting value of 6 and a range of 24". Pick 1 enemy unit within range and visible to the caster. Until your next hero phase, friendly AVENGORII MONSTERS are eligible to fight in the combat phase if they are within 6" of that enemy unit instead of 3", and they can move an extra 3" when they pile in.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Cursed Reflection': {
    effects: [
      {
        name: `Cursed Reflection`,
        desc: `Casting value of 5 and a range of 24". Pick 1 friendly SOULBLIGHT GRAVELORDS MONSTER wholly within range and visible to the caster. That unit can use The Hunger ability from the caster's warscroll until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
