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
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_GAME,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  START_OF_SHOOTING_PHASE,
  TURN_ONE_START_OF_ROUND,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import prayers from './prayers'
import spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'
import monstrous_rampages from './monstrous_rampages'

const CelestialHurricanumEffects = [
  {
    name: `Portents of Battle`,
    desc: `Add 1 to hit rolls for attacks made by friendly CITIES OF SIGMAR HUMAN units wholly within 9" of any friendly units with this ability.`,
    when: [SHOOTING_PHASE, COMBAT_PHASE],
    shared: true,
  },
  {
    name: `Storm of Shemtek`,
    desc: `In your hero phase, you can pick 1 enemy unit within 18" of this unit and roll a number of dice equal to the number of the current battle round. For each roll of 2+, that enemy unit suffers D3 mortal wounds.`,
    when: [HERO_PHASE],
    shared: true,
  },
]
const LuminarkEffects = [
  {
    name: `Aura of Protection`,
    desc: `Friendly CITIES OF SIGMAR HUMAN units have a ward of 6+ while they are wholly within 9" of any friendly units with this ability.`,
    when: [WARDS_PHASE],
    shared: true,
  },
  {
    name: `Searing Beam of Light`,
    desc: `Do not use the attack sequence for an attack made with Searing Beam of Light. Instead, pick 1 point on the battlefield within range of the shooting model that is visible to it and draw a straight line between that point and the closest point on the shooting model's base. Roll a dice for each unit that has any models passed across by that line. For each roll of 2+, that unit suffers D3 mortal wounds.`,
    when: [SHOOTING_PHASE],
    shared: true,
  },
]
const SteamTankEffects = [
  {
    name: `More Pressure!`,
    desc: `In your hero phase, you can say that this unit will overpressure its boiler. If you do so, roll 2D6. If the roll is less than the number of wounds currently allocated to this unit, this unit suffers D3 mortal wounds. Ifthe roll is equal or greater than the number of wounds currently allocated to this unit, pick 1 of the following effects to apply to this unit until the start of your next hero phase:

    Power the Wheels: This unit can run and shoot and/or charge in the same turn.
    
    Power the Guns: Add 1 to the Attacks characteristic of this unit's Steam Cannon and add D6 to the Attacks characteristic of this unit's Steam Gun.`,
    when: [HERO_PHASE],
    shared: true,
  },
  {
    name: `Steel Behemoth`,
    desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a dice. On a 2+, that enemy unit suffers D3 mortal wounds.`,
    when: [CHARGE_PHASE],
    shared: true,
  },
]
const BloodSacrificeEffect = {
  name: `Blood Sacrifice`,
  desc: `At the start of your hero phase, you can pick 1 friendly DARKLING COVENS model within 3" of this unit to be slain. If you do so, add 2 to casting rolls for this unit until the end of that phase.`,
  when: [START_OF_HERO_PHASE],
  shared: true,
}
const NoxiousBreathEffect = {
  name: `Noxious Breath`,
  desc: `The Attacks characteristic of Noxious Breath is equal to the number of models in the target unit (to a maximum Attacks characteristic of 10).`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const GrimResolveEffect = {
  name: `Grim Resolve`,
  desc: `This unit has a ward of 5+.`,
  when: [WARDS_PHASE],
  shared: true,
}
const WeaponsOfBanishmentEffect = {
  name: `Weapons of Banishment`,
  desc: `Double the Damage characteristic of an attack made with this model's weapons if the target of that attack is a WIZARD or DAEMON. In addition, when this model fights or shoots, you can choose an endless spell to be the target of any of its attacks. If you do so, roll a dice to see if that attack scores a hit. If it does, do not make a wound or save roll. Instead, roll 2D6. If the roll is greater than the casting value of that endless spell, that endless spell is dispelled.`,
  when: [SHOOTING_PHASE, COMBAT_PHASE],
  shared: true,
}
const CinderblastBombEffect = {
  name: `Cinderblast Bomb`,
  desc: `If this unit includes a model armed with a Cinderblast Bomb, once per battle, in your shooting phase, that model can throw it. If it does so, pick 1 enemy unit within 6" of that model and roll a dice. On a 2+, that unit suffers D3 mortal wounds.`,
  when: [SHOOTING_PHASE],
  shared: true,
}

const Units = {
  Battlemage: {
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Magic of the Realms`,
        desc: `Effect: Pick a Spell ability that this unit can use. For the rest of the battle, add 1 to casting rolls for this unit when it uses that Spell ability.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Battlemage on Griffon': {
    /* mandatory: {
       spells: [keyPicker(spells, ['Amber Spear'])],
     }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Grions Razor Claws and Twin Beaks is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ghurish Ferocity - Once Per Turn`,
        desc: `Effect: Roll a dice. On a 2+, add 1 to the Damage characteristic of this units Grions Razor Claws and Twin Beaks for attacks that target enemy Monsters for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Battlemage on Celestial Hurricanum': {
    /* mandatory: {
       spells: [keyPicker(spells, ['Chain Lightning'])],
     }, */
    //[GenericEffects.WizardOneSpellEffect, ...CelestialHurricanumEffects],
    effects: [
      {
        name: `Portents of Battle - Once Per Turn`,
        desc: `Declare: Pick up to D3 visible friendly Cities of Sigmar Human units wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to hit rolls for the targets combat attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Storm of Shemtek - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target. 
        Effect: Make a number of D3 rolls equal to the current battle round number. For each 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ]
  },

  'Celestial Hurricanum': {
   // [...CelestialHurricanumEffects], // updated 2024
    effects: [
      {
        name: `Portents of Battle - Once Per Turn`,
        desc: `Declare: Pick up to D3 visible friendly Cities of Sigmar Human units wholly within 12" of this unit to be the targets. 
        Effect: Add 1 to hit rolls for the targets combat attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Storm of Shemtek - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target. 
        Effect: Make a number of D3 rolls equal to the current battle round number. For each 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ]
  },
  'Battlemage on Luminark of Hysh': {
    /*  mandatory: {
        spells: [keyPicker(spells, ['Burning Gaze'])],
      }, */
    //[...LuminarkEffects],
    effects: [
      {
        name: `Aura of Protection - Passive`,
        desc: `Effect: Friendly Cities of Sigmar units have Ward (6+) while they are wholly within 12" of this unit`,
        when: [DURING_GAME],
      },
      {
        name: `Searing Beam of Light - Passive`,
        desc: `Effect: Each time this unit attacks with its Searing Beam of Light, pick a point on the battlefield within range to be the target. If the attack scores a hit, draw a straight line between that point and the closest point on this units base. Inflict D3 mortal damage on each visible unit (friendly and enemy) that the line passes across.`,
        when: [SHOOTING_PHASE],
      },
    ]
  },
  'Luminark of Hysh': {
   // [...LuminarkEffects],
    effects: [
      {
        name: `Aura of Protection - Passive`,
        desc: `Effect: Friendly Cities of Sigmar units have Ward (6+) while they are wholly within 12" of this unit`,
        when: [DURING_GAME],
      },
      {
        name: `Searing Beam of Light - Passive`,
        desc: `Effect: Each time this unit attacks with its Searing Beam of Light, pick a point on the battlefield within range to be the target. If the attack scores a hit, draw a straight line between that point and the closest point on this units base. Inflict D3 mortal damage on each visible unit (friendly and enemy) that the line passes across.`,
        when: [SHOOTING_PHASE],
      },
    ]
  },
  Flagellants: {
    effects: [
      {
        name: `Glorious Martyrs`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. Add 1 to the roll if this unit is wholly within 12" of a friendly Pontifex Zenestra. On a 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Freeguild Steelhelms': {
    effects: [
      {
        name: `Consecrate the Land - Once Per Turn`,
        desc: `Declare: If this unit is contesting an objective you control that is not contested by any enemy models, roll a dice. 
        Effect: On a 3+, that objective is considered by you to be consecrated. While each model in a friendly Cities of Sigmar Human unit is contesting a consecrated objective, that unit has Ward (5+). If your opponent gains control of a consecrated objective, it is no longer consecrated.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Freeguild Marshal on Griffon': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Grions Razor Claws and Deadly Beak is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Tactical Acumen - Reaction: You declared the ‘Redeploy’ command for a friendly Cities of Sigmar Human unit wholly within 12" of this unit`,
        desc: `Effect: If you roll a 1-3 when determining the distance that unit can move, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Piercing Bloodroar - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
        Effect: Roll a dice for each target. On a 4+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Freeguild Marshal and Relic Envoy': {
    effects: [
      {
        name: `Attendant Relic Envoy`,
        desc: `Declare: Pick a friendly Cities of Sigmar Human wholly within 18" of this unit to be the target. 
        Effect: Place this units Relic Envoy next to the target (if this units Relic Envoy is currently next to a different friendly unit, move it next to the target). 
        While the target has a Relic Envoy next to it, it can be picked to be the target of an Officars Order ability even if it is not wholly within 12" of the friendly Hero using that ability. 
        If this unit is destroyed, remove its Relic Envoy from the battlefield.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Rousing Orator - Passive`,
        desc: `Effect: Add 3 to the control scores of other friendly Cities of Sigmar Human units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Freeguild Command Corps': {
    effects: [
      {
        name: `The Marshal's Retinue - Passive`,
        desc: `Effect: While any friendly Freeguild Marshal and Relic Envoy units are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Freeguild Adjutants - Once Per Battle Round`,
        desc: `Declare: Pick a friendly Cities of Sigmar Human unit wholly within 12" of this unit to be the target. 
        Effect: For the rest of the turn, the rst time the target uses the Redeploy, Rally, Covering Fire or Counter- charge command, you can pick another friendly Cities of Sigmar Human unit wholly within 12" of this unit and that has not used a command this phase to use the same command immediately after the rst has been resolved (this is an exception to Commands, 1.2). You must still spend command points as normal to use the command a second time.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dispatch Spies - Once Per Battle - Reaction: Opponent declared a command for a unit within 12" of this unit`,
        desc: `Effect: Unless your opponent spends 1 additional command point to use that command, the command has no effect, it still counts as having been used and the command points spent to use the command are still lost.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Freeguild Cavaliers': {
    effects: [
      {
        name: `Devastating Charge`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a dice for each model in this unit that is in combat. For each 4+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Freeguild Fusiliers': {
    effects: [
      {
        name: `Fusiliers, Fire! - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, if it is in a fortified position, use the Fortified Position weapon characteristics for all the attacks it makes with its Fusil-cannon. If it is not in a fortified position, use the Mobile weapon characteristics.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Fortify Position`,
        desc: `Effect: This unit establishes a fortified position and remains in a fortified position until it either uses a Move ability or is removed from the battlefield. While this unit is in a fortified position, subtract 1 from the Rend characteristic of weapons used for attacks that target this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Blackpowder Squire - Passive`,
        desc: `Effect: This unit has a Blackpowder Squire token. Each time this unit uses a Shoot ability, if this units Blackpowder Squire is on the battlefield, you can re-roll 1 hit roll. If a hit roll re-rolled in this manner is 1, remove this units Blackpowder Squire from the battlefield.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Freeguild Cavalier-Marshal': {
    effects: [
      {
        name: `For Sigmar, Charge! - Passive`,
        desc: `Effect: Add 1 to charge rolls for this unit and for friendly Freeguild Cavaliers units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Run Down the Foe - Once Per Battle`,
        desc: `Declare: If this unit charged this turn, pick a friendly Cities of Sigmar Human Cavalry unit that charged this turn and is wholly within 12" of this unit to be the target. Effect: This unit and the target have Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Warden King': {
    effects: [
      {
        name: `Ancestral Grudgebearer - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in your opponents army to bear a grudge against. You can pick an enemy unit that is in reserve. 
        Effect: For the rest of the battle, add 1 to wound rolls for combat attacks made by friendly Cities of Sigmar Duardin units that target that unit.`,
        when: [DURING_SETUP],
      },
      {
        name: `Fearless Leader - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Cities of Sigmar Duardin unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Runelord: {
    /*  mandatory: {
        prayers: [keyPicker(prayers, ['Forgefire'])],
      }, */
    effects: [
      {
        name: `Runes of Spellbreaking - Passive`,
        desc: `Effect: This unit can use the Unbind ability as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Forgefire: Chant value of 5`,
        desc: `Declare: Pick a friendly Cities of Sigmar Duardin unit wholly within 12" of this unit to be the target, then make a chanting roll of D6. 
        Effct: Until the start of your next turn, add 1 to the Rend characteristic of the targets melee weapons. In addition, if the chanting roll was 10+, pick another friendly Cities of Sigmar Duardin unit wholly within 12" of this unit. Add 1 to the Rend characteristic of that units melee weapons until the start of your next turn as well.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Longbeards: {
    effects: [
      {
        name: `I Thought Duardin Were Made of Sterner Stuff! - Passive`,
        desc: `Effect: Add 2 to the control scores of friendly Cities of Sigmar Duardin units, excluding Longbeards units, while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Ironbreakers: {
    effects: [
     // CinderblastBombEffect,
      {
        name: `Gromril Shieldwall - Passive`,
        desc: `Effect: While this unit is aected by the Hold the Line Officars Order ability, it has Ward (4+) instead of Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  Irondrakes: {
    effects: [
      {
        name: `Cinderblast Bomb - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a visible enemy unit within 6" of it to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Hammerers: {
    effects: [
      {
        name: `Oathsworn - Passive`,
        desc: `Effect: While any friendly Cities of Sigmar Duardin Infantry Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Steam Tank': {
    effects: [
      // ...SteamTankEffects,
      {
        name: `More Pressure!`,
        desc: `Effect: Roll 2D6. If the roll is less than the number of damage points this unit has, inflict D3 mortal damage on this unit. Otherwise, pick 1 of the following effects to apply to this unit until the start of your next turn: 
        Power the Wheels: This unit can use a Run ability and still use Shoot and/or Charge abilities later in the turn.
        Power the Guns: Add 3 to the Attacks characteristic of this units Steam Gun.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Steam Tank Commander': {
    effects: [
     // ...SteamTankEffects,
     {
      name: `More Pressure!`,
      desc: `Effect: Roll 2D6. If the roll is less than the number of damage points this unit has, inflict D3 mortal damage on this unit. Otherwise, pick 1 of the following effects to apply to this unit until the start of your next turn: 
      Power the Wheels: This unit can use a Run ability and still use Shoot and/or Charge abilities later in the turn.
      Power the Guns: Add 3 to the Attacks characteristic of this units Steam Gun.`,
      when: [HERO_PHASE],
    },
    {
      name: `Division Commander - Once Per Battle`,
      desc: `Declare: Pick up to 2 friendly Steam Tank units to be the targets. 
      Effect: For the rest of the turn, add 1 to hit rolls for shooting attacks made by this unit and by each target.`,
      when: [SHOOTING_PHASE],
    },
    ],
  },
  Cogsmith: {
    effects: [
      {
        name: `Direct the Gyrocorps - Once Per Turn`,
        desc: `Declare: Pick up to 3 visible friendly Gyrocopter or Gyrobomber units wholly within 18" of this unit to be the targets. 
        Effect: Roll a dice for each target. On a 3+, add 1 to hit rolls for the targets attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* Steamtank: {
    effects: [...SteamTankEffects], // updated 2024
  }, */
  Gyrobomber: {
    effects: [
      {
        name: `Grudgebuster Bombs`,
        desc: `Declare: If this unit used a Move ability this phase, pick an enemy unit that does not have Fly and that this unit passed across this turn to be the target. 
        Effect: Pick 1 of the following effects: 
        Tactical Bombing: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. 
        Drop It All!: Make 2 rolls of D3. For each 2+, inflict an amount of mortal damage on the target equal to the roll. Then, roll a D3 for each unit (friendly and enemy) within the targets combat range that does not have Fly. On a 2+, inflict an amount of mortal damage on that unit equal to the roll. Once the Drop It All! effect of this ability has been resolved, this unit cannot use this ability again for the rest of the battle.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Gyrocopters: {
    effects: [
      {
        name: `Guild Bombs - Once Per Battle`,
        desc: `Declare: If this unit used a Move ability this phase, pick an enemy unit that does not have Fly and that this unit passed across this turn to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Sorceress: {
    /*  mandatory: {
        spells: [keyPicker(spells, ['Word of Pain'])],
      },  [GenericEffects.WizardOneSpellEffect, BloodSacrificeEffect], */ 
    effects: [
      {
        name: `Cruel Sacrifice - Once Per Turn`,
        desc: `Declare: Pick a friendly Cities of Sigmar Aelf unit wholly within 6" of this unit to be the target. 
        Effect: Add 1 to casting rolls for this unit for the rest of the turn. Then, roll a dice. On a 4+, 1 model in the target unit is slain.`,
        when: [HERO_PHASE],
      },
      {
        name: `Word of Pain - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls and wound rolls for the targets attacks until the start of your next turn.`,
        when: [COMBAT_PHASE],
      },
    ]
  },
  'Sorceress on Black Dragon': {
    /* mandatory: {
       spells: [keyPicker(spells, ['Bladestorm'])],
     }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Black Dragons Fearsome Jaws and Claws is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Command Underlings`,
        desc: `Declare: Pick up to 3 friendly Cities of Sigmar Aelf Infantry units wholly within 12" of this unit to be targets. 
        Effect: Add 3" to the Move characteristic of each target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Feed on Life Force - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If any enemy models are slain by this ability, place a dark sorcery token next to this unit for the rest of the battle, to a maximum of 3 tokens.`,
        when: [END_OF_TURN],
      },
      {
        name: `Dark Sorcery - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit for each dark sorcery token it has.`,
        when: [HERO_PHASE],
      },
      // NoxiousBreathEffect,
    ],
  },
  Dreadspears: {
    effects: [
      {
        name: `Coven Guard`,
        desc: `Effect: If this unit did not charge this turn, add 1 to wound rolls for this units attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Bleakswords: {
    effects: [
      {
        name: `Merciless Conquerors - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units melee weapons while it is contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Darkshards: {
    effects: [
      {
        name: `Storm of Iron-tipped Bolts`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to the Attacks characteristic of this units Master-craed Repeater Crossbows for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Black Guard': {
    effects: [
      {
        name: `Steel and Sorcery - Passive`,
        desc: `Effect: While any friendly Cities of Sigmar Aelf Infantry Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  Executioners: {
    effects: [
      {
        name: `Severing Strike - Passive`,
        desc: `Effect: If this unit charged this turn, this units attacks score critical hits on unmodied hit rolls of 5+.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Dreadlord on Black Dragon': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Black Dragons Fearsome Jaws and Claws is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Under the Shadow of Black Wings - Passive`,
        desc: `Effect: Add 1 to charge rolls for friendly Cities of Sigmar Aelf Cavalry units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
      //NoxiousBreathEffect,
      {
        name: `Indiscriminate Slaughter - Once Per Turn`,
        desc: `Declare: Pick all units (friendly and enemy) within this units combat range, excluding this unit, to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Drakespawn Knights': {
    effects: [
      {
        name: `Bestial Instincts`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of this units Drakespawns Ferocious Jaws while it is in combat with any damaged enemy units or while it is in combat with any enemy units that have had any models slain.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Drakespawn Chariots': {
    effects: [
      {
        name: `Scythed Runners`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'War Hydra': {
    effects: [
      {
        name: `Six-Headed Strike - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Make 6 rolls of D3. For each roll that exceeds the targets Health characteristic, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sever One Head, Another Takes Its Place - Once Per Turn`,
        desc: `Effect: Heal (6) this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Assassin: {
    effects: [
      {
        name: `Hidden Murderer - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly Infantry unit that has 5 or more models and this unit is not in combat, this unit is not visible to enemy units.`,
        when: [DURING_GAME],
      },
      {
        name: `In For the Kill - Passive`,
        desc: `Effect: This unit has Strike-first if it charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Dark Riders': {
    effects: [
      {
        name: `Sow Havoc`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+:  
        Inflict D3 mortal damage on the target.
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Black Ark Fleetmaster': {
    effects: [
      {
        name: `'At Them, You Curs! - Reaction: You declared a Fight ability for this unit'`,
        desc: `Effect: Pick a friendly Black Ark Corsairs unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Black Ark Corsairs': {
    effects: [
      {
        name: `Skilled Swashbucklers - Passive`,
        desc: `Effect: Each time you make an unmodied save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Scourgerunner Chariots': {
    effects: [
      {
        name: `Lay the Beast Low - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units shooting attacks that target enemy Monsters.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Kharibdyss: {
    effects: [
      {
        name: `Abyssal Howl - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 5 from the targets control score for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Doralia Ven Denst': {
    // [GrimResolveEffect, WeaponsOfBanishmentEffect],
    effects: [
    {
      name: `Weapeans of Banishment - Passive`,
      desc: `Effect: Double the Damage characteristic of this units weapons for attacks that target Wizards, Priests and Manifestations.`,
      when: [SHOOTING_PHASE, COMBAT_PHASE],
    },
  ]
  },
  'Galen Ven Denst': {
    effects: [
     // GrimResolveEffect,
      {
        name: `Guardian and Mentor - Passive`,
        desc: `Effect: While a friendly Doralia ven Denst is wholly within this units combat range, this unit has Strike-first and both this unit and that Doralia ven Denst have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Weapeans of Banishment - Passive`,
        desc: `Effect: Double the Damage characteristic of this units weapons for attacks that target Wizards, Priests and Manifestations.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
     // WeaponsOfBanishmentEffect,
    ],
  },
  'Tahlia Vedra, Lioness of the Parch': {
    /* mandatory: {
       monstrous_rampages: [keyPicker(monstrous_rampages, ['Paralysing Venom'])],
     }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Infernadines Leonine Jaws is 2.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unparalleled Tactician - Passive`,
        desc: `Effect: When this unit uses an Officars Order ability, you can pick an additional friendly Cities of Sigmar unit wholly within 12" of this unit to be a target of that ability.`,
        when: [DURING_GAME],
      },
      {
        name: `Lead From the Front - Once Per Battle`,
        desc: `Declare: If this unit is in combat, pick up to 3 other friendly Cities of Sigmar units wholly within 12" of this unit to be the targets. 
        Effect: For each target, you can return a number of slain models to that unit with a combined Health characteristic of up to 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Paralysing Venom - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster that charged this turn and is in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Alchemite Warforger': {
    /* mandatory: {
       spells: [keyPicker(spells, ['Blazing Weapons'])],
     }, */
    effects: [
     // GenericEffects.WizardOneSpellEffect,
      {
        name: `Runic Crucible`,
        desc: `Effect: Pick a friendly Cities of Sigmar Human unit wholly within 12" of this unit and roll a dice. On a 3+, add 1 to save rolls for that unit until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fusil-Major on Ogor Warhulk': {
    effects: [
      {
        name: `Mark Targets`,
        desc: `Declare: Pick an enemy unit that was targeted by this units shooting attacks this turn to be the target. 
        Effect: Add 1 to hit rolls for shooting attacks made by friendly Cities of Sigmar Human units that target that unit for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Fortify Position`,
        desc: `Effect: This unit establishes a fortified position and remains in a fortified position until it either uses a Move ability or is removed from the battlefield. While this unit is in a fortified position, subtract 1 from the Rend characteristic of weapons used for attacks that target this unit.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /*'Haskel Hexbane': {
    effects: [
      GrimResolveEffect,
      {
        name: `Hunt with Conviction`,
        desc: `After deployment but before the start of the first battle round, pick 1 enemy HERO or MONSTER on the battlefield to be the target of the witch hunt. If there are any enemy WIZARD HEROES on the battlefield, 1 of those units must be picked to be the target of the witch hunt. Add 1 to the damage inflicted by attacks made by this unit that target that unit.`,
        when: [END_OF_SETUP],
      },
      {
        name: `Flamewood Stakes`,
        desc: `At the end of the combat phase, you can pick 1 enemy unit within 1" of this unit and roll a dice. Add 1 to the roll if that unit has the DEATH, DAEMON or WIZARD keyword. On a 3+, that unit suffers D3 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  "Hexbane's Hunters": {
    effects: [
      GrimResolveEffect,
      {
        name: `Agents of the Order`,
        desc: `Add 1 to the damage inflicted by attacks made by this unit that target the unit you picked to be the target of the witch hunt (see the Haskel Hexbane warscroll).`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Flamewood Stakes`,
        desc: `At the end of the combat phase, you can pick 1 enemy unit within 1" of this unit and roll a dice. Add 1 to the roll if that unit has the DEATH, DAEMON or WIZARD keyword. On a 3+, that unit suffers D3 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  }, */
  'Ironweld Great Cannon': {
    effects: [
      {
        name: `Shot and Shell - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, if it is in a fortified position, pick either the Cannonball or Grapeshot weapon characteristics for all the attacks it makes with its Great Cannon. If it is not in a fortified position, use the Grapeshot weapon characteristics.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Fortify Position`,
        desc: `Effect: This unit establishes a fortified position and remains in a fortified position until it either uses a Move ability or is removed from the battlefield. While this unit is in a fortified position, subtract 1 from the Rend characteristic of weapons used for attacks that target this unit.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Wildercorps Hunters': {
    effects: [
      {
        name: `Expert Trackers`,
        desc: `Effect: This unit can use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
      {
        name: `Hidden and Dangerous`,
        desc: `Effect: This unit is not visible to enemy units more than 12" from it while it is aected by the Cover terrain ability. In addition, add 1 to hit rolls for this units shooting attacks while it is wholly within 3" of a terrain feature.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Callis and Toll': {
    effects: [
     {
       name: `Right Tools for the Job - Passive`,
       desc: `Effect: Double the Damage characteristic of this units weapons for attacks that target Wizards, Priests and Manifestations.`,
       when: [SHOOTING_PHASE, COMBAT_PHASE],
     },
     {
       name: `Wily to the Last - Passive`,
       desc: `Effect: If this unit has 2 models and would be automatically destroyed, it is not automatically destroyed. Instead, 1 model in this unit is slain.`,
       when: [DURING_GAME],
     },
     {
       name: `Get it Done - Reaction: You declared a Fight ability for this unit`,
       desc: `Effect: Pick a friendly Tolls Companions unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
       when: [COMBAT_PHASE],
     },
   ],
  },
'Toll\'s Companions': {
    effects: [
     {
      name: `Hidden Agents`,
      desc: `Declare: Pick this unit and a friendly Callis and Toll unit in the same regiment as this unit if those units have not been deployed. 
      Effect: Set up those units in reserve in the shadows. Those units have now been deployed.`,
      when: [DURING_SETUP],
     },
     {
      name: `Saviours of Cinderfall - Passive`,
      desc: `Effect: While a friendly Callis and Toll unit is wholly within this units combat range, both this unit and that Callis and Toll unit have Ward (5+).`,
      when: [DURING_GAME],
     },
     {
       name: `Emerge from the Shadows`,
       desc: `Declare: Pick this unit if it is in the shadows. 
       Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units. Then, set up the Callis and Toll unit that was set up in the shadows with this unit wholly within 6" of it and more than 9" from all enemy units.`,
       when: [MOVEMENT_PHASE],
     },
   ],
  },
  'Pontifex Zenestra, Matriarch of the Great Wheel': {
    /* mandatory: {
       prayers: [keyPicker(prayers, ['Vessel of Sigmar'])],
     }, */
    effects: [
      {
        name: `Vessel of Sigmar: Chant value of 5`,
        desc: `Declare: Make a chanting roll of D6. 
        Effect: Pick 1 of the following eects to apply until the start of your next turn. Pick up to 2 different effects instead if the chanting roll was 10+. 
        The Great Wheel Turns: Add 2" to the Move characteristic of friendly Cities of Sigmar Human units if they are wholly within 12" of this unit at the start of the move. 
        Hallowed Ground: Friendly Cities of Sigmar Human units have Ward (5+) while they are wholly within 12" of this unit. 
        Cast Out Evil: Roll a D3 for each enemy Wizard and Priest on the battlefield. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Voice of the God-King - Passive`,
        desc: `Effect: This unit can use the Unbind ability as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Fjori`s Flamebearers': {
    effects: [
      {
        name: `Grimhold Exile: Last of the Lodge-fire - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the targets Health characteristic. For each 4+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grimhold Exile: Honour to Grimnir! - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly Fyreslayers Infantry units wholly within 12" of this unit to be the targets. 
        Effect: You can re-roll charge rolls for the targets for the rest of the turn`,
        when: [HERO_PHASE],
      },
      {
        name: `Auric Hearthguard: Molten Rockbolts - Passive`,
        desc: `Effect: Each time a shooting attack made by this unit scores a critical hit, subtract 1" from the target units Move characteristic until the start of your next turn. This ability cannot reduce the target units unmodified Move characteristic below half.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Hearthguard Berzerkers: Duty Unto Death - Passive`,
        desc: `Effect: While any friendly Fyreslayers Infantry Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Hearthguard Berzerkers with Poleaxes: Smouldering Braziers`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Hearthguard Berzerkers with Broadaxes: Fires of Vengeance - Passive`,
        desc: `Effect: While this unit is within the combat ranges of any damaged friendly Fyreslayers Heroes, add 1 to the Attacks characteristic of this unit's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulkite Berzerkers with Slingshields: Berserk Fury - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vulkite Berzerkers with Handaxes: Whirlwind of Destruction - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units melee weapons if this unit charged this turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toe to Toe - Passive`,
        desc: `Effect: Subtract 10 from the control scores of enemy Monsters while they are in combat with any units in this Regiment of Renown.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grimnir's Defiance - Passive`,
        desc: `Effect: Units in this Regiment of Renown cannot be picked to be the target of Rampage abilities used by enemy units.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Elthwin`s Thorns': {
    effects: [
      {
        name: `Arch-Revenant: Crescent Shield`,
        desc: `Effect: Pick 1 of the following effects to apply to this unit for the rest of the turn: 
        Defensive Stance: This unit has Ward (4+). 
        Aggressive Stance: Add 1 to the Attacks characteristic of this units melee weapons, and add 1 to wound rolls for this units combat attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gossamid Archers: Forest Fighters - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      {
        name: `Gossamid Archers: Zephyrspites - Once Per Turn`,
        desc: `Effect: If this unit used a Shoot ability this phase, this unit can move D6". It cannot move into combat during any part of that move.`,
        when: [SHOOTING_PHASE],
      },
       {
        name: `Gossamid Champion`,
        desc: `Declare: Pick the Arch-Revenant in this Regiment of Renown to use this ability, the pick a visible enemy unit within 12" of them to be the target. 
        Effect: Until the start of your next turn, subtract X from charge rolls for the target, where X is the number of damage points allocated to the target this phase by shooting attacks made by the Gossamid Archers unit in the Regiment of Renown, to a maximum of 6.`,
        when: [SHOOTING_PHASE],
       },
       {
         name: `Flight of the Zephyrspites - Once Per Turn`,
         desc: `Effect: If both units in this Regiment of Renown are within each others combat range and neither unit is in combat, roll a dice. On a 3+, remove both units from the battlefield, then set them up again within each others combat range, wholly within 3" of a terrain feature and more than 9" from all enemy units.`,
         when: [SHOOTING_PHASE],
       },
    ],
  },
  'ROR: Gotrek Gurnisson': {
    effects: [
      {
        name: `Command Ability - Unstoppable Battle Fury`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strikelast for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `I'll Get There Myself! - Passive`,
        desc: `Effect: This unit cannot be set up in reserve and cannot be targeted by abilities that would remove it from the battlefield.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Blacktalons': {
    effects: [
      {
        name: `Neave Blacktalon: Justice from Azyr`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Whirlwind Axes for attacks that target Heroes.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave Blacktalon: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Neave Blacktalon: Windrider`,
        desc: `Declare: If this unit is in combat or charged this turn, this unit can make a pile-in move. Then, if this unit is in combat, you must pick 1 or more enemy units to be the target(s) of this units attacks. 
        Effect: Resolve combat attacks against the target unit(s). Then, roll a dice. On a 3+, remove this unit from the battlefield and set it up again on the battlefield more than 3" from all enemy units and wholly within the combat range of a friendly The Blacktalons unit that is not in combat.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave's Companions: Shield of Azyr`,
        desc: `Effect: While any friendly The Blacktalons Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Lorai: Aquatic Illusions`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Lorai: Nebulous Sea-Fog: Casting value of 6`,
        desc: `Effect: Until the start of your next turn, while a friendly The Blacktalons unit is wholly within 6" of this unit, if the unmodified hit roll for a shooting attack that targets that unit is 1-5, the attack fails and the attack sequence ends.`,
        when: [HERO_PHASE],
      },
      {
        name: `Justice Will Be Served - Once Per Battle`,
        desc: `Declare: Pick the Neave Blacktalon in this Regiment of Renown to be the target if it is in combat with an enemy Hero. 
        Effect: The target can use 2 Fight abilities this phase. Each time it does so, if it is in combat with an enemy Hero, all of its attacks must target an enemy Hero. In addition, after the first Fight ability is used, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Bundo Whalebiter': {
    effects: [
      {
        name: `Get Orf Me Land! - Once Per Turn`,
        desc: `Declare: Pick an objective within 1" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, move the target 2D6" to a new position on the battlefield more than 1" from all models, terrain features and other objectives.`,
        when: [HERO_PHASE],
      },
      {
        name: `Stuff 'Em In Me Net - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 3 dice. For each roll that is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Shipwrecka Warclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dead Cunning for a Gargant - Once Per Turn`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of this units weapons. Then, roll a dice. On a 4+, this unit has Strike-last for the rest of the turn.`,
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