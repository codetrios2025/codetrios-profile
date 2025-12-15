<?php
require "db.php";

/* Pagination settings */
$limit = 10; // records per page
$page  = isset($_GET['page']) && is_numeric($_GET['page']) ? $_GET['page'] : 1;
$offset = ($page - 1) * $limit;

/* Total records */
$totalQuery = $conn->query("SELECT COUNT(*) as total FROM contact_enquiry");
$totalData  = $totalQuery->fetch_assoc();
$totalRows  = $totalData['total'];
$totalPages = ceil($totalRows / $limit);

/* Fetch paginated records */
$stmt = $conn->prepare(
    "SELECT * FROM contact_enquiry
     ORDER BY created_at DESC
     LIMIT ? OFFSET ?"
);
$stmt->bind_param("ii", $limit, $offset);
$stmt->execute();
$result = $stmt->get_result();
?>

<!DOCTYPE html>
<html>
<head>
  <title>Contact Enquiries</title>
  <style>
    body { font-family: Arial; background:#f5f5f5; padding:20px; }
    table { width:100%; border-collapse:collapse; background:#fff; }
    th, td { padding:10px; border:1px solid #ddd; text-align:left; }
    th { background:#222; color:#fff; }
    .pagination { margin-top:20px; text-align:center; }
    .pagination a {
      padding:8px 12px;
      margin:2px;
      background:#ddd;
      color:#000;
      text-decoration:none;
      border-radius:4px;
    }
    .pagination a.active {
      background:#222;
      color:#fff;
    }
  </style>
</head>

<body>

<h2>Contact Enquiry List</h2>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Company</th>
      <th>Mobile</th>
      <th>Email</th>
      <th>Message</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <?php if ($result->num_rows > 0): ?>
      <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
          <td><?= $row['id']; ?></td>
          <td><?= htmlspecialchars($row['first_name'].' '.$row['last_name']); ?></td>
          <td><?= htmlspecialchars($row['company']); ?></td>
          <td><?= htmlspecialchars($row['mobile']); ?></td>
          <td><?= htmlspecialchars($row['email']); ?></td>
          <td><?= htmlspecialchars($row['message']); ?></td>
          <td><?= date("d-m-Y H:i", strtotime($row['created_at'])); ?></td>
        </tr>
      <?php endwhile; ?>
    <?php else: ?>
      <tr>
        <td colspan="7">No enquiries found</td>
      </tr>
    <?php endif; ?>
  </tbody>
</table>

<!-- Pagination -->
<div class="pagination">
  <?php for ($i = 1; $i <= $totalPages; $i++): ?>
    <a href="?page=<?= $i; ?>" class="<?= $page == $i ? 'active' : '' ?>">
      <?= $i; ?>
    </a>
  <?php endfor; ?>
</div>

</body>
</html>
