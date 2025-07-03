import meta_rule_sources from 'meta/rule_sources'
import { TEntry } from 'types/data'
import {
  DURING_GAME,
  HERO_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  DURING_SETUP,
  START_OF_TURN,
} from 'types/phases'
import { RealmscapesEnum } from 'types/realmscapes'

// Realmscapes and their various effects/spells etc.
const Realmscapes: TEntry[] = [
  // {
  //   name: RealmscapesEnum.GHUR,
  //   effects: [
  //     {
  //       name: `Predators and Prey`,
  //       desc: `Once per battle round, you score 1 additional victory point if any enemy MONSTERS were slain in that battle round.`,
  //       when: [END_OF_ROUND],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Seismic Shift`,
  //       desc: `At the start of the third battle round, after the players roll off to determine who has the first turn, the player taking the second turn in that battle round can pick 1 objective marker on the battlefield and remove it from play.`,
  //       when: [TURN_THREE_START_OF_ROUND],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Feral Roar`,
  //       desc: `You can use this command ability at the start of the combat phase. The unit that receives that command must be a MONSTER. Until the end of that phase, when you look up a value on that unit's damage table, it is treated as if it has suffered 0 wounds.`,
  //       when: [START_OF_COMBAT_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //       command_ability: true,
  //     },
  //     {
  //       name: `Metamorphosis`,
  //       desc: `Casting value of 5 and range of 12". Pick 1 friendly HERO that is not a MONSTER and that is within range and visible to the caster. That HERO gains the MONSTER keyword until your next hero phase.`,
  //       when: [HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //       spell: true,
  //     },

  //     // Battle Tactics
  //     {
  //       name: `Battle Tactics`,
  //       desc: `At the start of your hero phase, you must pick 1 battle tactic. You must reveal your choice to your opponent, and if your battle tactics instructs you to pick something, you must tell your opponent what you pick. You have until the end of that turn to complete the battle tactic. You cannot pick the same battle tactic more than once per battle.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Battle Tactic: Broken Ranks`,
  //       desc: `When you reveal this battle tactic, pick 1 Battleline unit from your opponent's starting army on the battlefield. You complete this battle tactic if that unit is destroyed during this turn. If that unit was destroyed by an attack made by a friendly MONSTER or an ability of a friendly MONSTER, score 1 additional victory point.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Battle Tactic: Conquer`,
  //       desc: `When you reveal this battle tactic, pick 1 objective marker on the battlefield that your opponent controls. You complete this battle tactic if you control that objective marker at the end of this turn.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Battle Tactic: Slay the Warlord`,
  //       desc: `You complete this battle tactic if the model chosen to be your opponent's general is slain during this turn. If that model was destroyed by an attack made by a friendly MONSTER or an ability of a friendly MONSTER, score 1 additional victory point.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Battle Tactic: Ferocious Advance`,
  //       desc: `When you reveal this battle tactic, pick 3 different units from your starting army on the battlefield. You complete this battle tactic if all of the units your picked run in the following movement phase and finish that run within 3" of each other. If all 3 of those units are MONSTERS, score 1 additional victory point.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Battle Tactic: Bring It Down!`,
  //       desc: `When you reveal this battle tactic, pick 1 enemy MONSTER on the battlefield. You complete this battle tactic if that unit is destroyed during this turn. If that enemy MONSTER was destroyed by an attack made by a friendly MONSTER or an ability of a friendly MONSTER, score 1 additional victory point.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Battle Tactic: Aggressive Expansion`,
  //       desc: `When you reveal this battle tactic, pick 2 objective markers on the battlefield that are not wholly within your territory. You complete this battle tactic if you control both objective markers at the end of this turn.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Battle Tactic: Monstrous Takeover`,
  //       desc: `When you reveal this battle tactic, pick 1 MONSTER from your starting army on the battlefield. You complete this battle tactic if that MONSTER is contesting an objective marker that you control at the end of this turn, and that objective marker is not contested by an enemy MONSTER.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //     {
  //       name: `Battle Tactic: Savage Spearhead`,
  //       desc: `You complete this battle tactic if there are 2 or more units from your starting army wholly within your opponent's territory at the end of this turn. If 2 or more of those units are MONSTERS, score 1 additional victory point.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2021],
  //     },
  //   ],
  // },

  // {
  //   name: RealmscapesEnum.GALLET,
  //   effects: [
  //     {
  //       name: `Galletian Champions`,
  //       desc: `HEROES with a Wounds characteristic of less than 10, that do not have a mount (with the exception of companions) and that are not Unique gain the GALLETIAN CHAMPION keyword.`,
  //       when: [DURING_SETUP],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2, meta_rule_sources.ERRATA_GHB_JANUARY_2023],
  //     },
  //     {
  //       name: `The Key to Victory`,
  //       desc: `Friendly GALLETIAN CHAMPIONS cannot be picked as the target of attacks made with missile weapons while they are within 1" of any friendly Battleline units.`,
  //       when: [SHOOTING_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Desperate Action`,
  //       desc: `If you are taking the second turn in the current battle round, at the start of your hero phase, you can pick 1 friendly GALLETIAN CHAMPION on the battlefield to carry out 2 different heroic actions in that phase instead of 1.`,
  //       when: [TURN_TWO_START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Strike at the Opening (Heroic Action)`,
  //       desc: `Pick 1 friendly GALLETIAN CHAMPION within 3" of an enemy unit. That HERO can fight if it has not already fought in that phase. However, that HERO cannot fight again in that phase and the strike-last effect applies to that HERO until the end of the turn.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Lead by Example (Heroic Action)`,
  //       desc: `Pick 1 friendly GALLETIAN CHAMPION that has a Sworn Bodyguard unit (pg 14) and that has just carried out the 'Strike at the Opening' heroic action. If that Sworn Bodyguard unit is wholly within 6" of that GALLETIAN CHAMPION and within 3" of an enemy unit, that Sworn Bodyguard unit can fight if it has not already fought in that phase. However, that unit cannot fight again in that phase and the strike-last effect applies to that unit until the end of the turn.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Grinding Teeth of Gallet`,
  //       desc: `Casting value of 6 and a range of 12". Pick 1 objective within range and visible to the caster. Then, roll a dice for each unit within 6" of that objective. On a 4+, that unit suffers D6 mortal wounds. All Wizards know this spell in addition to any others that they know.`,
  //       when: [HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //       spell: true,
  //     },
  //     {
  //       name: `No Retreat, No Surrender`,
  //       desc: `You can use this command ability at the start of the combat phase. The unit that receives the command must be a friendly unit that is not a HERO or MONSTER, that did not charge in the same turn, and that is within 3" of an enemy unit. That unit cannot make pile-in moves in that phase, but add 1 to the Attacks characteristic of melee weapons used by that unit until the end of that phase (excluding those of its mounts, if it has any). Each player can use this command ability in addition to any others that they can use.`,
  //       when: [START_OF_COMBAT_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //       command_ability: true,
  //     },
  //     {
  //       name: `The Prize of Gallet - Victory Points`,
  //       desc: `Each player scores victory points at the end of each of their turns as follows:

  //       - Score 1 victory point if you control at least one activated objective.
  //       - Score 1 victory point if you control two or more activated objectives.
  //       - Score 1 victory point if you control more activated objectives than your opponent.
  //       - Score 2 victory points if you completed the battle tactic you picked that turn.`,
  //       when: [END_OF_TURN],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },

  //     // Aspect of the Champion
  //     {
  //       name: `Tunnel Master (Aspect of the Champion)`,
  //       desc: `Once per battle, instead of picking this GALLETIAN CHAMPION to make a normal move, you can remove it from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
  //       when: [MOVEMENT_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Fuelled by Ghurish Rage (Aspect of the Champion)`,
  //       desc: `Once per battle, before you allocate a wound or mortal wound to this GALLETIAN CHAMPION and that wound or mortal wound would cause it to be slain, you can roll a dice. On a 3+, that wound or mortal wound is negated, you can heal up to D3 wounds allocated to it and any wounds that currently remain to be allocated to it are negated.`,
  //       when: [WOUND_ALLOCATION_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Stubborn as a Rhinox (Aspect of the Champion)`,
  //       desc: `This GALLETIAN CHAMPION counts as 10 models for the purposes of contesting objectives while there are no enemy GALLETIAN CHAMPIONS contesting the same objective.`,
  //       when: [DURING_GAME],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Leadership of the Alpha (Aspect of the Champion)`,
  //       desc: `Once per battle, this GALLETIAN CHAMPION can issue one of the following commands up to 3 times in the same phase: Rally, All-out Attack, All-out Defence or Redeploy. If it does so, no command point is spent the second and third times this GALLETIAN CHAMPION issues that command in that phase.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },

  //     // Battle tactics
  //     {
  //       name: `Battle Tactics`,
  //       desc: `At the start of your hero phase, you must pick 1 battle tactic from the list below. You must reveal your choice to your opponent, and if your battle tactic instructs you to pick something, you must tell your opponent what you pick. You have until the end of that turn to complete the battle tactic. You cannot pick the same battle tactic more than once per battle.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Battle Tactic: Gaining Momentum`,
  //       desc: `Pick 1 enemy unit on the battlefield. You complete this battle tactic if that unit is destroyed during this turn and you control more objectives than your opponent at the end of this turn.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Battle Tactic: An Eye for an Eye`,
  //       desc: `You complete this battle tactic if 1 or more friendly units were destroyed in the previous turn and 1 or more enemy units are destroyed during this turn.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Battle Tactic: Desecrate their Lands`,
  //       desc: `Pick 1 terrain feature or faction terrain feature that is partially or wholly within enemy territory. You complete this battle tactic if you control that terrain feature at the end of this turn.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Battle Tactic: This One's Mine!`,
  //       desc: `Pick 1 enemy unit on the battlefield. You complete this battle tactic if that unit is destroyed during this turn by an attack made by the model picked to be your general.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Battle Tactic: A Matter of Honour`,
  //       desc: `Pick 1 enemy GALLETIAN CHAMPION or Sworn Bodyguard unit on the battlefield. You complete this battle tactic if that unit is destroyed during this turn by an attack made by a friendly GALLETIAN CHAMPION or Sworn Bodyguard unit.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Battle Tactic: Lead the Assault`,
  //       desc: `You complete this battle tactic if at least 2 of the objectives you control are in enemy territory and are each contested by any friendly GALLETIAN CHAMPIONS.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Battle Tactic: United Offence`,
  //       desc: `Pick 1 objective controlled by your opponent. You complete this battle tactic if you control that objective and 2 or more friendly GALLETIAN CHAMPIONS are contesting that objective at the end of this turn.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //     {
  //       name: `Battle Tactic: Cunning Manoeuvre`,
  //       desc: `Pick 1 friendly GALLETIAN CHAMPION on the battlefield that is more than 3" from all enemy units. You complete this battle tactic if, at the end of the turn, that GALLETIAN CHAMPION is more than 3" from all enemy units and is contesting an objective you control that is wholly outside your territory.`,
  //       when: [START_OF_HERO_PHASE],
  //       rule_sources: [meta_rule_sources.GHB_2022_2023_SEASON_2],
  //     },
  //   ],
  // },

  {
    name: RealmscapesEnum.ANDTOR,
    effects: [
      /*{
        name: `Honour Guard - Special Assignment`,
        desc: `Declare: Pick a friendly unit in, but not leading, a regiment to be that regiments honour guard. You can pick a unit in reserve.
        Effect: Pick 1 of the following weapon abilities:
         Anti-Infantry(+1 Rend)
         Anti-Cavalry(+1 Rend)
         Anti-Monster(+1 Rend)
         Anti-War Machine(+1 Rend)
         Anti-Beast(+1 Rend)
        In any turn in which the honour guard charged, that unit's melee weapons have the weapons ability you picked.`,
        when: [DURING_SETUP],
      },
      {
        name: `Honour Guard - Priority Target`,
        desc: `Declare: Pick a friendly unit in, but not leading, a regiment to be that regiments honour guard. You can pick a unit in reserve. 
        Effect: Add 1 to hit rolls and wound rolls for attacks made by that honour guard unit that target the enemy general, or the enemy honour guard if it is in the enemy generals regiment, if the target of the attack is within 12".`,
        when: [DURING_SETUP],
      },
      {
        name: `Honour Guard - Bodyguard`,
        desc: `Declare: Pick a friendly unit in, but not leading, a regiment to be that regiments honour guard. You can pick a unit in reserve. 
        Effect: Subtract 1 from the Attacks characteristic of enemy units melee weapons while they are in combat with the unit leading that regiment if both of the following are true:
         That regiment's honour guard is wholly within 6" of the leader of that regiment.
         Neither that regiment's honour guard nor the regiment's leader charged this turn.`,
        when: [DURING_SETUP],
      },
      {
        name: `Honour Guard - Field Sergeant`,
        desc: `Declare: Pick a friendly non-Fly Infantry Hero in, but not leading, a regiment to be that regiments honour guard. You can pick a unit in reserve. 
        Effect: Add 2" to the Move characteristic of friendly non-Fly Infantry units while they are wholly within 12" of the honour guard.`,
        when: [DURING_SETUP],
      },
      {
        name: `Honour Guard - Prized Beast`,
        desc: `Declare: Pick a friendly non-Unique Monster that is not reinforced and that is in, but not leading, a regiment to be that regiments honour guard. You can pick a unit in reserve. 
        Effect: That unit can ignore the effects of the Battle Damaged ability. In addition, add 1 to hit rolls for combat attacks made by the honour guard. This ability also affects Companion weapons.`,
        when: [DURING_SETUP],
      },
      {
        name: `Seizing the Initiative`,
        desc: `If the player who went second in the previous battle round wins the priority roll and chooses to go first, their opponent is the underdog until their opponent does the same. 
        If a player is behind by 6 or more victory points, they do not suffer any penalty from taking two turns in a row; their opponent is not the underdog for the rest of the battle, and they can use the Tactical Gambit ability to pick a battle tactic.`,
        when: [DURING_GAME],
      }, */
      {
        name: `Regimented Forces`,
        desc: `If a player has more regiments than their opponent at the start of the battle, then once per battle, that player can reroll their priority roll after seeing the result of both players rolls but before determining priority for that battle round.`,
        when: [DURING_SETUP],
      },

      /* Command Traits
      {
        name: `Shaman of the Chilled Lands`,
        desc: `This general knows all of the spells from the Lore of Primal Frost.`,
        when: [HERO_PHASE],
        command_trait: true,
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Eye of the Blizzard`,
        desc: `At the start of your hero phase, if this general is on the battlefield, roll a dice. On a 5+, you gain 1 primal magic dice.`,
        when: [START_OF_HERO_PHASE],
        command_trait: true,
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Chilled to the Bone`,
        desc: `Once per battle, if this general suffers a miscast or primal miscast, you can roll a dice. On a 3+, this general can ignore the effects of that miscast or primal miscast.`,
        when: [HERO_PHASE],
        command_trait: true,
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Eater of Magic`,
        desc: `Each time this general successfully unbinds a spell, roll a dice. On a 5+, the caster no longer knows that spell and may not cast it again for the rest of the battle.`,
        when: [HERO_PHASE],
        command_trait: true,
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },*/

      // Battle tactics
      /* {
        name: `Battle Tactic: Do Not Waver`,
        desc: `You complete this battle tactic at the end of your turn if 2 or more friendly units fought this turn and no friendly units were destroyed this turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Battle Tactic: Slay the Entourage`,
        desc: `Pick a unit in the enemy general's regiment. You complete this battle tactic if that unit is destroyed this turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Battle Tactic: Attack on Two Fronts`,
        desc: `You complete this battle tactic at the end of the turn if you control 2 or more objectives that you did not control at the start of your turn and a least 1 of those objectives was controlled by your opponent at the start of your turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Battle Tactic: Take their Land`,
        desc: `Pick a terrain feature wholly or partially within enemy territory and wholly outside friendly territory. You complete this battle tactic if you control that terrain feature at the end of your turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Battle Tactic: Seize the Center`,
        desc: `You complete this battle tactic at the end of your turn if 2 or more friendly units are within 3" of the center of the battlefiled and are not in combat.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Battle Tactic: Take the Flanks`,
        desc: `You complete this battle tactic at the end of your turn if you have at least 1 friendly unit within 6" of each short battlefield edge, none of those units are wholly within friendly territory, and none of those units were set up this turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Battle Tactic (ORDER): Reclaim the Realms`,
        desc: `You complete this battle tactic at the end of your turn if there are 1 or more friendly units wholly within each quarter of the battlefield and more than 6" from all enemy units.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Battle Tactic (ORDER): Slay the Tyrants`,
        desc: `You complete this battle tactic at the end of your turn if an enemy hero was slain this turn by a combat attack made by a friendly unit.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Battle Tactic (CHAOS): Offering of Carnage`,
        desc: `You complete this battle tactic at the end of your turn if 2 or more enemy units were destroyed this turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },
      {
        name: `Battle Tactic (CHAOS): Ordained Charge`,
        desc: `Pick an objective controlled by you opponent. You complete this battle tactic at the end of your turn if 2 or more frinedly units charged this turn, 1 or more of those units are contesting that onjective, and you control that objective.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },
      {
        name: `Battle Tactic (DEATH): Marked for the Grave`,
        desc: `Pick a non-hero enemy unit that has not had any models slain this battle. If there are no non-hero enemy units on the battlefield, you can pick any enemy unit. You complete this battle tactic at the end of your turn if that unit is destroyed this turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },
      {
        name: `Battle Tactic (DEATH): Inevitable Demise`,
        desc: `You complete this battle tactic at the end of your turn if 2 or more friendly units are wholly within enemy territory and more than 9" from all enemy units, and none of those units were set up this turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },
      {
        name: `Battle Tactic (DESTRUCTION): Time to Get Stuck In!`,
        desc: `Pick 3 friendly units that are not in combat and are wholly wihtin friendly territory. You complete this battle tactic at the end of your turn if each of those units is wholly outside your territory and used a fight abilty this turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },
      {
        name: `Battle Tactic (DESTRUCTION): The Kunnin' Approach`,
        desc: `Pick an enemy unit that is in combat and pick a friendly unit that is not in combat. You complete this battle tactic at the end of your turn if that friendly unit was in combat with that enemy unit this turn and that enemy unit was destroyed this turn.`,
        when: [START_OF_TURN],
        rule_sources: [meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },*/

      /* Nullstone Adornments
      {
        name: `Hand-carved Nullstone Icon`,
        desc: `The bearer can attempt to unbind 1 spell or attempt to dispel 1 endless spell in the enemy hero phase in the same manner as a WIZARD. Each time the bearer successfully unbinds a spell or dispels an endless spell using this ability, the bearer can attempt to unbind 1 additional spell in that phase.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Pouch of Nulldust`,
        desc: `Once per battle, at the start of the hero phase, you can say that the bearer will use their Pouch of Nulldust. If you do so, until the end of that phase, unmodified casting rolls that include a double 1, double 2 or double 3 are treated as miscasts or, if a primal magic dice was rolled as part of the casting roll, as primal miscasts. In addition, roll a dice for each endless spell on the battlefield. On a 5+, that endless spell is dispelled.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },
      {
        name: `Polished Nullstone Pebble`,
        desc: `When this unit is picked as the target of a spell or the abilities of an endless spell, you can roll a dice. On a 4+, the caster must pick another unit within 3" of this unit and within range of that spell or endless spell's abilities to be the target. If, when picking another unit, there are no other units within 3" of this unit and within range, ignore the effect of that spell or the effects of that endless spell's abilities on this unit instead.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
      },

      // Spells
      {
        name: `Hoarfrost`,
        desc: `Hoarfrost is a spell that has a casting value of 8 and a range of 12". If successfully cast, pick 1 friendly unit wholly within range and visible to the caster. Pick 1 melee weapon profile on that unit's warscroll and roll a D3. Change the To Hit, To Wound or Rend characteristic of that melee weapon to match the result until the start of your next hero phase. For example, if the result was 2, you could change either the To Hit characteristic to 2+, the To Wound characteristic to 2+ or the Rend characteristic to -2.
        
        Designer's Note: An unmodified hit roll or wound roll of 1 always fails.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.GHB_2023_2024],
        spell: true,
      },
      {
        name: `Rupture`,
        desc: `Rupture is a spell that has a casting value of 10 and a range of 18". If successfully cast, resolve 1 of the following effects:

        - Pick 1 enemy Incarnate within range and visible to the caster. Inflict D3 mortal wounds on the unit bonded to that Incarnate. Then, that Incarnate immediately loses a power level (to a minimum of 1) and becomes wild.
       
        - Pick 1 predatory endless spell within range and visible to the caster that was summoned by an enemy Wizard. Inflict D3 mortal wounds on that enemy Wizard. Then, that endless spell is dispelled.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.GHB_2023_2024, meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023],
        spell: true,
      },
      {
        name: `Merciless Blizzard`,
        desc: `Casting value of 12 and a range of 12". Pick 1 enemy unit within range and visible to the caster. That unit suffers 4D6 mortal wounds, but for each roll of 1, the caster also suffers D3 mortal wounds that cannot be negated. The range of this spell cannot be modified and must be measured from the caster, even if an ability would allow you to measure it from elsewhere. This spell cannot be cast by a unit that was set up or moved earlier in this phase.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.GHB_2023_2024, meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023],
        spell: true,
      }, */
    ],
  },
]

export default Realmscapes
