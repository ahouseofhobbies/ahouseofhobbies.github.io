import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
  START_OF_SHOOTING_PHASE,
  TURN_ONE_START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  'Warpcog Convocation': {
    effects: [
      {
        name: `Skryre Prototypes - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Skryre units to be the targets. 
        Effect: Roll a dice for each target and apply the corresponding effect: 
        1 Kaboom!: Inflict D3 mortal damage on the target. 
        2-5 More Power!: Add 1 to wound rolls for the targets shooting attacks for the rest of the turn. 
        6 More-more Power!: In addition to the effect of More Power!, add 1 to the Rend characteristic of the targets ranged weapons for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Fleshmeld Menagerie': {
    effects: [
      {
        name: `Prized Creations - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly non-Hero Moulder units to be the targets. 
        Effect: Roll a dice for each target and apply the corresponding effect: 
        1-2 Self-destructive Fury: Inflict D3 mortal damage on the target. 
        3-4 Rabid Infusion: Add 1 to the Attacks characteristic of the targets melee weapons until the start of your next turn. 
        5-6 Blinded by Frenzy: In addition to the effect of Rabid Infusion, the target has Ward (5+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Virulent Procession': {
    effects: [
      {
        name: `Corrupted Earth - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Pestilens units that are in combat to be the targets. 
        Effect: For each target: 
        Make a pile-in move. 
        Then, pick an enemy unit in combat with the target and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Claw-Horde': {
    effects: [
      {
        name: `Claw-Picked - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Verminus units that charged this turn to be the targets. 
        Effect: Add 1 to the Rend characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Envoys of the Deepengnaw': {
    effects: [
      {
        name: `Will of the Horned Rat - Passive`,
        desc: `Effect: While a friendly Skaven Daemon is within the combat range of a friendly non-Hero Skaven Infantry unit: 
        That Skaven Daemon has Ward (4+). 
        Each time you make a successful ward roll for that Skaven Daemon, allocate 1 mortal damage on a friendly non-Hero Skaven Infantry unit within that units combat range after the damage sequence for that unit has been resolved (ward rolls cannot be made for these damage points).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Gathering of the Clans': {
    effects: [
      {
        name: `Backstabbing Allies - Once Per Turn - Reaction: You declared the Redeploy command for a friendly Skaven unit`,
        desc: `Effect: Pick up to 2 other friendly Skaven units that are not in combat and are wholly within 13" of the unit using the Redeploy command to be the targets. Each target must have at least one of the following keywords: Verminus, Skryre, Moulder, Pestilens, Eshin. After that Redeploy command has been resolved, each of the targets can immediately use the Redeploy command in an order of your choice without any command points being spent.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Thanquols Mutated Menagerie (AoR)': {
    effects: [
      {
        name: `Monstrous Entourage - Passive`,
        desc: `Effect: The Companion weapon ability has no effect on Mutated Menagerie units. While a friendly Thanquol is within the combat range of another friendly Mutated Menagerie unit:
          That Thanquol has Ward (4+).
          Each time you make a successful ward roll for that Thanquol, allocate 1 damage point to a friendly Mutated Menagerie unit within its combat range after the damage sequence has been resolved.`,
        when: [DURING_GAME],
      },
      {
        name: `More-More Mutation! - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Mutated Menagerie unit to be the target. You cannot pick the same unit to be the target of this abiltiy more than once per battle.
          Effect: For the rest of the battle:
          Add 2 to the target's Health characteristic.
          Add 2 to the target's Move characteristic.
          Add 1 to the Attacks characteristic of the target's melee weapons.
          The target has a Ward (5+).
          At the end of each turn, allocate D3+2 damage points to the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Rampaging Demise - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Mutated Menagerie Monster unit that has not used any Rampage abilities this turn to use this ability.
          Effect: This unit has Strike-First for the rest of the turn. However, at the end of the turn, this unit is destroyed. When this unit would be destroyed, before it is removed from play, roll a dice for each enemy unit within 6" of this unit. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.
          After this ability has been resolved, this unit cannot use any other Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Spiteful Swarms - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Mutated Menagerie Monster unit that has not used any Rampage abilities this turn to use this ability.
          Effect: This unit has Strike-First for the rest of the turn. However, at the end of the turn, this unit is destroyed. When this unit would be destroyed, before it is removed from play, roll a D3 for each enemy unit within 6" of this unit. On a 3+, subtract 1 from the Attacks characteristic of that enemy unit's melee weapons for the rest of the battle.
          After this ability has been resolved, this unit cannot use any other Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Great-Grand Gnawhorde (AoR)': {
    effects: [
      {
        name: `Disciples of Vizzik - Passive`,
        desc: `Effect: While a friendly Vizzik Skour is within the combat range of another friendly Gnawhorde unit:
          That Vizzik Skour has Ward (4+).
          Each time you make a successful ward roll for that Vizzik Skour, allocate 1 damage point to a friendly Gnawhorde unit within its combat range after the damage sequence has been resolved.`,
        when: [DURING_GAME],
      },
      {
        name: `Frenzied Momentum - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Warpshatter Throes abilities this turn. Pick up to 3 friendly Gnawhorde units to be the targets.
          Effect: For the rest of the turn:
          Add 2 to run rolls and charge rolls for the targets.
          Subtract 1 from the targets' control scores.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Reckless Abandon - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Warpshatter Throes abilities this turn. Pick up to 3 friendly Gnawhorde units to be the targets.
          Effect: For the rest of the turn:
          Add 1 to the Attacks characteristic of the targets' melee weapons.
          Add 1 to hit rolls for combat attacks that target those friendly units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unstoppable Warp-Volley - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Warpshatter Throes abilities this turn. Pick up to 3 friendly Gnawhorde units to be the targets.
          Effect: For the rest of the turn:
          Add 3" to the Range characteristic of the targets' ranged weapons.
          The targets cannot use commands.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  /* Masterclan: {
    effects: [
      {
        name: `Skilled Manipulators`,
        desc: `Roll a dice before you allocate a wound or mortal wound to a friendly MASTERCLAN HERO that is not a MONSTER, or instead of making a ward roll for a wound or mortal wound that would be allocated to a friendly MASTERCLAN HERO that is not a MONSTER, if that HERO is within 3" of any friendly SKAVEN units that have 3 or more models. On a 3+, that wound or mortal wound is allocated to 1 of those units instead of that HERO.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Always Three Clawsteps Ahead`,
        desc: `You can only use this ability if you include 3 or more MASTERCLAN HEROES in your starting army. After you pick a friendly Skaven unit to be your first unit to run in a phase and make a run roll for that unit, you can use that unmodified run roll in place of any other run rolls you make for friendly Skaven units until the end of that phase.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SKAVEN, rule_sources.ERRATA_OCTOBER_2022],
      },
      {
        name: `Always Three Clawsteps Ahead`,
        desc: `You can only use this ability if you include 3 or more MASTERCLAN HEROES in your starting army. After you pick a friendly SKAVEN unit to be your first unit to attempt a charge in a phase and make a charge roll for that unit, you can use that charge roll in place of any other charge rolls you make for friendly SKAVEN units until the end of that phase.`,
        when: [CHARGE_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SKAVEN, rule_sources.ERRATA_OCTOBER_2022],
      },
      {
        name: `Always Three Clawsteps Ahead`,
        desc: `You can only use this ability if you include 3 or more MASTERCLAN HEROES in your starting army. After you pick a friendly SKAVEN unit to be your first unit to fight in a phase and make any pile-in moves for that unit, you can make pile-in moves for each other friendly SKAVEN unit on the battlefield that is within 3" of any enemy units.

        Designer's Note: This ability does not prevent a unit from making another pile-in move when it is picked to fight.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SKAVEN, rule_sources.ERRATA_OCTOBER_2022],
      },
    ],
  },
  Moulder: {
    effects: [
      {
        name: `Prized Creations`,
        desc: `At the start of the first battle round, after determining who has the first turn but before the first turn begins, you can pick 1 HELL PIT ABOMINATION in your army to have a mutation from the table. If you include 3 or more MASTER MOULDERS in your starting army, you can pick each HELL PIT ABOMINATION in your army to have a mutation instead of only 1.

        The same HELL PIT ABOMINATION cannot have more than 1 mutation, and an army cannot include duplicates of the same mutation.
        
        Toughened Sinews: This unit has a Wounds characteristic of 16 and a Save characteristic of 4+.

        Lumbering Behemoth: This unit has a Move characteristic of 7". In addition, charge rolls for this unit are automatically a 7 (do not roll the dice).

        Quivering Bulk: Add 1 to each roll you make for this unit's Avalanche of Flesh ability.

        Accelerated Regeneration: You can use this unit's Regenerating Monstrosity ability in the enemy hero phase as well as in your hero phase.

        Best-best Warpstone Spikes: You can reroll the dice when you use this unit's Warpstone Spikes ability.
        
        Never-never Die-die: You can reroll the dice when you use this unit's Too Horrible To Die ability.`,
        when: [TURN_ONE_START_OF_ROUND],
      },
    ],
  },
  Eshin: {
    effects: [
      {
        name: `Masters of Murder`,
        desc: `At the start of the first battle round, after determining who has the first turn but before the first turn begins, you can pick 1 enemy on the battlefield. Add 1 to hit rolls and wound rolls for attacks made by friendly CLANS ESHIN units that target that HERO.

        If you include 3 or more CLANS HEROES in your starting army, add 1 to hit rolls and wound rolls for attacks made with melee weapons by friendly CLANS ESHIN units that target enemy HEROES.`,
        when: [TURN_ONE_START_OF_ROUND],
      },
      {
        name: `Masters of Murder`,
        desc: `Add 1 to hit rolls and wound rolls for attacks made by friendly CLANS ESHIN units that target that HERO. If you include 3 or more CLANS HEROES in your starting army, add 1 to hit rolls and wound rolls for attacks made with melee weapons by friendly CLANS ESHIN units that target enemy HEROES.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  Verminus: {
    effects: [
      {
        name: `Mighty Warlords`,
        desc: `This is a heroic action that you can carry out with 1 friendly CLAWLORD instead of picking 1 from the table in the core rules. If you do so, pick 1 eligible command trait from pages 70-71 that this CLAWLORD does not already have and apply its effect to this unit until the end of this turn.

        If you include 3 or more CLAWLORDS in your starting army, you can carry out this heroic action with each friendly CLAWLORD instead just 1. The same command trait cannot be picked with this ability more than once in the same turn.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  Skryre: {
    effects: [
      {
        name: `Warpstone Sparks`,
        desc: `If you include any CLANS SKRYRE HEROES in your starting army, at the start of the battle, before either player starts deploying units, you can roll a D3 and add 3 to the roll, If you include 3 or more CLANS SKRYRE HEROES in your starting army, you can roll a D6 and add 3 to the roll instead. The result is the number of warpstone sparks you receive that you can use during the battle, You cannot use more than 1 warpstone spark in the same phase. Each warpstone spark can be used once per battle to carry out 1 of the warpstone spark abilities: `,
        when: [START_OF_SETUP],
      },
      {
        name: `Warpstone Sparks`,
        desc: `In the hero phase, pick 1 friendly CLANS SKRYRE WIZARD. You can reroll casting, dispelling and unbinding rolls for that WIZARD until the end of that phase. At the end of that phase, roll a dice. On a 1, that WIZARD suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
      {
        name: `Warpstone Sparks`,
        desc: `At the start of your shooting phase, pick 1 friendly CLANS SKRYRE HERO. Then pick up to 3 different friendly CLANS SKRYRE units wholly within 13" of that HERO. You can add 1 to the Damage characteristic of missile weapons used by those units until the end of that phase. At the end of that phase, roll a dice. On a 1, that HERO suffers D3 mortal wounds.`,
        when: [START_OF_SHOOTING_PHASE],
      },
      {
        name: `Warpstone Sparks`,
        desc: `In the combat phase, when you pick a friendly CLANS SKRYRE HERO to fight, you can say that they will use this warpstone spark ability. If you do so, add 1 to hit rolls and wound attacks made by that HERO until the end phase. At the end of that phase, roll a dice. On a 1, that HERO suffers D3 mortal wounds.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Pestilens: {
    effects: [
      {
        name: `Echoes of the Great Plagues`,
        desc: `When you make a chanting roll for a friendly CLANS PESTILENS PRIEST, you can add 1 to that chanting roll for each other friendly CLANS PESTILENS PRIEST wholly within 13" of the chanter. In addition, if the chanting roll for a prayer chanted by a friendly CLANS PESTILENS PRIEST is 6+, you can pick 1 of the following Great Plagues to manifest (in addition to the effect of the prayer). Each Great Plague can only manifest once per battle, and no more than one Great Plague can manifest in the same turn.

        Bubonic Blightplague: If this Great Plague manifests, pick the nearest enemy unit within 13" of the chanter. That unit is infected with the Bubonic Blightplague. If several enemy units are tied to be the closest, you can pick which is infected. The infected unit suffers 2D6 mortal wounds. If the infected unit is destroyed by those mortal wounds, you can pick another enemy unit within 6" of the last model to be slain in the infected unit. That unit is now infected and suffers D6 mortal wounds. If that infected unit is likewise destroyed, you can pick another enemy unit within 6" of the last model to be slain. Ihat unit is now infected and suffers D3 mortal wounds, Continue in this manner until either a unit is not destroyed or there are no other enemy units within 6" of a destroyed unit.

        Crimsonweal Curse: If this Great Plague manifests, pick the nearest enemy unit within 13" of the chanter, That unit is infected with the Crimsonweal Curse for the rest of the battle. If several enemy units are tied to be the closest, you can pick which is infected. The infected unit suffers 1 mortal wound. In addition, at the start of each turn, the infected unit and each other enemy unit within 1" of the infected unit suffer 1 mortal wound.

        Redmaw Plague: If this Great Plague manifests, pick the nearest enemy HERO within 13" of the chanter, That HERO is infected with the Redmaw Plague for the rest of the battle. If several enemy HEROES are tied to be the closest, you can pick which is infected. At the start of the combat phase, if the infected HERO is within 3" of any other units in your opponent's army and is not within 3" of any units in your army, then you can treat that HERO as a friendly unit until the end of that combat phase.

        The Neverplague: If this Great Plague manifests, you can reroll chanting rolls for friendly CLANS PESTILENS PRIESTS for the rest of the battle.

        Undulant Scourge: If this Great Plague manifests, pick the nearest enemy unit within 13" of the chanter and roll a dice for each model in that unit. If several enemy units are tied to be the closest, you can pick which unit to roll dice for. For each 4+, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default Flavors
