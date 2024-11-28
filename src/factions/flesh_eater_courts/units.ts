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
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'
import prayers from './prayers'

/*const NobleBloodEffect = {
  name: `Noble Blood`,
  desc: `In your hero phase, you can heal up to D3 wounds allocated to this unit.`,
  when: [HERO_PHASE],
  shared: true,
}
const RoyalBloodEffect = {
  name: `Royal Blood`,
  desc: `In your hero phase, you can heal up to D3 wounds allocated to this unit.`,
  when: [HERO_PHASE],
  shared: true,
}
const ChosenOfTheKingEffect = {
  name: `Chosen of the King`,
  desc: `Improve the Rend characteristic of this unit's melee weapons by 1 while it is wholly within 6" of any friendly COURTIERS or 18" of any friendly ABHORRANTS.`,
  when: [COMBAT_PHASE],
  shared: true,
} */

const Units = {
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
  'Ushoran, Mortarch of Delusion': {
    /*mandatory: {
      spells: [keyPicker(spells, ['Glimpse of Delusion'])],
    }, */
    effects: [
     // GenericEffects.WizardTwoSpellsEffect,
      {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Monstrous Talons is 6.`,
      when: [COMBAT_PHASE],
      },
      {
        name: `Epicentre of Delusion`,
        desc: `Effect: Pick 1 of the following effects to apply until the start of your next turn: 
        The Royal Hunt: Add 1 to wound rolls for attacks made by friendly Flesh-eater Courts units that target a Monster. 
        Crusading Army: Add 1 to run rolls and charge rolls for friendly Flesh-eater Courts units. 
        Defenders of the Realm: Add 1 to save rolls for friendly Flesh-eater Courts units while they are contesting an objective you control. 
        The Grand Tournament: Add 1 to hit rolls for attacks made by other friendly Flesh-eater Courts Heroes if they charged in the same turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Carrion King - Passive`,
        desc: `Effect: While this unit has 6 noble deeds points, the effect of the Feeding Frenzy ability applies to friendly Flesh-eater Courts units while they are wholly within 24" of this unit instead of 12".`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shroudcage Fragment - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
        Effect: Roll a dice for each target. If the roll exceeds the targets Control characteristic, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Glimpse of Delusion: Casting value of 7`,
        desc: `Declare: Pick a visible enemy model within 18" of this unit to be the target, pick another enemy unit within the targets combat range to be the victim, then make a casting roll of 2D6. 
        Effect: Pick 1 of the targets melee weapons. Immediately resolve combat attacks made with that weapon against the victim.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Abhorrant Ghoul King': {
    /*mandatory: {
      spells: [keyPicker(spells, ['Unnatural Speed'])],
    }, */
    effects: [
     // GenericEffects.WizardOneSpellEffect,
     // RoyalBloodEffect,
      {
        name: `Code of Honour`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: For the rest of the turn, add 1 to the Damage characteristic of this units melee weapons, but all of this units attacks must target that Hero.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unnatural Speed`,
        desc: `Effect: If this unit charged this phase, it has Strike-first for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Abhorrant Ghoul King on Royal Terrorgheist': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Ferocious Hunger'])],
    }, */
    effects: [
      {
        name: `Gaping Maw - Passive`,
        desc: `Effect: Each time an attack made with this units Terrorgheists Fanged Maw scores a critical hit, that attack inflicts 6 mortal damage on the target unit and the attack sequence ends.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ferocious Hunger - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, attacks made with this units Terrorgheists Fanged Maw that target that enemy unit score critical hits on unmodified hit rolls of 5+ for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Terrorgheists Skeletal Talons is 4.`,
        when: [COMBAT_PHASE],
        },
    //  GenericEffects.WizardOneSpellEffect, ...GenericEffects.Terrorgheist, RoyalBloodEffect
    ],
  },
  'Abhorrant Ghoul King on Royal Zombie Dragon': {
    /*mandatory: {
      spells: [keyPicker(spells, ['Monstrous Hunger'])],
    }, */
    effects: [
     // GenericEffects.WizardOneSpellEffect,
     // RoyalBloodEffect,
      {
        name: `Draconic Terror - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll exceeds the targets Control characteristic, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Monstrous Hunger - Passive`,
        desc: `Effect: While they are wholly within 12" of this unit, friendly non-Hero Flesh-eater Courts Monsters can use Charge abilities even if they used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Draconic Claws is 5.`,
        when: [COMBAT_PHASE],
        },
    ],
  },
  'Grand Justice Gormayne': {
    effects: [
     // RoyalBloodEffect,
      {
        name: `Delusion of Justice Served - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit to be the target. 
        Effect: Roll a dice. On a 3+, pick 1 of the following effects to apply to the target until the start of your next turn: 
        Petty Transgression: Add 1 to wound rolls for combat attacks that target that unit. 
        Dishonourable Conduct in Battle: Friendly non-Monster Flesh-eater Courts units can use Charge abilities even if they used a Run ability in the same turn, but if they do so, they must end the charge move within 1/2" of the target. 
        Grievous Insult to the Court: While the target is in combat with a friendly Abhorrant, add 1 to hit rolls for attacks made by friendly Flesh-eater Courts units that target that unit. 
        Regicide: If the target destroyed a friendly Abhorrant this battle, add 1 to the Damage characteristic of melee weapons used by friendly Flesh-eater Courts units that target that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'Crypt Ghast Courtier': {
    effects: [
      {
        name: `Marshal of the Peasantry`,
        desc: `In the combat phase, after this unit has fought for the first time in that phase, you can pick 1 friendly SERFS unit that has not yet fought in that phase, is within 3" of an enemy unit and is wholly within 9" of this unit. That unit can fight immediately.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Crypt Haunter Courtier': {
    effects: [
     // NobleBloodEffect,
      {
        name: `Knightly Exemplar - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Crypt Horrors unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Noble Blood`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Crypt Infernal Courtier': {
    effects: [
      {
        name: `Mind-Shattering Cacophony - Passive`,
        desc: `Effect: If any enemy models were slain by this units Piercing Death Screech this turn, for the rest of the turn, add 1 to the Damage characteristic of ranged weapons used by friendly Crypt Flayers units while they are wholly within 12" of this unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Varghulf Courtier': {
    effects: [
      {
        name: `Bounding Strides - Passive`,
        desc: `Effect: This unit can pass across terrain features as if it had Fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Victory Feast`,
        desc: `Effect: If any models were slain by this unit this turn:  
        Heal (D6) this unit.  
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Abhorrant Archregent': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Carrion Call'])],
    }, */
    effects: [
     // GenericEffects.WizardTwoSpellsEffect,
      //RoyalBloodEffect,
      {
        name: `Countless Servants`,
        desc: `Declare: Pick a friendly Serfs or Knights unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+:  
        If the target is a Serfs unit, you can return up to 3 slain models to that unit.  
        If the target is a Knights unit, you can return 1 slain model to that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Carrion Call: Casting value of 6`,
        desc: `Declare: Make a casting roll of 2D6. 
        Effect: The first friendly Flesh-eater Courts unit to be set up in the following movement phase can immediately move D6". That unit cannot move into combat during any part of that move.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Abhorrant Cardinal': {
   /* mandatory: {
      prayers: [keyPicker(prayers, ['Speak in Tongues'])],
    }, */
    effects: [
      {
        name: `Rousing Oration`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Hero wholly within 12" of this unit to be the target. 
        Effect: Roll a D3. On a 2+, give the target a number of noble deeds points equal to the roll.`,
        when: [HERO_PHASE],
      },
    //  RoyalBloodEffect
    ],
  },
  'Abhorrant Gorewarden': {
   /* mandatory: {
      spells: [keyPicker(spells, ['Winds of Shyish'])],
    }, */
    effects: [
    //  GenericEffects.WizardOneSpellEffect,
     // RoyalBloodEffect,
      {
        name: `Royal Hunting Party`,
        desc: `Declare: If this unit is not in combat, you can pick up to 2 friendly Crypt Flayers or Morbheg Knights units that are not in combat and are wholly within 12" of this unit to be the targets. 
        Effect: Remove this unit and the targets (if any) from the battlefield. Set up this unit again on the battlefield more than 9" from all enemy units. Then, set up each target wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Crypt Ghouls': {
    effects: [
      {
        name: `Royal Approval - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons while it is wholly within 12" of any friendly Courtiers or Abhorrants.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Crypt Horrors': {
    effects: [
      {
        name: `Royal Approval - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons while it is wholly within 12" of any friendly Courtiers or Abhorrants.`,
        when: [COMBAT_PHASE],
      },
    //  NobleBloodEffect,
    //  ChosenOfTheKingEffect,
    {
      name: `Noble Blood`,
      desc: `Effect: Heal (D3) this unit.`,
      when: [HERO_PHASE],
    },
    ],
  },
  'Crypt Flayers': {
    effects: [
      {
        name: `Escort Courtier - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a friendly Flesh-eater Courts Infantry Hero that does not have Fly and is within this units combat range to be the target. 
        Effect: Remove the target from the battlefield. Then, this unit can move a distance up to its Move characteristic. It cannot end that move in combat. Then, set up the target within this units combat range and more than 3" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  // 'Duke Crakmarrow': {
  //   effects: [
  //     {
  //       name: `Muster the Grymwatch`,
  //       desc: `Pick 1 friendly Grymwatch unit within 3" of this model and roll 6 dice. For each 2+ you can return 1 slain model to that unit.`,
  //       when: [HERO_PHASE],
  //     },
  //     {
  //       name: `Gallant Champion`,
  //       desc: `Add 1 to the damage inflicted by each successful attack made by this model that targets a monster.`,
  //       when: [COMBAT_PHASE],
  //     },
  //   ],
  // },
  // 'The Grymwatch': {
  //   effects: [
  //     {
  //       name: `Royal Retinue`,
  //       desc: `Roll a D6 before you allocate a wound or mortal wound to a friendly Duke Crakmarrow while he is within 3" of this unit. On a 4+, that wound is allocate to this unit instead.`,
  //       when: [WOUND_ALLOCATION_PHASE],
  //     },
  //     {
  //       name: `Quest to Slay the Monster`,
  //       desc: `Add 1 to the damage inflicted by each successful attack made by this unit that targets a monster.`,
  //       when: [COMBAT_PHASE],
  //     },
  //   ],
  // },
  'Royal Terrorgheist': {
    effects: [
    //  ...GenericEffects.Terrorgheist
    {
      name: `Gaping Maw - Passive`,
      desc: `Effect: Each time an attack made with this units Terrorgheists Fanged Maw scores a critical hit, that attack inflicts 6 mortal damage on the target unit and the attack sequence ends.`,
      when: [COMBAT_PHASE],
    },
    {
      name: `Death Shriek - Once Per Turn`,
      desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
      Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target. If 3 or more damage points are allocated to the target by this ability, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
      when: [CHARGE_PHASE],
    },
    {
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Terrorgheists Skeletal Talons is 4.`,
      when: [COMBAT_PHASE],
      },
    ],
  },
  'Royal Zombie Dragon': {
    effects: [
    //  ...GenericEffects.ZombieDragon
    {
      name: `Soaring Terror - Once Per Turn`,
      desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, this unit can move 2D6". It can pass through the combat ranges of enemy units but must end that move in combat. Then, pick an enemy unit that this unit passed across during that move. Inflict D3 mortal damage on that enemy unit.`,
      when: [COMBAT_PHASE],
    },
    {
      name: `Vantage Point`,
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
      name: `Battle Damaged - Passive`,
      desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Draconic Claws is 5.`,
      when: [COMBAT_PHASE],
      },
    ],
  },
  'Marrowscroll Herald': {
    effects: [
      {
        name: `The King's Entreaty - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, pick 1 of the following effects: 
        Attack the Apostate!: Friendly Flesh-eater Courts units in combat with the target have Strike-first for the rest of the turn. 
        Welcome the Disciple!: The target has the Infected keyword for the rest of the battle. Each time your opponent declares a command, Spell ability or Prayer ability for an Infected unit, roll a dice as a reaction. On a 5+:  
        If they declared a command, that command has no effect. The command still counts as having been used and the command points spent to use the command are still lost.  
        If they declared a Spell or Prayer ability, that spell or prayer fails.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Don't Shoot the Messenger - Passive`,
        desc: `Effect: While this unit is not in combat and is wholly within the combat ranges of 3 or more other friendly Flesh-eater Courts Infantry models, it is not visible to enemy units.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Royal Decapitator': {
    effects: [
      {
        name: `Executioner's Entourage - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Serfs unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Off with their Head!`,
        desc: `Declare: Pick an enemy Infantry Hero that had any damage points allocated to it this turn by this units attacks to be the target. 
        Effect: Roll a dice. On a 5+, the target is automatically destroyed.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Cryptguard: {
    effects: [
      {
        name: `Armoury of Madness - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: If any damage points inflicted by attacks made as part of that Fight ability are allocated to any enemy units, those enemy units cannot use commands until the start of your next turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Bodyguard - Passive`,
        desc: `Effect: While any friendly Flesh-eater Courts Heroes are wholly within this units combat range, both this unit and those Heroes have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Morbheg Knights': {
    effects: [
      {
        name: `Shrieking Charge`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Predator's Pounce - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Royal Beastflayers': {
    effects: [
      {
        name: `Royal Flaymaster`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. Add 1 to the amount of mortal damage inflicted, if any, if the target is a Monster or Beast unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Hunter's Instincts - Passive`,
        desc: `Effect: Enemy Monsters cannot use Rampage abilities while they are in combat with this unit. In addition, subtract 1 from the Damage characteristic of melee weapons used by enemy Monsters and Beast units while they are in combat with this unit.`,
        when: [DURING_GAME],
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
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
