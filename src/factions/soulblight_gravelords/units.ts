import { keyPicker, tagAs } from 'factions/metatagger'
import { Nagash } from 'factions/nighthaunt/units'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_ANY_PHASE,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import spells from './spells'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'
import { move } from 'superagent'
import { Duplex } from 'stream'

/*const VampiricAgilityEffect = {
  name: `Vampiric Agility`,
  desc: `When this unit makes a move, it can pass across terrain features in the same manner as a unit that can fly.`,
  when: [MOVEMENT_PHASE],
  shared: true,
}
const CallToTheHuntEffect = {
  name: `Call to the Hunt`,
  desc: `In the combat phase, if this unit made a charge move in the same turn, add 1 to the Attacks characteristic of melee weapons used by friendly VYRKOS SUMMONABLE units while they are wholly within 12" of this unit.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const StandardBearerEffect = {
  name: `Standard Bearer`,
  desc: `You can reroll ward rolls of 1 for this unit for the purposes of the Deathless Minions battle trait if this unit includes any Standard Bearers.`,
  when: [WARDS_PHASE],
  shared: true,
}
const BeheadingStrikeEffect = {
  name: `Beheading Strike`,
  desc: `If the unmodified hit roll for an attack made with a Baleful Tomb Blade is 6, that attack causes 2 mortal wounds to the target in addition to any damage it inflicts.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const CursedWeaponsEffect = {
  name: `Cursed Weapons`,
  desc: `If the unmodified wound roll for an attack made with a melee weapon by this unit is 6, that attack causes 1 mortal wound to the target in addition to any damage it inflicts.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const LocusOfUndeathEffect = {
  name: `Locus of Undeath`,
  desc: `If the unmodified wound roll for an attack made by a friendly DEADWALKER ZOMBIES unit wholly within 12" of any friendly units with this ability is 6, that attack causes 1 mortal wound to the target in addition to any damage it inflicts.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const TerrorEffect = {
  name: `Terror`,
  desc: `Enemy units cannot receive the Inspiring Presence command while they are within 3" of any friendly units with this ability.`,
  when: [BATTLESHOCK_PHASE],
  shared: true,
}
const TheHungerEffect = {
  name: `The Hunger`,
  desc: `Each time this unit fights, after all of its attacks have been resolved, you can heal up to a number of wounds allocated to this unit equal to the number of wounds and mortal wounds caused by those attacks that were allocated to enemy units (to a maximum of 6).`,
  when: [COMBAT_PHASE],
  shared: true,
}
const NightmaresMiasmaEffect = {
  name: `Nightmares Miasma`,
  desc: `While an enemy unit is within 3" of any friendly units with this ability, worsen the Rend characteristic of that unit's melee weapons by 1 (to a minimum of '-').`,
  when: [COMBAT_PHASE],
  shared: true,
}
const WailOfTheDamnedEffect = {
  name: `Wail of the Damned`,
  desc: `In your shooting phase, roll a dice for each enemy unit within range of this unit's Wail of the Damned ability. The range of this unit's Wail of the Damned ability is shown on its damage table. On a 4+, that unit suffers D3 mortal wounds.`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const DeathlyChargeEffect = {
  name: `Deathly Charge`,
  desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit. If you do so, roll 2 dice for each model in this unit. For each 5+, the target suffers 1 mortal wound.`,
  when: [CHARGE_PHASE],
  shared: true,
} */

