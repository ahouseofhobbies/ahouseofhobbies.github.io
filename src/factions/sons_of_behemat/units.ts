import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_CHARGE_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

/*const AlmightyStompEffect = {
  name: `Almighty Stomp`,
  desc: `Add 1 to hit rolls for attacks made with this unit's Almighty Stomp that target an enemy unit with a Wounds characteristic of 3 or less.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const CrushingChargeEffect = {
  name: `Crushing Charge`,
  desc: `After this model makes a charge move, roll a dice for each enemy unit within 1" of this model. On a 2+, that unit suffers D3 mortal wounds if it is a MONSTER, or D6 mortal wounds if it is not a MONSTER.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const DeathGripEffect = {
  name: `Death Grip`,
  desc: `When determinig the damage inflicted by an attack made with this unit's Death Grip that targets an enemy Monster, you can roll 2 dice instead of 1 and pick either result.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const LongshanksEffect = {
  name: `Longshanks`,
  desc: `When this unit makes a normal move, run or retreats, it can pass across other models that are not Monsters and parts of terrain features that are less than 4" tall in the same manner as a unit that can fly.`,
  when: [MOVEMENT_PHASE],
  shared: true,
}
const SonOfBehematEffect = {
  name: `Son of Behemat`,
  desc: `If a spell or ability would slay this model without any wounds or mortal wounds being caused by the spell or ability, this model suffers D6 mortal wounds instead of being slain.`,
  when: [WOUND_ALLOCATION_PHASE],
  shared: true,
}
const TerrorEffect = {
  name: `Terror`,
  desc: `Enemy units cannot receive the Inspiring PResence command while they are within 3" of any friendly units with this ability.`,
  when: [BATTLESHOCK_PHASE],
  shared: true,
}
const TimberrrrrEffect = {
  name: `Timberrrrr!`,
  desc: `If this model is slain, before removing the model from the battlefield, the players must roll off. The winner must pick a point on the battlefield 5" from this model. Each unit within 3" of that point that is not a Mega-Gargant suffers D3 mortal wounds. This slain model is then removed from the battlefield.`,
  when: [WOUND_ALLOCATION_PHASE],
  shared: true,
}
const BaseMegaGargantEffects = [
  AlmightyStompEffect,
  CrushingChargeEffect,
  DeathGripEffect,
  TerrorEffect,
  LongshanksEffect,
  SonOfBehematEffect,
  TimberrrrrEffect,
]

const BaseGargantEffects = [
  {
    name: `Keep Up!`,
    desc: `If this unit is wholly within 15" of a friendly MEGA-GARGANT at the start of the charge phase, it can attempt to charge in that charge phase even if it ran in the same turn.`,
    when: [START_OF_CHARGE_PHASE],
    shared: true,
  },
  {
    name: `Stomping Charge`,
    desc: `After a model from this unit makes a charge move, pick 1 enemy unit within 1" of it and roll a dice. If the roll is equal to or greater than the Stomping Charge value for the charging model shown on the damage table above, that unit suffers D3 mortal wounds. If this unit has more than 1 model, do not allocate the mortal wounds until all of the models in this unit have made their charge moves.`,
    when: [CHARGE_PHASE],
    shared: true,
  },
  {
    name: `Stuff 'Em In Me Bag`,
    desc: `After a model from this unit piles in, you can pick 1 enemy model within 3" of it and roll a D6. If the roll is at least double that model's Wounds characteristic, it is slain.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
  {
    name: `Timber!`,
    desc: `If a model from this unit is slain, before removing it from the battlefield, the players must roll off. The winner must pick a point on the battlefield 3" from that model. Each unit within 2" of that point that is not a Gargant or Mega-Gargant suffers D3 mortal wounds. The slain model is then removed from the battlefield.`,
    when: [WOUND_ALLOCATION_PHASE],
    shared: true,
  },
] */

