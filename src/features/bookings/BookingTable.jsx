import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

const BOOKING_COLUMNS = "0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem";
const BOOKING_COLUMNS_MOBILE = "8rem 16rem 20rem 12rem 8rem 3.2rem";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="bookings" />;

  const isMobile = window.innerWidth <= 768;
  const columns = isMobile ? BOOKING_COLUMNS_MOBILE : BOOKING_COLUMNS;

  return (
    <Menus>
      <Table columns={columns}>
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
