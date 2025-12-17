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
  START_OF_TURN,
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
        name: `Utter Contempt - Passive`,
        desc: `Effect: This unit ignores the effects of Delusion abilities.`,
        when: [DURING_GAME],
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
  'Ushoran, Mortarch of Delusion': {
    /*mandatory: {
      spells: [keyPicker(spells, ['Glimpse of Delusion'])],
    }, */
    effects: [
      // GenericEffects.WizardTwoSpellsEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Monstrous Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The One True King (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion:
        Add 1 to run rolls and charge rolls for friendly Flesh-Eater Courts units.
        Subtract 1 from run rolls and charge rolls for enemy units.
        The melee weapons used by friendly Serfs units have Anti-charge (+1 Rend) while they are wholly within friendly territory and did not charge in the same turn.`,
        when: [START_OF_TURN, MOVEMENT_PHASE, COMBAT_PHASE],
      },
      {
        name: `Epicentre of Delusion - Passive`,
        desc: `Effect: Each time you make a delusion roll, you can add 1 to or subtract 1 from the roll.`,
        when: [START_OF_TURN],
      },
      {
        name: `Shroudcage Fragment - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
        Effect: Roll a dice for each target. If the roll exceeds the targets Control characteristic, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Glimpse of Delusion: Casting value of 7`,
        desc: `Declare: Pick a visible enemy model within 18" of this unit to be the target, pick an enemy unit that is visible to the target and within the target's combat range to be the victim, then make a casting roll of 2D6. You can only pick the target's unit to be the victim if that unit has 2 or more models.
        Effect: Pick 1 of the target's melee weapons. Immediately resolve combat attacks for the target made with that weapon against the victim.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Abhorrant Ghoul King': {
    effects: [
      {
        name: `Code of Honour (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion, add 1 to the Damage characteristic of melee weapons used by friendly non-Unique Flesh-Eater Courts Heroes for attacks that target an enemy Hero.`,
        when: [START_OF_TURN, COMBAT_PHASE],
      },
      {
        name: `Vassals, To Arms! - Once Per Turn - Reaction: You declared a Fight ability with this unit`,
        desc: `Effect: Pick a friendly Serfs unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to wound rolls for the target's attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Abhorrant Ghoul King (SoG)': {
    /*mandatory: {
      spells: [keyPicker(spells, ['Unnatural Speed'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      // RoyalBloodEffect,
      {
        name: `The King's Court - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of melee weapons used by other friendly non-Monster Flesh-eater Courts Heroes while they are wholly within 12" of this unit. In addition, add 1 to the Attacks characteristic of this units melee weapons for each other friendly non-Monster Flesh-eater Courts Hero wholly within 12" of this unit, to a maximum of +3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Long Live the King - Passive`,
        desc: `Effect: If this unit would be destroyed, before removing it from play, friendly non-Unique Flesh-eater Courts units wholly within 12" of this unit become enraged until the start of your next turn. Melee weapons used by friendly enraged units have Crit (Auto-wound) and score critical hits on unmodified hit rolls of 5+, even if this unit has been destroyed.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Abhorrant Ghoul King on Royal Terrorgheist': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Ferocious Hunger'])],
    }, */
    effects: [
      {
        name: `A Majestic Menagerie (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion, add 1 to the Attacks characteristic of Companion melee weapons used by friendly Flesh-Eater Courts units while they are wholly within 12" of any friendly Flesh-Eater Courts Heroes.`,
        when: [START_OF_TURN, COMBAT_PHASE],
      },
      {
        name: `Ferocious Hunger - Once Per Turn`,
        desc: `Effect: Roll a dice. On a 3+, add 1 to hit rolls for attacks made with this unit's Companion melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Necromantic Limits - Passive`,
        desc: `Effect: This unit's Terrorgheist's Skeletal Talons have a maximum Attacks characteristic of 10.
        While this unit has 10 or more damage points, the Attacks characteristic of its Terrorgheist's Skeletal Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wicked Predator - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: For each champion, standard bearer and musician in the target unit, add 1 to the Attacks characteristic of this unit's Terrorgheist's Skeletal Talons, to a maximum of 10, for the rest of the phase. Those additional attacks must target that enemy unit.`,
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
        name: `For the Kingdom! (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion, add 1 to charge rolls for friendly Knights units and friendly Flesh-Eater Courts Monsters while they are wholly within 12" of any friendly Flesh-Eater Courts Heroes.
        Add 2 to charge rolls for friendly Knights units and friendly Flesh-Eater Courts Monsters instead while they are wholly within 12" of any friendly Abhorrant Ghoul Kings on Royal Zombie Dragons.`,
        when: [START_OF_TURN, CHARGE_PHASE],
      },
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
        name: `Necromantic Limits - Passive`,
        desc: `Effect: This unit's Draconic Claws have a maximum Attacks characteristic of 10.
        While this unit has 10 or more damage points, the Attacks characteristic of its Draconic Claws is 5.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Grand Justice Gormayne': {
    effects: [
      // RoyalBloodEffect,
      {
        name: `Arrest Those Miscreants`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: Roll a dice. On a 3+, until the start of your next turn, the target has Strike-Last while it is in combat with any friendly Flesh-Eater Courts Heroes and any friendly Serfs or Knights units.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Accusations of Regicide (Delusion) - Passive`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: While you believe this Delusion, add 1 to the Damage characteristic of melee weapons used by friendly Serfs and Knights units while they are wholly within 12" of any friendly Flesh-Eater Courts Heroes that had any damage points allocated to them in the same turn.`,
        when: [START_OF_TURN, COMBAT_PHASE],
      },
    ],
  },
  'High Falconer Felgryn': {
    effects: [
      {
        name: `Be Mine Eyes`,
        desc: `Declare: This unit's Grype is a token. If this unit's Grype is not next to an enemy unit, pick an enemy unit within 18" of this unit and not in combat to be the target.
        Effect: Place this unit's Grype next to the target. If the target is destroyed while this unit's Grype is next to it, remove this unit's Grype from the battlefield.`,
        when: [HERO_PHASE],
      },
      {
        name: `Winged Reconnoitrer - Passive`,
        desc: `Effect: While this unit's Grype is next to an enemy unit, ward rolls cannot be made for damage points inflicted on that enemy unit by combat attacks made by this unit and friendly Serfs units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sir Felgryn is Abroad! (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion, subtract 10 from the control scores of enemy units while they are in combat with any friendly Serfs units or any friendly non-Hero Flesh-Eater Courts Monster or Beast units.`,
        when: [START_OF_TURN, END_OF_TURN],
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
        desc: `Effect: Pick a friendly Crypt Horrors unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the target's attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Blessed Blood`,
        desc: `Effect: Heal (D3) this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Crypt Infernal Courtier': {
    effects: [
      {
        name: `Mind-Shattering Cacophony - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this unit's Piercing Death Screech to be the target.
        Effect: For the rest of the turn, add 1 to the Damage characteristic of ranged weapons used by friendly Crypt Flayers units for attacks that target that enemy unit.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `On Winged Steeds - Once Per Turn`,
        desc: `Declare: Pick a friendly Crypt Flayers unit that used the 'To Our Liege!' ability this turn and is wholly within 9" of this unit to be the target.
        Effect: The target can immediately move D3" but cannot end that move in combat.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Varghulf Courtier': {
    effects: [
      {
        name: `Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Victory Feast`,
        desc: `Effect: If any models were slain by this unit this turn: 
        Heal (D6) this unit. 
        If this unit is in combat, this unit can immediately move 10". It can move through the combat ranges of enemy units but must end that move in combat with the units it was already in combat with at the start of the move.
        If this unit is not in combat, this unit can immediately move 10" but cannot end that move in combat.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Abhorrant Archregent': {
    effects: [
      {
        name: `Countless Servants - Once Per Turn`,
        desc: `Declare: Pick a friendly Serfs or Knights unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+: 
        If the target is a Serfs unit, you can return up to 3 slain models to that unit. 
        If the target is a Knights unit, you can return 1 slain model to that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Musicians, Play! (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion, subtract 1 from hit rolls for shooting attacks that target friendly Flesh-Eater Courts units while they are wholly within 12" of a friendly Flesh-Eater Courts Hero.`,
        when: [START_OF_TURN, SHOOTING_PHASE],
      },
    ],
  },
  'Abhorrant Cardinal': {
    /* mandatory: {
      prayers: [keyPicker(prayers, ['Speak in Tongues'])],
    }, */
    effects: [
      {
        name: `Banishing Liturgy (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion: 
        Add 2 to banishment rolls for friendly Flesh-Eater Courts units.
        Friendly Flesh-Eater Courts units have Ward (4+) against damage points inflicted by Spell abilities, Prayer abilities and abilities used by Manifestations.`,
        when: [START_OF_TURN, HERO_PHASE],
      },
      {
        name: `Insular Contemplations - Passive`,
        desc: `Effect: While this unit is more than 6" from all enemy units, add 1 to chanting rolls for this unit.`,
        when: [HERO_PHASE],
      },
      //  RoyalBloodEffect
    ],
  },
  'Abhorrant Gorewarden': {
    effects: [
      {
        name: `Lord of the Marches`,
        desc: `Declare: Pick this unit and up to 2 friendly Flesh-Eater Courts units in this unit's regiment that have not been deployed to be the targets.
        Effect: Set up the target units in reserve patrolling the borders. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Trespassers!`,
        desc: `Declare: Pick this unit if it is patrolling the borders, then pick an enemy unit to be the target.
        Effect: Set up this unit more than 6" from the target and more than 9" from all other enemy units. Then, set up the units that were patrolling the borders with this unit wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Defenders of the Kingtdom (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion and this unit is on the battlefield, add 1 to charge rolls for friendly Flesh-Eater Courts units while they are wholly within 12" of a friendly Flesh-Eater Courts Hero. Add 2 to charge rolls instead if they were also set up in the same turn.
        When using the 'A Kingdom Deluded' ability, you can pick this Delusion even if this unit is patrolling the borders.`,
        when: [START_OF_TURN, CHARGE_PHASE],
      },
    ],
  },

  'Abhorrant Gorewarden (SoG)': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Winds of Shyish'])],
    }, */
    effects: [
      //  GenericEffects.WizardOneSpellEffect,
      // RoyalBloodEffect,
      {
        name: `Glorious Charge - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Knights unit and has charged this turn, this unit has Ward (5+) and its Gory Talons and Fangs have Charge (+1 Damage).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Swooping Descent - Once Per Turn - End of Enemy Turn`,
        desc: `Effect: Remove this unit from the battlefield, then set it up again more than 9" from all enemy units and either: 
        Wholly within 6" of the edge of the battlefield, or  
        Within 3" of an objective you do not control.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Crypt Ghouls': {
    effects: [
      {
        name: `Royal Approval - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons while it is wholly within 12" of any friendly Nobles or Abhorrants.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Crypt Horrors': {
    effects: [
      {
        name: `Holy Blades of Bone - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll 2 dice for each model in this unit. Add 2 to each roll if the target is Cavalry. For each 5+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Crypt Flayers': {
    effects: [
      {
        name: `To Our Liege! - Once Per Turn`,
        desc: `Effect: If this unit is not in combat, remove it from the battlefield and set it up again wholly within 12" of a friendly Flesh-Eater Courts Hero and more than 9" from all enemy units.`,
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
        name: `Necromantic Limits - Passive`,
        desc: `Effect: This unit's Terrorgheist's Skeletal Talons have a maximum Attacks characteristic of 10.
        While this unit has 10 or more damage points, the Attacks characteristic of its Terrorgheist's Skeletal Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wicked Predator - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: For each champion, standard bearer and musician in the target unit, add 1 to the Attacks characteristic of this unit's Terrorgheist's Skeletal Talons, to a maximum of 10, for the rest of the phase. Those additional attacks must target that enemy unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shriek of Terror - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target.
        Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target. If 3 or more damage points are allocated to the target by this ability, subtract 1 from hit rolls for the target's attacks for the rest of the turn.`,
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
        name: `On Rotten Wings - Once Per Turn`,
        desc: `Effect: Remove this unit from the battlefield and set up it again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Necromantic Limits - Passive`,
        desc: `Effect: This unit's Draconic Claws have a maximum Attacks characteristic of 10.
        While this unit has 10 or more damage points, the Attacks characteristic of its Draconic Claws is 5.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Marrowscroll Herald': {
    effects: [
      {
        name: `The King's Entreaty - Once Per Turn - Enemy Charge Phase`,
        desc: `Declare: Pick a visible enemy unit within 6" of this unit to be the target.
        Effect: Roll a dice. On a 3+, your opponent must decide whether the target will accept or reject the entreaty offered by this unit.
        Accept: The target has the Infected keyword for the rest of the battle.
        Reject: The target has Strike-Last for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Infected - Reaction: Opponent declared a Command, Spell, ability or Prayer ability for an Infected unit`,
        desc: `Effect: Roll a dice. On a 5+:
        If they declared a command, that command has no effect, it still counts as having been used and the command points spent to use the command are still lost.
        If they declared a Spell or Prayer ability, that spell or prayer fails.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Royal Decapitator': {
    effects: [
      {
        name: `Executioner's Entourage - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Serfs unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, the target's melee weapons have Crit (2 Hits) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Off with their Head! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Immediately after that Fight ability has been resolved, pick an enemy Infantry Hero in combat with this unit to be the target. Roll 2D6. If the roll exceeds the target's Health characteristic, it is automatically destroyed.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Cryptguard: {
    effects: [
      {
        name: `Elite Guardians - Once Per Turn`,
        desc: `Effect: If this unit is in combat with any enemy units that charged this turn, roll a dice. On a 3+, for the rest of the turn, this unit has Strike-First but ward rolls cannot be made for it.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Bodyguard - Passive`,
        desc: `Effect: While any friendly non-Monster Flesh-Eater Courts Heroes are wholly within this unit's combat range, both this unit and those Heroes have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Morbheg Knights': {
    effects: [
      {
        name: `Predator Knights - Once Per Turn - End of Enemy Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Inflict D3 mortal damage on the target. Then, this unit can use a Retreat ability as if it were your movement phase. No mortal damage is inflicted on this unit by that Retreat ability.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Royal Beastflayers': {
    effects: [
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
        desc: `Effect: Ignore negative modifiers to save rolls for units in the Regiment of Renown.`,
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
  'ROR: Enforcers of the Tithe': {
    effects: [
      {
        name: `Mortisan Ossifector: Refined Creations - Once Per Turn`,
        desc: `Declare: Pick a friendly Gothizzar Harvester, Morghast Archai or Morghast Harbingers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortek Guard: Shieldwall - Passive`,
        desc: `Effect: Ignore all modiifers to save rolls for this unit (positive and negative) for the rest of the turn if this unit did not use a Move ability in the same turn.`,
        when: [DURING_GAME],
      },
      {
        name: `Gothizzar Harvester: Bone Harvest - Passive`,
        desc: `Effect: Each time an enemy model in combat with this unit is slain, give this unit 1 bone-tithe point. This unit can have a maximum of 6 bone-tithe points at once.`,
        when: [DURING_GAME],
      },
      {
        name: `Gothizzar Harvester: Gruesome Surgery - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. For each model slain by this ability, you can return 1 slain model to a friendly Mortek Guard unit wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gothizzar Harvester: Repair Construct`,
        desc: `Declare: Pick a friendly Ossiarch Bonereapers unit wholly within 12" of this unit to be the target. 
        Effect: Return a number of slain models to the target with a combined Health characteristic equal to the number of bone-tithe points this unit has. Then, reset this units bone-tithe points to 0.`,
        when: [END_OF_TURN],
      },
      {
        name: `Collect the Tithe - Once Per Turn`,
        desc: `Declare: Pick the Gothizzar Harvester in this Regiment of Renown to use this ability, then pick a non-Hero Infantry unit (friendly or enemy) to be the target. 
        Effect: Roll a dice. If the roll equals or exceeds the targets Health characteristic, 1 model in the target unit is slain, then give the unit using this ability 1 bone-tithe point.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Soul Tax: Casting value of 7`,
        desc: `Declare: Pick the Mortisan Ossifector in this Regiment of Renown to cast this spell, then: 
        Pick a friendly unit, excluding units in this Regiment of Renown, to be the target. 
        Pick a unit in this Regiment of Renown to be the recipient. 
        The target and the recipient must be wholly within 12" of and visible to the caster. Then, make a casting roll of 2D6. 
        Effect: Until the start of your next turn: 
        The target has a maximum control score of 1. 
        Add 1 to hit rolls and wound rolls for the recipients combat attacks.`,
        when: [HERO_PHASE],
      },
      {
        name: `Rebuild on the March`,
        desc: `Declare: Pick the Gothizzar Harvester in this Regiment of Renown to use this ability if it has 6 bone-tithe points. Then, pick another unit in this Regiment of Renown that has been destroyed to be the target. 
        Effect: Reset the Gothizzar Harvesters bone-tithe points to 0. Then, set up a replacement of the target unit with half the number of models (rounding up) wholly within 9" of the Gothizzar Harvester and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
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
  'ROR: Nurgles Gift': {
    effects: [
      {
        name: `Nurglings: Endless Swarm - Passive`,
        desc: `Effect: Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Incubation Period`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown. 
        Effect: Set up the units in this Regiment of Renown in reserve festering within. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Bursting with Life - Passive`,
        desc: `Effect: If a friendly non-Nurgles Gift unit would be destroyed, before the last model is removed from play, roll a dice. Add 1 to the roll for each other friendly non-Nurgles Gift unit that has been destroyed this battle. On a 5+, pick a friendly unit that is festering within and set it up wholly within 6" of that model. It can be set up in combat.`,
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
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn. Then, pick a point on the battlefield within 6" of this unit and pick each enemy unit within 3" of that point to be the targets. 
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
  'ROR: The Eternal Nightmare': {
    effects: [
      {
        name: `Enemy of the Throne - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for units in thie Regiment of Renown for attacks that target a Sentenced unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Scriptor Mortis: Judge, Jury, and Executioner - Passive`,
        desc: `Effect: Each time a friendly Nighthaunt Infantry unit uses a Fight ability, if all of its attacks target the same Sentenced enemy unit, that friendly unit's melee weapons have Crit (Mortal) for that Fight ability.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Scriptor Mortis: Sentenced to Eternal Torment - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: Roll a dice. On a 3+, inflict 1 mortal damage on the target and the target has the Sentenced keyword until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Craventhrone Guard: Black-Hearted Lackeys - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a D3. On a 2+, this unit immediately uses the Retreat ability without any mortal damage being inflicted on it. Then, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Casket of Resurrections': {
    effects: [
      {
        name: `Dark Resurrection - Once Per Turn`,
        desc: `Declare: If any damage points were allocated to an enemy unit by this unit's combat attacks this turn and that enemy unit was destroyed this turn, pick a friendly non-Unique Death Infantry Hero that has been destroyed to be the target.
        Effect: Set up a replacement unit identical to the target wholly within 12" of this unit. The replacement unit can only be set up in combat with enemy units that are in combat with this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Black Coach: Nimbus of Power - Once Per Turn`,
        desc: `Effect: If this unit is not in combat, remove it from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Black Coach: Runaway Coach`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage equal on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