const Units = {
  'Kragnos': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of The Dread Mace is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Shield Inviolate - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 3+, ignore the effect of that spell on this unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Avatar of Destruction - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Rampaging Destruction - Once Per Turn`,
        desc: `Effect: If this unit charged this phase, pick 1 of the following effects:  
        Roll a dice for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.  
        Pick an enemy Monster in combat with this unit and roll 2D6. On a 7, this ability has no effect. Otherwise, inflict an amount of mortal damage on that unit equal to the results on the dice used for the 2D6 roll multiplied together. For example, a 2D6 roll of 2 and 6 would inflict 12 mortal damage (2x6).`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The End of Empires - Passive`,
        desc: `Effect: Add 1 to the number of dice rolled when making charge rolls for friendly Destruction units while they are wholly within 12" of this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'King Brodd': {
    effects: [
     // ...BaseMegaGargantEffects,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Obelisk of Tor Crania is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Creepers - Passive`,
        desc: `Effect: This unit cannot be picked to be the target of enemy Rampage abilities.`,
        when: [DURING_GAME],
      },
      {
        name: `Power of Behemat: Chant value of 5`,
        desc: `Declare: Make a chanting roll of D6. 
        Effect: Pick 1 of the following effects. If the chanting roll was 10+, pick 2 instead: 
        Shatter the Mountains: Add 2" to the Move characteristic of friendly Sons of Behemat units for the rest of the turn. 
        Might of the Earth: Heal (D3) each friendly Sons of Behemat unit. 
        Pummel All to Dust: For the rest of the turn, add 1 to the Rend characteristic of the Obelisk of Tor Crania, Menhir Club, Fortcrusha Flail, Shipwrecka Warclub, Titanic Boulderclub and Massive Club used by friendly Sons of Behemat units.`,
        when: [HERO_PHASE],
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
    ],
  },
  'Beast-Smasher': {
    effects: [
     // ...BaseMegaGargantEffects,
      {
        name: `Beast-Breaking Strike`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 5D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      //  shared: true, // it's not normally correct to set this directly on units, but this unit gets extended for the merc version
      },
      {
        name: `Behemoth Brawler - Passive`,
        desc: `Effect: Subtract 1 from the Attacks characteristic of enemy Monsters while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
       // shared: true, // it's not normally correct to set this directly on units, but this unit gets extended for the merc version
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Menhir Club is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Gatebreaker: {
    effects: [
     // ...BaseMegaGargantEffects,
      {
        name: `Pulverising Strike`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 4D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
       // shared: true, // it's not normally correct to set this directly on units, but this unit gets extended for the merc version
      },
      {
        name: `Smash Down - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 3" of this unit to be the target. 
        Effect: If the target is Faction Terrain, inflict D3+3 mortal damage on it. Then, roll a D3 for each non-Monster unit (friendly and enemy) within 3" of the target. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [COMBAT_PHASE],
       // shared: true, // it's not normally correct to set this directly on units, but this unit gets extended for the merc version
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
    ],
  },
  'Kraken-Eater': {
    effects: [
    //  ...BaseMegaGargantEffects,
      {
        name: `Get Orf Me Land! - Once Per Turn`,
        desc: `Declare: Pick an objective within 1" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, move the target 2D6" to a new position on the battlefield more than 1" from all models, terrain features and other objectives.`,
        when: [HERO_PHASE],
       // shared: true, // it's not normally correct to set this directly on units, but this unit gets extended for the merc version
      },
      {
        name: `Stuff 'Em In Me Net - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 3 dice. For each roll that is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
       // shared: true, // it's not normally correct to set this directly on units, but this unit gets extended for the merc version
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Shipwrecka Warclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Warstomper: {
    effects: [
    //  ...BaseMegaGargantEffects,
      {
        name: `Hurled Body`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in that unit is slain and you can pick a visible enemy unit within 12" of this unit. Inflict an amount of mortal damage on that unit equal to the targets Health characteristic.`,
        when: [COMBAT_PHASE],
      //  shared: true, // it's not normally correct to set this directly on units, but this unit gets extended for the merc version
      },
      {
        name: `Titanic Boulderclub - Passive`,
        desc: `Effect: If all of the attacks made with this units Titanic Boulderclub target the same enemy unit, for every 5 models in the target unit, add 2 to its Attacks characteristic for the rest of the phase.`,
        when: [COMBAT_PHASE],
       // shared: true, // it's not normally correct to set this directly on units, but this unit gets extended for the merc version
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Titanic Boulderclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Mancrusher Gargant': {
    effects: [
      {
        name: `Keep Up! - Passive`,
        desc: `Effect: While this unit is wholly within 12" of a friendly Mega-Gargant, this unit can use Charge abilities even if it used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Stuff 'Em in Me Bag - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
    //  ...BaseGargantEffects
    ],
  },
  'Mancrusher Mob': {
    effects: [
     // ...BaseGargantEffects,
     {
      name: `Keep Up! - Passive`,
      desc: `Effect: While this unit is wholly within 12" of a friendly Mega-Gargant, this unit can use Charge abilities even if it used a Run ability in the same turn.`,
      when: [CHARGE_PHASE],
    },
    {
      name: `Stuff 'Em in Me Bag - Once Per Turn`,
      desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
      Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
      when: [COMBAT_PHASE],
    },
      {
        name: `Oo's Under the Heel Now! - Passive`,
        desc: `Effect: Each time this unit uses the Gargant Charge ability, add 1 to the amount of mortal damage inflicted, if any, for each model in this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
 /* 'Bonegrinder Mega-Gargant': {
    effects: [
     // SonOfBehematEffect,
    //  GenericEffects.Terror,
    //  LongshanksEffect,
    //  TimberrrrrEffect,
      {
        name: `Thunderous Stomp`,
        desc: `You can reroll hit rolls of 1 for Thunderous Stomp attacks unless the target is a MONSTER.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `I'll Bite Your Head Off!`,
        desc: `After this model piles in, you can pick 1 enemy model that is within 3" of this model, and roll a dice. If the roll is greater than that enemy model's Wounds characteristic, that enemy model is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mega-Club of Gork`,
        desc: `Add 1 to the Bravery characteristic of friendly Orruk units while they are wholly within 12" of this model.`,
        when: [BATTLESHOCK_PHASE],
      },
    //  LongshanksEffect,
    ],
  }, */
  'ROR: Braggit`s Bottle-Snatchaz': {
    effects: [
      {
        name: `Super-Secret Tunnels`,
        desc: `Declare: Pick a unit in this Regiment of Renown that has not been deployed. 
        Effect: Set up that unit in reserve in a super-secret tunnel. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Sudden Emergence - Once Per Turn`,
        desc: `Declare: If the Rabble-Rowza in this Regiment of Renown is in a super-secret tunnel, pick it to be the target. 
        Effect: Set up the target anywhere on the battlefield more than 9" from all enemy units. Then, set up all other friendly units that are in a super-secret tunnel within 3" of the target and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Rabble-Rowza: Neh Neh Na-Neh Neh! Can't Catch me! - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Monster or Beast unit to be the target. 
        Effect: For the rest of the turn, the target can use Charge abilities even if it used a Run ability in the same turn, but each time it uses a Move ability, it must end the move closer to this unit. 
        In addition, for the rest of the turn, the first time the target ends a move within this units combat range, inflict D6 mortal damage on this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gobbapalooza: Hallucinogenic Fungus Brews - Passive`,
        desc: `Effect: In the first battle round, this unit has Ward (4+). In the second battle round, this unit has Ward (5+). In the third and subsequent battle rounds, this unit has Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Gobbapalooza: Gobbapalooza Know-Wotz`,
        desc: `Effect: Roll a dice. On a 3+, pick 1 of the following effects: 
        Glareface Dance: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to run rolls and charge rolls for that unit until the start of your next turn. 
        Nasty Poisons: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to the Rend characteristic of that units weapons until the start of your next turn. 
        Mesmerise: Pick a visible enemy unit within 12" of this unit. Until the start of your next turn, that unit cannot use commands.`,
        when: [HERO_PHASE],
      },
      {
        name: `Squig Herd: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Squig Herd: Squigs Gone Wild - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Squig Herd: Herding Squigs`,
        desc: `Effect: Roll a dice for each Squig Herder in this unit. For each 2+, you can return D3 slain Cave Squigs to this unit. For each 1, 1 Squig Herder in this unit is slain.`,
        when: [HERO_PHASE],
      },
      {
        name: `Squig Hoppers: Boing! Boing! Boing!`,
        desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
        Effect: Roll a dice for each model in this unit that passed across the target. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sneaky Distraction: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Gobbapalooza in this Regiment of Renown to cast this spell, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from hit rolls for attacks made by enemy units while they are wholly within 12" of the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Big Grikk`s Kruleshots': {
    effects: [
      {
        name: `Beast-Skewer Killbow: Skewering Bolts - Once Per Turn`,
        desc: `Effect: For the rest of the turn, the Damage characteristic of this units Beast-Skewer Bolts is 6 if the target is a Monster.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Beast-Skewer Killbow: Pick 'Em Off`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Man-Skewer Boltboyz: Man-Skewer Crossbows - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, pick either the Hasty Shot or Aimed Shot weapon characteristics for all the attacks it makes with its Man-skewer Crossbows.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Man-Skewer Boltboyz: Pick 'Em Off`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Skewer It Again! - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster that had any damage points allocated to it this phase by a shooting attack made by the Beast-skewer Killbow in this Regiment of Renown. Then, pick any number of Man-skewer Boltboyz units in this Regiment of Renown to focus fire. 
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of the ranged weapons used by the units you picked to focus fire but all of their attacks must target the enemy Monster you picked.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')