const Units = {
 // ...Nagash,
 'Nagash, Supreme Lord of the Undead': {
  effects: [
    {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, subtract 3 from its power level.`,
      when: [HERO_PHASE],
    },
    {
      name: `The Staff of Power - Passive`,
      desc: `Effect: Add 2 to casting rolls for this unit while it has not miscast any spells this turn. If this unit miscasts a spell, ignore the restriction that would stop this unit from casting any more spells this turn.`,
      when: [HERO_PHASE],
    },
    {
      name: `Hand of Dust - Once Per Turn`,
      desc: `Declare: Pick a visible enemy Hero or Monster in combat with this unit to be the target. 
      Effect: Hide a dice in one of your hands or under one of two appropriate containers. Your opponent must pick one of your hands or containers. If they pick the one hiding the dice, this ability has no effect. If they pick the empty one, the target is automatically destroyed.`,
      when: [END_OF_TURN],
    },
    {
      name: `Supreme Lord of the Undead - Once Per Battle`,
      desc: `Declare: Pick a friendly non-Hero non-Unique Death unit that has been destroyed to be the target. 
      Effect: Set up a replacement unit identical to the target wholly within 12" of this unit and more than 9" from all enemy units.`,
      when: [HERO_PHASE],
    },
    {
      name: `Invocation of Nagash: Casting value of 7`,
      desc: `Declare: This unit can cast this spell more than once per phase. Pick a visible unit wholly within 18" of this unit that has not been picked to be the target of this spell this turn to be the target, then make a casting roll of 2D6. 
      Effect: If the target is an enemy unit, inflict D3 mortal damage on it. If the target is a friendly Death unit, pick 1 of the following effects:  
      Return a number of slain models to the target unit with a combined Health characteristic of up to 3.  The target has Ward (5+) until the start of your next turn.`,
      when: [HERO_PHASE],
    },
  ],
},
  'Mannfred von Carstein': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Wind of Death'])],
    }, */
    effects: [
     // GenericEffects.WizardTwoSpellsEffect,
     // TheHungerEffect,
      {
        name: `Wind of Death: Casting value of 7`,
        desc: `Declare: Pick a point on the battlefield within 18" of the caster, pick up to 3 visible enemy units within 6" of that point to be the targets, then make a casting roll of 2D6. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Sword of Unholy Power - Passive`,
        desc: `Effect: If this unit has slain any enemy models this turn, for the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly Deathrattle and Deadwalkers units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mortarch of Night - Reaction: You declared the Redeploy command for a Soulblight Gravelords unit wholly within 12" of this unit`,
        desc: `Effect: The unit using the Redeploy command can move into combat when using that ability.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Ashigaroths Claws is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ashigaroth's Hunger - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, this unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  Neferata: {
   /* mandatory: {
      spells: [keyPicker(spells, ['Dark Mist'])],
    }, */
    effects: [
     // GenericEffects.WizardTwoSpellsEffect,
     {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Nagadrons Claws is 3.`,
      when: [COMBAT_PHASE],
    },
      {
        name: `Twilight's Allure - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks that target friendly Soulblight Gravelords units while they are wholly within 6" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mortarch of Blood`,
        desc: `Declare: Pick up to 3 friendly Deathrattle Infantry or Deadwalkers Infantry units to be the targets. 
        Effect: Each target can use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
      {
        name: `The Adevore - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero that was allocated any damage points inflicted by this units Akmet-har this turn to be the target. 
        Effect: Roll a dice. On a 5+, the target is automatically destroyed.`,
        when: [END_OF_TURN],
      },
      {
        name: `Dark Mist: Casting value of 7`,
        desc: `Declare: Pick a visible friendly non-Monster Soulblight Gravelords unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Ignore modifiers to save rolls for the target (positive and negative) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    //  TheHungerEffect,
    ],
  },

  'Prince Vhordrai': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Quickblood'])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
     // TheHungerEffect,
     {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Shordemaires Claws is 5.`,
      when: [COMBAT_PHASE],
    },
    // TerrorEffect,
      {
        name: `Saint of Slaughter`,
        desc: `Declare: Pick a friendly non-Monster Vampire unit that destroyed a unit this turn using a Fight ability and is wholly within 12" of this unit to be the target. 
        Effect: Pick 1 of the following effects to apply for the rest of the battle:  
        Add 2" to the targets Move characteristic.  
        Add 1 to the Attacks characteristic of the targets melee weapons.  
        Add 1 to the Damage characteristic of the targets melee weapons. 
        More than 1 effect can apply to a unit at the same time; however, each effect can only be applied to a unit once`,
        when: [END_OF_TURN],
      },
      {
        name: `Quickblood: Casting value of 7`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: This unit has Strike-first until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Snapping Jaws - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 4+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  /*'Prince Duvalle': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Fiendish Lure'])],
    }, 
    effects: [
     // TheHungerEffect,
      {
        name: `'Come Then, Amuse Us'`,
        desc: `At the start of the combat phase, if this unit and any friendly THE CRIMSON COURT models are within 3" of the same enemy unit, your opponent must pick 1 of the following effects to apply until the end of that phase:
        
        - Improve the Rend characteristic of this unit's Possessed Blade by 1.
        
        - This unit cannot be picked as the target of attacks made with melee weapons.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */

 /* 'The Crimson Court': {
    effects: [
    //  TheHungerEffect,
      {
        name: `Gorath the Enforcer`,
        desc: `Gorath the Enforcer has a Wounds characteristic of 4.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    //  VampiricAgilityEffect,
    ],
  }, */

  'Lauka Vai': {
   /* mandatory: {
      spells: [keyPicker(spells, ["The Queen's Dictat"])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
    //  TheHungerEffect,
      {
        name: `Nightmare Miasma - Passive`,
        desc: `Effect: Subtract 1 from the Rend characteristic of melee weapons used by enemy units while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Impaling Talons - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. If the roll is equal to or less than the targets Health characteristic, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Queen's Dictat: Casting value of 6`,
        desc: `Declare: Pick a visible friendly Soulblight Gravelords Monster wholly within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Pick 1 of the targets Companion melee weapons. Add D3 to the Attacks characteristic of that weapon for the rest of the turn.`,
        when: [HERO_PHASE],
      },
   //   NightmaresMiasmaEffect,
    ],
  },

  'Vengorian Lord': {
    /*mandatory: {
      spells: [keyPicker(spells, ['Cursed Reflection'])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
    //  NightmaresMiasmaEffect,
    //  TheHungerEffect,
      {
        name: `Festering Feast`,
        desc: `Declare: Pick a visible friendly non-Hero Soulblight Gravelords Monster that destroyed an enemy unit this turn and that is wholly within 12" of this unit to be the target. 
        Effect: Heal (6) the target.`,
        when: [END_OF_TURN],
      },
      {
        name: `Scything Talons - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Nightmare Miasma - Passive`,
        desc: `Effect: Subtract 1 from the Rend characteristic of melee weapons used by enemy units while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Belladamma Volga': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Under a Killing Moon', 'Lycancurse'])],
    }, */
    effects: [
     // TheHungerEffect,
      {
        name: `Wolfguard - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Dire Wolves unit:  
        This unit has Ward (4+).  
        Each time you make a successful ward roll for this unit, allocate 1 damage point to a friendly Dire Wolves unit within this units combat range after the damage sequence for this unit has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `First of the Vyrkos - Passive`,
        desc: `Effect: Add 3 to the control scores of friendly Radukar the Wolf, Radukar the Beast, Ivya Volga, Lady Annika, Kritza, Vyrkos Blood-born and Vargskyr units while they are wholly within 18" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Under a Killing Moon: Casting value of 7`,
        desc: `Declare: Pick up to 3 visible friendly Dire Wolves units wholly within 18" of this unit to be the targets, then make a casting roll of 2D6. 
        Effect: For the rest of the turn:  
        Add 1 to the Rend characteristic of the targets melee weapons.  
        The targets can ignore the effect of the Beast ability.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Lady Annika': {
    effects: [
     // TheHungerEffect,
      {
        name: `Supernatural Speed`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve lying in wait. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Starving Nightmare`,
        desc: `Declare: Pick this unit if it is lying in wait. 
        Effect: Set up this unit wholly within enemy territory and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Kiss of the Blade Proboscian`,
        desc: `Declare: Pick an enemy unit that was allocated any damage points inflicted by this units combat attacks this turn to be the target. 
        Effect: Roll a dice. On a 2+, subtract 1 from save rolls for the target for the rest of the battle.`,
        when: [END_OF_TURN],
      },
    ],
  },

  Kritza: {
    effects: [
    //  TheHungerEffect,
      {
        name: `Scurrying Retreat`,
        desc: `Effect: If this unit is in combat, roll a dice. On a 2+, this unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Verminous Court`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target, then pick an artefact of power that the target has. 
        Effect: Roll a dice. On a 3+, the target no longer has that artefact of power.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Radukar the Wolf': {
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
    //  TheHungerEffect,
     // CallToTheHuntEffect,
      {
        name: `Call to the Hunt - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to wound rolls for combat attacks made by friendly Deathrattle, Deadwalkers and Vyrkos Blood-born units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Master of the Pack: Casting value of 6`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Until the start of your next turn, you can re-roll charge rolls for friendly Soulblight Gravelords Infantry units while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Radukar the Beast': {
    effects: [
    //  TheHungerEffect,
    {
      name: `Call to the Hunt - Passive`,
      desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to wound rolls for combat attacks made by friendly Deathrattle, Deadwalkers and Vyrkos Blood-born units while they are wholly within 12" of this unit.`,
      when: [COMBAT_PHASE],
    },
     // CallToTheHuntEffect,
      {
        name: `Armour of the Night: Casting value of 6`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: Subtract 1 from hit rolls and wound rolls for attacks that target this unit for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Beast Will Out - Once Per Turn`,
        desc: `Effect: If this unit is not in combat, it can move D6". It can move into combat.`,
        when: [END_OF_TURN],
      },
    ],
  },

  'Gorslav the Gravekeeper': {
    effects: [
      {
        name: `Keeper of the Corpse-Gardens - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Deadwalker Zombies unit:  
        This unit has Ward (4+).  
        Each time you make a successful ward roll for this unit, allocate 1 damage point to a friendly Deadwalker Zombies unit within this units combat range after the damage sequence for this unit has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Arise! Arise! - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Deadwalker Zombies units wholly within 12" of this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, return up to a number of slain models to the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  'Torgillius the Chamberlain': {
    effects: [
      //GenericEffects.WizardOneSpellEffect,
      {
        name: `Trusted Lieutenant - Passive`,
        desc: `Effect: This unit can use the Deathly Invocation ability even if a dierent friendly unit has already used it this turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Failing Fortitude: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from wound rolls for the targets attacks.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Vyrkos Blood-Born': {
    effects: [
      {
        name: `Shadowfast`,
        desc: `Effect: Roll a dice. On a 3+, this unit can use a Move ability as if it were your movement phase.`,
        when: [END_OF_TURN],
      },
      {
        name: `Cling to the Shadows - Passive`,
        desc: `Effect: While each model in this unit is within 1" of any terrain features, this unit cannot be targeted by shooting attacks unless the attacking model is within 9" of it.`,
        when: [SHOOTING_PHASE],
      },
    //  VampiricAgilityEffect,
    //  TheHungerEffect,
    ],
  },

  'Watch Captain Halgrim': {
    effects: [
      {
        name: `Echoes of the Watch - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Deathrattle Skeletons unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Disciplined Advance - Passive`,
        desc: `Effect: Each time you make a run roll for a friendly Deathrattle Skeletons unit wholly within 12" of this unit, you can change that roll to a 4.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  Vargskyr: {
    effects: [
      {
        name: `Bounding Haste - Passive`,
        desc: `Effect: Add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3. In addition, when this unit uses a Charge ability, it can pass through terrain features and enemy models as if it had Fly.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
     // TheHungerEffect,
    ],
  },

  'Kosargi Nightguard': {
    effects: [
      {
        name: `A Pact Maintained - Passive`,
        desc: `Effect: While a friendly Radukar the Wolf or Radukar the Beast is within this units combat range, both that unit and this unit have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },

  'Vampire Lord on Zombie Dragon': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Curse of Exsanguination'])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
     // TheHungerEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Draconic Claws is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `That Which Should Not Be - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, subtract 1 from the control scores of enemy units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Bloodthirsty Dominance - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a number of dice equal to the targets Health characteristic. For each 6, inflict 1 mortal damage on the target.`,
        when: [END_OF_TURN],
      },
     // TerrorEffect,
    ],
  },

  'Blood Knights': {
    effects: [
     // TheHungerEffect,
     // StandardBearerEffect,
      {
        name: `Riders of Ruin - Passive`,
        desc: `Effect: When this unit moves, it can pass through models in enemy Infantry units and can pass through the combat ranges of enemy Infantry units, but it cannot end a move in combat unless specified in the ability used.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Trampled to Dust`,
        desc: `Declare: Pick an enemy unit that this unit passed across this turn to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  Vargheists: {
    effects: [
     // TheHungerEffect,
      {
        name: `Death's Descent - Once Per Turn`,
        desc: `Effect: If this unit is not in combat, remove it from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  'Vampire Lord': {
    effects: [
     // GenericEffects.WizardOneSpellEffect,
     // TheHungerEffect,
      {
        name: `Sanguine Blur - Once Per Turn`,
        desc: `Effect: Roll a dice. On a 3+, remove this unit from the battlefield and set it up again on the battlefield more than 9" from all enemy non-Hero units and more than 3" from all enemy Heroes.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  'Bloodseeker Palanquin': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Blood Siphon'])],
    }, */
    effects: [
     // TheHungerEffect,
      {
        name: `A Promising Concoction - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly Vampire units wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wails of the Damned - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are within 12" of this unit.`,
        when: [END_OF_TURN],
      },
     // WailOfTheDamnedEffect,
     // GenericEffects.WizardOneSpellEffect,
    ],
  },

  'Mortis Engine': {
    effects: [
    //  WailOfTheDamnedEffect,
      {
        name: `The Reliquary - Passive`,
        desc: `Effect: When this unit is set up for the first time, place a stored energy dice beside it with the 1 facing up. Each time a friendly Soulblight Gravelords Wizard successfully casts a spell while it is within 12" of this unit, increase the value of the stored energy dice beside this unit by 1 (to a maximum of 6).`,
        when: [HERO_PHASE],
      },
      {
        name: `Nexus of Death Energy - Passive`,
        desc: `Effect: When a friendly Deathrattle or Deadwalkers unit wholly within 12" of this unit is picked to be the target of the Deathly Invocation ability, add D3 to the number of damage points that can be healed or the combined Health characteristic of models that can be returned.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wave of Power - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units within 10" of this unit to be the targets. 
        Effect: Roll a dice for each target. On a 3+, inflict an amount of mortal damage on the target equal to the value of this units stored energy dice. Then, change the value of the stored energy dice back to 1.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },

  'Coven Throne': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Undying Servitude'])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
    //  TheHungerEffect,
      {
        name: `Tactical Insight - Passive`,
        desc: `Effect: Friendly Deathrattle and Deadwalkers units have Ward (5+) while they are wholly within 6" of this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Scrying Pool - Passive`,
        desc: `Effect: If a friendly Soulblight Gravelords unit wholly within 12" of this unit uses the Redeploy command, you can pick another friendly Soulblight Gravelords unit wholly within 12" of this unit that has not used a command this phase to use the Redeploy command immediately after the first has been resolved (this is an exception to Commands, 1.2). No command point is spent the second time that command is used.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  Necromancer: {
  /*  mandatory: {
      spells: [keyPicker(spells, ["Vanhel's Danse Macabre"])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
      {
        name: `Undead Minions - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Deathrattle or Deadwalkers unit:  
        This unit has Ward (4+).  
        Each time you make a successful ward roll for this unit, allocate 1 damage point to a friendly Deathrattle or Deadwalkers unit within this units combat range after the damage sequence for this unit has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Vanhel's Danse Macabre - Once Per Turn`,
        desc: `Declare: Pick a friendly Deathrattle or Deadwalkers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target can use 2 Fight abilities this phase. After the first is used, however, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Deadwalker Zombies': {
    effects: [
      {
        name: `Mindless Ferocity - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 6+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Corpse Cart': {
    effects: [
      {
        name: `Locus of Undeath - Passive`,
        desc: `Effect: Melee weapons used by other friendly Deadwalkers units have Crit (Auto-wound) while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
     // LocusOfUndeathEffect,
    ],
  },

  'Zombie Dragon': {
    effects: [
      //...GenericEffects.ZombieDragon
      {
        name: `Battle Damaged - Passive`,
        desc: `Eect: While this unit has 10 or more damage points, the Attacks characteristic of its Draconic Claws is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Death on Tattered Wings`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve high above the battlefield. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Loathsome Descent`,
        desc: `Declare: Pick this unit if it is high above the battlefield. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Armour Crunch - Once Per turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy Cavalry or Monster unit in combat with it to be the target. 
        Effect: Roll a dice. If the roll is equal to or exceeds the targets Save characteristic, inflict 3 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  Terrorgheist: {
    effects: [
     // ...GenericEffects.Terrorgheist
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Skeletal Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sonic Assault - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice for each model in the target unit. 
        If 3 or more of the dice have the same value, for the rest of the turn, this unit has Strike-first. 
        If 6 or more of the dice have the same value, for the rest of the turn, this unit has Strike-first and the target cannot use commands.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gaping Maw - Passive`,
        desc: `Effect: Each time an attack made with this units Fanged Maw scores a critical hit, that attack inflicts 6 mortal damage on the target unit and the attack sequence ends.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Wight King': {
    effects: [
    //  BeheadingStrikeEffect,
      {
        name: `Ancient Strategies - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Deathrattle Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Wight King on Skeletal Steed': {
    effects: [
      {
        name: `Royal Companions - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Deathrattle Cavalry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Lord of Trampling Bones - Passive`,
        desc: `Effect: Add 1 to charge rolls for friendly Deathrattle Cavalry units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  'Black Knights': {
    effects: [
    //  DeathlyChargeEffect,
     // StandardBearerEffect,
      {
        name: `The Deathly Charge - Passive`,
        desc: `Effect: If this unit charged this turn, its Barrow Lances have Crit (Mortal) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Grave Guard': {
    effects: [
      {
        name: `Guardians of the King - Passive`,
        desc: `Effect: While any friendly Soulblight Gravelords Infantry Heroes are within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },

  'Deathrattle Skeletons': {
    effects: [
      {
        name: `Skeleton Legion`,
        desc: `Effect: You can return D3 slain models to this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },

 /* 'The Sepulchral Guard': {
    effects: [
      {
        name: `The Sepulchral Warden`,
        desc: `The Sepulchral Warden has a Wounds characteristic of 3.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `The Sepulchral Warden`,
        desc: `At the start of your hero phase, if this model is on the battlefield, you can return D3 slain models to this unit.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Frightening Speed`,
        desc: `You can reroll charge rolls for this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Frightening Speed`,
        desc: `This unit is eligible to fight in the combat phase if it is within 6" of an enemy unit instead of 3", and it can move an extra 3" when it piles in.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Serve in Death`,
        desc: `If the unmodified hit roll for an attack made by this unit is 6, that attack scores 2 hits on the target instead of 1. Make a wound roll and save roll for each hit.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */

  'Dire Wolves': {
    effects: [
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `On the Hunt - Passive`,
        desc: `Effect: This unit can use a Run ability and still use Charge abilities later in the turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  'Fell Bats': {
    effects: [
    //  TheHungerEffect,
    {
      name: `Beast - Passive`,
      desc: `Effect: This unit has a maximum control score of 1.`,
      when: [END_OF_TURN],
    },
      {
        name: `Fleet and Fell - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  'Cado Ezechiar': {
  /*  mandatory: {
      spells: [keyPicker(spells, ['Retribution or Salvation'])],
    }, */
    effects: [
     // GenericEffects.WizardOneSpellEffect,
     // TheHungerEffect,
      {
        name: `The Court of the Lost`,
        desc: `Effect: Roll a dice. On a 2+, pick 1 of the following effects to apply until the start of your next turn.  
        This unit has a Move characteristic of 12".  
        Add 1 to casting rolls, unbinding rolls and banishment rolls for this unit.  
        This units melee weapons have Crit (Mortal).`,
        when: [HERO_PHASE],
      },
      {
        name: `Retribution or Salvation: Casting value of 7`,
        desc: `Declare: Pick a visible unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: If the target is an enemy unit, inflict D3 mortal damage on it. 
        If the target is a friendly Deathrattle or Deadwalkers unit, subtract 1 from wound rolls for combat attacks that target that unit for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },

 /* 'Deintalos the Exile': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Channelled Dynamism'])],
    }, 
    effects: [
     // GenericEffects.WizardOneSpellEffect,
     //TheHungerEffect,
      {
        name: `Crackling Field`,
        desc: `This unit has a ward of 5+.`,
        when: [WARDS_PHASE],
      },
      {
        name: `Terrible Dynamism`,
        desc: `At the end of the battleshock phase, if a friendly THE EXILED DEAD unit is within 6" of this unit, you can return 1 slain model to that unit.`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
    ],
  }, */

  'Ivya Volga': {
    effects: [
     // TheHungerEffect,
      {
        name: `Shrieking Swarm - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Behemoth's Bane - Passive`,
        desc: `Effect: Subtract 2 from the Attacks characteristic of enemy Monsters melee weapons while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Total Dominance: Casting value of 6`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: For the rest of the turn, subtract 5 from the control scores of enemy Monsters while they are within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },

 /* 'King Morlak Velmorn': {
    effects: [
    //  BeheadingStrikeEffect,
      {
        name: `Deadly Command`,
        desc: `Once per turn, this unit can issue a command to a friendly THE SONS OF VELMORN unit without a command point being spent.`,
        when: [DURING_GAME],
      },
      {
        name: `Undying Dynasty`,
        desc: `At the start of the combat phase, roll a dice for each slain model from a friendly THE SONS OF VELMORN unit wholly within 12" of this unit. On a 4+, you can return 1 slain model to that unit.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */

  'Askurgan Trueblades': {
    effects: [
      {
        name: `Gut-Wrenching Howl`,
        desc: `Declare: Pick an enemy unit in combat with this units Curseblood to be the target. 
        Effect: Roll a dice. On a 4+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Creed of the Askurga Renkai - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks made by enemy Monsters that target this unit. 
        Add 1 to hit rolls for combat attacks made by this unit that target enemy Monsters.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

 /* 'The Exiled Dead': {
    effects: [
      {
        name: `Champion`,
        desc: `Prentice Marcov is the unit champion and has a Wounds characteristic of 3. Add 1 to casting and unbinding rolls for a friendly DEINTALOS THE EXILE if this unit includes Prentice Marcov.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dynamic Cage`,
        desc: `If the unmodified hit roll for an attack made with an Arco-electric Weapon is 6, the target suffers 1 mortal wound and the attack sequence ends (do not make a wound roll or save roll).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crackling Field`,
        desc: `While this unit is wholly within 9" of a friendly DEINTALOS THE EXILE, Bault, Vlash, Ione and Coyl have a ward of 5+.`,
        when: [WARDS_PHASE],
      },
    ],
  }, */

 /* 'The Sons of Velmorn': {
    effects: [
      {
        name: `Sir Jedran Falseborn`,
        desc: `Sir Jedran Falseborn has a Wounds characteristic of 4.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
     // CursedWeaponsEffect,
      {
        name: `Shield Up!`,
        desc: `Once per turn, at the start of the combat phase, you can say that this unit will form a shieldwall. If you do so, this unit has a Save characteristic of 3+ instead of 4+ until the end of that phase. However, if you do so, this unit cannot make pile-in moves in that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Canny Strike`,
        desc: `At the start of the combat phase, you can pick 1 enemy unit within 1" of this unit and roll a dice. On a 2+, that unit cannot make pile-in moves in that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */
  'Sekhar, Fang of Nulahmia': {
    effects: [
      {
        name: `The Time Swallower's Maw - Once Per Battle`,
        desc: `Declare: Pick each enemy unit in combat with this unit to be the targets. 
        Effect: This unit cannot use the Serpentine Agility ability for the rest of the battle. Roll 2D6 for each target. If the roll exceeds the targets Move characteristic, inflict an amount of mortal damage on the target equal to the difference between the roll and its Move characteristic.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Serpentine Agility - Passive`,
        desc: `Effect: If the unmodified hit roll for an attack that targets this unit is 1-4, the attack fails and the attack sequence ends.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Death's Construction: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, this unit, and any friendly Soulblight Gravelords units while they are wholly within 6" of this unit, cannot be picked to be the target of abilities used by the target other than Fight abilities.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: The Summerking`s Entourage': {
    effects: [
      {
        name: `Ushoran: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Monstrous Talons is 6.`,
        when: [COMBAT_PHASE],
        },
        {
          name: `Ushoran: Epicentre of Delusion`,
          desc: `Effect: Pick 1 of the following effects to apply until the start of your next turn: 
          The Royal Hunt: Add 1 to wound rolls for attacks made by friendly Flesh-eater Courts units that target a Monster. 
          Crusading Army: Add 1 to run rolls and charge rolls for friendly Flesh-eater Courts units. 
          Defenders of the Realm: Add 1 to save rolls for friendly Flesh-eater Courts units while they are contesting an objective you control. 
          The Grand Tournament: Add 1 to hit rolls for attacks made by other friendly Flesh-eater Courts Heroes if they charged in the same turn.`,
          when: [HERO_PHASE],
        },
        {
          name: `Ushoran: Shroudcage Fragment - Once Per Turn`,
          desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
          Effect: Roll a dice for each target. If the roll exceeds the targets Control characteristic, the target has Strike-last for the rest of the turn.`,
          when: [COMBAT_PHASE],
        },
        {
          name: `Ushoran: Glimpse of Delusion: Casting value of 7`,
          desc: `Declare: Pick a visible enemy model within 18" of this unit to be the target, pick another enemy unit within the targets combat range to be the victim, then make a casting roll of 2D6. 
          Effect: Pick 1 of the targets melee weapons. Immediately resolve combat attacks made with that weapon against the victim.`,
          when: [HERO_PHASE],
        },
        {
          name: `Crypt Guard: Armoury of Madness - Reaction: You declared a Fight ability for this unit`,
          desc: `Effect: If any damage points inflicted by attacks made as part of that Fight ability are allocated to any enemy units, those enemy units cannot use commands until the start of your next turn.`,
          when: [COMBAT_PHASE],
        },
        {
          name: `Crypt Guard: Royal Bodyguard - Passive`,
          desc: `Effect: While any friendly Flesh-eater Courts Heroes are wholly within this units combat range, both this unit and those Heroes have Ward (5+).`,
          when: [DURING_GAME],
        },
        {
          name: `Morbheg Kinghts: Shrieking Charge`,
          desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of this unit to be the target. 
          Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
          when: [CHARGE_PHASE],
        },
        {
          name: `Morbheg Knights: Predator's Pounce - Passive`,
          desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
          when: [MOVEMENT_PHASE],
        },
        {
          name: `Deranged Transformation: Casting value of 7 (UNLIMITED)`,
          desc: `Declare: Pick the Ushoran in this Regiment of Renown to cast this spell, pick another visible unit in this Regiment of Renown wholly within 12" of them to be the target, then make a casting roll of 2D6. 
          Effect: Until the start of your next turn:  
          Add 2" to the targets Move characteristic.  
          Add 1 to wound rolls for the targets combat attacks.`,
          when: [HERO_PHASE],
        },
        {
          name: `Maddening Radiance - Passive`,
          desc: `Effect: Add 1 to the Attacks characteristic of melee weapons used by units in this Regiment of Renown while they are wholly within 12" of the Ushoran in this Regiment of Renown.`,
          when: [COMBAT_PHASE],
        },
        {
          name: `Summon Deluded Throngs - Once Per Battle`,
          desc: `Declare: Pick the Ushoran in this Regiment of Renown to use this ability, then pick another unit in this Regiment of Renown that has been destroyed to be the target. 
          Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 6" of a battlefield edge and more than 9" from all enemy units. The replacement unit is part of this Regiment of Renown.`,
          when: [MOVEMENT_PHASE],
        },
    ],
  },
  'ROR: Jerrion`s Delegation': {
    effects: [
      {
        name: `Marrowscroll Herald: The King's Entreaty - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, pick 1 of the following effects: 
        Attack the Apostate!: Friendly Flesh-eater Courts units in combat with the target have Strike-first for the rest of the turn. 
        Welcome the Disciple!: The target has the Infected keyword for the rest of the battle. Each time your opponent declares a command, Spell ability or Prayer ability for an Infected unit, roll a dice. On a 5+:  
        If they declared a command, that command has no effect. The command still counts as having been used and the command points spent to use the command are still lost.  
        If they declared a Spell or Prayer ability, that spell or prayer fails.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Marrowscroll Herald: Don't Shoot the Messenger - Passive`,
        desc: `Effect: While this unit is not in combat and is wholly within the combat ranges of 3 or more other friendly Flesh-eater Courts Infantry models, it is not visible to enemy units.`,
        when: [DURING_GAME],
      },
      {
        name: `Crypt Ghouls: Royal Approval - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons while it is wholly within 12" of any friendly Courtiers or Abhorrants.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crypt Horrors: Royal Approval - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons while it is wholly within 12" of any friendly Courtiers or Abhorrants.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crypt Flayers: Escort Courtier - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a friendly Flesh-eater Courts Infantry Hero that does not have Fly and is within this units combat range to be the target. 
        Effect: Remove the target from the battlefield. Then, this unit can move a distance up to its Move characteristic. It cannot end that move in combat. Then, set up the target within this units combat range and more than 3" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Urgent Missive - Passive`,
        desc: `Effect: Units in this Regiment of Renown can use Charge abilities even if they used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on units in this Regiment of Renown by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: The Liche`s Hand': {
    effects: [
      {
        name: `Arkhan: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Razaraks Ebon Claws is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Arkhan: The Doom of Traitors - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If the target is a Hero, double the amount of mortal damage inflicted.`,
        when: [COMBAT_PHASE],
      },
    //  FeasterOfSoulsEffect,
      {
        name: `Arkhan: Staff of Spirits - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit. Each time this unit successfully casts a spell, Heal (1) this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Arkhan: Curse of Years: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Roll 10 dice. For each 6:  
        Inflict 1 mortal damage on the target.  
        Roll an extra dice. 
        For each 5+ on those extra dice, repeat the above bullet points. Then, do the same for each 4+, then each 3+, then each 2+.`,
        when: [HERO_PHASE],
      },
      {
        name: `Arkhan: Mortarch of Sacrament - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If a friendly Ossiarch Bonereapers unit wholly within 18" of this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on that unit. This unit can use this ability more than once per phase but only once per Spell ability`,
        when: [HERO_PHASE],
      },
      {
        name: `Morghast Archai: Ebon-Wrought Armour - Passive`,
        desc: `Effect: This unit has Ward (3+) against damage points inflicted by Spell abilities, Prayer abilities and abilities used by Manifestations. If you make a successful ward roll for this unit, or if this unit destroys an enemy Manifestation, give this unit an arcane charge token. This unit cannot have more than 1 arcane charge token at once.`,
        when: [DURING_GAME],
      },
      {
        name: `Morghast Archai: Discharge Armour`,
        desc: `Declare: If this unit has an arcane charge token, pick a friendly Ossiarch Bonereapers Wizard wholly within 12" of this unit to be the target. 
        Effect: Remove this units arcane charge token, then add 1 to casting rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Morghast Harbingers: Harbingers of Death - Passive`,
        desc: `Effect: Add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Skeletal Splintering: Casting value of 8 (UNLIMITED)`,
        desc: `Declare: This spell can be cast by the same Wizard more than once per phase. Pick the Arkhan the Black in this Regiment of Renown to cast this spell, pick a visible enemy unit within 18" of them that has not been picked to be the target of this spell this turn to be the target, then make a casting roll of 2D6. 
        Effect: Roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Unholy Sacraments - Passive`,
        desc: `Effect: Add 1 to the number of dice rolled when making banishment rolls for the Arkhan the Black in this Regiment of Renown, to a maximum of 3.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Scions of the Necropolis': {
    effects: [
      {
        name: `Katakros: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Inda-Khaat is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Katakros: Prime Necrophoros - Passive`,
        desc: `Effect: Add 3 to the control scores of other friendly Ossiarch Bonereapers units while they are wholly within 18" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Katakros: Aviarch Spymaster - Once Per Turn - Reaction: Opponent declared a command for a unit within 18" of this unit`,
        desc: `Effect: Roll a dice. On a 5+, that command has no effect, it still counts as having been used and the command points spent to use it are still lost.`,
        when: [DURING_GAME],
      },
      {
        name: `Katakros: Command Ability - Supreme Lord of the Bonereaper Legions`,
        desc: `Declare: Pick up to 3 friendly Ossiarch Bonereapers units wholly within 18" of this unit to be the targets. 
        Effect: Until the start of your next turn, add 1 to save rolls for the targets while they are wholly within 18" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Immortis Guard: Soulbound Protectors - Passive`,
        desc: `Effect: Add 1 to ward rolls for friendly Ossiarch Bonereapers Heroes within this units combat range. However, each time you make a ward roll of 1 for a friendly Ossiarch Bonereapers Hero within this units combat range, allocate 1 damage point to this unit after the damage sequence for that Hero has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Bulwark of the Necropolis`,
        desc: `Declare: Pick an enemy unit in combat with a unit in this Regiment of Renown to be the target. 
        Effect: Subtract 2D6 from the targets control score for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: The Sorrowmourn Choir': {
    effects: [
      {
        name: `Lady Olynder: Grief-Stricken: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Ignore positive modifiers to hit rolls, wound rolls and save rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Lady Olynder: Mortarch of Grief - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Lady Olynder: No Rest For the Wicked - Once Per Battle`,
        desc: `Declare: Pick any number of friendly Nighthaunt units on the battlefield to be the targets. 
        Effect: For each target, you can return a number of slain models to that unit with a combined Health characteristic of up to D3+3.`,
        when: [HERO_PHASE],
      },
      {
        name: `Myrmourn Banshees: Spell-Eaters - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If a friendly Nighthaunt unit wholly within 12" of this unit was picked to be the target of that spell, this unit can use the Unbind ability as if it had Wizard (1). Add 1 to the unbinding roll for that ability. If the spell is unbound, inflict D3 mortal damage on the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dreadscythe Harridans: Harrowing Shriek - Passive`,
        desc: `Effect: If this unit charged in the same turn, subtract 1 from wound rolls for attacks made by enemy units while they are in combat with this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Dreadscythe Harridans: Murderous Bloodlust - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units combat attacks while it is in combat with any damaged enemy units or while it is in combat with any enemy units that had any models slain in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ghostly Paths: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: This spell can be cast by the same Wizard more than once per phase. Pick the Lady Olynder in this Regiment of Renown to cast this spell, pick a visible friendly unit in this Regiment of Renown that is wholly within 12" of them, that is not in combat and that has not been picked to be the target of this spell this turn to be the target, then make a casting roll of 2D6. 
        Effect: Remove the target from the battlefield and set it up again more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Insubstantial - Passive`,
        desc: `Effect: Ignore modifiers to save rolls (positive and negative) for units in the Regiment of Renown.`,
        when: [DURING_GAME],
      },
      {
        name: `Harvesters of Sorrow - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with a unit in this Regiment of Renown to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Big Drogg Fort-Kicka': {
    effects: [
      {
        name: `Pulverising Strike`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 4D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Smash Down - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 3" of this unit to be the target. 
        Effect: If the target is Faction Terrain, inflict D3+3 mortal damage on it. Then, roll a D3 for each non-Monster unit (friendly and enemy) within 3" of the target. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Fortcrusha Flail is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grievous Halitosis - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')