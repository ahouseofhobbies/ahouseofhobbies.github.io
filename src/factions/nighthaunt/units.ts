import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_GAME,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_ROUND,
  START_OF_SHOOTING_PHASE,
  TURN_ONE_START_OF_HERO_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import rule_sources from './rule_sources'
import spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

/*const ChillingHordeEffect = {
  name: `Chilling Horde`,
  desc: `Add 1 to wound rolls for attacks made with melee weapons by this unit if this unit made a charge move in the same turn.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const WarmasterEffect = {
  name: `Warmaster`,
  desc: `If this unit is included in a Nighthaunt army, it is treated as a general even if it is not the model picked to be the army's general.`,
  when: [DURING_GAME],
  shared: true,
}
const StolenHoursEffect = {
  name: `Stolen Hours`,
  desc: `At the end of the combat phase, if any enemy models were slain by attacks made with this unit's Sword of Stolen Hours in that phase, you can heal 1 wound allocated to this unit and add 1 to the Wounds characteristic of this unit.`,
  when: [END_OF_COMBAT_PHASE],
  shared: true,
} */

export const Nagash = {
  /* 'Nagash, Supreme Lord of the Undead': {
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
        Return a number of slain models to the target unit with a combined Health characteristic of up to 3. The target has Ward (5+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
}

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
      Return a number of slain models to the target unit with a combined Health characteristic of up to 3. The target has Ward (5+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Awlrach the Drowner': {
    /* mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Passage Through the Underworlds'])],
    }, */
    effects: [
      {
        name: `Passage Through the Underworlds - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a friendly non-Hero Nighthaunt unit that is not in combat and is wholly within 12" of this unit to be the target. 
        Effect: Remove this unit and the target from the battlefield, then set them up again on the battlefield wholly within 6" of each other and more than 7" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Lady Olynder, Mortarch of Grief': {
    /*  mandatory: {
      spells: [keyPicker(spells, ['Grief-Stricken'])],
    }, */
    effects: [
      //  WarmasterEffect,
      {
        name: `Grief-Stricken: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Ignore positive modifiers to hit rolls, wound rolls and save rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortarch of Grief - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `No Rest For the Wicked - Once Per Battle`,
        desc: `Declare: Pick any number of friendly Nighthaunt units on the battlefield to be the targets. 
        Effect: For each target, you can return a number of slain models to that unit with a combined Health characteristic of up to D3+3.`,
        when: [HERO_PHASE],
      },
      //  GenericEffects.WizardTwoSpellsEffect,
    ],
  },
  'Kurdoss Valentian, the Craven King': {
    effects: [
      {
        name: `If I Cannot Rule, None Shall Rule! - Once Per Turn - Reaction: Opponent declared a command for a unit within 12" of this unit`,
        desc: `Effect: Roll a dice. On a 3+, unless your opponent spends 1 additional command point to use that command, the command has no effect, it still counts as having been used and the command points spent to use the command are still lost.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Kurdoss Valentian, the Craven King (SoG)': {
    effects: [
      {
        name: `Inescapable Mockery - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units combat attacks that target an enemy unit that has a lower Control characteristic than this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `A Traitor's Legacy`,
        desc: `Declare: If this unit is in combat, pick a visible friendly Nighthaunt unit wholly within 12" of this unit to be the target. 
        Effect: Pick 1 of the following to apply for the rest of the turn: 
        Regicide and Kinslaying: The targets melee weapons have AntiHero (+1 Rend). 
        Usurpation and Larceny: Add 5 to the targets control score. 
        Sedition and Betrayal: Enemy units cannot use commands while they are in combat with the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Reikenor the Grimhailer': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Wraithstorm'])],
    }, */
    effects: [
      //  GenericEffects.WizardOneSpellEffect,
      {
        name: `Corpse Candles`,
        desc: `Declare: Pick either this unit or a visible enemy unit within 12" of this unit to be the target. 
        Effect: Allocate 1 damage point to the target. 
        If you picked an enemy unit, add 1 to casting rolls for this unit for the rest of the turn. 
        If you picked this unit, for the rest of the turn: 
        Add 1 to casting rolls for this unit. 
        Add 1 to this units power level.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wraithstorm: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target. If any models are slain by this ability, inflict an additional D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Grim Justice - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for attacks made with this units Fellreaper if the target is a Priest or a Wizard.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Scriptor Mortis': {
    effects: [
      {
        name: `Judge, Jury, and Executioner - Once Per Turn`,
        desc: `Effect: Roll a dice for each Sentenced enemy unit on the battlefield. On a 4+, inflict an amount of mortal damage equal to the current battle round number on that Sentenced unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Sentenced to Eternal Torment - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has the Sentenced keyword for the rest of the battle.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Knight of Shrouds': {
    effects: [
      //  StolenHoursEffect,
      {
        name: `Stolen Hours - Passive`,
        desc: `Effect: Each time this unit uses a Fight ability, after that Fight ability has been resolved, Heal (X) this unit, where X is the number of damage points allocated to enemy units by combat attacks made as part of that Fight ability.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Infantry Overseer - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Nighthaunt Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Knight of Shrouds on Ethereal Steed': {
    effects: [
      // StolenHoursEffect,
      {
        name: `Stolen Hours - Passive`,
        desc: `Effect: Each time this unit uses a Fight ability, after that Fight ability has been resolved, Heal (X) this unit, where X is the number of damage points allocated to enemy units by combat attacks made as part of that Fight ability.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cavalry Overseer - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Nighthaunt Cavalry or War Machine unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Craventhrone Guard': {
    effects: [
      {
        name: `Spectral Bolts - Passive`,
        desc: `Effect: This unit can pick enemy units to be the targets of shooting attacks even if they are not visible to this unit. In addition, ignore negative modifiers to hit rolls for this units shooting attacks.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Guardian of Souls': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Spectral Lure'])],
    }, */
    effects: [
      //  GenericEffects.WizardOneSpellEffect,
      {
        name: `Nightmare Lantern - Passive`,
        desc: `Effect: While this unit is in combat, add 1 to wound rolls for combat attacks made by friendly Nighthaunt units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Spirit Torment': {
    effects: [
      {
        name: `Captured Soul Energy - Passive`,
        desc: `Effect: Each time a friendly Nighthaunt unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Chainghasts: {
    effects: [
      // GenericEffects.Elite,
      {
        name: `Another Link in the Chain`,
        desc: `Effect: Roll a dice. Add 1 to the roll if this unit is wholly within 12" of any friendly Spirit Torments. On a 3+, for the rest of the turn, add 1 to hit rolls for combat attacks made by friendly Nighthaunt units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Dreadblade Harrows': {
    effects: [
      {
        name: `Phantasmal Discorporation`,
        desc: `Effect: Remove this unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Curse of Loyalty - Passive`,
        desc: `Effect: If this unit charged this turn, add 3 to the control scores of friendly Nighthaunt units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
        //rule_sources: [rule_sources.BATTLETOME_NIGHTHAUNT, rule_sources.ERRATA_JULY_2022],
      },
    ],
  },
  'Lord Executioner': {
    effects: [
      {
        name: `Staring Death in the Face - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+, subtract 1 from the Attacks characteristic of the targets melee weapons for the rest of the turn. In addition, if the target is a Hero, subtract 5 from the targets control score for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Tomb Banshee': {
    effects: [
      {
        name: `Ghostly Howl - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this units Piercing Scream to be the target. 
        Effect: Roll a dice. On a 2+, the target cannot use commands until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Cacophony of Sorrow - Passive`,
        desc: `Effect: While there are any friendly Myrmourn Banshees units wholly within 12" of this unit, ignore positive modifiers to the control scores of enemy units within 12" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Cairn Wraith': {
    effects: [
      {
        name: `Eager Death-Dealers - Passive`,
        desc: `Effect: While this unit is in combat, add 1 to the Attacks characteristic of melee weapons used by friendly Grimghast Reapers while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Glaivewraith Stalkers': {
    effects: [
      //  GenericEffects.Elite,
      {
        name: `The Point of Death - Once Per Battle`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: The target has the Stalked keyword for the rest of the battle.`,
        when: [DURING_SETUP],
      },
      {
        name: `Unerring Hunters - Reaction: You declared a Charge ability for this unit and a Stalked enemy unit is within 12" of it`,
        desc: `Effect: Add 2 to charge rolls for this unit made as part of that ability, but this unit must end the move in combat with the Stalked enemy unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Grimghast Reapers': {
    effects: [
      {
        name: `Reaped Like Corn - Passive`,
        desc: `Effect: This units combat attacks score critical hits on unmodified hit rolls of 5+ while the target unit has 5 or more models.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Chainrasps: {
    effects: [
      {
        name: `Chilling Horde - Passive`,
        desc: `Effect: Add 1 to wound rolls for this units combat attacks if it charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      // ChillingHordeEffect,
    ],
  },
  'Bladegheist Revenants': {
    effects: [
      //  GenericEffects.Elite,
      {
        name: `Thrashing Desperation - Passive`,
        desc: `Effect: If this unit charged this turn, add 1 to the Attacks characteristic of this units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Myrmourn Banshees': {
    effects: [
      //   GenericEffects.Elite,
      {
        name: `Spell-Eaters - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If a friendly Nighthaunt unit wholly within 12" of this unit was picked to be the target of that spell, this unit can use the Unbind ability as if it had Wizard (1). Add 1 to the unbinding roll for that ability. If the spell is unbound, inflict D3 mortal damage on the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Dreadscythe Harridans': {
    effects: [
      {
        name: `Harrowing Shriek - Passive`,
        desc: `Effect: If this unit charged in the same turn, subtract 1 from wound rolls for attacks made by enemy units while they are in combat with this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Murderous Bloodlust - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units combat attacks while it is in combat with any damaged enemy units or while it is in combat with any enemy units that had any models slain in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Spirit Hosts': {
    effects: [
      //  GenericEffects.Elite,
      {
        name: `Drawn to War - Passive`,
        desc: `Effect: Friendly Nighthaunt Infantry Heroes have Ward (4+) while they are wholly within this units combat range.`,
        when: [DURING_GAME],
        // rule_sources: [rule_sources.BATTLETOME_NIGHTHAUNT, rule_sources.ERRATA_OCTOBER_2022],
      },
    ],
  },
  Hexwraiths: {
    effects: [
      {
        name: `Spectral Hunters`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Black Coach': {
    effects: [
      {
        name: `Nimbus of Power`,
        desc: `Effect: If this unit is not in combat, remove it from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Evocation of Death`,
        desc: `Declare: If this unit destroyed any enemy units this turn, pick a friendly non-Unique Nighthaunt Hero that has been destroyed. .
        Effect: Set up a replacement unit wholly within 12" of this unit. The replacement unit can only be set up in combat with enemy units that are in combat with this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Runaway Coach`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage equal on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Black Coach (SoG)': {
    effects: [
      {
        name: `Spectral Attendants - Once Per Turn`,
        desc: `Effect: Pick 1 of the following to apply for the rest of the turn: 
        Noble Blade: This units melee weapons, including Companion weapons, have Crit (Mortal) instead of Crit (Auto-wound). 
        Unholy Grail: Pick a friendly Nighthaunt unit wholly within 12" of this unit. Each time that unit uses the Rally command, you receive 3 additional rally points. 
        Tome of Undead Lore: This unit has Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `One Stop, No Return - Once Per Turn`,
        desc: `Declare: Pick an objective you do not control to be the target. 
        Effect: For the rest of the turn, while enemy units are contesting the target objective, they cannot score critical hits while this unit is also contesting it (hit rolls that would be critical hits score hits instead).`,
        when: [HERO_PHASE],
      },
      {
        name: `Spectral Charge`,
        desc: `Effect: For the rest of the phase, add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  /*'The Briar Queen': {
 mandatory: {
      spells: [keyPicker(spells, ['Howling Vortex'])],
    }, 
    effects: [
      GenericEffects.WizardOneSpellEffect,
      {
        name: `Grasping Chains`,
        desc: `Before you allocate a wound or mortal wound to this unit, or instead of making a ward roll for a wound or mortal wound that would be allocated to this unit, if this unit is within 3" of its retinue, roll a dice. On a 1-2, that wound or mortal wound is allocated to this unit as normal. On a 3+, that wound or mortal wound is allocated to this unit's retinue instead of this unit.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Thorns of the Briar Queen': {
    effects: [
      {
        name: `Champion`,
        desc: `Varclav the Cruel is the unit champion. Add 1 to the Attacks characteristic of that model's Malignant Weapon.`,
        when: [COMBAT_PHASE],
      },
    //  ChillingHordeEffect,
    ],
  }, */
  'Krulghast Cruciator': {
    effects: [
      {
        name: `Empowered Through Excruciation - Passive`,
        desc: `Effect: Ignore the first damage point that would be allocated to each friendly Nighthaunt unit wholly within 12" of this unit in each phase.`,
        when: [DURING_GAME],
        //  rule_sources: [rule_sources.BATTLETOME_NIGHTHAUNT, rule_sources.ERRATA_OCTOBER_2022],
      },
    ],
  },
  Pyregheists: {
    effects: [
      {
        name: `Light a Pyre`,
        desc: `Declare: If this unit is contesting an objective, pick a visible enemy unit within 6" of this unit to be the target. 
        Effect: Roll a D3. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. 
        Add a number equal to the roll to this units control score for the rest of the turn.`,
        when: [END_OF_TURN],
        //  rule_sources: [rule_sources.BATTLETOME_NIGHTHAUNT, rule_sources.ERRATA_OCTOBER_2022],
      },
    ],
  },
  /* Mourngul: {
    effects: [
      {
        name: `Devourer of Flesh and Souls`,
        desc: `At the end of the combat phase, if any enemy models were slain by wounds inflicted by this model's attacks in that combat phase, you can heal up to D3 wounds allocated to this model.`,
        when: [END_OF_COMBAT_PHASE],
      },
      {
        name: `Ethereal`,
        desc: `Ignore modifiers (positive and negative) when making save rolls for attacks that target this model.`,
        when: [SAVES_PHASE],
      },
      {
        name: `Frightful Touch`,
        desc: `If the unmodified hit roll for an attack made with this model's Nightmarish Claws and Fangs is 6, that attack causes 2 mortal wounds to the target and the attack sequence ends (do not make a wound or save roll).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ghastly Apparition`,
        desc: `Subtract 1 from hit rolls for attacks made by enemy units while they are within 6" of any friendly models with this ability.`,
        when: [DURING_GAME],
      },
    ],
  }, */
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
        desc: `Effect: If a friendly Ossiarch Bonereapers unit wholly within 18" of this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on that unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
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
  'ROR: Neferata`s Royal Echelon': {
    effects: [
      {
        name: `Neferata: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Nagadrons Claws is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neferata: Twilight's Allure - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks that target friendly Soulblight Gravelords units while they are wholly within 6" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neferata: Mortarch of Blood`,
        desc: `Declare: Pick up to 3 friendly Deathrattle Infantry or Deadwalkers Infantry units to be the targets. 
          Effect: Each target can use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
      {
        name: `Neferata: The Adevore - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero that was allocated any damage points inflicted by this units Akmet-har this turn to be the target. 
          Effect: Roll a dice. On a 5+, the target is automatically destroyed.`,
        when: [END_OF_TURN],
      },
      {
        name: `Neferata: Dark Mist: Casting value of 7`,
        desc: `Declare: Pick a visible friendly non-Monster Soulblight Gravelords unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6. 
          Effect: Ignore modifiers to save rolls for the target (positive and negative) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Black Knights: The Deathly Charge - Passive`,
        desc: `Effect: If this unit charged this turn, its Barrow Lances have Crit (Mortal) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Deathrattle Skeletons: Skeleton Legion`,
        desc: `Effect: You can return D3 slain models to this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Soulpike: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Neferata in this Regiment of Renown to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
          Effect: Until the start of your next turn, each time the target uses a Charge ability, immediately after that ability has been resolved, roll a number of dice equal to the unmodified charge roll for that ability. For each 4+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Premeditated Demise - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 12" of the Neferata in this Regiment of Renown to be the target. 
          Effect: Until the start of your next turn, ward rolls cannot be made for damage points inflicted on the target by attacks made by units in this Regiment of Renown.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Blood Queen's Will - Once Per Battle`,
        desc: `Declare: Pick an enemy unit contesting an objective that the Neferata in this Regiment of Renown is contesting to be the target. 
          Effect: Roll a dice. On a 2-5, subtract 10 from the control score of the target for the rest of the turn. On a 6, the target has a maximum control score of 1 for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: The Sternieste Garrison': {
    effects: [
      {
        name: `Mannfred Von Carstein: Wind of Death: Casting value of 7`,
        desc: `Declare: Pick a point on the battlefield within 18" of the caster, pick up to 3 visible enemy units within 6" of that point to be the targets, then make a casting roll of 2D6. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mannfred Von Carstein: Sword of Unholy Power - Passive`,
        desc: `Effect: If this unit has slain any enemy models this turn, for the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly Deathrattle and Deadwalkers units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mannfred Von Carstein: Mortarch of Night - Reaction: You declared the Redeploy command for a Soulblight Gravelords unit wholly within 12" of this unit`,
        desc: `Effect: The unit using the Redeploy command can move into combat when using that ability.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Mannfred Von Carstein: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Ashigaroths Claws is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mannfred Von Carstein: Ashigaroth's Hunger - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, this unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fell Bats: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Fell Bats: Fleet and Fell - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Stalking Blades: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Mannfred von Carstein in this Regiment of Renown to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
          Effect: Inflict 1 mortal damage on the target for each other enemy unit within 3" of the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Engulfing Shadows - Passive`,
        desc: `Effect: Each time a unit in this Regiment of Renown is set up, add 1 to the Attacks characteristic of that units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cover of Night - Once Per Turn`,
        desc: `Declare: Pick 1 friendly unit in this Regiment of Renown that is not in combat to be the target. 
          Effect: Remove that unit from the battlefield and set it up again more than 6" from all enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Veremord`s Shamblers': {
    effects: [
      {
        name: `Corpse Cart: Locus of Undeath - Passive`,
        desc: `Effect: Melee weapons used by other friendly Deadwalkers units have Crit (Auto-wound) while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Deadwalker Zombies: Mindless Ferocity - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 6+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vitiating Vapours - Passive`,
        desc: `Effect: Subtract 1 from ward rolls for enemy units while they are within 12" of the Corpse Cart in this Regiment of Renown.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Legend Among Graverobbers`,
        desc: `Declare: Pick the Corpse Cart in this Regiment of Renown to use this ability if it is within 3" of the Deadwalker Zombies unit in this Regiment of Renown. Then, pick each enemy Infantry, Cavalry and Beast unit within 12" of the Corpse Cart to be the targets. 
        Effect: For each target that had any models slain this turn, you can return D3 slain models to the Deadwalker Zombies unit in this Regiment of Renown.`,
        when: [END_OF_TURN],
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
  'ROR: The Lost-Long Spirits': {
    effects: [
      {
        name: `Treelord: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Sweeping Blows is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Treelord: Lash and Tangle - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
          Effect: Roll a dice. On a 3+, subtract 1 from wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Treelord: Entangling Grasp`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this units Strangleroots to be the target. 
          Effect: Roll a dice. On a 3+, the target cannot use Run or Retreat abilities until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Spite-Revenants: Unbridled Malice`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
          Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Endless Wandering - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Pick a unit in this Regiment of Renown that is not in combat to use this ability. 
        Effect: That unit can use the Normal Move ability as if it were your movement phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ominous Fog - Passive`,
        desc: `Effect: Units in this Regiment of Renown are not visible to enemy units more than 12" from them while they are wholly within 9" of the Treelord in this Regiment of Renown.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Stumblefoot Gargant': {
    effects: [
      {
        name: `Mancrusher Gargant: Stuff 'Em in Me Bag - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Projectile Vomit - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn. Then, pick a point on the battlefield within 6" of this unit and pick all other units (friendly and enemy) within 3" of that point to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on that target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Bellowing Mockery - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn, then pick an enemy unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Whatre You Lookin At? - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it charged this turn and has not used a Rampage ability this turn. Then, pick an enemy unit within 9" of this unit to be the target. 
        Effect: Roll 2D6. This unit can move a number of inches equal to the roll. It can pass through enemy models and must end that move in combat with the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: The Beast of Castle Sternieste': {
    effects: [
      {
        name: `Revenant Draconith: Battle Damaged - Passive`,
        desc: `Eect: While this unit has 10 or more damage points, the Attacks characteristic of its Draconic Claws is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Revenant Draconith: Death on Tattered Wings`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve high above the battlefield. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Revenant Draconith: Loathsome Descent`,
        desc: `Declare: Pick this unit if it is high above the battlefield. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Revenant Draconith: Red Ruin - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, resolve the following effects:
        Inflict an amount of mortal damage on the target equal to the roll.
        Heal(X) this unit where X ia amount equal to the roll.
        This unit can be removed from the battlefield and set up in reserve high above the battlefield.`,
        when: [END_OF_TURN],
      },
      {
        name: `Deathless Monstrosity - Once Per Turn`,
        desc: `Effect: Heal (3) this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Blades of the Hollow King': {
    effects: [
      {
        name: `Aurelias`,
        desc: `Declare: This unit can use this ability while its Aurelias is on the battlefield. 
        Effect: Pick 1 of the following to apply for the rest of the turn:
        Add 1 to the unit's power level.
        Each time a casting roll is made for this unit, you can reroll 1 of the dice.`,
        when: [HERO_PHASE],
      },
      {
        name: `Solia, the Tutor`,
        desc: `Declare: This unit can use this ability while its Cado Ezechiar is on the battlefield.
        Effect: Pick 1 of the following to apply for the rest of the turn:
        This unit has Ward(5+).
        This unit's Ezechiarian Greatsword has Crit(Mortal).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Retribution or Salvation: Casting value of 7`,
        desc: `Declare: This unit can cast this spell while its Cado Ezechiar is on the battlefield. Pick a visible unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: If the target is an enemy unit, inflict D3 mortal damage on it. If the target is a friendly Deathrattle or Deadwalkers unit, subtract 1 from wound rolls of combat attacks that target that unit for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Hunger - Once Per Turn`,
        desc: `Effect: If this unit used a Fight ability this turn, Heal (D3) this unit. Heal (2D3) this unit instead if it destroyed an enemy unit this turn using a Fight ability.`,
        when: [END_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
