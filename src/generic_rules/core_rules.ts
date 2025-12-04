import meta_rule_sources from 'meta/rule_sources'
import { TEntry } from 'types/data'
import {
  BATTLESHOCK_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_HERO_PHASE,
  END_OF_ROUND,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  START_OF_SETUP,
  TURN_ONE_START_OF_TURN,
  WOUND_ALLOCATION_PHASE,
  START_OF_TURN,
  MOVEMENT_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  END_OF_TURN,
  WARDS_PHASE,
} from 'types/phases'

export const OneDropDeploymentEffect = {
  name: `26.2.1 - One Drop Deployment`,
  desc: `If a core battalion has the Unified icon, then after you set up a unit from the battalion, you must set up all of the other units from the battalion, one after the other, and you are not allowed to set up units that are not part of the battalion until all of the units in the battalion have been set up. In addition, if the set-up instructions for a battle say that the players must alternate setting up units one at a time, then after you set up a unit from the battalion, you must set up all of the other units from the battalion, one after the other, before your opponent is allowed to set up another unit.`,
  when: [DURING_SETUP],
  rule_sources: [meta_rule_sources.CORE_RULES_2021],
  shared: true,
}

const CoreRules: TEntry[] = [
  /* {
    name: 'Unit Coherency',
    effects: [
      {
        name: `1.3.3 - Unit Coherency`,
        desc: `Units must be set up and finish every move as a single coherent group. A unit with 2 to 6 models is coherent if each model in the unit is within 1" horizontally and 6" vertically of at least 1 other model in the unit. A unit with more than 6 models is coherent if each model in the unit is within 1" horizontally and 6" vertically of at least 2 other models in the unit. If a friendly unit is not coherent at the end of a turn or after you set it up, you must remove models in the unit from play, one at a time, until it is coherent.`,
        when: [DURING_GAME],
        rule_sources: [
          meta_rule_sources.CORE_RULES_2021,
          meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023,
        ],
      },
    ],
  },

  {
    name: 'Predatory Endless Spells',
    effects: [
      {
        name: `19.5 - Predatory Endless Spells`,
        desc: `Predatory endless spells are moved at the end of the hero phase. If either player has any abilities that can be used at the end of the hero phase, they must be used after all predatory endless spells have been moved.`,
        when: [END_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `19.5.1 - Predatory Endless Spell Control`,
        desc: `Before moving predatory endless spells, you must first determine which are controlled and which are wild. A predatory endless spell within 30" of the model that summoned it is controlled by that model. A WIZARD can control 1 predatory endless spell per hero phase. If there is more than 1 predatory endless spell that a friendly WIZARD could control, you must pick which they will control. Predatory endless spells that are not controlled are wild.`,
        when: [END_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `19.5.2 - Moving Predatory Endless Spells`,
        desc: `After determining control of predatory endless spells, the player whose turn is taking place moves all of the predatory endless spells controlled by friendly WIZARDS. Their opponent then does the same. Once all controlled predatory endless spells have been moved, the players alternate picking 1 wild predatory endless spell to move, starting with the player whose turn is taking place, until all of the wild predatory endless spells have been moved. A player must pick a wild predatory endless spell to move if any are eligible to do so and cannot pick a wild predatory endless spell that has already moved in that phase.
  
      When a player picks a predatory endless spell to move, they are considered to be the commanding player of that predatory endless spell until the start of the next hero phase. All other endless spells are under the command of the player that summoned them.`,
        when: [END_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  }, */

  {
    name: 'Core Rules 4.0',
    effects: [
      /* {
        name: `Tactical Gambit - Once Per Battle Round`,
        desc: `You cannot use this ability if you went second in the previous battle round and chose to go first in the current battle round. 
        Effect: Pick 1 battle tactic that you have not yet attempted. You can attempt to complete that battle tactic this turn. `,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      }, */
      {
        name: `Activate Place of Power - Once Per Turn`,
        desc: `Declare: Pick a friendly Hero within 3" of any Places of Power to use this ability, then pick that Place of Power to be the target. 
        Effect: Pick 1 of the following effects: 
         Cauterising Pollen: Roll a dice. On a 1, inflict 1 mortal damage on each unit (friendly and enemy) within 6" of any Place of Power. On a 3+, Heal (2) each unit (friendly and enemy) wholly within 6" of the target.
         Rapid Sprouting: Pick a Ghyranite objective or visible Non-Faction Terrain terrain feature within 12" of that Hero and roll a dice. On a 3+, that objective or terrain feature has the Obscuring ability (see 1.2) for the rest of the battle.
         Tap the Ley Lines: For the rest of the turn, If that Hero is not a Wizard or Priest, they can use the Unbind or Banish Manifestation ability as if they had Wizard (1).`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - Rally`,
        desc: `Declare: Pick a friendly unit that is not in combat to use this ability. 
        Effect: Make 6 rally rolls of D6. For each 4+, you receive 1 rally point. Rally points can be spent in the following ways: 
         For each rally point spent, Heal (1) that unit. 
         You can spend a number of rally points equal to the Health characteristic of that unit to return a slain model to that unit. 
        You can spend the rally points in any combination of the above. Unspent rally points are then lost. `,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Musician - Passive`,
        desc: `Effect: While this unit contains any musicians, if it uses the 'Rally' command, you can make one additional rally roll of D6.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Sacred Rites: Chant value of 2 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Priest to use this ability, then make a chanting roll of D6. On an unmodified chanting roll of 1, remove 1 ritual point from that Priest instead of D3.
        Effect: Give a number to ritual points to the Priest equal to the unmodified chanting roll and do not reset the Priests ritual points to 0.`,
        when: [HERO_PHASE],
      },
      {
        name: `Banish Manifestation`,
        desc: `Declare: Pick a friendly Wizard or Priest to use this ability, pick a manifestation within 30" of them that was not summoned this turn to be the target, then make a banishment roll of 2D6. Add 1 to the banishment roll for each additional enemy manifestation on the battlefield after the first. You cannot pick the same manifestation to be the target of this ability more than once per turn.
        Effect: If the banishment roll equals or exceeds the banishment value listed on the manifestation's warscroll, it is banished and removed from play.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Unbind - Reaction: Opponent declared a Spell ability`,
        desc: `Used By: A friendly Wizard within 30" of the enemy Wizard casting the spell. 
        Effect: Make an unbinding roll of 2D6. If the roll exceeds the casting roll for the spell, then the spell is unbound and its effect is not resolved. This reaction cannot be used more than once per casting roll.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - Magical Intervention`,
        desc: `Declare: Pick a friendly Wizard or Priest to use this ability. 
        Effect: That friendly unit can use a Spell or Prayer ability (as appropriate) as if it were your hero phase. If you do so, subtract 1 from casting rolls or chanting rolls made as part of that ability.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Normal Move`,
        desc: `Declare: Pick a friendly unit that is not in combat to use this ability. 
        Effect: That unit can move a distance up to its Move characteristic. That unit cannot move into combat during any part of that move.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Run`,
        desc: `Declare: Pick a friendly unit that is not in combat to use this ability. 
        Effect: Make a run roll of D6. That unit can move a distance up to its Move characteristic added to the run roll. That unit cannot move into combat during any part of that move.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Retreat`,
        desc: `Declare: Pick a friendly unit that is in combat to use this ability. 
        Effect: Inflict D3 mortal damage on that unit. That unit can move a distance up to its Move characteristic. That unit can move through the combat ranges of any enemy units but cannot end that move within an enemy unit's combat range.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - At the Double - Reaction: You declared a Run ability`,
        desc: `Used By: The unit using that Run ability. 
        Effect: Do not make a run roll as part of that Run ability. Instead, add 6" to that unit's Move characteristic to determine the distance each model in that unit can move as part of that Run ability.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - Redeploy`,
        desc: `Declare: Pick a friendly unit that is not in combat to use this ability. 
        Effect: Each model in that unit can move up to D6". That move cannot pass through or end within the combat range of an enemy unit.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Fly - Passive`,
        desc: `Effect: As this unit moves, it ignores other models, terrain features and the combat ranges of enemy units. It cannot end its move in combat unless specified in the ability that allowed it to move. Ignore any vertical distance moved for this unit.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Shoot`,
        desc: `Declare: Pick a friendly unit that has not used a Run or Retreat ability this turn to use this ability. Then, pick one or more enemy units as the target(s) of that unit's attacks (see 16.0). 
        Effect: Resolve shooting attacks against the target unit(s).`,
        when: [SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - Covering Fire - Enemy Shooting Phase`,
        desc: `Declare: Pick a friendly unit that did not use a Run ability this turn and that is not in combat to use this ability, then pick the closest enemy unit (to that unit) that can be picked as the target of shooting attacks to be the target. You cannot pick Manifestations or faction terrain features as the target of this ability.
        Effect: Resolve shooting attacks for the unit using this ability against the target. You must subtract 1 from the hit rolls for those attacks.`,
        when: [SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Charge`,
        desc: `Declare: Pick a friendly unit that is not in combat and has not used a Run or Retreat ability this turn to use this ability. Then, make a charge roll of 2D6. 
        Effect: That unit can move a distance up to the value of the charge roll. That unit can move through the combat ranges of any enemy units and must end that move within 1/2" of a visible enemy unit. If it does so, the unit using this ability has charged.`,
        when: [CHARGE_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - Forward to Victory - You declared a Charge ability`,
        desc: `Used By: The unit using that Charge ability. 
        Effect: You can reroll the charge roll.`,
        when: [CHARGE_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability(2) - Counter-Charge`,
        desc: `Declare: Pick a friendly unit that is not in combat to use this ability. 
        Effect: That unit can use a Charge ability as if it were your charge phase.`,
        when: [CHARGE_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Fight`,
        desc: `Declare: Pick a friendly unit that is in combat or that charged this turn to use this ability. That unit can make a pilein move (see 15.4). Then, if that unit is in combat, you must pick one or more enemy units as the target(s) of that units attacks (see 16.0). 
        Effect: Resolve combat attacks against the target unit(s).`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Champion - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of weapons used by champions in this unit.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Standard Bearer - Passive`,
        desc: `Effect: While this unit contains any standard bearers, add 1 to this unit's control score.`,
        when: [END_OF_TURN],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - Power Through`,
        desc: `Declare: Pick a friendly unit that charged this turn to use this ability, then you must pick an enemy unit in combat with it to be the target. The target must have a lower Health characteristic than the unit using this ability. 
        Effect: Inflict D3 mortal damage on the target. Then, the unit using this ability can move a distance up to its Move characteristic. It can pass through and end that move within the combat ranges of enemy units that were in combat with it at the start of the move, but not those of other enemy units. It does not have to end the move in combat. `,
        when: [END_OF_TURN],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - All Out Attack - Reaction: You declared an Attack ability`,
        desc: `Used By: The unit using that Attack ability. 
        Effect: Add 1 to hit rolls for attacks made as part of that Attack ability. This also affects weapons that have the Companion weapon ability. For the rest of the turn, subtract 1 from save rolls for the unit using this ability.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Command Ability - All Out Defense - Reaction: Opponent declared an Attack ability`,
        desc: `Used By: A unit targeted by that Attack ability. 
        Effect: Add 1 to save rolls for that unit until that Attack ability has been resolved. `,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Ward Save - Passive`,
        desc: `Effect: In step 1 of the damage sequence (see 18.0), make a ward roll of D6 for each damage point in this unit's damage pool. If the roll equals or exceeds this unit's ward value, remove that damage point from the damage pool.`,
        when: [WARDS_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Guarded Hero - Passive`,
        desc: `Effect: If this Hero is within the combat range of a friendly unit that is not a Hero: 
        Subtract 1 from hit rolls for shooting attacks that target this Hero. 
        If this Hero is Infantry, they cannot be picked as the target of shooting attacks made by models more than 12" from them.`,
        when: [SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },
  /* {
    name: 'General's Handbook 24'',
    effects: [
      {
        name: `Honour Guard - Special Assignment`,
        desc: `Declare: Pick a friendly unit in your general's regiment that is not your gerneral to be the honour gurard. You can pick a unit in reserve. If you use this ability, you cannot use any other Honour Guard abilities.
        Effect: Pick 1 of the following weapon abilities:
         Anti-Infantry(+1 Rend)
         Anti-Cavalry(+1 Rend)
         Anti-Monster(+1 Rend)
         Anti-War Machine(+1 Rend)
         Anti-Beast(+1 Rend)
        In any turn in which the honour guard charged, that unit's melee weapons have the weapons ability you picked. This has no effect on Companion weapons.`,
        when: [DURING_SETUP],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Honour Guard - Priority Target`,
        desc: `Declare: Pick a friendly unit in your general's regiment that is not your gerneral to be the honour gurard. You can pick a unit in reserve. If you use this ability, you cannot use any other Honour Guard abilities.
        Effect: Add 1 to hit rolls and wound rolls for attacks made by the honour guard that target any units in the enemy general's regiment.`,
        when: [DURING_SETUP],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Honour Guard - Bodyguard`,
        desc: `Declare: Pick a friendly unit in your general's regiment that is not your gerneral to be the honour gurard. You can pick a unit in reserve. If you use this ability, you cannot use any other Honour Guard abilities.
        Effect: Subtract 1 from the Attacks characteristic of enemy units' melee weapons while they are in combat with your general if both of the following are true:
         The honour guard is wholly within 6" of your general.
         The honour guard did not charge this turn`,
        when: [DURING_SETUP],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      }, 
    ], 
  }, */

  /*{
    name: 'Endless Spells',
    effects: [
      {
        name: `19.3.1 - Summoning Endless Spells`,
        desc: `In your hero phase, you can attempt to summon 1 endless spell with each friendly WIZARD. When the spell used to summon an endless spell is successfully cast and not unbound, the endless spell is set up on the battlefield as described on its warscroll. If any restrictions make it impossible to set up the endless spell, the casting attempt is unsuccessful.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `19.3.2 - Dispelling Endless Spells`,
        desc: `At the start of the hero phase, each player can attempt to dispel 1 endless spell with each friendly WIZARD and friendly PRIEST. The player whose turn is taking place makes all of their dispelling attempts first. If a WIZARD attempts to dispel an endless spell, they can attempt to cast or unbind 1 fewer spell in that hero phase. If a PRIEST attempts to dispel an endless spell, they can chant 1 fewer prayer in that hero phase. The same player cannot attempt to dispel the same endless spell more than once per phase.

        To attempt to dispel an endless spell, pick 1 endless spell that is within 30" of a friendly WIZARD or friendly PRIEST and that is visible to them. Then make a dispelling roll by rolling 2D6. If the roll is greater than the casting value of that endless spell, it is dispelled and removed from play. An endless spell cannot be summoned again in the turn that it is removed from play.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `19.3.3 - Removing Endless Spells`,
        desc: `An endless spell remains in play until it is removed from play. An endless spell is removed from play if:

        a) The endless spell is dispelled.
        b) The endless spell touches the edge of the battlefield after it is moved.
        c) A method on the endless spell's warscroll is used to remove it from play.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  }, 

  {
    name: 'Priests and Prayers',
    effects: [
      {
        name: `20.0 - Priests`,
        desc: `A unit with the PRIEST keyword on its warscroll is a PRIEST. Each friendly PRIEST can chant 1 prayer that they know in your hero phase. All PRIESTS know the Bless and Smite prayers. In addition, a PRIEST knows all prayers on their warscroll and on the warscrolls of invocations (see 20.3) in the same army as them.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `20.1 - Chanting Prayers`,
        desc: `In your hero phase, you can chant prayers with friendly PRIESTS. You cannot chant the same prayer more than once in the same hero phase, even with a different PRIEST. In order to chant a prayer, pick a friendly PRIEST, say which of the prayers that they know will be chanted, and then make a chanting roll by rolling a dice. If the chanting roll is equal to or greater than the answer value of the prayer, the prayer is answered.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `20.1.1 - Divine Wrath`,
        desc: `On an unmodified chanting roll of 1, the chanting PRIEST suffers divine wrath. The prayer is not answered and the chanting PRIEST suffers 1 mortal wound.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Invocations',
    effects: [
      {
        name: `20.3 - Invocations`,
        desc: `An invocation is a divine entity that is summoned to the battlefield by chanting the prayer on its invocation warscroll (see 24.0). Unless noted otherwise, an invocation cannot be attacked or be affected by abilities. You can move models across or through an invocation as if it were not there, but you cannot finish a model's move on an invocation. Invocations are under the command of the player who summoned them. After an invocation is removed from play (see 20.3.3), it can be summoned again if the prayer on its warscroll is successfully chanted in a different hero phase (it cannot be set up in the turn in which it is removed).`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021, meta_rule_sources.ERRATA_CORE_RULES_OCTOBER_2022],
      },
      {
        name: `20.3.1 - Summoning Invocations`,
        desc: `In your hero phase, you can attempt to summon 1 invocation with each friendly PRIEST. When the prayer used to summon the invocation is answered, the invocation is set up on the battlefield as described on its warscroll. If any restrictions make it impossible to set up the invocation, then the prayer is not answered.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `20.3.2 - Banishing Invocations`,
        desc: `At the start of your hero phase, you can attempt to banish 1 invocation with each friendly PRIEST instead of chanting a prayer with that PRIEST in that hero phase. The same player cannot attempt to banish the same invocation more than once per phase.

        To attempt to banish an invocation, pick 1 invocation within 48" of a friendly PRIEST that is visible to them. Then make a banishment roll by rolling a dice. If the roll is greater than the answer value of that invocation, it is banished and removed from play. An invocation cannot be summoned again in the turn that it is removed from play.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `20.3.3 - Removing Invocations`,
        desc: `An invocation remains in play until it is removed from play. An invocation is removed from play if:

        a) The invocation is banished.
        b) The invocation touches the edge of the battlefield after it is moved.
        c) A method on the invocation's warscroll or in an allegiance ability is used to remove it from play`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Miscasts',
    effects: [
      {
        name: `19.1.1 - Miscasts`,
        desc: `On an unmodified casting roll of 2, the spell is miscast. The spell is not successfully cast, the caster suffers D3 mortal wounds, and the caster cannot attempt to cast any more spells in that hero phase.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Priority Roll',
    effects: [
      {
        name: `4.1 - The Priority Roll`,
        desc: `At the start of each battle round, the players must roll off. This is called the priority roll. The winner has priority in that battle round and must decide who will take the first turn and who will take the second turn. In the event of a tied priority roll, do not roll off again. Instead, if it is the first battle round, the player who finished deploying their army first has priority. Otherwise, the player who went first in the previous battle round has priority.`,
        when: [START_OF_ROUND],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Simultaneous Effects',
    effects: [
      {
        name: `1.6.2 - Simultaneous Effects`,
        desc: `If the effects of two or more abilities would be applied at the same time in a turn, the player whose turn is taking place applies the effects of their abilities first, one at a time, in the order they desire. Their opponent then does the same. If the effects of two or more abilities would be applied at the same time other than during a turn, the players roll off and the winner applies the effects of their abilities first, one at a time, in the order they desire. Their opponent then does the same.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Dice Roll Modifiers',
    effects: [
      {
        name: `1.5.5 - Dice Roll Modifiers`,
        desc: `Sometimes a modifier will apply to a dice roll. Modifiers are applied after rerolls. Rules that refer to an unmodified roll are referring to the dice roll after rerolls have been made but before modifiers are applied. If a rule instructs you to pick or change a roll, do so after rerolls are made but before modifiers are applied.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Command Points',
    effects: [
      {
        name: `4.1.1 - Starting Command Points`,
        desc: `After determining who will take which turn, the player who will take the first turn receives 1 command point (see 6.0) and the player who will take the second turn receives 2 command points.`,
        when: [TURN_ONE_START_OF_TURN],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `6.0 - Command Points`,
        desc: `Command points allow you to use command abilities. You receive command points at the start of the battle round after priority is determined (see 4.1). In addition, if your general is on the battlefield at the start of the hero phase, you receive 1 command point. At the end of the battle round (see 16.0), any command points that have not been used are lost.`,
        when: [START_OF_ROUND],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `6.0 - Command Points`,
        desc: `If your general is on the battlefield at the start of the hero phase, you receive 1 command point.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `6.0 - Command Points`,
        desc: `At the end of the battle round (see 16.0), any command points that have not been used are lost.`,
        when: [END_OF_ROUND],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `6.1 - Using Command Abilities`,
        desc: `To use a command ability, you must spend 1 command point, pick 1 friendly model to issue the command, and pick 1 friendly unit to receive the command. Unless noted otherwise, the models that can issue commands and the units they can issue them to are as follows:

        - Unit champions can issue commands to their own unit (see 22.3.2).
        - Heroes can issue commands to units that are wholly within 12" of them.
        - Generals can issue commands to units that are wholly within 18" of them.
        - Totems can issue commands to units that are wholly within 18" of them.

        Each command ability will say when it can be used and what effect it has on the unit that receives it.
        
        A model cannot issue more than 1 command in the same phase and a unit cannot receive more than 1 command in the same phase. In addition, you cannot use the same command ability more than once in the same phase (even for different units).`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Hero Phase',
    effects: [
      {
        name: `7.0 - Hero Phase`,
        desc: `At the start of the hero phase, starting with the player whose turn is taking place, each player can pick 1 HERO to perform a heroic action (see 7.1), and each player receives 1 command point if their general is on the battlefield (see 6.0).`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `7.0 - Hero Phase`,
        desc: `In your hero phase, you can use friendly WIZARDS to attempt to cast spells (see 19.0), friendly PRIESTS to chant prayers and attempt to banish invocations (see 20.0), and both to attempt to dispel endless spells (19.3). In the enemy hero phase you can use friendly WIZARDS to attempt to unbind spells (see 19.2).`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Heroic Actions',
    effects: [
      {
        name: `7.1 - Heroes and Heroic Actions`,
        desc: `A unit with the HERO keyword on its warscroll is a HERO. At the start of the hero phase, you can carry out 1 heroic action with 1 friendly HERO. The effect of the heroic action is treated in the same way as the effect of an ability for rules purposes (see 1.6).`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Heroic Leadership`,
        desc: `Pick 1 friendly HERO and roll a dice. Add 2 to the roll if your general has been slain. On a 4+, you receive 1 command point that can only be spent during that turn to allow that HERO to issue a command.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Heroic Willpower`,
        desc: `Pick 1 friendly HERO that is not a WIZARD. If it is the enemy hero phase, that HERO can attempt to unbind 1 spell in that phase as if they were a WIZARD. If it is your hero phase, that HERO can attempt to dispel 1 endless spell in that phase as if they were a WIZARD (you can still only attempt to unbind or dispel the same spell or endless spell once in the same phase).`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Their Finest Hour`,
        desc: `Pick 1 friendly HERO. Add 1 to wound rolls for attacks made by that HERO until the end of that turn, and add 1 to save rolls for attacks that target that HERO until the end of that turn. You cannot carry out this heroic action with the same HERO more than once in the same battle.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `Heroic Recovery`,
        desc: `Pick 1 friendly HERO more than 3" from all enemy units and make a heroic recovery roll by rolling 2D6. If the roll is less than or equal to that HERO'S Bravery characteristic, you can heal up to D3 wounds allocated to that HERO.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021, meta_rule_sources.ERRATA_CORE_RULES_DECEMBER_2021],
      },
    ],
  },

  {
    name: 'Monstrous Rampages',
    monstrous_rampage: true,
    effects: [
      {
        name: `21.1 - Monstrous Rampages`,
        desc: `At the end of the charge phase, each player can carry out 1 monstrous rampage with each friendly MONSTER. The player whose turn is taking place carries out all of their monstrous rampages first. The same player cannot carry out the same monstrous rampage more than once per phase. The effect of the monstrous rampage is treated in the same way as the effect of an ability for rules purposes (see 1.6).`,
        when: [END_OF_CHARGE_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Look Out, Sir!',
    effects: [
      {
        name: `10.1.2 - Look Out, Sir!`,
        desc: `You must subtract 1 from the hit roll (see 13.3) for an attack made with a missile weapon if the target is an enemy HERO within 3" of an enemy unit that has 3 or more models. If that Hero does not have a mount (with the exception of companions), it also cannot be targeted by attacks made with missile weapons if the attacking model is more than 12" away from them. The Look Out, Sir! rule does not apply if the enemy HERO has a Wounds characteristic of 10 or more.`,
        when: [SHOOTING_PHASE],
        rule_sources: [
          meta_rule_sources.CORE_RULES_2021,
          meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023,
        ],
      },
    ],
  },

  {
    name: 'Strike-First and Strike-Last Effects',
    effects: [
      {
        name: `12.4 - Strike-First and Strike-Last Effects`,
        desc: `Some abilities have an effect that allows a unit to fight at either the start or the end of the combat phase. These effects are called strike- first effects and strike-last effects respectively. The rules in sections 1.6.1-1.6.3 do not apply to these effects: use the rules here instead.
        
        If a strike-first effect applies to any units, those units fight before all other units fight. If a strike-last effect applies to any units, those units fight after all other units fight.
        
        If a strike-first effect applies to units from both players' armies, the players alternate fighting with those units, starting with the player whose turn it is. Similarly, if a strike-last effect applies to units from both players' armies, the players alternate fighting with those units, starting with the player whose turn it is. If a strike-first effect and a strike-last effect apply to the same unit at the same time, then they cancel each other out and neither effect applies to that unit.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: `12.5 - Strike-First and Strike-Last Sequencing`,
        desc: `1. Start of combat phase abilities are used
        2. Units with strike-first effects attack
        3. Units without strike-first/strike-last effects attack 
        4. Units with strike-last effects attack
        5. End of combat phase abilities are used`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'Battleshock Tests',
    effects: [
      {
        name: `15.1 - Battleshock Tests`,
        desc: `You must make a battleshock roll for each friendly unit that has to take a battleshock test. To make a battleshock roll, roll a dice and add the number of models in the unit that were slain in that turn to the roll. If the battleshock roll is greater than the unit's Bravery characteristic, the battleshock test has been failed. If the test is failed, for each point by which the battleshock roll exceeds the unit's Bravery characteristic, 1 model in that unit must flee. You decide which models flee. A model that flees is removed from play.`,
        when: [BATTLESHOCK_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  {
    name: 'One Drop Deployment',
    effects: [OneDropDeploymentEffect],
  },

  {
    name: 'Wandering Endless Spells',
    effects: [
      {
        name: `Wandering Endless Spells`,
        desc: `Wandering endless spells work differently to normal predatory endless spells. They are activated after all predatory endless spells on the battlefield have been moved. The players alternate picking 1 wandering endless spell to activate, starting with the player who has the second turn. Unless otherwise stated, any effects and abilities on their warscrolls can be used as normal and are resolved by the player activating that wandering endless spell.

        Each wandering endless spell can be activated once per turn. To do so, roll a D3 and consult the behaviour table on page 67 of Soul Wars: Wrath of the Everchosen. The behaviour table has 3 columns, each with 6 results. The distance between the wandering endless spell and the closest enemy models determines which column you use. Each roll on the behaviour table has a corresponding action that the wandering endless spell will perform. The action is resolved before the next wandering endless spell is activated`,
        when: [END_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.ERRATA_WRATH_OF_THE_EVERCHOSEN_JULY_2021],
      },
    ],
  },

  {
    name: 'Wards',
    effects: [
      {
        name: `14.3 - Wards`,
        desc: `Some abilities allow you to roll a dice to negate a wound or mortal wound. Abilities of this type are referred to as wards, and the dice roll is referred to as a ward roll. Unless stated otherwise, the ward roll is made before the wound is allocated to the model in question. Up to 1 ward roll can be made for each wound or mortal wound. If the ward roll is successful, the wound or mortal wound is negated and has no effect on the model.`,
        when: [WOUND_ALLOCATION_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021, meta_rule_sources.ERRATA_CORE_RULES_OCTOBER_2021],
      },
    ],
  },

  {
    name: 'Incarnates',
    incarnate: true,
    effects: [
      {
        name: `Bonding`,
        desc: `An incarnate must be bonded to a HERO in the army it is part of. Bonding an incarnate to a HERO is a unique enhancement. Record which HERO the incarnate is bonded to on your army roster. A HERO cannot be bonded to more than 1 incarnate, and an incarnate cannot be bonded to more than 1 HERO.

        An army that includes an incarnate cannot include any other allied units. However, an incarnate can included in an army even if its points cost exceeds the maximum number of points that you can spend on allies in the battlepack you are using.`,
        when: [START_OF_SETUP],
      },
      {
        name: `Wild Form`,
        desc: `If the HERO an incarnate is bonded to is slain, the incarnate reverts to its wild form. An incarnate in its wild form remains part of your army, but it treats other units in your army as enemy units, and other units in your army treat it as an enemy unit. In addition, special rules apply to an incarnate in its wild form, as described on its warscroll.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Incarnate States`,
        desc: `Incarnates have states. Each state has a level and a domination range, as shown on the State table on its warscroll. Incarnates start a battle at 2 (primal state).

        Under certain circumstances, an incarnate's level can go up or down. When this happens, their state changes to that of their new level. For example, if an incarnate's level went up from 2 to 3, it would go from a primal state to an empowered state. An incarnate can never go above a level of 3 and is removed from play when it reaches a level 0.`,
        when: [DURING_GAME],
      },
      {
        name: `Damage`,
        desc: `Wounds are allocated to incarnates in the same way as they are to any other model. However, because an incarnate does not have a Wounds characteristic, it cannot be slain. An incarnate is treated as having a Wounds characteristic of 18 for all rules purposes other than determining if it is slain. If an incarnate is affected by an ability that slays the target without any wounds or mortal wounds being allocated, then the level of the incarnate goes down by 1 instead.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Damage`,
        desc: `In the battleshock phase. if any wounds are allocated to an incarnate, its commanding player rolls 3D6. If the roll is less than or equal to the number of wounds allocated to the incarnate, its level is reduced by 1. Then all of the wounds allocated to the incarnate are healed.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  }, */

  // {
  //   name: 'PLACEHOLDER',
  //   effects: [
  //     {
  //       name: `PLACEHOLDER`,
  //       desc: ``,
  //       when: [],
  //     },
  //   ],
  // },
]

export default CoreRules
