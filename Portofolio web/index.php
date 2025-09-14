

<html>
```
<?php 
$naamk = "Karim";
$nederlandsk = 8.5;
$engelsk = 7.7;
$rekenenk = 6.7;
$programmerenk = 8.5;
$databasesk = 9.4; 
$gemiddeldek = ($nederlandsk + $engelsk + $rekenenk + $programmerenk + $databasesk) / 5;

$naams = "Sophie";
$nederlandss = 8.9;
$engelss = 8.7;
$rekenens = 9.7;
$programmerens = 9.5;
$databasess = 9.4;
$gemiddeldes = ($nederlandss + $engelss + $rekenens + $programmerens + $databasess) / 5;

$groepgemiddeld = ($gemiddeldek + $gemiddeldes) / 2;

echo<<<TABLE
<table border='1'><caption><strong>Rapport</strong></caption>

<thead><tr>
<th>Naam</th>
<th>Nederlands</th>
<th>Engels</th>
<th>Rekenen</th>
<th>Programmeren</th>
<th>Databases</th><th>Gemiddeld</th>
</tr></thead>

<tbody><tr>
<td>$naamk</td>
<td>$nederlandsk</td>
<td>$engelsk</td>
<td>$rekenenk</td>
<td>$programmerenk</td>
<td>$databasesk</td>
<td>$gemiddeldek </td>
</tr>

<td>$naams</td>
<td>$nederlandss</td>
<td>$engelss</td>
<td>$rekenens</td>
<td>$programmerens</td>
<td>$databasess</td>
<td>$gemiddeldes </td>
</tr>

</tbody>

<tfoot><tr>
<td colspan='6'>Groep gemiddeld</td>
<td>$groepgemiddeld</td>
</tr></tfoot>
</table>
TABLE;
?>

```
</html>

